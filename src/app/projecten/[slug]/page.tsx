import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { getProject, projects } from "@/content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/projecten/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: `${project.title} | Project`, description: project.brief };
}

export default async function ProjectPage(props: PageProps<"/projecten/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const facts = [
    { label: "Type project", value: project.type },
    { label: "Regio", value: project.regio },
    { label: "Doorlooptijd", value: project.duur },
    { label: "Opgeleverd", value: project.jaar },
  ];

  return (
    <>
      <section className="hero hero--short">
        <div className="hero__media">
          <Image
            src={`/images/${project.imgAfter}.jpg`}
            alt={`${project.title}, na oplevering`}
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero__scrim" />
        <div className="hero__body">
          <Link href="/projecten" className="hero__back">
            ← Alle projecten
          </Link>
          <p className="kicker kicker--accent">
            {project.type} · {project.regio}
          </p>
          <h1 className="title-page">{project.title}</h1>
        </div>
      </section>

      <section className="wrap project-facts">
        <div className="facts">
          {facts.map((fact) => (
            <div className="facts__cell" key={fact.label}>
              <p className="facts__label">{fact.label}</p>
              <p className="facts__value">{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap pad-md">
        <div className="split split--tight project-story">
          <div>
            <h2 className="title-block">De opdracht</h2>
            <p className="body-text">{project.brief}</p>
          </div>
          <div>
            <h2 className="title-block">Onze aanpak</h2>
            <p className="body-text">{project.approach}</p>
          </div>
        </div>

        <div className="beforeafter">
          <figure>
            <div className="frame">
              <Image
                src={`/images/${project.imgBefore}.jpg`}
                alt={`${project.title}, voor de werkzaamheden`}
                fill
                sizes="(max-width: 700px) 100vw, 640px"
              />
            </div>
            <figcaption>Voor</figcaption>
          </figure>
          <figure>
            <div className="frame">
              <Image
                src={`/images/${project.imgAfter}.jpg`}
                alt={`${project.title}, na oplevering`}
                fill
                sizes="(max-width: 700px) 100vw, 640px"
              />
            </div>
            <figcaption>Na</figcaption>
          </figure>
        </div>
      </section>

      <CtaBand
        heading="Neem contact op voor een vrijblijvend gesprek"
        buttonLabel="Offerte aanvragen"
      />
    </>
  );
}
