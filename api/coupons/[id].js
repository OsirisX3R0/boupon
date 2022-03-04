const Users = require("../../core/controllers/users.controller");

module.exports = async (req, res) => {
  try {
    const { id } = req.query;

    let { coupons } = await Users.get(id);

    return res.json(coupons);
  } catch ({ name, message, description }) {
    return res.json({ name, message, description });
  }
};
