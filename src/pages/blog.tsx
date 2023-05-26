import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import BlogLayout from '@/layout/BlogLayout';
import { getAllPosts } from '@/lib/api';
import { PostType } from '@/types/post';

type IndexProps = {
  posts: PostType[];
};

export default function Blog ({ posts }: IndexProps) {
  return (
    <BlogLayout
      customMeta={{
        title: "Blog - Diggy",
      }}
    >
      <h1>Blog</h1>
      {posts && posts.map((post) => (
        <article key={post.slug} className="mt-12">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(post.date!), "MMMM dd, yyyy")}
          </p>
          <h1 className="mb-2 text-xl">
            <Link
              as={`/blog/${post.slug}`}
              href={`/blog/[slug]`}
              className="text-gray-900 dark:text-white dark:hover:text-blue-400 duration-300"
            >
              {post.title}
            </Link>
          </h1>
          <p className="mb-3">{post.description}</p>
          <div className='flex mt-2 mb-2 gap-2 text-sm'>
            {post.tags &&
              post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-slate-300 dark:bg-slate-700 rounded-2xl px-2 py-1 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
          </div>
          <p>
            <Link as={`/blog/${post.slug}`} href={`/blog/[slug]`}>
              Read More
            </Link>
          </p>
        </article>
      ))}
    </BlogLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['tags', 'date', 'description', 'slug', 'title']);

  return {
    props: { posts },
  };
}
