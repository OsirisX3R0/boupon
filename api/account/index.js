const Accounts = require("../../controllers/accounts.controller");
const Users = require("../../controllers/users.controller");

module.exports = async (req, res) => {
  try {
    const { name } = req.body;
    let { key } = await Accounts.create();

    let user = await Users.create({ name, account_key: key });

    res.json(user);
  } catch ({ name, message, description }) {
    return res.json({ name, message, description });
  }
};
