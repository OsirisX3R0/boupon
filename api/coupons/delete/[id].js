const Coupons = require("../../../core/controllers/coupons.controller");

module.exports = async (req, res) => {
  try {
    const { id } = req.query;

    let coupon = await Coupons.delete(id);

    return res.json(coupon);
  } catch ({ name, message, description }) {
    return res.json({ name, message, description });
  }
};
