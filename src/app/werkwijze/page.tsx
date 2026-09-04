import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { HeroHeader } from "@/components/hero-header";
import { steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Werkwijze | Zo werkt KH Bouw Kunst aan uw project",
  description:
    "Ontdek hoe KH Bouw Kunst werkt, van eerste contact tot oplevering. Heldere stappen, vaste aanspreekpunten en geen verrassingen achteraf.",
};

export default function ProcessPage() {
  return (
    <>
      <HeroHeader
        kicker="Werkwijze"
        title="Zo pakken we uw project aan"
        lede="Een goed resultaat begint met een goed proces. Dit zijn de stappen die we bij elk project doorlopen."
        image="img_301"
        alt="Casco met kapconstructie tijdens de bouw"
      />

      <section className="wrap pad-md">
        {steps.map((step) => (
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
        heading="Benieuwd hoe dit voor uw project werkt?"
        text="Plan een vrijblijvend kennismakingsgesprek en ontdek wat er mogelijk is."
        buttonLabel="Plan een gesprek"
        tone="ink"
      />
    </>
  );
}
