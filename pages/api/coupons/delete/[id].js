const Coupons = require("../../../../controllers/coupons.controller");

module.exports = async (req, res) => {
  try {
    const { id } = req.query;

    let coupon = await Coupons.delete(+id);

    return res.json(coupon);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
