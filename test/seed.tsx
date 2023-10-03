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

const tweetdb: Tweet[] = [
    {
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia eaque quibusdam aut molestiae. Impedit, similique. Atque recusandae ad ullam. Rerum, placeat assumenda ipsam in molestiae accusantium natus unde quasi cumque.",
        userId: "@CNN"
    },
    {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus eaque vitae sit. Sed eum ut velit, deserunt cum animi dolore quasi maxime aspernatur iure. Voluptatibus molestias, possimus quidem repudiandae totam dolore, autem officiis, beatae facilis quo iure porro voluptas excepturi iste sunt repellat facere reiciendis culpa. Sit perferendis porro libero veritatis quae error iure dignissimos corrupti explicabo provident et fuga repellendus quaerat natus ipsam blanditiis laboriosam soluta est esse ratione facilis quidem laudantium, asperiores unde? Sit perferendis corporis asperiores saepe! Pariatur suscipit repudiandae nostrum laborum ipsa reiciendis, error nemo optio eaque commodi voluptates! Expedita quos nostrum, facere nihil, molestiae molestias dolore, perspiciatis voluptatum ipsa deserunt sint cupiditate. Molestias earum enim ut aut facere obcaecati maiores asperiores mollitia expedita! Sunt non maxime itaque, consequuntur voluptatum cumque voluptatem similique possimus, quod eius veritatis nobis soluta, quo mollitia harum exercitationem fugit ipsam distinctio atque temporibus eligendi? Debitis molestiae cumque officiis, impedit aperiam harum repellendus voluptas quo unde nemo laborum deleniti dicta neque modi qui ex! Perferendis, quos. Sapiente accusamus libero sunt corporis quas quidem velit ipsum, cumque maiores magnam fugit sed officia nulla maxime doloremque delectus molestiae iste molestias quae labore omnis quos veniam. Dolore deleniti doloremque velit temporibus? Odit dolore dolores quas?",
        userId: "@nytimes"
    },
    {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, excepturi non consectetur hic consequatur velit perspiciatis ipsum ratione voluptate accusantium autem magnam voluptas alias molestias dolorem quas nesciunt placeat? Quam vel distinctio tempore, nesciunt perspiciatis consectetur officia rerum dolores itaque, repellat cupiditate dolorum, illum dignissimos magni pariatur doloribus ea qui.",
        userId: "@Twitter"
    },
]


async function seed() {

    await prisma.tweet.deleteMany();
    await prisma.user.deleteMany();

    for (let user of userdb) {
        await prisma.user.create({
            data: user
        })
    }


    for (let tweet of tweetdb) {
        const result = await prisma.user.update({
            where: {
                username: tweet.userId
            },
            data: {
                Tweet: {
                    create: {
                        text: tweet.text
                    }
                }
            }
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