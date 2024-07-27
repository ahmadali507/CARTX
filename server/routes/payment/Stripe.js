const express = require('express');
const stripe = require('stripe')('sk_test_51PZJNaDJuXMaBWwvwlhGxxwmHaj7B4fV0oZhrv20x7rHrS57ZtKyStIS5Iva0YthRJk5CxZe6N6fdgRFPAQGMcJ200jyFsZf7Q');

const PaymentRouter = express.Router();

PaymentRouter.post('/create-checkout-session', async (req, res) => {
    const body = req.body;

    console.log(body,  req.body);
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Cart Total',
                        },
                        unit_amount: body.TotalPrice, // totalPrice is assumed to be in dollars
                    },
                    quantity: body.TotalItems,
                },
            ],
            mode: 'payment',
            success_url: 'http://localhost:5173/success', // Your success URL
            cancel_url: 'http://localhost:5173/cancel', // Your cancel URL
        });

        res.json({ id: session.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = PaymentRouter;
