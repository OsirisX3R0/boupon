const prisma = require("../core/prisma");

const main = async () => {
  await prisma.accounts.create({
    data: {
      key: "7c13393e-f6bd-4a6d-9c50-6f33d8c4d659",
    },
  });

  await prisma.users.createMany({
    data: [
      { name: "Ricky", account_key: "7c13393e-f6bd-4a6d-9c50-6f33d8c4d659" },
      { name: "Lee", account_key: "7c13393e-f6bd-4a6d-9c50-6f33d8c4d659" },
    ],
    skipDuplicates: true,
  });

  await prisma.coupons.createMany({
    data: [
      {
        title: "Foot rub",
        text: "Good for one (1) foot rub",
        created_by_id: 2,
        created_for_id: 1,
      },
      {
        title: "Back rub",
        text: "Good for one (1) back rub",
        created_by_id: 2,
        created_for_id: 1,
      },
    ],
    skipDuplicates: true,
  });
};

main();
