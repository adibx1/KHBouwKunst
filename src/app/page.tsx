import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { projects, reasons, reviews, services, stats } from "@/content";

export default function HomePage() {
  const featured = projects.slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="hero__media">
          <Image
            src="/images/kh-hero.jpg"
            alt="Bouwproject van KH Bouw Kunst in uitvoering"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero__scrim" />
        <div className="hero__body">
          <p className="hero__badge">Aannemersbedrijf voor heel Nederland</p>
          <h1 className="title-hero">Bouwen is een vak. Wij maken er kunst van.</h1>
          <p className="hero__sub">
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

      <section className="wrap home-intro">
        <div className="split home-intro__inner">
          <h2 className="title-sub title-accent">
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

      <section className="wrap pad-lg">
        <p className="kicker">01 Onze diensten</p>
        <div className="section-head">
          <h2 className="title-section title-accent">Alles onder één dak</h2>
          <Link href="/diensten" className="link-rule">
            Bekijk al onze diensten
          </Link>
        </div>
        <p className="section-lede">
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

      <section className="band-ruled home-reasons">
        <div className="wrap pad-xl">
          <p className="kicker">02 Waarom KH Bouw Kunst</p>
          <h2 className="title-section title-accent section-heading">
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

      <section className="wrap pad-xl">
        <p className="kicker">03 Projecten uitgelicht</p>
        <div className="section-head">
          <h2 className="title-section title-accent">Een greep uit ons werk</h2>
          <Link href="/projecten" className="link-rule">
            Bekijk alle projecten
          </Link>
        </div>
        <p className="section-lede">
          Elk project is anders, maar de aanpak is altijd hetzelfde: goed luisteren, zorgvuldig
          bouwen en op tijd opleveren. Bekijk enkele recente projecten.
        </p>
        <div className="cards">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="band-ink home-reviews">
        <div className="wrap pad-xl">
          <p className="kicker kicker--accent">04 Klantreviews</p>
          <h2 className="title-section section-heading">Wat opdrachtgevers zeggen</h2>
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
          <p className="home-reviews__note">
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
