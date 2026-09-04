import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { HeroHeader } from "@/components/hero-header";
import { ProjectFilter } from "@/components/project-filter";

export const metadata: Metadata = {
  title: "Projecten | Voorbeelden van ons werk",
  description:
    "Bekijk projecten van KH Bouw Kunst: nieuwbouw, verbouwingen, aanbouwen en renovaties door heel Nederland, van start tot oplevering.",
};

export default function ProjectsPage() {
  return (
    <>
      <HeroHeader
        kicker="Projecten"
        title="Ons werk spreekt voor zich"
        lede="Elk project heeft een eigen verhaal, een eigen uitdaging en een eigen oplossing. Hieronder vindt u een selectie van recent afgeronde projecten."
        image="img_322"
        alt="Opgeleverde uitbouw met tuin, uitgevoerd door KH Bouw Kunst"
      >
        <p className="hero__note">
          We geloven dat foto&apos;s meer zeggen dan beloftes. Daarom laten we ons werk graag zien:
          de vloer voor en na de renovatie, de aanbouw voor en na de oplevering, de nieuwbouwwoning
          van fundering tot sleuteloverdracht. Elk project op deze pagina is uitgevoerd door ons
          eigen team.
        </p>
      </HeroHeader>

      <section className="wrap projects-list">
        <ProjectFilter />
      </section>

      <CtaBand
        heading="Heeft u een vergelijkbaar project in gedachten?"
        buttonLabel="Neem contact op"
        tone="ink"
      />
    </>
  );
}
