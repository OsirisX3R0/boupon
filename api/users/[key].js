const faunaAPI = require("../../core/fauna");

module.exports = async (req, res) => {
  await faunaAPI.connect();
  const { key } = req.query;

  faunaAPI
    .users_by_key(key)
    .then((indexResp) => {
      Promise.all(
        indexResp.data.map((ref) => faunaAPI.users.getById(ref.id))
      ).then((response) => {
        return res.json(response);
      });
    })
    .catch(({ name, message, description }) => {
      return res.json({ name, message, description });
    });
};
