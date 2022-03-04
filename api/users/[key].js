const Accounts = require("../../controllers/accounts.controller");

module.exports = async (req, res) => {
  try {
    const { key } = req.query;

    let { users } = Accounts.get(key);

    res.json(users);
  } catch ({ name, message, description }) {
    return res.json({ name, message, description });
  }
};
