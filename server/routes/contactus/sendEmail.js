const express = require('express'); 
const nodemailer = require('nodemailer');
const verifyToken = require('../../middlewares/auth');
const FeedBack = require('../../models/contactUs');

const sendEmailRouter = express.Router();

// Middleware to parse JSON bodies
sendEmailRouter.use(express.json()); // Ensure this middleware is used to parse JSON

sendEmailRouter.post('/contactus', verifyToken, async (req, res) => {
    try {
        const { name, email, subject, message } = req.body; // Use req.body to access JSON data
        
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Invalid data. Name, email, and message are required.' });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.ADMIN_EMAIL, // Your email
                pass: process.env.ADMIN_PASS, // Your email password
            }
        });
        const mailOptions = {
            from: email,
            to: process.env.ADMIN_EMAIL,
            subject: subject,
            text: message, // Use 'text' or 'html' for email body content
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");

        // Saving the message into the database
        const newMsg = new FeedBack({
            name,
            subject,
            email,
            message
        });
        await newMsg.save();

        return res.status(200).json({ success: "Email sent and feedback saved successfully" });
    } catch (error) {
        console.error("Error sending email or saving feedback:", error);
        return res.status(500).json({ success: false, message: "Email was not sent successfully", error: error.message });
    }
});

module.exports = sendEmailRouter;
