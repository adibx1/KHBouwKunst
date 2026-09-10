import "server-only";

import nodemailer, { type Transporter } from "nodemailer";
import { site } from "@/content";

export type Aanvraag = {
  naam: string;
  telefoon: string;
  email: string;
  locatie: string;
  type: string;
  bericht: string;
  ontvangen: string;
};

/**
 * Every SMTP setting comes from the environment. Nothing is hardcoded, so the
 * same build runs against a local mailcatcher and against the live mailbox.
 */
function readConfig() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) return null;

  const port = Number(process.env.SMTP_PORT ?? 587);

  return {
    host,
    port,
    // Port 465 is implicit TLS. Everything else starts plain and upgrades with
    // STARTTLS, which `requireTLS` makes non-optional.
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
    requireTLS: port !== 465,
    auth: { user, pass },
    from: process.env.MAIL_FROM ?? `${site.name} <${user}>`,
    to: process.env.MAIL_TO ?? site.email,
  };
}

let transporter: Transporter | null = null;

function getTransporter(config: NonNullable<ReturnType<typeof readConfig>>) {
  // The connection pool survives between invocations on a warm server, so a
  // burst of submissions does not open a new SMTP session each time.
  transporter ??= nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    requireTLS: config.requireTLS,
    auth: config.auth,
    pool: true,
    maxConnections: 2,
  });
  return transporter;
}

// Anything that lands in a mail header is stripped of CR/LF first, so a
// crafted field cannot inject extra headers.
const header = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

const escape = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function bodyText(aanvraag: Aanvraag) {
  return [
    `Naam:       ${aanvraag.naam}`,
    `Telefoon:   ${aanvraag.telefoon}`,
    `E-mail:     ${aanvraag.email}`,
    `Locatie:    ${aanvraag.locatie}`,
    `Type:       ${aanvraag.type}`,
    "",
    "Bericht:",
    aanvraag.bericht || "(geen bericht)",
    "",
    `Ontvangen:  ${new Date(aanvraag.ontvangen).toLocaleString("nl-NL")}`,
  ].join("\n");
}

function bodyHtml(aanvraag: Aanvraag) {
  const row = (label: string, value: string) =>
    `<tr><th align="left" style="padding:4px 16px 4px 0;font-weight:600;white-space:nowrap">${label}</th><td style="padding:4px 0">${escape(value)}</td></tr>`;

  return `<div style="font-family:system-ui,-apple-system,sans-serif;font-size:15px;line-height:1.5;color:#201e1d">
  <h2 style="margin:0 0 16px">Nieuwe offerteaanvraag</h2>
  <table cellpadding="0" cellspacing="0" style="border-collapse:collapse">
    ${row("Naam", aanvraag.naam)}
    ${row("Telefoon", aanvraag.telefoon)}
    ${row("E-mail", aanvraag.email)}
    ${row("Locatie", aanvraag.locatie)}
    ${row("Type", aanvraag.type)}
  </table>
  <p style="margin:16px 0 4px;font-weight:600">Bericht</p>
  <p style="margin:0;white-space:pre-wrap">${escape(aanvraag.bericht) || "<em>(geen bericht)</em>"}</p>
  <p style="margin:24px 0 0;color:#7d7979;font-size:13px">Ontvangen op ${escape(new Date(aanvraag.ontvangen).toLocaleString("nl-NL"))} via ${escape(site.url)}</p>
</div>`;
}

/**
 * Mails one quote request to the company inbox. Returns false when SMTP is not
 * configured yet, so the caller can decide what to tell the visitor. Throws
 * when SMTP is configured but the send fails.
 */
export async function sendQuoteMail(aanvraag: Aanvraag): Promise<boolean> {
  const config = readConfig();
  if (!config) return false;

  await getTransporter(config).sendMail({
    from: config.from,
    to: config.to,
    // Answering the notification mails the visitor directly.
    replyTo: { name: header(aanvraag.naam), address: header(aanvraag.email) },
    subject: header(
      `Offerteaanvraag ${aanvraag.type} - ${aanvraag.naam} (${aanvraag.locatie})`,
    ),
    text: bodyText(aanvraag),
    html: bodyHtml(aanvraag),
  });

  return true;
}
