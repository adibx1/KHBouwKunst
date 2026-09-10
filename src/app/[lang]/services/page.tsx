import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroHeader } from "@/components/hero-header";
import { Icon } from "@/components/icons";
import { servicesIn } from "@/content";
import { getDictionary, getLocale } from "@/i18n/dictionary";
import { path } from "@/i18n/routes";
import { metadataFor } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return metadataFor(await getLocale(), "services", "img_302");
}

export default async function ServicesPage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const t = dict.services;
  const services = servicesIn(dict, locale);

  return (
    <>
      <HeroHeader
        kicker={t.kicker}
        title={t.title}
        lede={t.lede}
        image="img_302"
        alt={t.heroAlt}
      />

      <section className="wrap pad-lg">
        <div className="service-cards">
          {services.map((service) => (
            <Link key={service.id} href={service.href} className="service-card">
              <div className="service-card__media">
                <Image
                  src={`/images/${service.cardImg}.jpg`}
                  alt={service.hint}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1320px) 50vw, 430px"
                />
              </div>
              <div className="service-card__body">
                <Icon name={service.icon} size={32} />
                <h2>{service.title}</h2>
                <p>{service.overview}</p>
                <span className="service-card__more">{service.link}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="band-ink services-why">
        <div className="wrap pad-xl split split--tight">
          <h2 className="title-sub">{t.whyTitle}</h2>
          <div>
            <p>{t.whyText}</p>
            <Link href={path(locale, "contact")} className="btn btn--accent btn--sm">
              {dict.common.quoteCta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
