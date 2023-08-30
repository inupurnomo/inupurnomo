/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import {useEffect, useRef} from "react";
import {RoughNotation} from "react-rough-notation";
import {useTheme} from "next-themes";
import Link from "next/link";

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
      <span className="project-desc mb-4 block text-center" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here's some of my open-source projects
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
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
        Explore my others projects on{" "}
        <a
          href="https://github.com/inupurnomo"
          className="link-outline whitespace-nowrap font-medium text-marrsgreen underline dark:text-carrigreen"
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