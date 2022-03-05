const prisma = require("../core/prisma");

module.exports = {
  /**
   * Creates a user and ties them to an account
   * @param {Object} data Data for new account
   * @returns
   */
  create: async (data) => {
    return prisma.users.create({
      data,
      select: {
        id: true,
        name: true,
        account_key: true,
      },
    });
  },
  /**
   * Retrieves a user
   * @param {Number} id User to get
   * @returns
   */
  get: async (id) => {
    return prisma.users.findUnique({
      where: { id },
      include: {
        created_coupons: {
          title: true,
          text: true,
          created_for: true,
        },
        coupons: {
          title: true,
          text: true,
          created_for: true,
        },
      },
    });
  },
  /**
   * Deletes a user
   * @param {Number} id User to delete
   */
  delete: async (id) => {
    return prisma.users.delete({
      where: { id },
    });
  },
};
