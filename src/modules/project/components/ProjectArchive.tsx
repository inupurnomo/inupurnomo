import React from "react";

import Link from "next/link";

const ProjectArchive = () => {
  return (
    <>
      <div className="mt-4 text-center">
        <Link href={"/archive"} className="link">
          View Full Project Archive{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
      <div className="others mb-16 text-center">
        Explore my open source’s projects on{" "}
        <a
          href="https://github.com/inupurnomo"
          className="link-outline whitespace-nowrap font-medium text-marrsgreen underline dark:text-carrigreen"
        >
          my github profile
        </a>
      </div>
    </>
  );
};

export default ProjectArchive;
