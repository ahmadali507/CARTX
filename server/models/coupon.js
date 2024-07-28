const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
  email: { type: String, required: true },
  couponId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 600 } // Expires after 10 minutes
});

module.exports = mongoose.model('Coupon', couponSchema);
