import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = (req, res) => {
  prisma.user.create({
    data: req.body,
  });
};
