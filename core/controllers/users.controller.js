const prisma = require("../prisma");

module.exports = {
  /**
   * Creates a user and ties them to an account
   * @param {String} name New user's name
   * @param {String} account_key Account to associate user to
   * @returns
   */
  create: async (name, account_key) => {
    return prisma.users.create({
      data: {
        name,
        account_key,
      },
      select: {
        name: true,
        account_key: true,
      },
    });
  },
};
