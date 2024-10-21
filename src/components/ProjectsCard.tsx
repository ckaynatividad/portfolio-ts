import React from "react";
import { Project } from "../utils/types";

export default function ProjectsCard({ projects }: { projects: Project[] }) {
  return (
    <div>
      ProjectsCard
      {projects.map((project) => (
        <p>{project.title}</p>
      ))}
    </div>
  );
}
