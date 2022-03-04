const prisma = require("../prisma");

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
   * Deletes a coupon
   * @param {Number} id Coupon to delete
   */
  delete: async (id) => {
    return prisma.coupons.delete({
      where: { id },
    });
  },
};
