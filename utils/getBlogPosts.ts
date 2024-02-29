export async function getBlogPosts() {
  try {
    const { data } = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` {
            publication(host: "devraj-jhala.hashnode.dev") {
              posts(first: 10) {
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
                      html
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