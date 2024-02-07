import Image from "@/common/components/elements/Image";

import { ProjectItemProps } from "../types/projects";

export const PROJECTS: ProjectItemProps[] = [
  {
    title: "Diggy Portfolio V1",
    type: "Frontend",
    image: (
      <Image
        src={'/projects/diggy-v1.webp'}
        sizes="100vw"
        fill
        alt="Terminal Portfolio"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    description:
      "My portfolio website v1 developed with NextJS, TypeScript, and TailwindCSS. In this project, styled-components library is used for styling and multiple themes supported.",
    tags: ["NextJS", "TypeScript", "TailwindCSS"],
    stacks: [],
    link_demo: "https://diggy-portfoliov1.vercel.app",
    link_github: "https://github.com/inupurnomo/portfolio-v1",
    is_show: true,
  },
  {
    title: "DiggyvecApp",
    type: "Frontend and Backend",
    image: (
      <Image
        src={'/projects/diggyvec.webp'}
        sizes="100vw"
        fill
        alt="Diggyvec Monitoring App"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    description:
      "An monitoring web application where users can browse vehicle condition with Arduino",
    tags: ["NodeJS", "ExpressJS", "REST-API"],
    stacks: [],
    link_demo: "https://diggyvec.vercel.app",
    link_github: "https://github.com/inupurnomo/diggyvec",
    is_show: true,
  },
];
