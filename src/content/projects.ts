/**
 * Projects: the portfolio shown on /projecten.
 *
 * Edit this file to change what the site says. Nothing here is markup —
 * it is plain data the pages read.
 */

export const projectTypes = [
  "Alle",
  "Nieuwbouw",
  "Renovatie",
  "Aanbouw",
  "Badkamer",
  "Dak",
  "Onderhoud",
] as const;

export type ProjectType = Exclude<(typeof projectTypes)[number], "Alle">;

export type Project = {
  slug: string;
  title: string;
  type: ProjectType;
  regio: string;
  duur: string;
  jaar: string;
  brief: string;
  approach: string;
  imgAfter: string;
  imgBefore: string;
};

export const projects: Project[] = [
  {
    slug: "vrijstaande-woning-veldhoven",
    title: "Vrijstaande woning, Veldhoven",
    type: "Nieuwbouw",
    regio: "Noord-Brabant",
    duur: "11 maanden",
    jaar: "2025",
    brief:
      "Een vrijstaande woning van 190 m² op een kavel in een nieuwbouwwijk, met een inpandige garage en een woonkeuken over de volle breedte van de achtergevel.",
    approach:
      "Wij verzorgden de bouwvoorbereiding, de vergunning en de complete uitvoering. Door de kapconstructie in de werkplaats voor te bereiden stond het dak binnen twee weken na het metselwerk waterdicht.",
    imgAfter: "img_400",
    imgBefore: "img_500",
  },
  {
    slug: "totaalrenovatie-jaren-30-woning-utrecht",
    title: "Totaalrenovatie jaren 30 woning, Utrecht",
    type: "Renovatie",
    regio: "Utrecht",
    duur: "5 maanden",
    jaar: "2025",
    brief:
      "Een jaren 30 woning die volledig gestript werd: nieuwe indeling op de eerste verdieping, nieuwe installaties en isolatie van vloer, dak en gevel.",
    approach:
      "We werkten per verdieping, zodat de bewoners een deel van de woning konden blijven gebruiken. De originele details in het trappenhuis zijn bewaard en hersteld.",
    imgAfter: "img_401",
    imgBefore: "img_501",
  },
  {
    slug: "uitbouw-met-stalen-pui-eindhoven",
    title: "Uitbouw met stalen pui, Eindhoven",
    type: "Aanbouw",
    regio: "Noord-Brabant",
    duur: "7 weken",
    jaar: "2026",
    brief:
      "Een uitbouw van 4 meter diep aan de achterzijde, met een stalen pui over de volle breedte en een plat dak met lichtstraat.",
    approach:
      "De bestaande achtergevel is constructief opgevangen met een staalportaal. De uitbouw sluit aan op de bestaande vloer, zonder drempel naar de tuin.",
    imgAfter: "img_402",
    imgBefore: "img_502",
  },
  {
    slug: "badkamer-en-keuken-rotterdam",
    title: "Badkamer en keuken, Rotterdam",
    type: "Badkamer",
    regio: "Zuid-Holland",
    duur: "3 weken",
    jaar: "2026",
    brief:
      "Badkamer en keuken van een appartement volledig vernieuwd, inclusief nieuw leidingwerk en vloerverwarming.",
    approach:
      "Sloop, leidingwerk, tegelwerk en montage in één doorlopende planning uitgevoerd, zodat de bewoners maar drie weken zonder keuken zaten.",
    imgAfter: "img_403",
    imgBefore: "img_503",
  },
  {
    slug: "dakrenovatie-hellend-dak-tilburg",
    title: "Dakrenovatie hellend dak, Tilburg",
    type: "Dak",
    regio: "Noord-Brabant",
    duur: "4 weken",
    jaar: "2025",
    brief:
      "Een hellend dak van een tweekapper compleet vernieuwd: nieuw dakbeschot, isolatie naar de huidige norm en nieuwe pannen.",
    approach:
      "Het dak werd per dakvlak aangepakt en elke avond waterdicht afgedekt, zodat de woning tijdens de renovatie bewoonbaar bleef.",
    imgAfter: "img_404",
    imgBefore: "img_504",
  },
  {
    slug: "vve-onderhoud-24-appartementen-den-haag",
    title: "VvE onderhoud, 24 appartementen, Den Haag",
    type: "Onderhoud",
    regio: "Zuid-Holland",
    duur: "9 weken",
    jaar: "2025",
    brief:
      "Meerjarig onderhoudsplan uitgevoerd voor een VvE: herstel van metselwerk, vervangen van kozijnhout en schilderwerk aan de galerijzijde.",
    approach:
      "Wij coördineerden de planning met het bestuur en de bewoners, met wekelijkse voortgangsberichten en één vast aanspreekpunt op locatie.",
    imgAfter: "img_405",
    imgBefore: "img_505",
  },
  {
    slug: "bedrijfspand-verbouwd-tot-kantoor-amersfoort",
    title: "Bedrijfspand verbouwd tot kantoor, Amersfoort",
    type: "Renovatie",
    regio: "Utrecht",
    duur: "4 maanden",
    jaar: "2025",
    brief:
      "Een oude bedrijfshal omgebouwd tot kantoorruimte met vergaderkamers, pantry en nieuwe installaties.",
    approach:
      "De staalconstructie bleef in het zicht. Wij plaatsten een nieuwe verdiepingsvloer en verzorgden de complete afbouw en installaties.",
    imgAfter: "img_406",
    imgBefore: "img_506",
  },
  {
    slug: "serre-en-tuinkamer-breda",
    title: "Serre en tuinkamer, Breda",
    type: "Aanbouw",
    regio: "Noord-Brabant",
    duur: "6 weken",
    jaar: "2026",
    brief:
      "Een serre als overgang tussen woonkamer en tuin, met schuifpuien over twee zijden en een geïsoleerd plat dak.",
    approach:
      "De fundering is los van de bestaande woning aangebracht om zetting te voorkomen. Metselwerk en detaillering sluiten aan op de bestaande gevel.",
    imgAfter: "img_407",
    imgBefore: "img_507",
  },
  {
    slug: "nieuwbouw-bedrijfsloods-helmond",
    title: "Nieuwbouw bedrijfsloods, Helmond",
    type: "Nieuwbouw",
    regio: "Noord-Brabant",
    duur: "8 maanden",
    jaar: "2025",
    brief: "Een bedrijfsloods van 600 m² met kantoorgedeelte, gebouwd op een bedrijventerrein.",
    approach:
      "Wij verzorgden de vergunning, de fundering, de montage van de staalconstructie en de complete afbouw van het kantoorgedeelte.",
    imgAfter: "img_408",
    imgBefore: "img_508",
  },
  {
    slug: "dakkapellen-en-isolatie-nijmegen",
    title: "Dakkapellen en isolatie, Nijmegen",
    type: "Dak",
    regio: "Gelderland",
    duur: "2 weken",
    jaar: "2026",
    brief:
      "Twee dakkapellen geplaatst en het dak van binnenuit geïsoleerd, waardoor de zolder een volwaardige slaapkamer werd.",
    approach:
      "De dakkapellen zijn geprefabriceerd in onze werkplaats en in één dag geplaatst, zodat het dak zo kort mogelijk open stond.",
    imgAfter: "img_409",
    imgBefore: "img_509",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function projectMeta(p: Project) {
  return `${p.regio} · ${p.type} · ${p.duur}`;
}
