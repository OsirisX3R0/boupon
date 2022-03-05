const Users = require("../../../controllers/users.controller");

module.exports = async (req, res) => {
  try {
    let user = await Users.create(req.body);

    res.json(user);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
