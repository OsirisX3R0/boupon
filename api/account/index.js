const faunaAPI = require("../../core/fauna");
const { v4: uuid } = require("uuid");

module.exports = async (req, res) => {
  try {
    await faunaAPI.connect();
    const { name } = req.body;
    let key = uuid();

    await faunaAPI.accounts.create({ key });

    faunaAPI.users
      .create({ name, key })
      .then(() => {
        res.json({ key, name });
      })
      .catch(({ name, message, description }) => {
        return res.json({ name, message, description });
      });
  } catch ({ name, message, description }) {
    return res.json({ name, message, description });
  }
};
