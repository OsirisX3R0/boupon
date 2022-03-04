const Accounts = require("../../core/controllers/accounts.controller");
const Users = require("../../core/controllers/users.controller");

module.exports = async (req, res) => {
  try {
    const { name } = req.body;
    let { key } = await Accounts.create();

    let user = await Users.create(name, key);

    res.json(user);
    // await faunaAPI.connect();
    // let key = uuid();

    // await faunaAPI.accounts.create({ key });

    // faunaAPI.users
    //   .create({ name, key })
    //   .then(() => {
    //     res.json({ key, name });
    //   })
    //   .catch(({ name, message, description }) => {
    //     return res.json({ name, message, description });
    //   });
  } catch ({ name, message, description }) {
    return res.json({ name, message, description });
  }
};
