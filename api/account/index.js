const faunaAPI = require("../../core/fauna");
const { v4: uuid } = require("uuid");

module.exports = (req, res) => {
  const { name } = req.body;
  let key = uuid();

  faunaAPI
    .create("accounts", { key })
    .then(() => {
      faunaAPI
        .create("usres", { name, key })
        .then(() => {
          res.json({ key, name });
        })
        .catch(({ name, message, description }) => {
          return res.json({ name, message, description });
        });
    })
    .catch(({ name, message, description }) => {
      return res.json({ name, message, description });
    });
};
