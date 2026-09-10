import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { HeroHeader } from "@/components/hero-header";
import { getDictionary, getLocale } from "@/i18n/dictionary";
import { path } from "@/i18n/routes";
import { metadataFor } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return metadataFor(await getLocale(), "process", "img_301");
}

export default async function ProcessPage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const t = dict.process;

  return (
    <>
      <HeroHeader
        kicker={t.kicker}
        title={t.title}
        lede={t.lede}
        image="img_301"
        alt={t.heroAlt}
      />

      <section className="wrap pad-md">
        {dict.steps.map((step) => (
          <div className="step" key={step.num}>
            <p className="step__num">{step.num}</p>
            <div className="step__body">
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </section>

      <CtaBand
        heading={t.ctaTitle}
        text={t.ctaText}
        buttonLabel={t.ctaButton}
        href={path(locale, "contact")}
        tone="ink"
      />
    </>
  );
}
