const FaunaAPI = require("@osirisx3r0/faunadb-node-api");

const faunaAPI = new FaunaAPI(process.env.FAUNA_ADMIN_KEY, [
  "accounts",
  "coupons",
  "users",
]);

module.exports = faunaAPI;
