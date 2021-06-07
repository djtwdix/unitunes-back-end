import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = (req, res) => {
  prisma.user.create({
    data: req.body,
  });
};

export default createUser