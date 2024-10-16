import React from "react";

import ProjectCard from "@/modules/project/components/ProjectCard";
import { PROJECTS } from "@/common/constant/projects";

const ProjectList = () => {
  return (
    <div className="flex flex-wrap group">
      {PROJECTS.filter((project, index) => project.is_show && index < 6).map((project, index) => (
        <ProjectCard key={project.title} index={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
