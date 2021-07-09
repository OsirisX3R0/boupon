const faunadb = require("faunadb");

let client = new faunadb.Client({ secret: process.env.FAUNA_ADMIN_KEY });
let q = faunadb.query;

module.exports = async (req, res) => {
  const { key } = req.query;

  return await client
    .query(
      q.Map(
        q.Paginate(
          q.Match(q.Index("users_by_key"), key),
          q.Lambda("name", q.Get(q.Var("name")))
        )
      )
    )
    .catch(({ name, message, description }) => {
      return res.json({ name, message, description });
    });
};
