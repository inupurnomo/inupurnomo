import React from "react";
import {MetaProps} from "@/types/layout";
import Head from "@/components/blog/Head";
import BlogFooter from "@/components/blog/BlogFooter";
import BlogNavigation from "@/components/blog/BlogNavigation";
import Header from "@/components/blog/Header";

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
      <main className="flex min-h-screen w-full flex-col shadow-md lg:flex-row">
        <header className="flex-row border-slate-100/40 dark:border-r lg:w-1/4 lg:shadow-md px-8 py-6">
          <Header />
        </header>
        <div className="flex flex-col justify-between lg:w-3/4">
          <div className="content">
            <BlogNavigation />
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
