const Users = require("../../../controllers/users.controller");

module.exports = async (req, res) => {
  try {
    const { id } = req.query;

    let { coupons } = await Users.get(+id);

    return res.json(coupons);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
