const faunaAPI = require("../../../core/fauna");

module.exports = async (req, res) => {
  await faunaAPI.connect();
  const { id } = req.query;

  faunaAPI.users
    .deleteById(id)
    .then(() => {
      return res.json({ id });
    })
    .catch(({ name, message, description }) => {
      return res.json({ name, message, description });
    });
};
