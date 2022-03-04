const Accounts = require("../../core/controllers/accounts.controller");

module.exports = async (req, res) => {
  try {
    // await faunaAPI.connect();
    const { key } = req.query;

    let { users } = Accounts.get(key);

    res.json(users);
    // let indexResp = await faunaAPI.users_by_key.get(key);

    // Promise.all(
    //   indexResp.map((ref) => {
    //     return faunaAPI.users.getById(ref.id);
    //   })
    // ).then((response) => {
    //   return res.json(response);
    // });
  } catch ({ name, message, description }) {
    return res.json({ name, message, description });
  }
};
