/* eslint-disable react/no-unescaped-entities */
import type {GetStaticProps, NextPage} from "next";
import AppHead from "@/components/AppHead";
import Loader from "@/components/Loader";
import SkipToMain from "@/components/SkipToMain";
import Footer from "@/components/Footer";

import ArchiveSection from "@/components/sections/ArchiveSection";

export const meta = {
  description:
    "INUPURNOMO is a full-stack developer based in Bandung, Indonesia. He is passionate about writing codes and developing web applications to solve real-life challenges.",
  author: "INUPURNOMO",
  type: "website",
  ogImage: `${process.env.NEXT_PUBLIC_URL}/inupurnomo-og.png`,
  siteName: "INUPURNOMO",
  imageAlt: "INUPURNOMO portfolio website",
};

export default function Archive() {
  return (
    <>
      <AppHead
        title="Archive | INUPURNOMO"
        url={`${process.env.NEXT_PUBLIC_URL}/archive`}
        meta={meta}
      />
      <Loader>Archive</Loader>
      <div className="overflow-hidden bg-bglight dark:bg-bgdark">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <main>
            <ArchiveSection />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
