import { Elysia } from "elysia";
import { html } from "@elysiajs/html"
import * as elements from "typed-html"
import { dbPost as db, Post } from "./testdb";
import { dbHashTag, HashTag } from "./testdb";

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
        <RightSideBar />

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
              'dark-grey': '#474d51',
              'grey': '#212327',
              'gray': '#808080',
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


const HashTagblock = (hashtag: HashTag) => {
  return (
    <div class="my-4">
      <h5 class="text-gray text-sm">Trending in {hashtag.region}</h5>
      <h4>{hashtag.text}</h4>
      <h5 class="text-gray text-sm">{hashtag.numberOfTweets} Tweets</h5>
    </div>
  )
}

const FollowBlock = (post: Post) => {

  return (
    <div class="my-4 flex flex-row justify-between">
      <div class="flex flex-col">
        <h1 class="text-base">{post.user}</h1>
        <h1 class="text-sm text-gray">{post.username}</h1>
      </div>
      <div class="">
        <button class="bg-white rounded-2xl px-4 py-1.5 text-sm text-black inline-flex items-center">Follow</button>

      </div>
    </div>
  )
}

const RightSideBar = () => {
  return (
    <div class="flex flex-col w-2/12 bg-black text-white">
      <div class="my-2 mx-4 px-2 border border-dark-grey rounded-lg bg-grey">
        <input placeholder="Search" class="w-full px-3 text-xl text-gray-900 bg-white outline-none dark:bg-grey focus:ring-0 dark:text-white dark:placeholder-gray-400" />

      </div>

      <div class="my-2 mx-4 px-2 border border-dark-grey rounded-lg bg-grey">
        <h1 class="my-2 text-lg">Trends for you</h1>
        {
          dbHashTag.map(hashtag => {
            return (
              <HashTagblock {...hashtag} />
            )
          })
        }
      </div>

      <div class="my-2 mx-4 px-2 border border-dark-grey rounded-lg bg-grey">
        <h1 class="my-2 text-lg">Who to follow</h1>
        {
          db.map(user => {
            return (
              <FollowBlock {...user} />
            )
          })
        }

      </div>


    </div>
  )

}

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

  return (
    <div class="w-full p-4 border border-grey border-t-0 bg-black dark:bg-black dark:border-gray-600">
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
    <div class="flex flex-col w-1/2">
      <div class="w-full p-4 border border-grey border-t-0 bg-black dark:bg-black dark:border-gray-600">
        <h3 class="pb-4">Home</h3>

      </div>

      <form>
        <div class="w-full border border-grey border-t-0 bg-black dark:bg-black dark:border-gray-600">
          <div class="px-4 py-2 bg-white dark:bg-black">
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