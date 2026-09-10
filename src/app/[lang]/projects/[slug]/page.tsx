import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { projectBySlug } from "@/content";
import { projectIds } from "@/content/structure";
import { locales } from "@/i18n/config";
import { dictionaryFor, getDictionary, getLocale } from "@/i18n/dictionary";
import { path } from "@/i18n/routes";
import { projectIdForSlug, slugsAcrossLocales } from "@/content/lookup";
import { pageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const params: Array<{ lang: string; slug: string }> = [];
  for (const locale of locales) {
    const dict = await dictionaryFor(locale);
    for (const id of projectIds) {
      params.push({ lang: locale, slug: dict.slugs.projects[id] });
    }
  }
  return params;
}

export async function generateMetadata(
  props: PageProps<"/[lang]/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const locale = await getLocale();
  const dict = await getDictionary();
  const project = projectBySlug(dict, locale, slug);
  if (!project) return {};

  return pageMetadata({
    locale,
    key: "projects",
    title: `${project.title} | ${dict.projects.metaSuffix}`,
    description: project.brief,
    slugs: await slugsAcrossLocales("projects", project.id),
    image: project.imgAfter,
  });
}

export default async function ProjectPage(props: PageProps<"/[lang]/projects/[slug]">) {
  const { slug } = await props.params;
  const locale = await getLocale();
  const dict = await getDictionary();

  const project = projectBySlug(dict, locale, slug);
  if (!project) {
    const id = await projectIdForSlug(slug);
    if (id) redirect(path(locale, "projects", dict.slugs.projects[id]));
    notFound();
  }

  const facts = [
    { label: dict.projects.facts.type, value: project.typeLabel },
    { label: dict.projects.facts.region, value: project.regio },
    { label: dict.projects.facts.duration, value: project.duur },
    { label: dict.projects.facts.delivered, value: project.year },
  ];

  return (
    <>
      <section className="hero hero--short">
        <div className="hero__media">
          <Image
            src={`/images/${project.imgAfter}.jpg`}
            alt={`${project.title}, ${dict.projects.after}`}
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero__scrim" />
        <div className="hero__body">
          <Link href={path(locale, "projects")} className="hero__back">
            ← {dict.common.backToProjects}
          </Link>
          <p className="kicker kicker--accent">
            {project.typeLabel} · {project.regio}
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
            <h2 className="title-block">{dict.projects.briefTitle}</h2>
            <p className="body-text">{project.brief}</p>
          </div>
          <div>
            <h2 className="title-block">{dict.projects.approachTitle}</h2>
            <p className="body-text">{project.approach}</p>
          </div>
        </div>

        <div className="beforeafter">
          <figure>
            <div className="frame">
              <Image
                src={`/images/${project.imgBefore}.jpg`}
                alt={`${project.title}, ${dict.projects.before}`}
                fill
                sizes="(max-width: 700px) 100vw, 640px"
              />
            </div>
            <figcaption>{dict.projects.before}</figcaption>
          </figure>
          <figure>
            <div className="frame">
              <Image
                src={`/images/${project.imgAfter}.jpg`}
                alt={`${project.title}, ${dict.projects.after}`}
                fill
                sizes="(max-width: 700px) 100vw, 640px"
              />
            </div>
            <figcaption>{dict.projects.after}</figcaption>
          </figure>
        </div>
      </section>

      <CtaBand
        heading={dict.projects.ctaDetailTitle}
        buttonLabel={dict.common.quoteCta}
        href={path(locale, "contact")}
      />
    </>
  );
}
