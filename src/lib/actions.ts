"use server";

import { defaultLocale, isLocale } from "@/i18n/config";
import { dictionaryFor } from "@/i18n/dictionary";
import { sendQuoteMail } from "./mail";
import type { QuoteState } from "./quote";

const required = ["naam", "telefoon", "email", "locatie", "type"] as const;

export async function submitQuote(
  _prev: QuoteState,
  formData: FormData,
): Promise<QuoteState> {
  const value = (field: string) => (formData.get(field) ?? "").toString().trim();

  const submitted = value("locale");
  const locale = isLocale(submitted) ? submitted : defaultLocale;
  const messages = (await dictionaryFor(locale)).form.errors;

  const errors: Record<string, string> = {};
  for (const field of required) {
    if (!value(field)) errors[field] = messages[field];
  }

  const email = value("email");
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = messages.emailInvalid;
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", name: value("naam"), errors };
  }

  const aanvraag = {
    naam: value("naam"),
    telefoon: value("telefoon"),
    email,
    locatie: value("locatie"),
    type: value("type"),
    bericht: value("bericht"),
    ontvangen: new Date().toISOString(),
  };

  try {
    const sent = await sendQuoteMail(aanvraag, locale);
    if (!sent) {
      console.warn("[offerteaanvraag] SMTP niet geconfigureerd", aanvraag);
    }
  } catch (error) {
    console.error("[offerteaanvraag] versturen mislukt", error);
    return {
      status: "error",
      name: aanvraag.naam,
      errors: { form: messages.failed },
    };
  }

  return { status: "sent", name: aanvraag.naam, errors: {} };
}
