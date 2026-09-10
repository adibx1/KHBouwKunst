import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { HeroHeader } from "@/components/hero-header";
import { getDictionary, getLocale } from "@/i18n/dictionary";
import { path } from "@/i18n/routes";
import { metadataFor } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return metadataFor(await getLocale(), "faq", "img_312");
}

export default async function FaqPage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const t = dict.faq;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.items.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HeroHeader
        kicker={t.kicker}
        title={t.title}
        lede={t.lede}
        image="img_312"
        alt={t.heroAlt}
      />

      <section className="wrap faq-page">
        <FaqList items={t.items} />

        <div className="faq__foot">
          <p>{t.footQuestion}</p>
          <Link href={path(locale, "contact")} className="btn btn--accent btn--sm">
            {t.footButton}
          </Link>
        </div>
      </section>
    </>
  );
}
