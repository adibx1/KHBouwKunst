import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { projects, reasons, reviews, services, stats } from "@/lib/content";

export default function HomePage() {
  const featured = projects.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__media">
          <Image
            src="/images/kh-hero.jpg"
            alt="Bouwproject van KH Bouw Kunst in uitvoering"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero__scrim" />
        <div className="hero__body">
          <p className="hero__badge" style={{ marginBottom: 22 }}>
            Aannemersbedrijf voor heel Nederland
          </p>
          <h1 className="title-hero title-accent" style={{ marginBottom: 22 }}>
            Bouwen is een vak. Wij maken er kunst van.
          </h1>
          <p className="hero__sub" style={{ marginBottom: 38 }}>
            KH Bouw Kunst is uw aannemer voor nieuwbouw, verbouwing, renovatie en aanbouw in heel
            Nederland. Van eerste schets tot de laatste schroef.
          </p>
          <div className="hero__actions">
            <Link href="/contact" className="btn btn--accent">
              Vraag een offerte aan
            </Link>
            <Link href="/projecten" className="btn btn--outline-light">
              Bekijk onze projecten
            </Link>
          </div>
        </div>
      </section>

      {/* Kerncijfers */}
      <section className="band-ink">
        <div className="stats">
          {stats.map((stat) => (
            <div className="stats__cell" key={stat.label}>
              <p className="stats__value">{stat.value}</p>
              <p className="stats__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Introductie */}
      <section className="wrap" style={{ paddingTop: "clamp(56px,7vw,104px)" }}>
        <div
          className="split"
          style={{ paddingBottom: "clamp(48px,6vw,88px)", borderBottom: "var(--rule)" }}
        >
          <h2
            className="title-sub title-accent"
            style={{ fontSize: "clamp(26px,3.2vw,44px)", maxWidth: "22ch" }}
          >
            Een goed gebouw begint niet met stenen, maar met vertrouwen
          </h2>
          <div>
            <p className="body-text">
              Bij KH Bouw Kunst werken we al jaren voor particulieren, VvE&apos;s en bedrijven die
              hun huis, bedrijfspand of droomproject in goede handen willen leggen. We combineren
              traditioneel vakmanschap met moderne bouwtechnieken, zodat elk project net zo solide
              is als het eruit ziet.
            </p>
            <p className="body-text">
              Of het nu gaat om een complete nieuwbouwwoning, een verbouwing van uw badkamer of een
              aanbouw die uw huis groter en lichter maakt: wij denken met u mee, rekenen scherp en
              bouwen precies wat is afgesproken. Geen verrassingen achteraf, geen loze beloftes.
              Gewoon goed werk.
            </p>
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="wrap pad-lg">
        <p className="kicker" style={{ marginBottom: 12 }}>
          01 Onze diensten
        </p>
        <div className="section-head" style={{ marginBottom: 8 }}>
          <h2 className="title-section title-accent">Alles onder één dak</h2>
          <Link href="/diensten" className="link-rule">
            Bekijk al onze diensten
          </Link>
        </div>
        <p
          className="lede"
          style={{ marginBottom: 40, fontSize: 17, lineHeight: 1.6, maxWidth: "60ch" }}
        >
          Van de eerste tekening tot de sleuteloverdracht. KH Bouw Kunst voert het complete traject
          uit of sluit precies aan op het onderdeel waar u ons voor nodig heeft.
        </p>
        <div className="tiles">
          {services.map((service) => (
            <Link key={service.slug} href={`/diensten/${service.slug}`} className="tile">
              <Icon name={service.icon} size={36} />
              <h3>{service.title}</h3>
              <p>{service.one}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Waarom KH Bouw Kunst */}
      <section className="band-ruled">
        <div className="wrap pad-xl">
          <p className="kicker" style={{ marginBottom: 12 }}>
            02 Waarom KH Bouw Kunst
          </p>
          <h2 className="title-section title-accent" style={{ marginBottom: 48, maxWidth: "24ch" }}>
            Waarom klanten voor ons kiezen
          </h2>
          <div className="cells">
            {reasons.map((reason) => (
              <div className="cell" key={reason.num}>
                <p className="cell__num">{reason.num}</p>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projecten uitgelicht */}
      <section className="wrap pad-xl">
        <p className="kicker" style={{ marginBottom: 12 }}>
          03 Projecten uitgelicht
        </p>
        <div className="section-head" style={{ marginBottom: 8 }}>
          <h2 className="title-section title-accent">Een greep uit ons werk</h2>
          <Link href="/projecten" className="link-rule">
            Bekijk alle projecten
          </Link>
        </div>
        <p
          className="lede"
          style={{ marginBottom: 44, fontSize: 17, lineHeight: 1.6, maxWidth: "60ch" }}
        >
          Elk project is anders, maar de aanpak is altijd hetzelfde: goed luisteren, zorgvuldig
          bouwen en op tijd opleveren. Bekijk enkele recente projecten.
        </p>
        <div className="cards">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Klantreviews */}
      <section className="band-ink" style={{ borderTop: "var(--rule)" }}>
        <div className="wrap pad-xl">
          <p className="kicker kicker--accent" style={{ marginBottom: 12 }}>
            04 Klantreviews
          </p>
          <h2 className="title-section title-accent" style={{ marginBottom: 48 }}>
            Wat opdrachtgevers zeggen
          </h2>
          <div className="reviews">
            {reviews.map((review) => (
              <div className="review" key={review.name}>
                <p className="review__stars" aria-label="Vijf van de vijf sterren">
                  ★★★★★
                </p>
                <p className="review__quote">{review.quote}</p>
                <p className="review__name">{review.name}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 36, color: "var(--muted-3)", fontSize: 13 }}>
            Plaatsvervangende reviews, te vervangen door echte Google reviews.
          </p>
        </div>
      </section>

      <CtaBand
        heading="Klaar om te bouwen aan uw plannen?"
        text="Neem contact op voor een vrijblijvend gesprek. We denken graag mee over wat wel en niet haalbaar is, voordat er een schop de grond in gaat."
        buttonLabel="Vraag vrijblijvend een offerte aan"
      />
    </>
  );
}
