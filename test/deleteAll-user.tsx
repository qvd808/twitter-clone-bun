import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// count the number of users
await prisma.user.deleteMany();