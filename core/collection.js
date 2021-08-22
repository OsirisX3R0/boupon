class Collection {
  constructor(name) {
    this.name = name;
  }

  // CREATE

  create(data) {
    return this.client.query(
      this.query.Create(this.query.Collection(this.name), { data })
    );
  }

  // READ

  getByid(id) {
    return this.client.query(
      this.query.Get(this.query.Ref(this.query.Collection(this.name), id))
    );
  }

  // UPDATE

  update(id) {}

  // DELETE

  deleteById(id) {
    return this.client.query(
      this.query.Delete(this.query.Ref(this.query.Collection(this.name), id))
    );
  }
}

module.exports = Collection;
