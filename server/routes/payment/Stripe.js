const express = require('express');
require('dotenv').config();

const nodemailer = require('nodemailer');
const Coupon = require('../../models/coupon');

const stripe = require('stripe')(process.env.STRIPE_KEY);
const PaymentRouter = express.Router();


// Set up nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.ADMIN_EMAIL, // replace with your email
    pass: process.env.ADMIN_PASS, // replace with your email password or app-specific password
  }
});

// Route to generate coupon token and send via email
PaymentRouter.post('/generate-coupon', async (req, res) => {
  try {
    const { name, email } = req.body; 

    // Create a new customer
    const customer = await stripe.customers.create({
      name: name,
      email: email,
    });

    // Create a new coupon
    const coupon = await stripe.coupons.create({
      percent_off: 20,
      duration: 'once',
    });

    // Store the coupon ID in MongoDB
    const newCoupon = new Coupon({ email, couponId: coupon.id });
    await newCoupon.save();

    // Send the coupon code to the customer via email
    const mailOptions = {
      from: process.env.ADMIN_EMAIL, // replace with your email
      to: email,
      subject: 'Your Coupon Code',
      text: `Hello ${name},\n\nHere is your coupon code: ${coupon.id}\n\nUse this code to get a 20% discount on your next purchase.\n\nThank you!`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.json({ error: 'Failed to send email' });
      }
      console.log('Email sent: ' + info.response);
     return res.status(200).json({ message: 'Coupon code sent to your email!', CouponCode : coupon.id });
    });
  } catch (error) {
    console.error('Error creating coupon:', error);
    return res.json({ error: 'Failed to create coupon' });
  }
});

// Route to create a checkout session
PaymentRouter.post('/create-checkout-session', async (req, res) => {
  const { totalPrice, totalItems,  couponCode } = req.body

  try {
    // Verify the coupon code
    const coupon = await Coupon.findOne({ couponId: couponCode });
    if (coupon) {
      // Coupon is valid, delete it
      await Coupon.deleteOne({ _id: coupon._id });
    }

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Cart Total',
            },
            unit_amount: totalPrice, // Convert dollars to cents
          },
          quantity: totalItems,
        },
      ],
      discounts: coupon ? [{ coupon: coupon.couponId }] : [],
      custom_text: {
        submit: {
          message: "This is for testing purposes. Do not enter your real card credentials",
        }
      },
      mode: 'payment',
      success_url: 'https://Cartx-mern507.netlify.app/success', // Your success URL
      cancel_url: 'https://Cartx-mern507.netlify.app/cancel', // Your cancel URL
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
});


module.exports = PaymentRouter; 