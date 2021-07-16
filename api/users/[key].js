const faunadb = require("faunadb");

let client = new faunadb.Client({ secret: process.env.FAUNA_ADMIN_KEY });
let q = faunadb.query;

module.exports = (req, res) => {
  const { key } = req.query;

  client
    .query(q.Paginate(q.Match(q.Index("users_by_key"), key)))
    .then((indexResp) => {
      Promise.all(
        indexResp.data.map((ref) =>
          client.query(q.Get(q.Ref(q.Collection("users"), ref.id)))
        )
      ).then((response) => {
        return res.json(response);
      });
    })
    .catch(({ name, message, description }) => {
      return res.json({ name, message, description });
    });
};
