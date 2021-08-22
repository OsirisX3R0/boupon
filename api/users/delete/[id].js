const faunaAPI = require("../../../core/fauna");

module.exports = (req, res) => {
  const { id } = req.query;

  faunaAPI
    .deleteById("users", id)
    .then(() => {
      return res.json({ id });
    })
    .catch(({ name, message, description }) => {
      return res.json({ name, message, description });
    });
};
