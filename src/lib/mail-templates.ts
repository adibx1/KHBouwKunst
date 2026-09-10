import { site } from "@/content";
import type { Locale } from "@/i18n/config";
import { localeMeta } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import type { Aanvraag } from "./quote";

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

const formatDate = (iso: string, locale: Locale) =>
  new Date(iso).toLocaleString(localeMeta[locale].hreflang, {
    dateStyle: "long",
    timeStyle: "short",
  });

const fill = (template: string, values: Record<string, string>) =>
  template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? "");

function shell(preheader: string, body: string, dict: Dictionary, locale: Locale) {
  return `<!doctype html>
<html lang="${localeMeta[locale].htmlLang}">
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
            <p style="margin:0;color:#b9b5b2;">${escape(dict.site.tagline)}</p>
            <p style="margin:14px 0 0;">
              <a href="${escape(site.phoneHref)}" style="color:${accent};text-decoration:none;">${escape(site.phone)}</a>
              <span style="color:#605d5d;">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
              <a href="mailto:${escape(site.email)}" style="color:${accent};text-decoration:none;">${escape(site.email)}</a>
            </p>
            <p style="margin:6px 0 0;color:#b9b5b2;">${escape(dict.site.hours)}</p>
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

function details(aanvraag: Aanvraag, dict: Dictionary) {
  const f = dict.mail.fields;
  const rows: Array<[string, string]> = [
    [f.naam, aanvraag.naam],
    [f.telefoon, aanvraag.telefoon],
    [f.email, aanvraag.email],
    [f.locatie, aanvraag.locatie],
    [f.type, aanvraag.type],
  ];

  const cells = rows
    .map(
      ([label, value], index) => `<tr>
        <td style="padding:${index === 0 ? "0" : "12px"} 0 12px;border-bottom:1px solid ${hair};font-family:${font};font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${muted};width:40%;vertical-align:top;">${escape(label)}</td>
        <td style="padding:${index === 0 ? "0" : "12px"} 0 12px;border-bottom:1px solid ${hair};font-family:${font};font-size:16px;line-height:1.5;color:${text};vertical-align:top;">${escape(value)}</td>
      </tr>`,
    )
    .join("\n");

  const message = aanvraag.bericht
    ? `<tr>
        <td colspan="2" style="padding:26px 0 0;font-family:${font};font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${muted};">${escape(f.bericht)}</td>
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

function tokens(aanvraag: Aanvraag, dict: Dictionary, locale: Locale) {
  return {
    naam: aanvraag.naam,
    voornaam: firstName(aanvraag.naam),
    locatie: aanvraag.locatie,
    type: aanvraag.type,
    telefoon: site.phone,
    uren: dict.site.hours,
    datum: formatDate(aanvraag.ontvangen, locale),
    url: site.url,
  };
}

export function companySubject(aanvraag: Aanvraag, dict: Dictionary, locale: Locale) {
  return fill(dict.mail.company.subject, tokens(aanvraag, dict, locale));
}

export function companyHtml(aanvraag: Aanvraag, dict: Dictionary, locale: Locale) {
  const t = dict.mail.company;
  const v = tokens(aanvraag, dict, locale);

  return shell(
    fill(t.preheader, v),
    [
      heading(t.kicker, fill(t.title, v)),
      paragraph(escape(t.intro)),
      details(aanvraag, dict),
      promise(t.promiseTitle, fill(t.promiseBody, v)),
      button(`tel:${aanvraag.telefoon.replace(/[^\d+]/g, "")}`, t.callButton),
      paragraph(
        `<span style="color:${muted};font-size:14px;">${escape(fill(t.receivedOn, v))}</span>`,
        24,
      ),
      spacer(),
    ].join("\n"),
    dict,
    locale,
  );
}

export function companyText(aanvraag: Aanvraag, dict: Dictionary, locale: Locale) {
  const t = dict.mail.company;
  const f = dict.mail.fields;
  const v = tokens(aanvraag, dict, locale);

  return [
    fill(t.textIntro, v),
    "",
    `${f.naam}: ${aanvraag.naam}`,
    `${f.telefoon}: ${aanvraag.telefoon}`,
    `${f.email}: ${aanvraag.email}`,
    `${f.locatie}: ${aanvraag.locatie}`,
    `${f.type}: ${aanvraag.type}`,
    "",
    `${f.bericht}:`,
    aanvraag.bericht || f.noMessage,
    "",
    fill(t.receivedOn, v),
    "",
    fill(t.textOutro, v),
  ].join("\n");
}

export function visitorSubject(dict: Dictionary) {
  return dict.mail.visitor.subject;
}

export function visitorHtml(aanvraag: Aanvraag, dict: Dictionary, locale: Locale) {
  const t = dict.mail.visitor;
  const v = tokens(aanvraag, dict, locale);

  return shell(
    t.preheader,
    [
      heading(t.kicker, fill(t.title, v)),
      paragraph(escape(fill(t.intro, v))),
      promise(t.promiseTitle, t.promiseBody),
      details(aanvraag, dict),
      paragraph(escape(t.question), 24),
      button(site.phoneHref, fill(t.callButton, v)),
      paragraph(
        `<span style="color:${muted};font-size:14px;">${escape(fill(t.hoursNote, v))}</span>`,
        20,
      ),
      paragraph(`${escape(t.signOff)}<br>${escape(fill(t.team, { naam: site.name }))}`, 24),
      spacer(),
    ].join("\n"),
    dict,
    locale,
  );
}

export function visitorText(aanvraag: Aanvraag, dict: Dictionary, locale: Locale) {
  const t = dict.mail.visitor;
  const f = dict.mail.fields;
  const v = tokens(aanvraag, dict, locale);

  return [
    fill(t.title, v),
    "",
    fill(t.intro, v),
    "",
    t.promiseTitle,
    "",
    t.recap,
    "",
    `${f.naam}: ${aanvraag.naam}`,
    `${f.telefoon}: ${aanvraag.telefoon}`,
    `${f.email}: ${aanvraag.email}`,
    `${f.locatie}: ${aanvraag.locatie}`,
    `${f.type}: ${aanvraag.type}`,
    "",
    `${f.bericht}:`,
    aanvraag.bericht || f.noMessage,
    "",
    t.question,
    fill(t.hoursNote, v),
    "",
    t.signOff,
    fill(t.team, { naam: site.name }),
    "",
    site.url,
  ].join("\n");
}
