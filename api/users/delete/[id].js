const faunadb = require("faunadb");

let client = new faunadb.Client({ secret: process.env.FAUNA_ADMIN_KEY });
let q = faunadb.query;

module.exports = (req, res) => {
  const { id } = req.query;

  client
    .query(q.Delete(q.Ref(q.Collection("users"), id)))
    .then(() => {
      return res.json({ id });
    })
    .catch(({ name, message, description }) => {
      return res.json({ name, message, description });
    });
};
