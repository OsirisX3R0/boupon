const faunadb = require("faunadb");

class FaunaAPI {
  constructor(secret) {
    this.client = new faunadb.Client({ secret });
    this.query = faunadb.query;
  }

  create(collection, data) {
    return this.client.query(
      this.query.Create(this.query.Collection(collection), { data })
    );
  }

  getByRef(collection, ref) {
    return this.client.query(
      this.query.Get(this.query.Ref(this.query.Collection(collection), ref.id))
    );
  }

  getByIndex(index, value) {
    return this.client.query(
      this.query.Paginate(this.query.Match(this.query.Index(index), value))
    );
  }

  deleteById(collection, id) {
    return this.client.query(
      this.query.Delete(this.query.Ref(this.query.Collection(collection), id))
    );
  }
}

const faunaAPI = new FaunaAPI(process.env.FAUNA_ADMIN_KEY);

module.exports = faunaAPI;
