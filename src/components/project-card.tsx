import Image from "next/image";
import Link from "next/link";
import { projectMeta, type Project } from "@/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projecten/${project.slug}`} className="project-card">
      <div className="frame">
        <Image
          src={`/images/${project.imgAfter}.jpg`}
          alt={`${project.type} in ${project.regio}: ${project.title}`}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1320px) 50vw, 420px"
        />
        <span className="frame__tag">{project.type}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-card__meta">{projectMeta(project)}</p>
    </Link>
  );
}
