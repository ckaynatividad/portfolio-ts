import React from "react";
import { Project } from "../utils/types";

export default function ProjectsCard({ projects }: { projects: Project[] }) {
  return (
    <div>
      {projects.map((project) => (
        <p key={project.id}>{project.title}</p>
      ))}
    </div>
  );
}
