/* eslint-disable react/no-unescaped-entities */
import type {GetStaticProps, NextPage} from "next";
import AppHead from "@/components/AppHead";
import Loader from "@/components/Loader";
import SkipToMain from "@/components/SkipToMain";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectSection from "@/components/sections/ProjectSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

import {getAllPosts} from "@/utils/api";
import {MdxMeta} from "@/pages/blog/posts/[slug]";
import WorkSection from "@/components/sections/WorkSection";
import ArchiveSection from "@/components/sections/ArchiveSection";
import Link from "next/link";

type Props = {
  blogPosts: MdxMeta[];
};

export const meta = {
  description:
    "INUPURNOMO is a full-stack developer based in Bandung, Indonesia. He is passionate about writing codes and developing web applications to solve real-life challenges.",
  author: "INUPURNOMO",
  type: "website",
  ogImage: `${process.env.NEXT_PUBLIC_URL}/inupurnomo-og.png`,
  siteName: "INUPURNOMO",
  imageAlt: "INUPURNOMO portfolio website",
};

export default function Home({blogPosts}: Props) {
  return (
    <>
      <AppHead
        title="Archive | INUPURNOMO"
        url={`${process.env.NEXT_PUBLIC_URL}/archive`}
        meta={meta}
      />
      {/* <Loader>INUPURNOMO</Loader> */}
      <div className="overflow-hidden bg-bglight dark:bg-bgdark">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          {/* <Header /> */}
          <main>
            <ArchiveSection />
          </main>
          {/* <SocialLinks page="index" /> */}
          <Footer />
        </div>
      </div>
    </>
  );
}

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