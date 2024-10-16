import Image from "@/common/components/elements/Image";

import { ProjectItemProps } from "../types/projects";

export const PROJECTS: ProjectItemProps[] = [
  {
    year: "2024",
    title: "Dashboard Integration PIS | DIVPROPAM - Mabes Polri",
    type: "Backend, Frontend",
    image: (
      <Image
        src={"/projects/dashboard-propam.webp"}
        sizes="100vw"
        fill
        alt="Dashboard Integration"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    description:
      "Dashboard Integration, is an application used to record evidence obtained from violations committed by members. This application is used only for internal police.",
    stacks: ["Laravel", "Oracle Database", "Next.js", "TailwindCSS"],
    madeAt: "Divpropam Mabes Polri",
    demo: "#",
    github: "#",
    is_show: true,
  },
  {
    year: "2024",
    title: "Unit Paminal | DIVPROPAM - Mabes Polri",
    type: "Backend, Frontend",
    image: (
      <Image
        src={"/projects/unit-paminal.webp"}
        sizes="100vw"
        fill
        alt="Unit Paminal"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    description:
      "Unit Paminal, is a web-based application used to find out the progress of public complaints being investigated by the Paminal Bureau of the Indonesian National Police Propam Division.",
    stacks: ["Laravel", "MySQL", "Bootstrap"],
    madeAt: "Divpropam Mabes Polri",
    demo: "#",
    github: "#",
    is_show: true,
  },
  {
    year: "2024",
    title: "E-Vidence | DIVPROPAM - Mabes Polri",
    type: "Backend, Frontend",
    image: (
      <Image
        src={"/projects/e-vidence.webp"}
        sizes="100vw"
        fill
        alt="E-vidence"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    description:
      "E-vidence, is an application used to record evidence obtained from violations committed by members. This application is used only for internal police.",
    stacks: ["Laravel", "Oracle Database", "Bootstrap"],
    madeAt: "Divpropam Mabes Polri",
    demo: "#",
    github: "#",
    is_show: true,
  },
  {
    year: "2024",
    title: "E-Library | DIVPROPAM - Mabes Polri - Frontend",
    type: "Backend, Frontend",
    image: (
      <Image
        src={"/projects/e-library.webp"}
        sizes="100vw"
        fill
        alt="E-Library"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    description:
      "E-Library is an application used for police document database. Using Laravel for backend and Next.js for frontend. This application is used only for internal police.",
    stacks: ["Laravel", "Oracle Database", "Bootstrap", "NextJS", "TypeScript", "TailwindCSS"],
    madeAt: "Divpropam Mabes Polri",
    demo: "#",
    github: "#",
    is_show: true,
  },
  {
    year: "2024",
    title: "Landing Page | DIVPROPAM - Mabes Polri",
    type: "Frontend",
    image: (
      <Image
        src={"/projects/divpropam.webp"}
        sizes="100vw"
        fill
        alt="DIVPROPAM - Landing Page"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    description:
      "Landing page for the Division of Profession and Security (DIVPROPAM) page of the Indonesian National Police Headquarters.",
    stacks: ["NextJS", "TypeScript", "TailwindCSS"],
    madeAt: "Divpropam Mabes Polri",
    demo: "#",
    github: "#",
    is_show: true,
  },
  {
    year: "2023",
    title: "Victoria Prudentia Law Firm",
    type: "Full-stack Developer",
    image: (
      <Image
        src={"/projects/victoria.webp"}
        sizes="100vw"
        fill
        alt="Victoria Prudentia"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    description:
      "Developed a landing page for Victoria Prudentia Law Firm using Next.js, integrated with a Laravel-based back-end for customizable content management, and implemented custom functions to support the firm’s internal processes.",
    stacks: ["NextJS", "TypeScript", "TailwindCSS", "Laravel", "Bootstrap", "MySQL"],
    madeAt: "",
    demo: "#",
    github: "#",
    is_show: true,
  },
  {
    year: "2023",
    title: "Diggy Portfolio V1",
    type: "Frontend",
    image: (
      <Image
        src={"/projects/diggy-v1.webp"}
        sizes="100vw"
        fill
        alt="Diggy Portfolio"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    description:
      "My portfolio website v1 developed with NextJS, TypeScript, and TailwindCSS. In this project, styled-components library is used for styling and multiple themes supported.",
    stacks: ["NextJS", "TypeScript", "TailwindCSS"],

    madeAt: "Divpropam Mabes Polri",
    demo: "https://diggy-portfoliov1.vercel.app",
    github: "https://github.com/inupurnomo/portfolio-v1",
    is_show: true,
  },
  {
    year: "2023",
    title: "DiggyvecApp",
    type: "Frontend and Backend",
    image: (
      <Image
        src={"/projects/diggyvec.webp"}
        sizes="100vw"
        fill
        alt="Diggyvec Monitoring App"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    description:
      "An monitoring web application where users can browse vehicle condition with Arduino.",
    stacks: ["NodeJS", "ExpressJS", "REST-API"],
    madeAt: "Telkom University",
    demo: "https://diggyvec.vercel.app",
    github: "https://github.com/inupurnomo/diggyvec",
    is_show: true,
  },
];
