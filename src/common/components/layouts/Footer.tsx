import React from "react";

import Link from "next/link";

import { SOCIAL_FLOATING as socialLinks } from "@/common/constant/social";

type Props = {
  noPadding?: boolean;
};

const Footer = ({ noPadding = false }: Props) => {
  return (
    <footer
      className={`pt-8 text-center mt-auto border-transparent relative`}
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-16 container mx-auto rounded-lg flex justify-center items-center -mb-8 bg-[#dedede] dark:bg-[#1e1e1e]">
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social, index:number) => (
            <a
              key={index}
              href={social.href}
              title={social.title}
              className="transform scale-150 md:scale-100 link-outline"
            >
              {social.svg}
            </a>
          ))}
        </div>
      </div>
      <div className={`pt-16 ${noPadding ? "py-4" : "pb-24"} md:pb-4 w-full max-w-contentContainer mx-auto flex flex-col md:flex-row justify-between items-center md:px-16 bg-[#adadad] dark:bg-[#1B2731]`}>
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-marrslight dark:bg-carrilight opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-marrslight dark:bg-carrilight"></span>
          </span>
          Keep in Touch
        </div>
        <div className="">
          &copy; {new Date().getFullYear()} <Link href={"/"}>inupurnomo</Link> -
          All right reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
