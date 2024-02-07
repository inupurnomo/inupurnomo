/* eslint-disable react/no-unescaped-entities */
import React from "react";

import type { GetStaticProps } from "next";
import Loader from "@/common/components/Loader";
import SkipToMain from "@/common/components/SkipToMain";
import Header from "@/common/components/layouts/Header";
import SocialLinks from "@/common/components/SocialLinks";
import Hero from "@/modules/hero";
import About from "@/modules/about";
import Project from "@/modules/project";
import Blog from "@/modules/blog";
import Contact from "@/modules/contact";
import Footer from "@/common/components/layouts/Footer";
import Work from "@/modules/work";

import { getAllPosts } from "@/common/utils/api";
import { MdxMeta } from "@/pages/blog/posts/[slug]";

type Props = {
  blogPosts: MdxMeta[];
};

const Home = ({ blogPosts }: Props) => {
  return (
    <>
      {/* <Loader>INUPURNOMO</Loader> */}
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <Header />
          <main id="main">
            <Hero />
            <About />
            <Work />
            <Project />
            <Blog posts={blogPosts} />
            <Contact />
          </main>
          <SocialLinks page="index" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogPosts = getAllPosts([
    "coverImage",
    "coverImageAlt",
    "slug",
    "title",
    "excerpt",
    "datetime",
    "featured",
    "tags",
  ]);

  return {
    props: {
      blogPosts,
    },
  };
};

export default Home;
