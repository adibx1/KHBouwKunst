import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuCheck } from "react-icons/lu";
import { CtaBand } from "@/components/cta-band";
import { getService, services } from "@/content";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(props: PageProps<"/diensten/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.seo.title, description: service.seo.description };
}

export default async function ServicePage(props: PageProps<"/diensten/[slug]">) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

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
          <p className="kicker kicker--accent">Diensten {service.title}</p>
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
        <h2 className="title-sub">Voorbeelden van dit werk</h2>
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
          <p className="kicker">Andere diensten</p>
          <div className="chip-row">
            {services.map((other) => (
              <Link key={other.slug} href={`/diensten/${other.slug}`} className="chip">
                {other.title}
              </Link>
            ))}
            <Link href="/projecten" className="chip">
              Projecten
            </Link>
          </div>
        </div>
      </section>

      <CtaBand heading={service.cta} buttonLabel="Offerte aanvragen" />
    </>
  );
}
