const Coupons = require("../../../controllers/coupons.controller");

module.exports = async (req, res) => {
  try {
    let coupon = await Coupons.create(req.body);

    res.json(coupon);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
