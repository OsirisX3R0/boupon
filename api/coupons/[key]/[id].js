const faunaAPI = require("../../../core/fauna");

module.exports = async (req, res) => {
  try {
    await faunaAPI.connect();
    const { key, id } = req.query;

    let indexResp = await faunaAPI.coupons_by_key.get(key);

    Promise.all(indexResp.map((ref) => faunaAPI.coupons.getById(ref.id))).then(
      (response) => {
        return res.json(response.filter((c) => c.created_by !== id));
      }
    );
  } catch ({ name, message, description }) {
    return res.json({ name, message, description });
  }
};
