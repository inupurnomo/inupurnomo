/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";

import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import { useSection } from "@/common/context/section";
import useOnScreen from "@/common/hooks/useOnScreen";
import useScrollActive from "@/common/hooks/useScrollActive";
import ProjectList from "./ProjectList";
import ProjectArchive from "./ProjectArchive";


const Project = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "#007A7A" : "#6290c8"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Highlighted Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc mb-4 block text-center" ref={elementRef}>
        Here's some of my projects
      </span>
      
      <ProjectList />
      <ProjectArchive />
    </section>
  );
}

export default Project;