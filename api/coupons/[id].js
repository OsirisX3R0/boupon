const Users = require("../../core/controllers/users.controller");

module.exports = async (req, res) => {
  try {
    await faunaAPI.connect();
    const { id } = req.query;

    let { coupons } = await Users.get(id);
    // let indexResp = await faunaAPI.coupons_by_key.get(key);

    // Promise.all(indexResp.map((ref) => faunaAPI.coupons.getById(ref.id))).then(
    //   (response) => {
    return res.json(coupons);
    //   }
    // );
  } catch ({ name, message, description }) {
    return res.json({ name, message, description });
  }
};
