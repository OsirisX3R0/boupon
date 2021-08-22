const faunadb = require("faunadb");

const Collection = require("./collection");

class FaunaAPI {
  constructor(secret, collections) {
    this.client = new faunadb.Client({ secret });
    this.query = faunadb.query;

    collections.forEach(
      (collection) => (this[collection] = new Collection(collection))
    );
  }

  // CREATE

  create(collection, data) {
    return this.client.query(
      this.query.Create(this.query.Collection(collection), { data })
    );
  }

  // READ

  getByid(collection, id) {
    return this.client.query(
      this.query.Get(this.query.Ref(this.query.Collection(collection), id))
    );
  }

  getByIndex(index, value) {
    return this.client.query(
      this.query.Paginate(this.query.Match(this.query.Index(index), value))
    );
  }

  // UPDATE

  update(collection, id) {}

  // DELETE

  deleteById(collection, id) {
    return this.client.query(
      this.query.Delete(this.query.Ref(this.query.Collection(collection), id))
    );
  }
}

const faunaAPI = new FaunaAPI(process.env.FAUNA_ADMIN_KEY, [
  "accounts",
  "coupons",
  "users",
]);

module.exports = faunaAPI;
