import React from "react";

import Image from "@/common/components/elements/Image";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { useTheme } from "next-themes";

import BlogHeader from "@/common/components/blog/BlogHeader";
import SkipToMain from "@/common/components/SkipToMain";
import SocialLinks from "@/common/components/SocialLinks";
import Footer from "@/common/components/layouts/Footer";
import markdownToHtml from "@/common/utils/markdownToHtml";
import { getAllPosts, getPostBySlug } from "@/common/utils/api";
import PostBody from "@/common/components/blog/PostBody";
import Tag from "@/common/components/blog/Tag";
import DateTime from "@/common/components/DateTime";
import HeadCategory from "@/common/components/blog/HeadCategory";
import { DiscussionEmbed, CommentCount } from "disqus-react";
import { NextSeo } from "next-seo";
import { Meta } from "@/common/types/meta";

export interface MdxMeta extends Meta {
  title: string;
  datetime: string;
  excerpt: string;
  slug: string;
  category: string;
  coverImage?: string;
  tags?: string[];
  content: string;
  coverImageWidth?: string;
  coverImageHeight?: string;
  featured: boolean;
  language: "English" | "Indonesia";
}

type Props = {
  post: MdxMeta;
};

const BlogLayout: React.FC<Props> = ({ post }) => {
  const { theme } = useTheme();
  const canonicalUrl = `${process.env.NEXT_PUBLIC_URL}/blog/posts/${post.slug}`;
  return (
    <>
      <NextSeo
        title={post.title}
        description={post.excerpt}
        canonical={canonicalUrl}
        openGraph={{
          type: "article",
          article: {
            publishedTime: post.datetime,
            modifiedTime: post.datetime,
            authors: ["Ilham Ibnu Purnomo", "inupurnomo"],
          },
          url: canonicalUrl,
          images: [
            {
              url: post.coverImage as string,
            },
          ],
          siteName: "Diggy Blog",
        }}
      />
      <div className="bg-bglight dark:bg-bgdark">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <BlogHeader />
          <SocialLinks />
          <main id="main" className="blog-main">
            <article className="blog-section">
              <h1 className="font-semibold md:font-bold text-3xl md:text-4xl">
                {post.title}
              </h1>
              <div className="mt-2 mb-1 italic text-marrsdark dark:text-carrigreen flex gap-2">
                <DateTime datetime={post.datetime} /> |
                <Link href={"#comments"}>
                  <CommentCount
                    shortname="inupurnomo"
                    config={{
                      url: canonicalUrl,
                      identifier: post.slug,
                      title: post.title,
                    }}
                  >
                    {/* Placeholder Text */}
                  </CommentCount>
                </Link>
              </div>
              <HeadCategory category={post.category} />
              {post.tags && (
                <div className="my-2">
                  {post.tags.map((tag: string) => (
                    <Tag
                      tag={tag.replace(/\s+/g, "-").toLowerCase()}
                      key={tag.replace(/\s+/g, "-").toLowerCase()}
                    />
                  ))}
                </div>
              )}
              {post.coverImage && (
                <div className="bg-cardlight dark:bg-carddark">
                  <Image
                    src={post.coverImage}
                    alt={post.coverImageAlt || "Picture"}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    priority
                    width={Number(post.coverImageWidth) || 1200}
                    height={Number(post.coverImageHeight) || 700}
                  />
                </div>
              )}
              <PostBody content={post.content} />
              <hr />
              {/* Disqus Comment Plugin */}
              <div className="bg-slate-50 px-6 py-6">
                {/* <DiscussionEmbed
                  shortname="inupurnomo"
                  config={{
                    url: canonicalUrl,
                    identifier: post.slug,
                    title: post.title,
                  }}
                /> */}
              </div>
            </article>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params!.slug as string, [
    "title",
    "datetime",
    "description",
    "slug",
    "author",
    "content",
    "ogImage",
    "ogImageAlt",
    "coverImage",
    "coverImageWidth",
    "coverImageHeight",
    "category",
    "tags",
    "type",
  ]);
  const content = await markdownToHtml((post.content as string) || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export default BlogLayout;
