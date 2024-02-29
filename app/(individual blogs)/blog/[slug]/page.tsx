import { getBlogPosts } from "@/utils/getBlogPosts";
import { getIndividualBlog } from "@/utils/getIndividualBlog";
import React from "react";
import { convertDate } from "@/utils/convertDate";
import rehypeHighlight from "rehype-highlight";
import Image from "next/image";
import Link from "next/link";
import "../../../../postStyle.css";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 2628000;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getIndividualBlog(params.slug);
  return {
    title: `Blog | ${post.title}`,
    description: `${post.brief}`,
  };
}

// export async function generateStaticParams() {
//   const homePagePosts = await getBlogPosts();
//   console.log(homePagePosts);
//   return homePagePosts.edges.map((homePagePost: any) => {
//     homePagePost.node.slug;
//   });
// }
const Post = async ({ params: { slug } }: Props) => {
  const post = await getIndividualBlog(slug);
  const options = {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeHighlight],
    },
  };
  // const content = { __html: post };

  return (
    <main className="container mx-auto mt-8 flex max-w-4xl flex-col">
      <Link href="/" className="flex w-fit items-center space-x-2 text-sm">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
        >
          <path
            d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
        <span>Back home</span>
      </Link>

      <div className="mt-16 flex flex-col space-y-8">
        {/* Cover Image and publishing date */}
        <div className="flex mb-5 flex-col ">
          <Image
            src={post.coverImage.url}
            alt={post.title}
            width={1000}
            height={1000}
            className="rounded-xl"
            priority
          />
          <h1 className="text-3xl mt-10 mb-3 font-bold "> {post.title}</h1>
          <p className="line-clamp-none">{post.brief}</p>
          <p className="text-sm mt-1 font-normal ">
            Published: {convertDate(post.publishedAt)}
          </p>
          <div className="flex items-center justify-start mt-auto space-x-2">
            {post.tags.map((tag: any, i: any) => (
              <p
                className="bg-muted-foreground/50 px-3 py-1 rounded-full text-sm font-semibold mt-4"
                key={i}
              >
                {tag.name}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div
        className="postContainer my-10"
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      />

      <hr className="border border-secondary-foreground" />
      <section>
        <p className="my-5">Written By:</p>
        <section className="flex items-center space-x-3 ">
          <div className="relative  w-10 h-10 rounded-full">
            <Image
              fill
              priority
              className="rounded-full"
              src={post.author.profilePicture}
              alt={post.author.name}
            />
          </div>
          <p className="text-lg font-semibold">{post.author.name}</p>
        </section>
        <div
          className="postContainer my-5"
          dangerouslySetInnerHTML={{ __html: post.author.bio.html }}
        />
      </section>
    </main>
  );
};
export default Post;
