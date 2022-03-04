const Users = require("../../../core/controllers/users.controller");

module.exports = async (req, res) => {
  try {
    // await faunaAPI.connect();
    const { id } = req.query;

    let user = await Users.delete(id);
    // faunaAPI.users.deleteById(id).then(() => {
    res.json(user);
    // });
  } catch ({ name, message, description }) {
    return res.json({ name, message, description });
  }
};
