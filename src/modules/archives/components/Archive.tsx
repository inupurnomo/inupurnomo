/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";

import Link from "next/link";
import { useTheme } from "next-themes";

import { PROJECTS as projectsArchive } from "@/common/constant/projects";

const Archive = () => {
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
    <div className="bg-bglight dark:bg-bgdark">
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
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            title="Toggles light & dark theme"
            ref={themeBtnRef}
            // aria-label={theme === "dark" ? "dark" : "light"}
            aria-live="polite"
            className="link-outline absolute right-2 top-2 ml-1 flex h-12 w-12 items-center justify-center rounded-full bg-slate-400/80 transition-all duration-300 dark:bg-marrsdark/80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="hidden scale-110 transform fill-textlight dark:inline-block md:dark:hover:fill-carrigreen"
            >
              <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="scale-90 transform fill-textlight dark:hidden md:hover:fill-marrsgreen"
            >
              <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"></path>
            </svg>
          </button>
          <table id="main" className="mt-12 w-full border-collapse text-left">
            <thead className="sticky top-0 z-10 border-b border-slate-300/10 px-6 py-5">
              <tr>
                <th className="py-4 pr-8 text-sm font-semibold dark:text-slate-200">
                  Year
                </th>
                <th className="py-4 pr-8 text-sm font-semibold dark:text-slate-200">
                  Project
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold dark:text-slate-200 lg:table-cell">
                  Made at
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold dark:text-slate-200 lg:table-cell">
                  Built with
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold dark:text-slate-200 sm:table-cell">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {projectsArchive.map((proj, index: number) => (
                <tr
                  key={index}
                  className="border-b border-slate-300/10 last:border-none"
                >
                  <td className="py-4 pr-4 align-top text-sm">
                    <div className="translate-y-px text-carddark dark:text-textlight">
                      {proj.year}
                    </div>
                  </td>
                  <td className="py-4 pr-4 align-top font-semibold leading-snug dark:text-slate-200">
                    <div>
                      <div className="block sm:hidden">
                        <a
                          className="group/link inline-flex items-baseline text-base font-medium leading-tight text-carddark hover:text-marrsgreen focus-visible:text-marrsgreen dark:text-textlight sm:hidden"
                          href={proj.demo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Threadable"
                        >
                          <span>
                            {" "}
                            <span className="inline-block text-carddark dark:text-textlight">
                              {proj.title}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="hidden text-carddark dark:text-textlight sm:block">
                        {proj.title}
                      </div>
                    </div>
                  </td>
                  <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                    <div className="translate-y-px whitespace-nowrap">
                      {proj.madeAt}
                    </div>
                  </td>
                  <td className="hidden py-4 pr-4 align-top lg:table-cell">
                    <ul className="flex -translate-y-1.5 flex-wrap">
                      {proj.stacks.map((li) => (
                        <li key={li} className={`my-1 mr-1.5`}>
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-marrslight dark:text-carrilight">
                            {li}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="hidden py-4 align-top sm:table-cell">
                    <ul className="translate-y-1">
                      <li className="mb-1 flex items-center">
                        <a
                          className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-marrsgreen focus-visible:text-marrsgreen"
                          href={proj.demo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={proj.demo}
                        >
                          <span>
                            {" "}
                            <span className="inline-block">
                              {proj.demo && proj.demo}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Archive;
