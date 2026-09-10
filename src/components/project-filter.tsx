"use client";

import { useState } from "react";
import type { Project } from "@/content";
import { ProjectCard } from "./project-card";

const ALL = "__all__";

export function ProjectFilter({
  projects,
  types,
  allLabel,
  shownLabel,
}: {
  projects: Project[];
  types: Array<{ id: string; label: string }>;
  allLabel: string;
  shownLabel: string;
}) {
  const [filter, setFilter] = useState<string>(ALL);
  const visible = filter === ALL ? projects : projects.filter((p) => p.type === filter);

  const chips = [{ id: ALL, label: allLabel }, ...types];

  return (
    <>
      <div className="chip-row projects-list__filters">
        {chips.map((chip) => (
          <button
            key={chip.id}
            type="button"
            className="chip"
            aria-pressed={filter === chip.id}
            onClick={() => setFilter(chip.id)}
          >
            {chip.label}
          </button>
        ))}
      </div>

      <div className="cards">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <p aria-live="polite" className="visually-hidden">
        {visible.length} {shownLabel}
      </p>
    </>
  );
}
