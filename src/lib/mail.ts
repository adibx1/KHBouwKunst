import "server-only";

import { readFile } from "node:fs/promises";
import path from "node:path";
import nodemailer, { type Transporter } from "nodemailer";
import { site } from "@/content";
import type { Locale } from "@/i18n/config";
import { dictionaryFor } from "@/i18n/dictionary";
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

function readConfig() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) return null;

  const port = Number(process.env.SMTP_PORT ?? 587);

  return {
    host,
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
    requireTLS: port !== 465,
    auth: { user, pass },
    from: process.env.MAIL_FROM ?? `${site.name} <${user}>`,
    to: process.env.MAIL_TO ?? site.email,
  };
}

let transporter: Transporter | null = null;

function getTransporter(config: NonNullable<ReturnType<typeof readConfig>>) {
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

const header = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

export async function sendQuoteMail(aanvraag: Aanvraag, locale: Locale): Promise<boolean> {
  const config = readConfig();
  if (!config) return false;

  const dict = await dictionaryFor(locale);
  const mailer = getTransporter(config);
  const attachments = await logoAttachment();

  await mailer.sendMail({
    from: config.from,
    to: config.to,
    replyTo: { name: header(aanvraag.naam), address: header(aanvraag.email) },
    subject: header(companySubject(aanvraag, dict, locale)),
    text: companyText(aanvraag, dict, locale),
    html: companyHtml(aanvraag, dict, locale),
    attachments,
  });

  try {
    await mailer.sendMail({
      from: config.from,
      to: { name: header(aanvraag.naam), address: header(aanvraag.email) },
      replyTo: config.to,
      subject: visitorSubject(dict),
      text: visitorText(aanvraag, dict, locale),
      html: visitorHtml(aanvraag, dict, locale),
      attachments,
    });
  } catch (error) {
    console.error("[offerteaanvraag] bevestiging naar de aanvrager mislukt", error);
  }

  return true;
}
