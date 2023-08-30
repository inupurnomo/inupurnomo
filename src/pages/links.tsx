import Image from "next/image";
import ProfileImg from "public/images/me.jpg";
import fill from "public/images/fill.png";
import Link from "next/link";
import AppHead from "@/components/AppHead";
import { AiOutlineYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

const links = [
  {
    href: "https://www.youtube.com/@inupurnomo",
    label: "YouTube",
    icon: <AiOutlineYoutube />,
    color: "text-[#ff0000]",
  },
  {
    href: "https://instagram.com/inupurnomo",
    label: "Instagram",
    icon: <AiOutlineInstagram />,
    color: "text-[#ef057c]",
  },
  {
    href: "https://twitter.com/inupurnomo",
    label: "Twitter",
    icon: <AiOutlineTwitter />,
    color: "text-[#1c93e4]",
  },
];

export const meta = {
  description:
    "INUPURNOMO is a full-stack developer based in Bandung, Indonesia. He is passionate about writing codes and developing web applications to solve real-life challenges.",
  author: "INUPURNOMO",
  type: "website",
  ogImage: `${process.env.NEXT_PUBLIC_URL}/inupurnomo-og.png`,
  siteName: "INUPURNOMO",
  imageAlt: "INUPURNOMO portfolio website",
};

export default function Links() {
  const { theme, setTheme } = useTheme();
  const themeBtnRef = useRef<HTMLButtonElement>(null);
  // update theme button aria-label according to theme value
  useEffect(() => {
    const themeBtn = themeBtnRef.current;
    if (themeBtn) {
      themeBtn.ariaLabel = theme ?? "light";
    }
  }, [theme]);
  return (
    <>
      <AppHead
        title="ShortLink | INUPURNOMO"
        url={`${process.env.NEXT_PUBLIC_URL}/links`}
        meta={meta}
      />
      <section className="h-screen flex justify-center sm:pt-10 overflow-hidden">
        <div className="w-full max-w-2xl flex flex-col rounded-t-2xl h-full bg-white dark:bg-gray-600 shadow-md">
          <header className="w-full rounded-t-2xl h-[240px] relative">
            <Image
              src={fill}
              width={1700}
              height={1700}
              priority
              alt="inupurnomo profile picture"
              className="object-cover h-full w-full rounded-t-2xl"
            />
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              title="Toggles light & dark theme"
              ref={themeBtnRef}
              // aria-label={theme === "dark" ? "dark" : "light"}
              aria-live="polite"
              className="w-12 h-12 ml-1 rounded-lg flex justify-center items-center link-outline absolute right-2 top-2 bg-slate-400/80 dark:bg-marrsdark/80 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="fill-textlight hidden dark:inline-block transform scale-110 md:dark:hover:fill-carrigreen"
              >
                <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="fill-textlight dark:hidden transform scale-90 md:hover:fill-marrsgreen"
              >
                <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"></path>
              </svg>
            </button>
          </header>
          <div className="head px-2 flex relative">
            <div className="min-h-28 min-w-28 h-28 w-28 rounded-full md:shadow-2xl -mt-16 ">
              <Image
                src={ProfileImg}
                width={1700}
                height={1790}
                priority
                alt="inupurnomo profile picture"
                className="rounded-full h-28 min-w-28"
              />
            </div>
            <div className="px-4 py-4 mb-2">
              <h1 className="font-bold">INUPURNOMO</h1>
              <p>my-shortlink!</p>
            </div>
          </div>
          <div className="links px-6 py-4 h-full">
            {links &&
              links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="border-2 border-black dark:border-white rounded-lg flex items-center font-bold h-14 w-full mb-2 shadow-md"
                >
                  <span
                    className={`ml-2 text-4xl w-12 flex items-center justify-center ${link.color}`}
                  >
                    {link.icon}
                  </span>
                  <span className="w-full flex justify-center hover:text-marrslight duration-300">
                    {link.label}
                  </span>
                </Link>
              ))}
          </div>
          <footer className="px-4 py-4 flex justify-center items-center relative text-sm gap-1">
            &copy; 2023 - <Link href={"/"}>inupurnomo</Link>
          </footer>
        </div>
      </section>
    </>
  );
}
