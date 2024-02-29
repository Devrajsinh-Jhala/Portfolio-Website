import { groq } from "next-sanity";
import React from "react";
import { sanityClient } from "@/sanity";
import ProjectsComponent from "@/components/ProjectsComponent";

export const metadata = {
  title: "Projects | Devrajsinh Jhala",
  description:
    "This is the Projects section of my portfloio where you can find all the things I build.",
};
type Props = {};

const allPostsQuery = groq`
*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;
const Projects = async (props: Props) => {
  const allProjects = await sanityClient.fetch(allPostsQuery);
  return (
    <section className="my-10 max-w-4xl px-10 lg:px-0 mx-auto">
      <section className="my-10">
        <p className="text-3xl font-bold">My Projects</p>
        <p className="mt-3">
          I strongly believe in the philosophy of learning by building, which is
          why I have undertaken numerous projects for personal growth as well as
          for college clubs. Here are a few of my top projects, but you can
          explore more of my work on my{" "}
          <a
            href="https://github.com/Devrajsinh-Jhala"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub
          </a>{" "}
          profile:
        </p>
      </section>
      <ProjectsComponent posts={allProjects} />
    </section>
  );
};
export default Projects;
