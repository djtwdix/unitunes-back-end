import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();
export const createUser = async (req, res) => {
  console.log(req.body);
  console.log("requested");
  await prisma.user.create(
    {
      data: req.body,
    });
};

/* main()
  .catch((e) => {
    throw e;
  })

  .finally(async () => {
    await prisma.$disconnect();
  }); */
