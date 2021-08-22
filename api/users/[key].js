const faunaAPI = require("../../core/fauna");

module.exports = (req, res) => {
  const { key } = req.query;

  faunaAPI
    .getByIndex("users_by_key", key)
    .then((indexResp) => {
      Promise.all(
        indexResp.data.map((ref) => faunaAPI.getByRef("users", ref))
      ).then((response) => {
        return res.json(response);
      });
    })
    .catch(({ name, message, description }) => {
      return res.json({ name, message, description });
    });
};
