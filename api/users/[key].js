const faunaAPI = require("../../core/fauna");

module.exports = (req, res) => {
  const { key } = req.query;

  faunaAPI
    .getByIndex("users_by_key", key)
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
