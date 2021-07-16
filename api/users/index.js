const faunadb = require("faunadb");
// const { v4: uuid } = require("uuid");

let client = new faunadb.Client({ secret: process.env.FAUNA_ADMIN_KEY });
let q = faunadb.query;

module.exports = (req, res) => {
  client
    .query(q.Create(q.Collection("users"), { data: req.body }))
    .then(() => {
      res.json(req.body);
    })
    .catch(({ name, message, description }) => {
      return res.json({ name, message, description });
    });
};
