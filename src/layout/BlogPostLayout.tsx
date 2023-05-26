import React from "react";
import {MetaProps} from "@/types/layout";
import Head from "@/components/blog/Head";
import BlogFooter from "@/components/blog/BlogFooter";
import BlogNavigation from "@/components/blog/BlogNavigation";
import Sidebar from "@/components/blog/Header";

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = "https://inupurnomo.com";

export default function BlogLayout({
  children,
  customMeta,
}: LayoutProps): JSX.Element {
  return (
    <>
      <Head customMeta={customMeta} />
      <BlogNavigation />
      <main className="flex min-h-screen w-full flex-col lg:items-center">
        <div className="flex max-w-contentContainer flex-col justify-between pt-6">
          <div className="content rounded-2xl shadow-md dark:border-slate-100/30 border">
            <div className="rounded-sm px-8">
              <div className="w-full px-8 py-8">{children}</div>
            </div>
          </div>
          <BlogFooter />
        </div>
      </main>
    </>
  );
}
