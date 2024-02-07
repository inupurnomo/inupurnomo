import React from "react";

import ProjectCard from "@/modules/project/components/ProjectCard";
import { PROJECTS } from "@/common/constant/projects";

const ProjectList = () => {
  return (
    <div className="flex flex-wrap">
      {PROJECTS.filter((project) => project.is_show).map((project, index) => (
        <ProjectCard key={project.title} index={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
