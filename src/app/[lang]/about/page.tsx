import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/icons";
import { getDictionary, getLocale } from "@/i18n/dictionary";
import { metadataFor } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return metadataFor(await getLocale(), "about");
}

export default async function AboutPage() {
  const dict = await getDictionary();
  const t = dict.about;

  return (
    <>
      <section className="hero hero--short">
        <div className="hero__media">
          <Image src="/images/kh-about-hero.jpg" alt={t.heroAlt} fill priority sizes="100vw" />
        </div>
        <div className="hero__scrim" />
        <div className="hero__body">
          <p className="kicker kicker--accent">{t.kicker}</p>
          <h1 className="title-page">{t.title}</h1>
          <p className="hero__lede">{t.lede}</p>
        </div>
      </section>

      <section className="wrap pad-xl split about-story">
        <div>
          <p className="kicker">{t.storyKicker}</p>
          <h2 className="title-sub">{t.storyTitle}</h2>
          {t.storyParas.map((para) => (
            <p className="body-text" key={para}>
              {para}
            </p>
          ))}
        </div>
        <div className="frame about-story__media">
          <Image
            src="/images/kh-about-story.jpg"
            alt={t.storyAlt}
            fill
            sizes="(max-width: 900px) 100vw, 620px"
          />
        </div>
      </section>

      <section className="band-ruled">
        <div className="wrap pad-xl">
          <h2 className="title-sub section-heading">{t.approachTitle}</h2>
          <div className="cells">
            {dict.approach.map((item) => (
              <div className="cell" key={item.title}>
                <Icon name={item.icon} size={32} weight={1.7} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band-accent mission">
        <div className="wrap pad-xl">
          <p className="kicker kicker--on-accent">{t.missionKicker}</p>
          <p>{t.missionText}</p>
        </div>
      </section>
    </>
  );
}
