import React from "react";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";
import PostList from "@/components/PostsList";

const recentPostsQuery = groq`
*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)[0...4]
`;

type Props = {};
const ProjectsSection = async (props: Props) => {
  const recentPosts = await sanityClient.fetch(recentPostsQuery);
  // console.log(recentPosts);
  return (
    <section className="my-14 px-5 lg:px-0">
      <p className="text-3xl font-bold">My Recent Projects</p>
      <section>
        <PostList posts={recentPosts} />
      </section>
    </section>
  );
};
export default ProjectsSection;
