const faunaAPI = require("../../../core/fauna");

module.exports = async (req, res) => {
  try {
    await faunaAPI.connect();
    const { id } = req.query;

    faunaAPI.coupons.deleteById(id).then(() => {
      return res.json({ id });
    });
  } catch ({ name, message, description }) {
    return res.json({ name, message, description });
  }
};
