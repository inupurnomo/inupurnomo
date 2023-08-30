import {useEffect, useRef} from "react";
import {useTheme} from "next-themes";
import Footer from "@/components/Footer";
import Link from "next/link";
import RepoCard from "@/components/RepoCard";
import Header from "@/components/Header";
import {RoughNotation} from "react-rough-notation";
import AppHead from "@/components/AppHead";

export const meta = {
  description:
    "INUPURNOMO is a full-stack developer based in Bandung, Indonesia. He is passionate about writing codes and developing web applications to solve real-life challenges.",
  author: "INUPURNOMO",
  type: "website",
  ogImage: `${process.env.NEXT_PUBLIC_URL}/inupurnomo-og.png`,
  siteName: "INUPURNOMO",
  imageAlt: "INUPURNOMO portfolio website",
};

export const getStaticProps = async () => {
  const res = await fetch(
    `${process.env.GITHUB_API_URL}/users/${process.env.GITHUB_USERNAME}/repos`
  );
  let allAlbums = await res.json();

  return {
    props: {data: allAlbums},
  };
};

export default function openSource({data}: any) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {theme} = useTheme();
  return (
    <>
      <AppHead
        title="Open Source | INUPURNOMO"
        url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={meta}
      />
      <Header />
      <section className="section justify-center sm:pt-10 overflow-hidden my-10">
        <div className="text-center">
          <RoughNotation
            type="underline"
            color={`${
              theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"
            }`}
            strokeWidth={2}
            order={1}
            show={true}
          >
            <h2 className="section-heading">Open Sources</h2>
          </RoughNotation>
        </div>
        <div className="mt-8 mb-20">{<RepoCard repos={data} />}</div>
      </section>
      <Footer />
    </>
  );
}
