import { PrismaClient } from "@prisma/client";
// import * from "../src/types"

const prisma = new PrismaClient();


const userdb: User[] = [
    {
        name: "CNN",
        username: "@CNN",
        email: "cnn@gmail.com"
    },
    {
        name: "The New York Times",
        username: "@nytimes",
        email: "nytimes@gmail.com"
    },
    {
        name: "Twitter",
        username: "@Twitter",
        email: "twitter@gmail.com"
    }
]

async function seed() {

    await prisma.user.deleteMany();

    for (let user of userdb) {
        await prisma.user.create({
            data: user
        })
    }

}

try {
    await seed();
    await prisma.$disconnect();
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }