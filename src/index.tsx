import { Elysia } from "elysia";
import { html } from "@elysiajs/html"
import * as elements from "typed-html"

const app = new Elysia()
  .use(html())
  .get("/", ({ html }) => html(
    <BaseHTML>
      <body class="flex w-full h-screen"
        hx-trigger="load"
        hx-swap="innerHTML"
      >
        <SideBar />
        <Home posts={db}/>
      </body>
    </BaseHTML>
  ))
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

const BaseHTML = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, inital-scale=1.0">
  <title> Test </title>
  <script src="https://unpkg.com/htmx.org@1.9.5" integrity="sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO" crossorigin="anonymous"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  </head>
${children}
`;
type Post = {
  text: string
}
const db: Post[] = [
  {
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia eaque quibusdam aut molestiae. Impedit, similique. Atque recusandae ad ullam. Rerum, placeat assumenda ipsam in molestiae accusantium natus unde quasi cumque."
  },
  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus eaque vitae sit. Sed eum ut velit, deserunt cum animi dolore quasi maxime aspernatur iure. Voluptatibus molestias, possimus quidem repudiandae totam dolore, autem officiis, beatae facilis quo iure porro voluptas excepturi iste sunt repellat facere reiciendis culpa. Sit perferendis porro libero veritatis quae error iure dignissimos corrupti explicabo provident et fuga repellendus quaerat natus ipsam blanditiis laboriosam soluta est esse ratione facilis quidem laudantium, asperiores unde? Sit perferendis corporis asperiores saepe! Pariatur suscipit repudiandae nostrum laborum ipsa reiciendis, error nemo optio eaque commodi voluptates! Expedita quos nostrum, facere nihil, molestiae molestias dolore, perspiciatis voluptatum ipsa deserunt sint cupiditate. Molestias earum enim ut aut facere obcaecati maiores asperiores mollitia expedita! Sunt non maxime itaque, consequuntur voluptatum cumque voluptatem similique possimus, quod eius veritatis nobis soluta, quo mollitia harum exercitationem fugit ipsam distinctio atque temporibus eligendi? Debitis molestiae cumque officiis, impedit aperiam harum repellendus voluptas quo unde nemo laborum deleniti dicta neque modi qui ex! Perferendis, quos. Sapiente accusamus libero sunt corporis quas quidem velit ipsum, cumque maiores magnam fugit sed officia nulla maxime doloremque delectus molestiae iste molestias quae labore omnis quos veniam. Dolore deleniti doloremque velit temporibus? Odit dolore dolores quas?"
  },
  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, excepturi non consectetur hic consequatur velit perspiciatis ipsum ratione voluptate accusantium autem magnam voluptas alias molestias dolorem quas nesciunt placeat? Quam vel distinctio tempore, nesciunt perspiciatis consectetur officia rerum dolores itaque, repellat cupiditate dolorum, illum dignissimos magni pariatur doloribus ea qui."
  },
]

const SideBar = () => {
  return (
    <div class="flex flex-col w-2/12 bg-black text-white">
      <button class="my-5">Home</button>
      <button class="my-5">Explore</button>
      <button class="my-5">Notifications</button>
      <button class="my-5" >Messages</button>
      <button class="my-5">Bookmarks</button>
      <button class="my-5">Lists</button>
      <button class="my-5">Profile</button>
      <button class="my-5">More</button>
    </div>
  )
}

const Post = (post: Post) => {
  return (
    <div>
      {post.text}
    </div>
  )
}

const Home = ({posts}: {posts: Post[]}) => {
  return (
    <div>
      Home
      {
        posts.map((p) => {
          return (
            <Post {...p}/>
          )
        })
      }
    </div>
  )
}