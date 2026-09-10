import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { HeroHeader } from "@/components/hero-header";
import { Icon, type IconKey } from "@/components/icons";
import { site } from "@/content";
import { getDictionary, getLocale } from "@/i18n/dictionary";
import { path } from "@/i18n/routes";
import { metadataFor } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return metadataFor(await getLocale(), "contact", "img_352");
}

export default async function ContactPage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const t = dict.contact;

  const rows: Array<{ label: string; value: string; icon: IconKey; href?: string }> = [
    { label: t.rows.phone, value: site.phone, icon: "phone", href: site.phoneHref },
    { label: t.rows.email, value: site.email, icon: "mail", href: `mailto:${site.email}` },
    { label: t.rows.city, value: site.city, icon: "map-pin" },
    { label: t.rows.hours, value: dict.site.hours, icon: "clock" },
    { label: t.rows.kvk, value: site.kvk, icon: "file-text" },
  ];

  return (
    <>
      <HeroHeader
        kicker={t.kicker}
        title={t.title}
        lede={t.lede}
        image="img_352"
        alt={t.heroAlt}
      >
        <p className="hero__note">{t.note}</p>
      </HeroHeader>

      <section className="wrap pad-md split">
        <div>
          <ContactForm
            labels={dict.form}
            locale={locale}
            contactHref={path(locale, "contact")}
            phone={site.phone}
          />
        </div>

        <div>
          <div className="contact-rows">
            <h2 className="title-block">{t.directTitle}</h2>
            {rows.map((row) => (
              <div className="contact-row" key={row.label}>
                <Icon name={row.icon} size={22} weight={1.7} />
                <div>
                  <p className="contact-row__label">{row.label}</p>
                  {row.href ? (
                    <a href={row.href} className="contact-row__value">
                      {row.value}
                    </a>
                  ) : (
                    <p className="contact-row__value">{row.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="frame contact-map">
            <Image
              src="/images/kh-contact-map.jpg"
              alt={t.mapAlt}
              fill
              sizes="(max-width: 900px) 100vw, 620px"
            />
            <span className="frame__tag frame__tag--ink">{t.mapTag}</span>
          </div>
        </div>
      </section>
    </>
  );
}
