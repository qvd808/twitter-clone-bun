type Post = {
    text: string,
    user: string,
    username: string,
    created_at: Date
  }
  const dbPost: Post[] = [
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

  type HashTag = {
    text: string,
    region: string,
    numberOfTweets: number
  }
  const dbHashTag: HashTag[] = [
    {
        text: "#SQUID",
        region: "Canada",
        numberOfTweets: 3000
    },
    {
        text: "#SQUID",
        region: "United States",
        numberOfTweets: 3000

    },
    {
        text: "#SQUID",
        region: "Brazil",
        numberOfTweets: 3000

    },
  ]


export { dbPost, dbHashTag };
export { Post, HashTag };