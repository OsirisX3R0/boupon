const { v4: uuid } = require("uuid");

const prisma = require("../prisma");

module.exports = {
  /** Generates a new account/key */
  create: async () => {
    let key = uuid();

    return await prisma.accounts.create({
      data: {
        key,
      },
      select: {
        key: true,
      },
    });
  },
  /**
   * Retrieves all users tied to an account
   * @param {String} key Account key
   * @returns
   */
  getAccountUsers: async (key) => {
    let { users } = await prisma.accounts.findUnique({
      where: { key },
      select: {
        users: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return users;
  },
};
