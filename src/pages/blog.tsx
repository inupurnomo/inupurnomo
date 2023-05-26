import {format, parseISO} from "date-fns";
import {GetStaticProps} from "next";
import Link from "next/link";
import React from "react";
import BlogLayout from "@/layout/BlogLayout";
import {getAllPosts} from "@/lib/api";
import {PostType} from "@/types/post";

type IndexProps = {
  posts: PostType[];
};

export default function Blog({posts}: IndexProps) {
  return (
    <BlogLayout
      customMeta={{
        title: "Blog - Diggy",
      }}
    >
      <h1 className="text-3xl font-semibold">All Posts</h1>
      {posts &&
        posts.map((post) => (
          <article key={post.slug} className="mt-12">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              {format(parseISO(post.date!), "MMMM dd, yyyy")}
            </p>
            <h1 className="mb-2 text-xl">
              <Link
                as={`/blog/${post.slug}`}
                href={`/blog/[slug]`}
                className="text-gray-900 duration-300 hover:text-blue-400 dark:text-white dark:hover:text-blue-400"
              >
                {post.title}
              </Link>
            </h1>
            <p className="mb-3">{post.description}</p>
            <div className="mb-2 mt-2 flex gap-2 text-sm">
              {post.tags &&
                post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="cursor-pointer rounded-2xl bg-slate-300 px-2 py-1 dark:bg-slate-700"
                  >
                    {tag}
                  </span>
                ))}
            </div>
            <p>
              <Link
                as={`/blog/${post.slug}`}
                href={`/blog/[slug]`}
                className="duration-300 hover:text-blue-400 dark:hover:text-blue-400"
              >
                Read More
              </Link>
            </p>
          </article>
        ))}
    </BlogLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["tags", "date", "description", "slug", "title"]);

  return {
    props: {posts},
  };
};
