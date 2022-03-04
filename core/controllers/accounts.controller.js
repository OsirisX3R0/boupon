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
};
