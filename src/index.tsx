import { Elysia } from "elysia";
import { html } from "@elysiajs/html"
import * as elements from "typed-html"

const app = new Elysia()
  .use(html())
  .get("/", ({ html }) => html(
    <BaseHTML>
      <body class="flex w-full h-screen bg-black text-white"
        hx-trigger="load"
        hx-swap="innerHTML"
      >
        <SideBar />
        <Home posts={db} />

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
  <script>
    tailwind.config = {
        theme: {
          extend: {
            spacing: {
              '128': '32rem',
              '144': '36rem',
            },
            borderRadius: {
              '4xl': '2rem',
            },
            screens: {
              sm: '480px',
              md: '768px',
              lg: '976px',
              xl: '1440px',
            },
            colors: {
              'dark-grey': '#474d51'
            },
            fontFamily: {
              sans: ['Graphik', 'sans-serif'],
              serif: ['Merriweather', 'serif'],
            },
          }
        }
      }
      
  </script>
  </head>
${children}
`;
type Post = {
  text: string,
  user: string,
  username: string,
  created_at: Date
}
const db: Post[] = [
  {
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia eaque quibusdam aut molestiae. Impedit, similique. Atque recusandae ad ullam. Rerum, placeat assumenda ipsam in molestiae accusantium natus unde quasi cumque.",
    user: "CNN",
    username: "@CNN",
    created_at: new Date(2023, 8, 26, 12, 30, 0, 0),
  },
  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus eaque vitae sit. Sed eum ut velit, deserunt cum animi dolore quasi maxime aspernatur iure. Voluptatibus molestias, possimus quidem repudiandae totam dolore, autem officiis, beatae facilis quo iure porro voluptas excepturi iste sunt repellat facere reiciendis culpa. Sit perferendis porro libero veritatis quae error iure dignissimos corrupti explicabo provident et fuga repellendus quaerat natus ipsam blanditiis laboriosam soluta est esse ratione facilis quidem laudantium, asperiores unde? Sit perferendis corporis asperiores saepe! Pariatur suscipit repudiandae nostrum laborum ipsa reiciendis, error nemo optio eaque commodi voluptates! Expedita quos nostrum, facere nihil, molestiae molestias dolore, perspiciatis voluptatum ipsa deserunt sint cupiditate. Molestias earum enim ut aut facere obcaecati maiores asperiores mollitia expedita! Sunt non maxime itaque, consequuntur voluptatum cumque voluptatem similique possimus, quod eius veritatis nobis soluta, quo mollitia harum exercitationem fugit ipsam distinctio atque temporibus eligendi? Debitis molestiae cumque officiis, impedit aperiam harum repellendus voluptas quo unde nemo laborum deleniti dicta neque modi qui ex! Perferendis, quos. Sapiente accusamus libero sunt corporis quas quidem velit ipsum, cumque maiores magnam fugit sed officia nulla maxime doloremque delectus molestiae iste molestias quae labore omnis quos veniam. Dolore deleniti doloremque velit temporibus? Odit dolore dolores quas?",
    user: "The New York Times",
    username: "@nytimes",
    created_at: new Date(2023, 8, 26, 10, 30, 0, 0),

  },
  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, excepturi non consectetur hic consequatur velit perspiciatis ipsum ratione voluptate accusantium autem magnam voluptas alias molestias dolorem quas nesciunt placeat? Quam vel distinctio tempore, nesciunt perspiciatis consectetur officia rerum dolores itaque, repellat cupiditate dolorum, illum dignissimos magni pariatur doloribus ea qui.",
    user: "Twitter",
    username: "@Twitter",
    created_at: new Date(2023, 9, 26, 10, 30, 0, 0),
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

  const test = (date: Date) => {
    let current = Date.now();
    let time_diff = current - date.getTime()
    if (time_diff / 1000 <= 60) {
      return "Just now"
    } else if (time_diff / (1000 * 60) < 60) {
      return `${time_diff / (1000 * 60)} minutes`
    } else if (time_diff / (1000 * 60 * 60) < 24) {
      return `${time_diff / (1000 * 60 * 60)} hours`
    } else if (time_diff / (1000 * 60 * 60 * 24) < 31) {
      return `${time_diff / (1000 * 60 * 60 * 24)} days`
    } else if (time_diff / (1000 * 60 * 60 * 24 * 30) < 12) {
      return `${time_diff / (1000 * 60 * 60 * 24 * 30)} months`
    } else {
      return `${time_diff / (1000 * 60 * 60 * 24 * 30 * 12)} years`    
    }
    
  }
  test(db[0].created_at)

  return (
    <div class="w-full mb-4 p-4 border border-gray-200 rounded-lg bg-black dark:bg-black dark:border-gray-600">
      <div class="flex flex-col">
        <div class="inline-flex text-justify mb-2">
          <h1 class="font-bold">{post.user}</h1>
          <p class="mx-3 text-gray-500">{post.username}</p>
          <p class="mx-3 text-gray-500">{test(post.created_at)}</p>
        </div>
        {post.text}
      </div>
    </div>
  )
}

const Home = ({ posts }: { posts: Post[] }) => {
  return (
    <div class="flex flex-col w-2/3">
      <h3 class="py-4">Home</h3>

      <form>
        <div class="w-full mb-4 border border-gray-200 rounded-lg bg-black dark:bg-black dark:border-gray-600">
          <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-black">
            <label for="comment" class="sr-only">Your comment</label>
            <textarea spellcheck="false" id="comment" rows="4" class="w-full px-0 text-xl text-gray-900 bg-white outline-none dark:bg-black focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." ></textarea>
          </div>
          <div class="flex flex-row-reverse bg-black px-3 py-2 dark:border-gray-600 ">
            <button class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
              Post comment
            </button>
          </div>
        </div>
      </form>

      {
        posts.map((p) => {
          return (
            <Post {...p} />
          )
        })
      }
    </div>
  )
}