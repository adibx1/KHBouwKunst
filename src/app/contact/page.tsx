import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { HeroHeader } from "@/components/hero-header";
import { Icon, type IconKey } from "@/components/icons";
import { site } from "@/content";

export const metadata: Metadata = {
  title: "Contact | Offerte aanvragen",
  description:
    "Neem contact op met KH Bouw Kunst voor een vrijblijvende offerte of adviesgesprek over uw bouw of verbouwproject.",
};

const contactRows: Array<{ label: string; value: string; icon: IconKey; href?: string }> = [
  { label: "Telefoon", value: site.phone, icon: "phone", href: site.phoneHref },
  { label: "E mail", value: site.email, icon: "mail", href: `mailto:${site.email}` },
  { label: "Vestiging", value: site.city, icon: "map-pin" },
  { label: "Openingstijden", value: site.hours, icon: "clock" },
  { label: "KVK", value: site.kvk, icon: "file-text" },
];

export default function ContactPage() {
  return (
    <>
      <HeroHeader
        kicker="Contact"
        title="Laten we kennismaken met uw plannen"
        lede="Of u nu al een concreet plan heeft of nog in de verkennende fase zit: we denken graag met u mee."
        image="img_352"
        alt="Afgerond gevelonderhoud aan een woning"
      >
        <p className="hero__note">
          Vul het formulier in of neem telefonisch contact op. We reageren binnen één werkdag en
          plannen, indien gewenst, een vrijblijvende opname op locatie in.
        </p>
      </HeroHeader>

      <section className="wrap pad-md split">
        <div>
          <ContactForm />
        </div>

        <div>
          <div className="contact-rows">
            <h2 className="title-block">Direct contact</h2>
            {contactRows.map((row) => (
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
              alt="Eindhoven, de vestigingsplaats van KH Bouw Kunst"
              fill
              sizes="(max-width: 900px) 100vw, 620px"
            />
            <span className="frame__tag frame__tag--ink">Eindhoven, werkgebied heel Nederland</span>
          </div>
        </div>
      </section>
    </>
  );
}
