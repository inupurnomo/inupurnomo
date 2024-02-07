/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import { useSection } from "@/common/context/section";
import useOnScreen from "@/common/hooks/useOnScreen";
import useScrollActive from "@/common/hooks/useScrollActive";
import Experience from "./Experience";
import Careers from "./Careers";


const Work = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const workSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    workSection && onSectionChange!("experience");
  }, [onSectionChange, workSection]);
  return (
    <section ref={sectionRef} id="experience" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "#007A7A" : "#6290c8"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Work Experience</h2>
        </RoughNotation>
      </div>
      <span className="project-desc mb-4 block text-center" ref={elementRef}>
        I have previously worked on freelance web and mobile application
        development projects as a full-stack developer, and held a full-time job
        as a front-end developer.
      </span>
      <hr className="w-full border-dashed" />
      {/* <Experience /> */}
      <Careers />
    </section>
  );
};

export default Work;
