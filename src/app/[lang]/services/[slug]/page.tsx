import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuCheck } from "react-icons/lu";
import { CtaBand } from "@/components/cta-band";
import { serviceBySlug, servicesIn } from "@/content";
import { serviceIds } from "@/content/structure";
import { locales } from "@/i18n/config";
import { dictionaryFor, getDictionary, getLocale } from "@/i18n/dictionary";
import { path } from "@/i18n/routes";
import { pageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const params: Array<{ lang: string; slug: string }> = [];
  for (const locale of locales) {
    const dict = await dictionaryFor(locale);
    for (const id of serviceIds) {
      params.push({ lang: locale, slug: dict.slugs.services[id] });
    }
  }
  return params;
}

async function slugsFor(id: string) {
  const entries = await Promise.all(
    locales.map(async (locale) => {
      const dict = await dictionaryFor(locale);
      return [locale, dict.slugs.services[id as keyof typeof dict.slugs.services]] as const;
    }),
  );
  return Object.fromEntries(entries);
}

export async function generateMetadata(
  props: PageProps<"/[lang]/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const locale = await getLocale();
  const dict = await getDictionary();
  const service = serviceBySlug(dict, locale, slug);
  if (!service) return {};

  return pageMetadata({
    locale,
    key: "services",
    title: service.meta.title,
    description: service.meta.description,
    slugs: await slugsFor(service.id),
    image: service.heroImg,
  });
}

export default async function ServicePage(props: PageProps<"/[lang]/services/[slug]">) {
  const { slug } = await props.params;
  const locale = await getLocale();
  const dict = await getDictionary();

  const service = serviceBySlug(dict, locale, slug);
  if (!service) notFound();

  const others = servicesIn(dict, locale);

  return (
    <>
      <section className="hero hero--service">
        <div className="hero__media">
          <Image
            src={`/images/${service.heroImg}.jpg`}
            alt={service.hint}
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero__scrim" />
        <div className="hero__body">
          <p className="kicker kicker--accent">
            {dict.services.kicker} {service.title}
          </p>
          <h1 className="title-page">{service.heroKop}</h1>
        </div>
      </section>

      <section className="wrap pad-lg split split--tight">
        <div className="service-body">
          {service.paras.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
        <div className="service-points">
          <h2 className="title-block">{service.listTitle}</h2>
          {service.points.map((point) => (
            <div className="checklist__item" key={point}>
              <LuCheck size={22} color="var(--ink)" strokeWidth={2.4} aria-hidden />
              <p>{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap service-gallery">
        <h2 className="title-sub">{dict.services.galleryTitle}</h2>
        <div className="gallery">
          {service.galleryImgs.map((img, i) => (
            <div className="frame" key={img}>
              <Image
                src={`/images/${img}.jpg`}
                alt={service.gallery[i]}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1320px) 33vw, 420px"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="service-others">
        <div className="wrap pad-sm">
          <p className="kicker">{dict.common.otherServices}</p>
          <div className="chip-row">
            {others.map((other) => (
              <Link key={other.id} href={other.href} className="chip">
                {other.title}
              </Link>
            ))}
            <Link href={path(locale, "projects")} className="chip">
              {dict.nav.projects}
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        heading={service.cta}
        buttonLabel={dict.common.quoteCta}
        href={path(locale, "contact")}
      />
    </>
  );
}
