/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import {useEffect, useRef} from "react";
import {RoughNotation} from "react-rough-notation";
import {useTheme} from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import {useSection} from "@/context/section";
import useOnScreen from "@/hooks/useOnScreen";
import useScrollActive from "@/hooks/useScrollActive";

import diggyv1 from "public/projects/diggy-v1.webp";
import diggyvec from "public/projects/diggyvec.webp";

export default function ProjectSection() {
  const {theme} = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const {onSectionChange} = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Highlighted Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here's some of my open-source projects
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Explore my others projects on{" "}
        <a
          href="https://github.com/inupurnomo"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Diggy Portfolio V1",
    type: "Frontend",
    image: (
      <Image
        src={diggyv1}
        sizes="100vw"
        fill
        alt="Terminal Portfolio"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "My portfolio website v1 developed with NextJS, TypeScript, and TailwindCSS. In this project, styled-components library is used for styling and multiple themes supported.",
    tags: ["NextJS", "TypeScript", "TailwindCSS"],
    liveUrl: "https://diggy-portfoliov1.vercel.app/",
    codeUrl: "https://github.com/inupurnomo/portfolio-v1",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "DiggyvecApp",
    type: "Frontend and Backend",
    image: (
      <Image
        src={diggyvec}
        sizes="100vw"
        fill
        alt="Diggyvec Monitoring App"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "An monitoring web application where users can browse vehicle condition with Arduino",
    tags: ["NodeJS", "ExpressJS", "REST-API"],
    liveUrl: "https://diggyvec.vercel.app/",
    codeUrl: "https://github.com/inupurnomo/diggyvec",
    bgColor: "bg-[#A6CECE]",
  },
];