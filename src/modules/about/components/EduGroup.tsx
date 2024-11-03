import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { EducationProps } from "../../../common/types/education";

const EduGroup = ({
  school,
  major,
  logo,
  location,
  degree,
  start_year,
  end_year,
  link,
  list,
}: EducationProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animations
  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: `50% bottom`,
      },
    });

    tl.fromTo(
      q(".edu-heading"),
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        ease: "Power3.easeInOut",
        duration: 0.5,
        stagger: 0.2,
      }
    )
      .fromTo(
        q(".edu-info"),
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, stagger: 0.2 },
        "<25%"
      )
      .fromTo(
        q(".edu-list"),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.2 },
        "<10%"
      );
  }, []);

  return (
    <div className="edu-group mb-4" ref={sectionRef}>
      <div className="overflow-hidden">
        <h3
          className={`edu-heading text-marrsgreen dark:text-carrigreen text-lg font-medium`}
        >
          {major}
        </h3>
      </div>
      <div className="overflow-hidden">
        <span className={`edu-info text-slate-500 dark:text-slate-200 italic`}>
          {school}{" "}
          {link && (
            <a
              className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-marrsgreen focus-visible:text-marrsgreen"
              href={link}
              target="_blank"
              rel="noreferrer"
              aria-label="apps.apple.com"
            >
              <span>
                {" "}
                <span className="inline-block">
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
          )}{" "}
          | {end_year}
        </span>
        <p>{degree}</p>
      </div>
      <ul
        role="list"
        className="edu-list marker:text-marrsgreen dark:marker:text-carrigreen list-disc pl-6 space-y-1 mt-1"
      >
        {list?.map((li, index: number) => (
          <li key={index} className={`edu-list`}>
            {li}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EduGroup;
