const prisma = require("../core/prisma");

module.exports = {
  /**
   * Creates a coupon
   * @param {Object} data Data for new coupon
   * @returns
   */
  create: async (data) => {
    return await prisma.coupons.create({
      data,
      select: {
        title: true,
        text: true,
        created_by_id: true,
        created_for_id: true,
      },
    });
  },
  /**
   * Retrieves a coupon
   * @param {String} key Account key
   * @returns
   */
  get: async (id) => {
    return await prisma.coupons.findUnique({
      where: { id },
      include: {
        created_for: {
          select: {
            name: true,
          },
        },
        created_by: {
          select: {
            name: true,
          },
        },
      },
    });
  },
  /**
   * Deletes a coupon
   * @param {Number} id Coupon to delete
   */
  delete: async (id) => {
    return await prisma.coupons.delete({
      where: { id },
    });
  },
};
