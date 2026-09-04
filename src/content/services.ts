/**
 * Services: the six things KH Bouw Kunst does.
 *
 * Edit this file to change what the site says. Nothing here is markup —
 * it is plain data the pages read.
 */

import type { IconKey } from "@/components/icons";

export type Service = {
  slug: string;
  title: string;
  icon: IconKey;
  one: string;
  overview: string;
  link: string;
  hint: string;
  heroKop: string;
  paras: string[];
  listTitle: string;
  points: string[];
  cta: string;
  gallery: string[];
  seo: { title: string; description: string };
  /** Image basenames in /public/images */
  cardImg: string;
  heroImg: string;
  galleryImgs: string[];
};

export const services: Service[] = [
  {
    slug: "nieuwbouw",
    title: "Nieuwbouw",
    icon: "house",
    one: "Een woning of bedrijfspand volledig naar wens laten bouwen, inclusief begeleiding van vergunning tot afwerking.",
    overview:
      "Een woning of bedrijfspand volledig naar uw wensen laten bouwen, van de eerste schets tot de sleuteloverdracht. Wij begeleiden het hele traject, inclusief vergunningen, planning en afstemming met architect en gemeente.",
    link: "Meer over nieuwbouw",
    hint: "Nieuwbouwproject in uitvoering",
    heroKop: "Uw nieuwbouwproject, van schets tot sleutel",
    paras: [
      "Een nieuw huis of bedrijfspand bouwen is een van de grootste beslissingen die u kunt nemen. KH Bouw Kunst begeleidt dat traject van begin tot eind: het beoordelen van de bouwtekening, het aanvragen en afhandelen van vergunningen, de planning van alle bouwfases en de uiteindelijke uitvoering met ons eigen team.",
      "We werken samen met architecten en constructeurs, of sluiten aan bij het team dat u al heeft. Belangrijk is dat u tijdens het hele proces één aanspreekpunt houdt die precies weet wat er speelt, ook wanneer er onderweg iets moet worden aangepast.",
    ],
    listTitle: "Wat u van ons kunt verwachten",
    points: [
      "Een realistische planning voordat er wordt begonnen",
      "Wekelijkse updates over de voortgang op de bouwplaats",
      "Vaste materiaalkeuzes zodat de begroting klopt",
      "Een grondige oplevering met een duidelijke garantieregeling",
    ],
    cta: "Vraag een vrijblijvend adviesgesprek aan voor uw nieuwbouwplannen.",
    gallery: ["Fundering en ruwbouw", "Casco met kapconstructie", "Opgeleverde nieuwbouwwoning"],
    seo: {
      title: "Nieuwbouw laten bouwen | Aannemer nieuwbouwwoning",
      description:
        "Nieuwbouwwoning of bedrijfspand laten bouwen door KH Bouw Kunst. Van vergunning tot sleuteloverdracht, met één vast aanspreekpunt.",
    },
    cardImg: "img_100",
    heroImg: "img_200",
    galleryImgs: ["img_300", "img_301", "img_302"],
  },
  {
    slug: "verbouwing-en-renovatie",
    title: "Verbouwing en renovatie",
    icon: "hammer",
    one: "Van een frisse opknapbeurt tot een totaalrenovatie van uw hele woning.",
    overview:
      "Van een frisse opknapbeurt tot een volledige renovatie van uw woning of pand. We werken met een duidelijke planning, zodat u weet wanneer welk onderdeel klaar is.",
    link: "Meer over verbouwing en renovatie",
    hint: "Woning in renovatie",
    heroKop: "Uw woning verbouwen zonder gedoe",
    paras: [
      "Een verbouwing raakt uw dagelijks leven, en dat weten we. Daarom werken we met een strakke planning en korte lijnen, zodat u niet wekenlang in het ongewisse zit over wanneer welke ruimte weer bruikbaar is.",
      "Of het gaat om een kleine opknapbeurt of een totaalrenovatie van uw hele woning: we starten altijd met een grondige inventarisatie, zodat verrassingen tijdens de bouw tot een minimum worden beperkt.",
    ],
    listTitle: "Veel gevraagde verbouwingen",
    points: [
      "Volledige renovatie van een bestaande woning",
      "Verduurzaming en isolatie tijdens de verbouwing",
      "Indeling van ruimtes aanpassen aan uw huidige leven",
      "Verbouwing van winkels, kantoren en bedrijfspanden",
    ],
    cta: "Plan een opname op locatie en ontvang een heldere offerte.",
    gallery: ["Ruimte tijdens sloopfase", "Nieuwe indeling in ruwbouw", "Afgewerkte woonkamer"],
    seo: {
      title: "Verbouwing en renovatie | Woning of pand verbouwen",
      description:
        "Woning of bedrijfspand verbouwen of renoveren met KH Bouw Kunst. Duidelijke planning, vakkundige uitvoering en resultaat dat blijft staan.",
    },
    cardImg: "img_101",
    heroImg: "img_201",
    galleryImgs: ["img_310", "img_311", "img_312"],
  },
  {
    slug: "aanbouw-en-uitbouw",
    title: "Aanbouw en uitbouw",
    icon: "expand",
    one: "Meer ruimte, meer licht en meer woonplezier zonder te verhuizen.",
    overview:
      "Meer vierkante meters, meer licht en meer leefruimte, zonder te verhuizen. Wij zorgen voor een aanbouw die naadloos aansluit op de bestaande bouw, zowel qua constructie als qua uitstraling.",
    link: "Meer over aanbouw en uitbouw",
    hint: "Aanbouw aan achterzijde woning",
    heroKop: "Meer ruimte, zonder te verhuizen",
    paras: [
      "Een aanbouw of uitbouw is vaak de slimste manier om meer leefruimte te creëren. Een grotere keuken, een extra slaapkamer of een lichte woonkamer die uitkijkt op de tuin: allemaal mogelijk zonder de stap naar een nieuwe woning te maken.",
      "Wij zorgen dat de aanbouw constructief goed aansluit op uw bestaande woning en dat de uitstraling klopt, zowel binnen als buiten. Van vergunningsaanvraag tot laatste afwerking.",
    ],
    listTitle: "Mogelijkheden",
    points: [
      "Uitbouw aan de achterzijde voor meer woonoppervlak",
      "Aanbouw met extra hoogte voor een lichte, open ruimte",
      "Serre of veranda als overgang tussen huis en tuin",
      "Volledige afstemming op de bestaande gevel en het dak",
    ],
    cta: "Ontdek de mogelijkheden voor uw woning met een vrijblijvend adviesgesprek.",
    gallery: ["Fundering van de uitbouw", "Stalen pui geplaatst", "Opgeleverde uitbouw met tuin"],
    seo: {
      title: "Aanbouw laten maken | Uitbouw woning",
      description:
        "Aanbouw of uitbouw laten bouwen door KH Bouw Kunst. Meer ruimte en licht in uw woning, vakkundig aangesloten op de bestaande bouw.",
    },
    cardImg: "img_102",
    heroImg: "img_202",
    galleryImgs: ["img_320", "img_321", "img_322"],
  },
  {
    slug: "badkamer-en-keuken",
    title: "Badkamer en keuken",
    icon: "bath",
    one: "Functionele en stijlvolle ruimtes, van sloop tot laatste tegel.",
    overview:
      "De ruimtes waar u elke dag gebruik van maakt, verdienen vakwerk. Van sloop en leidingwerk tot tegelwerk en laatste afwerking.",
    link: "Meer over badkamer en keuken",
    hint: "Badkamer of keuken na oplevering",
    heroKop: "De ruimtes die het meest gebruikt worden, verdienen het meeste vakwerk",
    paras: [
      "Een badkamer of keuken gaat pas echt goed werken als de basis klopt: het leidingwerk, de afwerking en de indeling. Wij pakken deze ruimtes compleet aan, van sloop tot de laatste tegel, zodat u niet met losse vakmensen hoeft te schakelen.",
    ],
    listTitle: "Wat we verzorgen",
    points: [
      "Sloop en voorbereiding van de ruimte",
      "Leidingwerk voor water, elektra en eventueel vloerverwarming",
      "Tegelwerk, sanitair en keukenmontage",
      "Volledige afwerking, klaar om te gebruiken",
    ],
    cta: "Vraag een offerte aan voor uw nieuwe badkamer of keuken.",
    gallery: ["Leidingwerk in de wand", "Tegelwerk in uitvoering", "Opgeleverde badkamer"],
    seo: {
      title: "Badkamer en keuken verbouwen",
      description:
        "Badkamer of keuken laten verbouwen door KH Bouw Kunst. Van sloop en leidingwerk tot tegelwerk en complete afwerking.",
    },
    cardImg: "img_103",
    heroImg: "img_203",
    galleryImgs: ["img_330", "img_331", "img_332"],
  },
  {
    slug: "dakwerk",
    title: "Dakwerk",
    icon: "warehouse",
    one: "Dakrenovatie, dakisolatie en onderhoud dat uw dak jarenlang beschermt.",
    overview:
      "Een dak dat zijn werk doet, jaar na jaar. Dakrenovatie, dakisolatie, dakkapellen en onderhoud, uitgevoerd door mensen die weten wat Nederlands weer met een dak doet.",
    link: "Meer over dakwerk",
    hint: "Dak in renovatie met steiger",
    heroKop: "Een dak waar u niet meer aan hoeft te denken",
    paras: [
      "Uw dak beschermt de rest van uw woning, en dat is precies waarom het geen ruimte laat voor half werk. Wij voeren dakrenovaties, dakisolatie en periodiek onderhoud uit met materialen die berekend zijn op Nederlands weer.",
    ],
    listTitle: "Wat we verzorgen",
    points: [
      "Renovatie van platte en hellende daken",
      "Isolatie voor lagere energiekosten en meer wooncomfort",
      "Dakkapellen en dakramen",
      "Periodieke inspectie en onderhoud",
    ],
    cta: "Laat uw dak vrijblijvend inspecteren door ons team.",
    gallery: ["Dakbeschot en isolatie", "Nieuwe dakkapel", "Afgewerkt hellend dak"],
    seo: {
      title: "Dakwerk en dakrenovatie",
      description:
        "Dakrenovatie, dakisolatie en dakonderhoud door KH Bouw Kunst. Een dak dat bestand is tegen Nederlands weer, jaar na jaar.",
    },
    cardImg: "img_104",
    heroImg: "img_204",
    galleryImgs: ["img_340", "img_341", "img_342"],
  },
  {
    slug: "onderhoud",
    title: "Onderhoud en klein bouwwerk",
    icon: "wrench",
    one: "Voor alle klussen die net iets te groot zijn voor de doe het zelf lijst.",
    overview:
      "Voor de klussen die net iets te groot, te specialistisch of te tijdrovend zijn om zelf op te pakken. Van kleine reparaties tot periodiek onderhoud aan uw woning of pand.",
    link: "Meer over onderhoud",
    hint: "Onderhoudswerk aan gevel",
    heroKop: "Voor de klussen die net iets te groot zijn",
    paras: [
      "Niet elk project is een verbouwing van maanden. Soms gaat het om een reparatie, een stukje metselwerk of periodiek onderhoud dat nodig is om uw woning of pand in goede staat te houden. Ook voor deze klussen kunt u bij KH Bouw Kunst terecht.",
    ],
    listTitle: "Wat we verzorgen",
    points: [
      "Kleine herstelwerkzaamheden binnen en buiten",
      "Periodiek onderhoud aan woningen en bedrijfspanden",
      "Timmerwerk, metselwerk en schilderwerk",
      "Snelle opvolging bij spoedklussen",
    ],
    cta: "Neem contact op, ook voor kleinere klussen.",
    gallery: ["Herstel van metselwerk", "Timmerwerk aan kozijnen", "Gevelonderhoud afgerond"],
    seo: {
      title: "Onderhoud en klein bouwwerk",
      description:
        "Voor klein bouwwerk en periodiek onderhoud aan uw woning of pand. KH Bouw Kunst pakt aan wat net te groot is voor de doe het zelf lijst.",
    },
    cardImg: "img_105",
    heroImg: "img_205",
    galleryImgs: ["img_350", "img_351", "img_352"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
