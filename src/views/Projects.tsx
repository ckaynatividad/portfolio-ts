import React from "react";
import ProjectsCard from "../components/ProjectsCard";
import { projectsData } from "../utils/projectData";

export default function Projects() {
  return (
    <div className="projects">
      <h2>My work + contributions</h2>
      <ProjectsCard projects={projectsData} />
    </div>
  );
}
