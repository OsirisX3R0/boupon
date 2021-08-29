const faunaAPI = require("../../core/fauna");

module.exports = async (req, res) => {
  await faunaAPI.connect();
  faunaAPI.coupons
    .create(req.body)
    .then(() => {
      res.json(req.body);
    })
    .catch(({ name, message, description }) => {
      return res.json({ name, message, description });
    });
};
