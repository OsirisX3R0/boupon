const { v4: uuid } = require("uuid");

const prisma = require("../core/prisma");

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
   * Retrieves account, including users and coupons
   * @param {String} key Account key
   * @returns
   */
  get: async (key) => {
    return await prisma.accounts.findUnique({
      where: { key },
      include: {
        users: {
          select: {
            id: true,
            name: true,
          },
        },
        coupons: {
          select: {
            title: true,
            text: true,
            created_by_id: true,
            created_for_id: true,
          },
        },
      },
    });
  },
};
