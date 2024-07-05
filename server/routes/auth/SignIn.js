const express = require("express");
const { check, validationResult } = require("express-validator");
const User = require("../../models/user");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const SignIn = express.Router();

const validate = [
  check("email").isEmail().withMessage("Email address is invalid"),
  check("password")
    .isAlphanumeric()
    .withMessage("Password invalid")
    .isLength({ min: 3, max: 10 })
    .withMessage("Password must have 3 to 10 characters."),
];

SignIn.post("/signIn", validate, async (req, res) => {
  const { email, password } = req.body;

  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ error: result.array()[0].msg });
  }

  if (!email || !password) {
    return res.status(400).json({
      error: "All fields are required",
    });
  }

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        error: "Invalid password",
      });
    }

    const token = jwt.sign(
      {
        email: user.email,
        _id: user._id,
      },
      "SECRET_KEY", // Make sure to use a strong secret key in production
      { expiresIn: '1h' } // Optional: Set token expiration time
    );

    res.json({ success: true, token, status: "User was found." });
  } catch (error) {
    console.error('Error during sign in:', error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
});

module.exports = SignIn;
