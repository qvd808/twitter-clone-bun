import { PrismaClient } from "@prisma/client";
// import * from "../src/types"

const prisma = new PrismaClient();



async function seed() {

    //Get 3 tweet with username
    for (let i = 0; i < 10; i++) {
        const random_user = await prisma.$queryRaw
            `
        SELECT T.text, U.username
        FROM Tweet T, User U
        WHERE T.userId = U.id
        ORDER BY RANDOM()
        LIMIT 3;
        `

        console.log(random_user)
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