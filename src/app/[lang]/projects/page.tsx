import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { HeroHeader } from "@/components/hero-header";
import { ProjectFilter } from "@/components/project-filter";
import { projectsIn } from "@/content";
import { projectTypeIds } from "@/content/structure";
import { getDictionary, getLocale } from "@/i18n/dictionary";
import { path } from "@/i18n/routes";
import { metadataFor } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return metadataFor(await getLocale(), "projects", "img_322");
}

export default async function ProjectsPage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const t = dict.projects;

  return (
    <>
      <HeroHeader
        kicker={t.kicker}
        title={t.title}
        lede={t.lede}
        image="img_322"
        alt={t.heroAlt}
      >
        <p className="hero__note">{t.note}</p>
      </HeroHeader>

      <section className="wrap projects-list">
        <ProjectFilter
          projects={projectsIn(dict, locale)}
          types={projectTypeIds.map((id) => ({ id, label: t.types[id] }))}
          allLabel={t.filterAll}
          shownLabel={t.shown}
        />
      </section>

      <CtaBand
        heading={t.ctaTitle}
        buttonLabel={dict.common.contactCta}
        href={path(locale, "contact")}
        tone="ink"
      />
    </>
  );
}
