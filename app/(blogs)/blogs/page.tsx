import React from "react";
import { getBlogPosts } from "@/utils/getBlogPosts";
import Link from "next/link";
import Image from "next/image";
import { convertDate } from "@/utils/convertDate";

type Props = {};
const Blogs = async (props: Props) => {
  const homePagePosts = await getBlogPosts();
  return (
    <section className="my-10">
      <p className="text-3xl font-bold mb-5">My Blogs</p>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 ">
        {homePagePosts.map((homePagePost: any, i: number): any => (
          <section
            className="border border-secondary-foreground p-2 rounded-lg"
            key={i}
          >
            <Link href={`/blog/${homePagePost.node.slug}`}>
              <div className="relative ">
                <Image
                  src={`${homePagePost.node.coverImage.url}`}
                  className="rounded-lg object-cover"
                  width={500}
                  height={400}
                  alt={`${homePagePost.node.title}`}
                  priority
                />
              </div>

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
export default Blogs;
