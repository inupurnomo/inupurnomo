import Link from "next/link";
import React from "react";
import ThemeSwitch from "@/components/blog/ThemeSwitch";

export default function BlogNavigation(): JSX.Element {
  return (
    <nav className="w-full text-gray-900 dark:text-white flex mx-auto h-20 bg-white/40 dark:bg-black/40 backdrop-blur-sm sticky top-0 shadow-md px-16">
      <div className="w-full flex mx-auto h-full justify-between items-center">
        <div className="text-xl font-bold">
          <Link className="text-black dark:text-white" href={"/blog"}>Blog</Link>
        </div>
        <div className="flex justify-center items-center gap-6">
          <ul className="flex gap-6">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/blog/about"}>About</Link>
            </li>
          </ul>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
