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
      <main className="w-full min-h-screen flex flex-col lg:flex-row shadow-md">
        <header className="px-8 py-6 lg:w-1/4 flex-row lg:shadow-md">
          <div className="sidebar sticky top-0">
            <Sidebar />
          </div>
        </header>
        <div className="flex flex-col lg:w-3/4 justify-between">
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
