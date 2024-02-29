import React from "react";

import { getHomePagePosts } from "@/utils/getHomePagePosts";
import Link from "next/link";
import Image from "next/image";
import { convertDate } from "@/utils/convertDate";

type Props = {};
const BlogSection = async (props: Props) => {
  const homePagePosts = await getHomePagePosts();

  return (
    <section className="my-10 px-5 lg:px-0">
      <h1 className="text-3xl font-bold mb-5">My Recent Blogs</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
        {homePagePosts.map((homePagePost: any, i: number): any => (
          <section
            className="border border-secondary-foreground p-2 rounded-lg"
            key={i}
          >
            <Link href={`/blog/${homePagePost.node.slug}`}>
              <Image
                src={`${homePagePost.node.coverImage.url}`}
                width={600}
                height={600}
                className="rounded-lg"
                alt={`${homePagePost.node.title}`}
              />

              <div className="flex flex-col items-start justify-start ">
                <div className=" text-lg line-clamp-1 mt-2 mb-3">
                  {homePagePost.node.title}
                </div>
                <p className="text-clip line-clamp-1 my-1">
                  {homePagePost.node.brief}
                </p>

                <div className="inline-flex items-center justify-center gap-2 text-xs font-normal ">
                  <p>Published: {convertDate(homePagePost.node.publishedAt)}</p>
                  <span>&bull;</span>
                  <p>
                    {homePagePost.node.readTimeInMinutes +
                      (homePagePost.node.readTimeInMinutes === 1
                        ? " minute"
                        : " minutes") +
                      " read"}
                  </p>
                  <span>&bull;</span>
                  <p>{homePagePost.node.views} views</p>
                </div>
              </div>
            </Link>
          </section>
        ))}
      </div>
    </section>
  );
};
export default BlogSection;
