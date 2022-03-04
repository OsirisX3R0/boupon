const Users = require("../../../controllers/users.controller");

module.exports = async (req, res) => {
  try {
    const { id } = req.query;

    let user = await Users.delete(id);

    res.json(user);
  } catch ({ name, message, description }) {
    return res.json({ name, message, description });
  }
};
