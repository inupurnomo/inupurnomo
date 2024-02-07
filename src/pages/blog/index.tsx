/* eslint-disable react/no-unescaped-entities */
import React from "react";

import type { GetStaticProps, NextPage } from "next";
import { MdxMeta } from "./posts/[slug]";

import BlogHero from "@/modules/bloghero";
import SkipToMain from "@/common/components/SkipToMain";
import SocialLinks from "@/common/components/SocialLinks";
import BlogHeader from "@/common/components/blog/BlogHeader";
import BlogCard from "@/common/components/blog/BlogCard";
import Footer from "@/common/components/layouts/Footer";
import { getAllPosts } from "@/common/utils/api";
import { useFilter } from "@/common/context/filter";
import Loader from "@/common/components/Loader";
import { NextSeo } from "next-seo";

type Props = {
  posts: MdxMeta[];
};

const Blog: NextPage<Props> = ({ posts }) => {
  const { searchText, postLanguage } = useFilter();
  return (
    <>
      <NextSeo title="Blog" />
      <Loader>Diggy's Blog</Loader>
      <div className="bg-bglight dark:bg-bgdark min-h-screen">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <BlogHeader />
          <SocialLinks />
          <main id="main" className="mb-20">
            <BlogHero />
            {searchText === "" && postLanguage === "All" && (
              <>
                <div className="px-4 sm:px-8 md:px-20 max-w-4xl mx-auto">
                  <h2 className="text-2xl font-medium mb-2">Featured Posts</h2>
                  <ul>
                    {posts.map(
                      (post) =>
                        post.featured && (
                          <BlogCard post={post} key={post.slug} />
                        )
                    )}
                  </ul>
                </div>
                <hr
                  aria-hidden="true"
                  className="mx-4 sm:mx-20 md:mx-auto max-w-xl lg:max-w-2xl my-6"
                />
              </>
            )}
            <div className="px-4 sm:px-8 md:px-20 max-w-4xl mx-auto">
              <h2 className="text-2xl font-medium mb-2">
                {searchText === "" && postLanguage === "All" && "All Posts"}
                {searchText !== "" && <div>Search result(s)</div>}
                {postLanguage !== "All" &&
                  `Posts written in '${postLanguage}' language`}
              </h2>
              <ul>
                {posts
                  .filter(({ title }) =>
                    title.toLowerCase().includes(searchText.toLowerCase())
                  )
                  .filter(({ language }) => {
                    if (postLanguage === "All") return true;
                    return language === postLanguage;
                  })
                  .map((post) => (
                    <BlogCard post={post} key={post.slug} />
                  ))}
              </ul>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    "slug",
    "title",
    "excerpt",
    "datetime",
    "featured",
    "language",
    "tags",
  ]);

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
