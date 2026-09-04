import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/icons";
import { approach } from "@/content";

export const metadata: Metadata = {
  title: "Over KH Bouw Kunst | Uw aannemer met vakmanschap en ervaring",
  description:
    "Maak kennis met KH Bouw Kunst. Ontdek onze werkwijze, onze mensen en waarom klanten in heel Nederland op ons vakmanschap vertrouwen.",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero hero--short">
        <div className="hero__media">
          <Image
            src="/images/kh-about-hero.jpg"
            alt="Het team van KH Bouw Kunst op de bouwplaats"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero__scrim" />
        <div className="hero__body">
          <p className="kicker kicker--accent">Over ons</p>
          <h1 className="title-page">Gebouwd op vakmanschap, niet op praatjes</h1>
          <p className="hero__lede">
            KH Bouw Kunst combineert het beste van twee werelden: de degelijkheid van een ervaren
            bouwbedrijf en de precisie van een team dat trots is op elk detail.
          </p>
        </div>
      </section>

      <section className="wrap pad-xl split about-story">
        <div>
          <p className="kicker">Ons verhaal</p>
          <h2 className="title-sub">Bouwen zou geen bron van stress moeten zijn</h2>
          <p className="body-text">
            KH Bouw Kunst is opgericht vanuit een simpel idee: bouwen zou geen bron van stress
            moeten zijn. Te vaak horen we verhalen van eigenaren die achteraf voor verrassingen
            kwamen te staan, van onduidelijke afspraken of werk dat niet was wat er beloofd was.
            Wij doen het anders.
          </p>
          <p className="body-text">
            We geloven dat een goede aannemer meer is dan iemand die stenen stapelt. Een goede
            aannemer luistert, adviseert eerlijk, plant realistisch en bouwt met oog voor detail.
            Die filosofie zit in alles wat we doen, van het eerste telefoontje tot de laatste
            controle op de bouwplaats.
          </p>
          <p className="body-text">
            Inmiddels heeft ons team tientallen nieuwbouwprojecten, verbouwingen en renovaties door
            heel Nederland afgerond, voor particulieren die hun droomhuis lieten bouwen,
            ondernemers die hun bedrijfspand verbouwden en VvE&apos;s die hun complex weer
            toekomstbestendig maakten.
          </p>
        </div>
        <div className="frame about-story__media">
          <Image
            src="/images/kh-about-story.jpg"
            alt="Detailfoto van vakwerk op de bouwplaats"
            fill
            sizes="(max-width: 900px) 100vw, 620px"
          />
        </div>
      </section>

      <section className="band-ruled">
        <div className="wrap pad-xl">
          <h2 className="title-sub section-heading">Onze aanpak</h2>
          <div className="cells">
            {approach.map((item) => (
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
        <div className="wrap wrap--mid pad-xl">
          <p className="kicker kicker--on-accent">Onze missie</p>
          <p>
            Elk project opleveren zoals het is beloofd. Niet duurder, niet later en niet met minder
            kwaliteit. Dat is de belofte waarmee KH Bouw Kunst ooit begon en die belofte houden we
            nog elke dag vast.
          </p>
        </div>
      </section>
    </>
  );
}
