export async function getHomePagePosts() {
  try {
    const { data } = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` {
          publication(host: "devraj-jhala.hashnode.dev") {
            posts(first: 6) {
              edges {
                node {
                  title
                  brief
                  slug
                  views
                  readTimeInMinutes
                  coverImage {
                    url
                  }
                  publishedAt
                  content{
                    markdown
                  }
              }
            }
          }
        }
      }
      `
      }),
    }).then((response) => response.json());

    return data.publication.posts.edges
  } catch (err) {
    console.log(err);
  }
}