import "server-only";

import { readFile } from "node:fs/promises";
import path from "node:path";
import nodemailer, { type Transporter } from "nodemailer";
import { site } from "@/content";
import {
  LOGO_CID,
  companyHtml,
  companySubject,
  companyText,
  visitorHtml,
  visitorSubject,
  visitorText,
} from "./mail-templates";
import type { Aanvraag } from "./quote";

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

let logo: Buffer | null | undefined;

/**
 * The logo travels with the mail as an inline attachment instead of a remote
 * image, because most clients block remote images until the reader allows them.
 * next.config.ts traces the file into the deployed function.
 */
async function readLogo() {
  if (logo !== undefined) return logo;
  try {
    logo = await readFile(path.join(process.cwd(), "public", "logo-email.png"));
  } catch {
    logo = null;
  }
  return logo;
}

async function logoAttachment() {
  const content = await readLogo();
  if (!content) return [];
  return [{ filename: "kh-bouw-kunst.png", content, cid: LOGO_CID, contentDisposition: "inline" as const }];
}

// Anything that lands in a mail header is stripped of CR/LF first, so a
// crafted field cannot inject extra headers.
const header = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

/**
 * Mails one quote request to the company inbox and sends the visitor a
 * confirmation. Returns false when SMTP is not configured yet, so the caller
 * can decide what to tell the visitor. Throws when the notification to the
 * company fails, because that is the mail the business cannot afford to miss.
 */
export async function sendQuoteMail(aanvraag: Aanvraag): Promise<boolean> {
  const config = readConfig();
  if (!config) return false;

  const mailer = getTransporter(config);
  const attachments = await logoAttachment();

  await mailer.sendMail({
    from: config.from,
    to: config.to,
    // Answering the notification mails the visitor directly.
    replyTo: { name: header(aanvraag.naam), address: header(aanvraag.email) },
    subject: header(companySubject(aanvraag)),
    text: companyText(aanvraag),
    html: companyHtml(aanvraag),
    attachments,
  });

  // The confirmation is a courtesy. A bounced or refused visitor address must
  // not turn a request the company already received into an error.
  try {
    await mailer.sendMail({
      from: config.from,
      to: { name: header(aanvraag.naam), address: header(aanvraag.email) },
      replyTo: config.to,
      subject: visitorSubject(),
      text: visitorText(aanvraag),
      html: visitorHtml(aanvraag),
      attachments,
    });
  } catch (error) {
    console.error("[offerteaanvraag] bevestiging naar de aanvrager mislukt", error);
  }

  return true;
}
