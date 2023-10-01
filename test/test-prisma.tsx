import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// count the number of users
// await prisma.user.deleteMany();

const count = await prisma.user.count();
console.log(`There are ${count} users in the database.`);

const users = await prisma.user.findMany();
console.log(users)