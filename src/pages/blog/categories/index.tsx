import React, { useEffect, useRef } from "react";

import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import gsap from "gsap";

import SkipToMain from "@/common/components/elements/SkipToMain";
import SocialLinks from "@/common/components/elements/SocialLinks";
import BlogHeader from "@/common/components/blog/BlogHeader";
import BlogCardBox from "@/common/components/blog/BlogCardBox";
import Footer from "@/common/components/layouts/Footer";
import Loader from "@/common/components/elements/Loader";
import { getAllPosts } from "@/common/utils/api";
import slugify from "@/common/utils/slugify";
import { NextSeo } from "next-seo";

type CategorizedPosts = {
  [key: string]: {
    [key: string]: string | string[];
  }[];
};

type Props = {
  // posts: MdxMeta[];
  categories: string[];
  categorizedPosts: CategorizedPosts;
};

const Blog: NextPage<Props> = ({ categories, categorizedPosts }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animations
  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);
    gsap.utils.toArray(q(".category-title-text")).forEach((tag, i) => {
      const initialDelay = 1.2;
      const delayTime = i == 0 ? initialDelay : initialDelay + i * 0.2;
      gsap.fromTo(
        tag as any,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "back.out(1.7)",
          delay: delayTime,
        }
      );
    });

    gsap.utils.toArray(q(".blog-card-box")).forEach((tag, i) => {
      const initialDelay = 1.5;
      const delayTime = i == 0 ? initialDelay : initialDelay + i * 0.1;
      gsap.fromTo(
        tag as any,
        { opacity: 0 },
        {
          opacity: 1,
          delay: delayTime,
        }
      );
    });
  }, []);

  return (
    <>
      <NextSeo title="Categories" />
      <Loader>Categories</Loader>
      <div ref={sectionRef} className="bg-bglight dark:bg-bgdark">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <BlogHeader />
          <SocialLinks />
          <main id="main" className="blog-main">
            <section className="blog-section">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                Categories
              </h1>
              {categories.map((category) => (
                <div key={category} className="my-4">
                  <Link
                    href={`/blog/categories/${slugify(category)}`}
                    className="inline-block link-outline"
                  >
                    <h2 className="category-title overflow-hidden text-xl font-medium pl-2 border-l-4 hover:text-marrsgreen dark:hover:text-carrigreen border-marrsgreen dark:border-carrigreen">
                      <span className="category-title-text inline-block">
                        {category}
                      </span>
                    </h2>
                  </Link>
                  <ul className="flex space-x-4 overflow-x-auto overflow-y-hidden snap-x touch-auto">
                    {categorizedPosts[category].map((post: any) => (
                      <BlogCardBox post={post} key={post.slug} />
                    ))}
                  </ul>
                </div>
              ))}
            </section>
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
    "category",
  ]);
  // get category array ['cate1', 'cate2']
  const categories = posts
    .map((post) => post.category)
    .filter((x, i, a) => a.indexOf(x) == i);

  // get categorized posts {'cate1': [{post1}, {post2}], 'cate2': ...}
  let categorizedPosts: CategorizedPosts = {};
  posts.forEach((post) => {
    if (categorizedPosts[post.category as string]) {
      categorizedPosts[post.category as string].length <= 4 &&
        categorizedPosts[post.category as string].push(post);
    } else {
      categorizedPosts[post.category as string] = [post];
    }
  });

  return {
    props: {
      categories,
      categorizedPosts,
    },
  };
};

export default Blog;
