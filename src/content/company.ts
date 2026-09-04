/**
 * Company copy: figures, selling points, reviews, process and FAQ.
 *
 * Edit this file to change what the site says. Nothing here is markup —
 * it is plain data the pages read.
 */

import type { IconKey } from "@/components/icons";

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
