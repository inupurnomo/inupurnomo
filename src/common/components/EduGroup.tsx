import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { EducationProps } from "../types/education";


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
          {school} | {end_year}
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
