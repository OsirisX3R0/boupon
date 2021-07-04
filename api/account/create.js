const faunadb = require("faunadb");
const { v4: uuid } = require("uuid");

let client = new faunadb.Client({ secret: process.env.FAUNA_ADMIN_KEY });
let q = faunadb.query;

module.exports = (req, res) => {
  let key = uuid();

  client
    .query(q.Create(q.Collection("accounts"), { data: { key } }))
    .then(() => {
      res.json({ key });
    })
    .catch(({ name, message, description }) => {
      return res.json({ name, message, description });
    });
};
