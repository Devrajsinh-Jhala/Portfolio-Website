import Image from "next/image";
import React from "react";
import urlFor from "../sanity";
import ClientSideRoute from "./ClientSideRoute";
import { Post } from "@/typings";

type Props = {
  posts: Post[];
};

const PostList = ({ posts }: Props) => {
  // console.log(posts);
  return (
    <section className="my-5">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10 gap-y-16 pb-24">
        {/* Posts */}
        {posts.map((post) => (
          <ClientSideRoute
            key={post._id}
            route={`/project/${post.slug.current}`}
          >
            <div className="flex flex-col cursor-pointer group">
              <div className="relative w-full z-[-10] h-52 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                <Image
                  className="object-cover   lg:object-center"
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  fill
                />
                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold">{post.title}</p>

                    <p>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                    {post.categories.map((category, i) => (
                      <div
                        key={i}
                        className="bg-[#f7ab0a] text-xs text-center text-black px-3 py-1 rounded-full font-semibold"
                      >
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* <div className="mt-5 flex-1">
                <p className="line-clamp-1 underline text-lg font-bold">
                  {post.title}
                </p>
                <p className="line-clamp-1 text-sm">{post.description}</p>
              </div> */}
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </section>
  );
};

export default PostList;
