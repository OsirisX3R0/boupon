const faunaAPI = require("../../core/fauna");

module.exports = (req, res) => {
  faunaAPI.coupons
    .create(req.body)
    .then(() => {
      res.json(req.body);
    })
    .catch(({ name, message, description }) => {
      return res.json({ name, message, description });
    });
};