const Users = require("../../../../controllers/users.controller");

module.exports = async (req, res) => {
  try {
    const { id } = req.query;

    let { created_coupons } = await Users.get(id);

    return res.json(created_coupons);
  } catch ({ name, message, description }) {
    return res.json({ name, message, description });
  }
};
