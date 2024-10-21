import React from "react";
import ProjectsCard from "../components/ProjectsCard";
import { projectsData } from "../utils/projectData";

export default function Projects() {
  return (
    <div className="projects">
      Projects
      <ProjectsCard projects={projectsData} />
    </div>
  );
}
