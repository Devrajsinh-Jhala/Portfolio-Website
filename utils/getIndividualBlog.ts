export async function getIndividualBlog(slug: string) {
    try {
        const { data } = await fetch("https://gql.hashnode.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: ` {
            publication(host: "devraj-jhala.hashnode.dev") {
              post(slug: "${slug}") {

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
        `
            }),
        }).then((response) => response.json());

        return data.publication.post
    } catch (err) {
        console.log(err);
    }
}