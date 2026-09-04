import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { HeroHeader } from "@/components/hero-header";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Diensten | Nieuwbouw, verbouwing, renovatie en meer",
  description:
    "Bekijk alle diensten van KH Bouw Kunst: nieuwbouw, verbouwing, aanbouw, badkamer en keuken, dakwerk en onderhoud. Vakwerk voor heel Nederland.",
};

export default function ServicesPage() {
  return (
    <>
      <HeroHeader
        kicker="Diensten"
        title="Van fundering tot laatste likje verf"
        lede="KH Bouw Kunst voert bouwprojecten uit in elke fase en op elke schaal. Bekijk hieronder waarmee we u kunnen helpen."
        image="img_302"
        alt="Opgeleverde woning gebouwd door KH Bouw Kunst"
      />

      <section className="wrap pad-lg">
        <div className="service-cards">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/diensten/${service.slug}`}
              className="service-card"
            >
              <div className="service-card__media">
                <Image
                  src={`/images/${service.cardImg}.jpg`}
                  alt={service.hint}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1320px) 50vw, 430px"
                  style={{ objectFit: "cover" }}
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

      <section className="band-ink">
        <div className="wrap pad-xl split split--tight">
          <h2
            className="title-sub"
            style={{ color: "var(--light)", maxWidth: "22ch" }}
          >
            Waarom voor deze diensten kiezen bij KH Bouw Kunst
          </h2>
          <div>
            <p
              style={{
                color: "var(--light-3)",
                fontSize: 17,
                lineHeight: 1.7,
                marginBottom: 28,
                textWrap: "pretty",
              }}
            >
              Elke dienst wordt uitgevoerd door hetzelfde vaste team dat ook uw aanspreekpunt is.
              Dat betekent minder schakels, minder ruis en een aannemer die de context van uw
              project echt kent, ook als er tijdens de uitvoering iets moet worden bijgestuurd.
            </p>
            <Link href="/contact" className="btn btn--accent btn--sm">
              Offerte aanvragen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
