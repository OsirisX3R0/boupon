const Users = require("../../core/controllers/users.controller");

module.exports = async (req, res) => {
  try {
    let user = await Users.create(req.body);

    res.json(user);
    // await faunaAPI.connect();
    // faunaAPI.users.create(req.body).then(() => {
    //   res.json(req.body);
    // });
  } catch ({ name, message, description }) {
    return res.json({ name, message, description });
  }
};
