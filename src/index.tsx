import { Elysia } from "elysia";
import { html } from "@elysiajs/html"
import * as elements from "typed-html"

const app = new Elysia()
  .use(html())
  .get("/", ({ html }) => html(
    <BaseHTML>
      <body class="flex w-full h-screen"
        hx-get="/employees"
        hx-trigger="load"
        hx-swap="innerHTML"
      >
        <SideBar/>
      </body>
    </BaseHTML>
  ))
  .listen(3000);

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

const SideBarButton = () => {
  return 
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