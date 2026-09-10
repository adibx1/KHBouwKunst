import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { projectsIn, servicesIn } from "@/content";
import { getDictionary, getLocale } from "@/i18n/dictionary";
import { path } from "@/i18n/routes";
import { metadataFor } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return metadataFor(await getLocale(), "home");
}

export default async function HomePage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const t = dict.home;

  const services = servicesIn(dict, locale);
  const featured = projectsIn(dict, locale).slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="hero__media">
          <Image src="/images/kh-hero.jpg" alt={t.heroAlt} fill priority sizes="100vw" />
        </div>
        <div className="hero__scrim" />
        <div className="hero__body">
          <p className="hero__badge">{t.badge}</p>
          <h1 className="title-hero">{t.title}</h1>
          <p className="hero__sub">{t.sub}</p>
          <div className="hero__actions">
            <Link href={path(locale, "contact")} className="btn btn--accent">
              {dict.common.quoteCtaLong}
            </Link>
            <Link href={path(locale, "projects")} className="btn btn--outline-light">
              {dict.common.viewProjects}
            </Link>
          </div>
        </div>
      </section>

      <section className="band-ink">
        <div className="stats">
          {dict.stats.map((stat) => (
            <div className="stats__cell" key={stat.label}>
              <p className="stats__value">{stat.value}</p>
              <p className="stats__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap home-intro">
        <div className="split home-intro__inner">
          <h2 className="title-sub title-accent">{t.introTitle}</h2>
          <div>
            {t.introParas.map((para) => (
              <p className="body-text" key={para}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap pad-lg">
        <p className="kicker">{t.servicesKicker}</p>
        <div className="section-head">
          <h2 className="title-section title-accent">{t.servicesTitle}</h2>
          <Link href={path(locale, "services")} className="link-rule">
            {dict.common.allServices}
          </Link>
        </div>
        <p className="section-lede">{t.servicesLede}</p>
        <div className="tiles">
          {services.map((service) => (
            <Link key={service.id} href={service.href} className="tile">
              <Icon name={service.icon} size={36} />
              <h3>{service.title}</h3>
              <p>{service.one}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="band-ruled home-reasons">
        <div className="wrap pad-xl">
          <p className="kicker">{t.reasonsKicker}</p>
          <h2 className="title-section title-accent section-heading">{t.reasonsTitle}</h2>
          <div className="cells">
            {dict.reasons.map((reason) => (
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
        <p className="kicker">{t.projectsKicker}</p>
        <div className="section-head">
          <h2 className="title-section title-accent">{t.projectsTitle}</h2>
          <Link href={path(locale, "projects")} className="link-rule">
            {dict.common.allProjects}
          </Link>
        </div>
        <p className="section-lede">{t.projectsLede}</p>
        <div className="cards">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="band-ink home-reviews">
        <div className="wrap pad-xl">
          <p className="kicker kicker--accent">{t.reviewsKicker}</p>
          <h2 className="title-section section-heading">{t.reviewsTitle}</h2>
          <div className="reviews">
            {dict.reviews.map((review) => (
              <div className="review" key={review.name}>
                <p className="review__stars" aria-label={t.starsLabel}>
                  ★★★★★
                </p>
                <p className="review__quote">{review.quote}</p>
                <p className="review__name">{review.name}</p>
              </div>
            ))}
          </div>
          <p className="home-reviews__note">{t.reviewsNote}</p>
        </div>
      </section>

      <CtaBand
        heading={t.ctaTitle}
        text={t.ctaText}
        buttonLabel={t.ctaButton}
        href={path(locale, "contact")}
      />
    </>
  );
}
