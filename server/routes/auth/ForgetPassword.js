const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator'); 
const User = require('../../models/user');

const forgetPassRoute = express.Router();

const validate = [
    check("email").isEmail().withMessage("Invalid Email"),
    check("username").isAlpha().withMessage("Invalid Username"),
    check("newPass").isAlphanumeric().withMessage("Invalid Password").isLength({ max: 14, min: 3 }).withMessage("Password is not of right length"),
    check("ConfirPass").isAlphanumeric().withMessage("Invalid Password").isLength({ max: 14, min: 3 }).withMessage("Password is not of right length")
];

forgetPassRoute.post('/forget-password', validate, async (req, res, next) => {
    try {
        const { username, email, newPass, ConfirPass } = req.body;
        console.log(username, email, newPass, ConfirPass);
        const result = validationResult(req);

        if (!result.isEmpty()) {
            return res.status(400).json({ error: result.array()[0].msg });
        }

        if (!username || !email) {
            return res.status(400).json({ error: 'Invalid Email Address or Username' });
        }

        if (!newPass || !ConfirPass) {
            return res.status(400).json({ error: 'Password Not Found' });
        }

        const user = await User.findOne({ username: username, email: email });
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        if (newPass !== ConfirPass) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPass, salt);
        // Update the user's password
        user.password = hashedPassword;
        await user.save(); // Don't forget to save the user
        
        // Redirect to the sign-in route
        return res.status(200).json({
            success : "Password reset Successful"
        })
    } catch (err) {
        return res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = forgetPassRoute;
