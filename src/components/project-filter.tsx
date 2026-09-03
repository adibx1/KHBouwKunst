"use client";

import { useState } from "react";
import { projects, projectTypes } from "@/lib/content";
import { ProjectCard } from "./project-card";

export function ProjectFilter() {
  const [filter, setFilter] = useState<string>("Alle");
  const visible = filter === "Alle" ? projects : projects.filter((p) => p.type === filter);

  return (
    <>
      <div className="chip-row" style={{ marginBottom: "clamp(28px,3vw,44px)" }}>
        {projectTypes.map((type) => (
          <button
            key={type}
            type="button"
            className="chip"
            aria-pressed={filter === type}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="cards">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <p aria-live="polite" className="visually-hidden">
        {visible.length} projecten getoond
      </p>
    </>
  );
}
