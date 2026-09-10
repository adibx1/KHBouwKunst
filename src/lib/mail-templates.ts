import { site } from "@/content";
import type { Aanvraag } from "./quote";

/**
 * Mail clients ignore stylesheets and half of them still lay out with tables,
 * so everything here is a table with inline styles. The palette follows the
 * site tokens in globals.css: near black ink, yellow accent, square corners.
 */
const ink = "#161514";
const text = "#201e1d";
const accent = "#f5b216";
const paper = "#ffffff";
const light = "#e6e3e0";
const muted = "#605d5d";
const hair = "#e6e3e0";

const font = "'Helvetica Neue', Helvetica, Arial, sans-serif";

export const LOGO_CID = "khbouwkunst-logo";

export const escape = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const firstName = (naam: string) => naam.trim().split(/\s+/)[0] || naam.trim();

const formatDate = (iso: string) =>
  new Date(iso).toLocaleString("nl-NL", {
    dateStyle: "long",
    timeStyle: "short",
  });

/** Wraps body rows in the branded shell: logo, accent rule, footer. */
function shell(preheader: string, body: string) {
  return `<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(site.name)}</title>
</head>
<body style="margin:0;padding:0;background:${light};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escape(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${light};">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:100%;background:${paper};border:2px solid ${ink};">

        <tr>
          <td align="center" style="padding:36px 32px 28px;">
            <img src="cid:${LOGO_CID}" width="210" alt="${escape(site.name)}" style="display:block;width:210px;max-width:70%;height:auto;border:0;">
          </td>
        </tr>

        <tr><td style="height:4px;background:${accent};font-size:0;line-height:0;">&nbsp;</td></tr>

        ${body}

        <tr>
          <td style="background:${ink};padding:28px 32px;font-family:${font};color:#f3f2f2;font-size:14px;line-height:1.7;">
            <p style="margin:0 0 6px;font-size:15px;font-weight:700;color:${paper};letter-spacing:0.02em;">${escape(site.name)}</p>
            <p style="margin:0;color:#b9b5b2;">${escape(site.tagline)}</p>
            <p style="margin:14px 0 0;">
              <a href="${escape(site.phoneHref)}" style="color:${accent};text-decoration:none;">${escape(site.phone)}</a>
              <span style="color:#605d5d;">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
              <a href="mailto:${escape(site.email)}" style="color:${accent};text-decoration:none;">${escape(site.email)}</a>
            </p>
            <p style="margin:6px 0 0;color:#b9b5b2;">${escape(site.hours)}</p>
            <p style="margin:14px 0 0;color:#8b8785;font-size:13px;">KvK ${escape(site.kvk)}
              <span style="color:#605d5d;">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
              <a href="${escape(site.url)}" style="color:#b9b5b2;text-decoration:none;">${escape(site.url.replace("https://", ""))}</a>
            </p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

/** The kicker plus heading that opens every mail. */
function heading(kicker: string, title: string) {
  return `<tr>
    <td style="padding:32px 32px 0;font-family:${font};">
      <p style="margin:0 0 10px;font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:${muted};">${escape(kicker)}</p>
      <h1 style="margin:0;font-size:26px;line-height:1.25;font-weight:700;color:${text};">${escape(title)}</h1>
    </td>
  </tr>`;
}

function paragraph(html: string, top = 18) {
  return `<tr>
    <td style="padding:${top}px 32px 0;font-family:${font};font-size:16px;line-height:1.65;color:${text};">
      <p style="margin:0;">${html}</p>
    </td>
  </tr>`;
}

/** The submitted fields, as a label and value list with hairline rules. */
function details(aanvraag: Aanvraag, includeMessage: boolean) {
  const rows: Array<[string, string]> = [
    ["Naam", aanvraag.naam],
    ["Telefoonnummer", aanvraag.telefoon],
    ["E mailadres", aanvraag.email],
    ["Locatie", aanvraag.locatie],
    ["Type project", aanvraag.type],
  ];

  const cells = rows
    .map(
      ([label, value], index) => `<tr>
        <td style="padding:${index === 0 ? "0" : "12px"} 0 12px;border-bottom:1px solid ${hair};font-family:${font};font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${muted};width:40%;vertical-align:top;">${escape(label)}</td>
        <td style="padding:${index === 0 ? "0" : "12px"} 0 12px;border-bottom:1px solid ${hair};font-family:${font};font-size:16px;line-height:1.5;color:${text};vertical-align:top;">${escape(value)}</td>
      </tr>`,
    )
    .join("\n");

  const message =
    includeMessage && aanvraag.bericht
      ? `<tr>
          <td colspan="2" style="padding:26px 0 0;font-family:${font};font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${muted};">Bericht</td>
        </tr>
        <tr>
          <td colspan="2" style="padding:8px 0 0;font-family:${font};font-size:16px;line-height:1.65;color:${text};white-space:pre-wrap;">${escape(aanvraag.bericht)}</td>
        </tr>`
      : "";

  return `<tr>
    <td style="padding:24px 32px 0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:2px solid ${ink};padding-top:12px;">
        <tr><td colspan="2" style="height:14px;font-size:0;line-height:0;">&nbsp;</td></tr>
        ${cells}
        ${message}
      </table>
    </td>
  </tr>`;
}

/** The promise the visitor most wants to read, set apart from the running copy. */
function promise(title: string, body: string) {
  return `<tr>
    <td style="padding:26px 32px 0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#fdf4dd;border-left:4px solid ${accent};">
        <tr>
          <td style="padding:18px 22px;font-family:${font};">
            <p style="margin:0 0 4px;font-size:17px;font-weight:700;color:${text};">${escape(title)}</p>
            <p style="margin:0;font-size:15px;line-height:1.6;color:${muted};">${escape(body)}</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>`;
}

function button(href: string, label: string) {
  return `<tr>
    <td style="padding:26px 32px 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="background:${accent};">
            <a href="${escape(href)}" style="display:inline-block;padding:14px 26px;font-family:${font};font-size:15px;font-weight:700;color:${ink};text-decoration:none;letter-spacing:0.02em;">${escape(label)}</a>
          </td>
        </tr>
      </table>
    </td>
  </tr>`;
}

function spacer(height = 36) {
  return `<tr><td style="height:${height}px;font-size:0;line-height:0;">&nbsp;</td></tr>`;
}

/* ------------------------------------------------------------------ */
/* Mail to the company                                                 */
/* ------------------------------------------------------------------ */

export function companySubject(aanvraag: Aanvraag) {
  return `Nieuwe offerteaanvraag van ${aanvraag.naam} uit ${aanvraag.locatie}`;
}

export function companyHtml(aanvraag: Aanvraag) {
  return shell(
    `${aanvraag.naam} vraagt een offerte aan voor ${aanvraag.type} in ${aanvraag.locatie}.`,
    [
      heading("Nieuwe aanvraag", `${aanvraag.naam} vraagt een offerte aan`),
      paragraph(
        `Er is zojuist een aanvraag binnengekomen via het contactformulier op de website. Hieronder staat alles wat is ingevuld.`,
      ),
      details(aanvraag, true),
      promise(
        "Reageer binnen 24 uur",
        `Dat is wat de bevestigingsmail aan ${firstName(aanvraag.naam)} belooft. Antwoord gerust rechtstreeks op deze mail, dan komt uw bericht meteen aan.`,
      ),
      button(`tel:${aanvraag.telefoon.replace(/[^\d+]/g, "")}`, "Direct bellen"),
      paragraph(
        `<span style="color:${muted};font-size:14px;">Ontvangen op ${escape(formatDate(aanvraag.ontvangen))}</span>`,
        24,
      ),
      spacer(),
    ].join("\n"),
  );
}

export function companyText(aanvraag: Aanvraag) {
  return [
    `Nieuwe offerteaanvraag via ${site.url}`,
    "",
    `Naam:            ${aanvraag.naam}`,
    `Telefoonnummer:  ${aanvraag.telefoon}`,
    `E mailadres:     ${aanvraag.email}`,
    `Locatie:         ${aanvraag.locatie}`,
    `Type project:    ${aanvraag.type}`,
    "",
    "Bericht:",
    aanvraag.bericht || "(geen bericht achtergelaten)",
    "",
    `Ontvangen op ${formatDate(aanvraag.ontvangen)}`,
    "",
    `Reageer binnen 24 uur, dat is wat de bevestigingsmail belooft.`,
    `Antwoord op deze mail om rechtstreeks te reageren op ${firstName(aanvraag.naam)}.`,
  ].join("\n");
}

/* ------------------------------------------------------------------ */
/* Confirmation to the visitor                                         */
/* ------------------------------------------------------------------ */

export function visitorSubject() {
  return `Wij hebben uw aanvraag ontvangen`;
}

export function visitorHtml(aanvraag: Aanvraag) {
  const naam = firstName(aanvraag.naam);

  return shell(
    `Uw aanvraag is bij ons binnen. U hoort binnen 24 uur van ons.`,
    [
      heading("Aanvraag ontvangen", `Bedankt voor uw aanvraag, ${naam}`),
      paragraph(
        `Fijn dat u aan ons denkt voor uw project in ${escape(aanvraag.locatie)}. Uw aanvraag is goed bij ons binnengekomen en wij gaan er meteen mee aan de slag.`,
      ),
      promise(
        "Wij nemen binnen 24 uur contact met u op",
        "Een van onze mensen belt of mailt u om uw plannen door te nemen. Daarna weet u waar u aan toe bent en maken wij een heldere offerte voor u.",
      ),
      details(aanvraag, true),
      paragraph(
        `Klopt er iets niet, of wilt u nog iets toevoegen? Antwoord dan gewoon op deze mail. Heeft u haast, bel ons dan gerust.`,
        24,
      ),
      button(site.phoneHref, `Bel ${site.phone}`),
      paragraph(
        `<span style="color:${muted};font-size:14px;">Wij zijn bereikbaar ${escape(site.hours)}.</span>`,
        20,
      ),
      paragraph(`Met vriendelijke groet,<br>Het team van ${escape(site.name)}`, 24),
      spacer(),
    ].join("\n"),
  );
}

export function visitorText(aanvraag: Aanvraag) {
  const naam = firstName(aanvraag.naam);

  return [
    `Bedankt voor uw aanvraag, ${naam}`,
    "",
    `Fijn dat u aan ons denkt voor uw project in ${aanvraag.locatie}. Uw aanvraag is goed`,
    `bij ons binnengekomen en wij gaan er meteen mee aan de slag.`,
    "",
    `Wij nemen binnen 24 uur contact met u op om uw plannen door te nemen.`,
    "",
    "Dit heeft u aan ons doorgegeven:",
    "",
    `Naam:            ${aanvraag.naam}`,
    `Telefoonnummer:  ${aanvraag.telefoon}`,
    `E mailadres:     ${aanvraag.email}`,
    `Locatie:         ${aanvraag.locatie}`,
    `Type project:    ${aanvraag.type}`,
    "",
    "Bericht:",
    aanvraag.bericht || "(geen bericht achtergelaten)",
    "",
    `Klopt er iets niet, of wilt u nog iets toevoegen? Antwoord dan gewoon op deze mail.`,
    `Heeft u haast, bel ons dan gerust op ${site.phone}. Wij zijn bereikbaar ${site.hours}.`,
    "",
    "Met vriendelijke groet,",
    `Het team van ${site.name}`,
    "",
    site.url,
  ].join("\n");
}
