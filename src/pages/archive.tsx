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
        url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={meta}
      />
      {/* <Loader>INUPURNOMO</Loader> */}
      <div className="overflow-hidden bg-bglight dark:bg-bgdark">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          {/* <Header /> */}
          <main id="main">
            <section className="section md:px-10">
              <div className="min-h-screen">
                <Link
                  className="group mb-2 inline-flex items-center font-semibold leading-tight text-marrsgreen dark:text-carrilight"
                  href={"/"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Portfolio
                </Link>
                <h1 className="text-4xl font-bold tracking-tight text-carddark dark:text-textlight sm:text-5xl">
                  All Projects
                </h1>
                <div id="main" className="flex flex-row gap-2">
                  <div className="flex">Year</div>
                  <div className="flex">Project</div>
                  <div className="flex">Built with</div>
                  <div className="flex">Link</div>
                </div>
              </div>
            </section>
            {/* <HeroSection /> */}
            {/* <AboutSection /> */}
            {/* <ProjectSection /> */}
            {/* <WorkSection /> */}
            {/* <BlogSection posts={blogPosts} /> */}
            {/* <ContactSection /> */}
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
