const Coupons = require("../../core/controllers/coupons.controller");

module.exports = async (req, res) => {
  try {
    let coupon = await Coupons.create(req.body);

    res.json(coupon);
  } catch ({ name, message, description }) {
    return res.json({ name, message, description });
  }
};
