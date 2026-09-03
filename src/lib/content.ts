/**
 * All site copy, lifted from the approved content document
 * (uploads/content_doc) and the design canvas data model.
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

export const stats = [
  { value: "10", label: "Jaren ervaring" },
  { value: "150+", label: "Projecten afgerond" },
  { value: "9,3", label: "Gemiddelde klantwaardering" },
  { value: "12", label: "Provincies actief" },
  { value: "1 dag", label: "Reactie op uw aanvraag" },
];

export const reasons = [
  {
    num: "01",
    title: "Één vast aanspreekpunt",
    text: "U schakelt met dezelfde persoon van intake tot oplevering, dus geen doorverbinden of dingen dubbel uitleggen.",
  },
  {
    num: "02",
    title: "Transparante offertes",
    text: "Een heldere prijsopbouw zonder kleine lettertjes, zodat u precies weet waar u aan toekomt.",
  },
  {
    num: "03",
    title: "Vakmensen in eigen dienst",
    text: "Onze timmerlieden, metselaars en installateurs werken al jaren met elkaar samen en kennen elkaars kwaliteit.",
  },
  {
    num: "04",
    title: "Landelijk actief",
    text: "Vanuit onze planning werken we projecten door heel Nederland, met dezelfde zorgvuldigheid als bij het project om de hoek.",
  },
  {
    num: "05",
    title: "Garantie op ons werk",
    text: "We staan achter onze afwerking en lossen eventuele gebreken snel en zonder gedoe op.",
  },
];

export const approach: Array<{ icon: IconKey; title: string; text: string }> = [
  {
    icon: "handshake",
    title: "Persoonlijk contact",
    text: "U werkt samen met een vast projectteam dat uw wensen kent en meedenkt in plaats van alleen uitvoert.",
  },
  {
    icon: "badge-check",
    title: "Eerlijk advies",
    text: "Als iets niet slim is of buiten budget valt, zeggen we dat liever meteen dan achteraf.",
  },
  {
    icon: "shield-check",
    title: "Kwaliteit die je voelt",
    text: "Van fundering tot afwerking werken we met materialen en technieken die jarenlang meegaan.",
  },
  {
    icon: "sparkles",
    title: "Nette bouwplaats",
    text: "Een opgeruimde werkplek is een teken van een team dat zijn vak serieus neemt.",
  },
];

export const reviews = [
  {
    quote:
      "“Van de eerste afspraak tot de oplevering wisten we precies waar we aan toe waren. KH Bouw Kunst deed exact wat er was afgesproken, op de dag die was beloofd.”",
    name: "Particuliere opdrachtgever",
  },
  {
    quote:
      "“De planning klopte, de bouwplaats was elke dag opgeruimd en bij een onverwachte situatie werd er eerst gebeld voordat er werd doorgewerkt.”",
    name: "VvE bestuur",
  },
  {
    quote:
      "“Eerlijk advies over wat wel en niet haalbaar was binnen ons budget. Dat gaf vertrouwen om het hele traject uit handen te geven.”",
    name: "Ondernemer, bedrijfspand",
  },
];

export const steps = [
  {
    num: "1",
    title: "Kennismaking en wensen",
    text: "We beginnen met luisteren. Wat wilt u bereiken, wat is het budget en wat is de gewenste planning? Deze intake vormt de basis voor alles wat daarna volgt.",
  },
  {
    num: "2",
    title: "Opname en advies",
    text: "Ons team komt langs voor een opname op locatie. Op basis daarvan geven we eerlijk advies over wat wel en niet haalbaar is binnen uw wensen en budget.",
  },
  {
    num: "3",
    title: "Offerte en planning",
    text: "U ontvangt een heldere offerte met een duidelijke prijsopbouw en een realistische planning. Geen verborgen posten, geen vage omschrijvingen.",
  },
  {
    num: "4",
    title: "Uitvoering",
    text: "Ons vaste team gaat aan de slag. U ontvangt regelmatig een update over de voortgang, en bij onvoorziene situaties nemen we direct contact op voordat er wordt doorgewerkt.",
  },
  {
    num: "5",
    title: "Oplevering en garantie",
    text: "Bij de oplevering lopen we samen het resultaat door. Is er iets dat aandacht nodig heeft, dan lossen we dat op. Op ons werk geldt garantie, zodat u ook na de oplevering met een gerust hart in uw woning of pand staat.",
  },
];

export const faqs = [
  {
    q: "Hoe lang duurt een verbouwing gemiddeld?",
    a: "Dat hangt sterk af van de omvang van het project. Een badkamerverbouwing duurt vaak één tot twee weken, terwijl een totaalrenovatie meerdere maanden in beslag kan nemen. Tijdens de offertefase geven we altijd een realistische inschatting.",
  },
  {
    q: "Werkt KH Bouw Kunst door heel Nederland?",
    a: "Ja. Vanuit onze planning voeren we projecten uit in alle provincies. Voor grotere projecten stemmen we de logistiek van tevoren af, zodat de doorlooptijd niet oploopt.",
  },
  {
    q: "Kan ik tijdens de verbouwing in mijn woning blijven wonen?",
    a: "Bij veel verbouwingen is dit mogelijk. We bespreken dit altijd vooraf en houden er rekening mee in de planning en de manier van werken, bijvoorbeeld door de woning per ruimte aan te pakken.",
  },
  {
    q: "Wat zit er in de offerte van KH Bouw Kunst?",
    a: "Onze offertes bevatten een duidelijke omschrijving van de werkzaamheden, de gebruikte materialen, de planning en de totale kosten. We werken niet met verborgen posten of vage stelposten zonder toelichting.",
  },
  {
    q: "Bieden jullie garantie op het geleverde werk?",
    a: "Ja, op al onze werkzaamheden geldt garantie. Mocht er na de oplevering iets niet naar wens zijn, dan nemen we dat serieus en lossen we het op.",
  },
];

export const projectTypeOptions = [
  "Nieuwbouw",
  "Verbouwing",
  "Aanbouw",
  "Badkamer of keuken",
  "Dakwerk",
  "Onderhoud",
  "Anders",
];
