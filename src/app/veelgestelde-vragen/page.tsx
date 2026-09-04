import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { HeroHeader } from "@/components/hero-header";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description:
    "Antwoorden op de meest gestelde vragen over verbouwen, renoveren en bouwen met KH Bouw Kunst.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // Static, author-controlled content from lib/content.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HeroHeader
        kicker="Veelgestelde vragen"
        title="Antwoorden voordat u belt"
        lede="De vragen die we het vaakst krijgen over verbouwen, renoveren en bouwen met KH Bouw Kunst."
        image="img_312"
        alt="Afgewerkte woonkamer na een renovatie"
      />

      <section className="wrap wrap--narrow" style={{ paddingBlock: "clamp(36px,5vw,72px)" }}>
        <FaqList />

        <div className="faq__foot">
          <p>Staat uw vraag er niet tussen?</p>
          <Link href="/contact" className="btn btn--accent btn--sm">
            Stel uw vraag
          </Link>
        </div>
      </section>
    </>
  );
}
