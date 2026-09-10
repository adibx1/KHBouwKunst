"use server";

import { sendQuoteMail } from "./mail";
import type { QuoteState } from "./quote";

const required: Array<[field: string, label: string]> = [
  ["naam", "Vul uw naam in."],
  ["telefoon", "Vul uw telefoonnummer in."],
  ["email", "Vul uw e mailadres in."],
  ["locatie", "Vul de locatie van het project in."],
  ["type", "Kies een type project."],
];

export async function submitQuote(
  _prev: QuoteState,
  formData: FormData,
): Promise<QuoteState> {
  const value = (field: string) => (formData.get(field) ?? "").toString().trim();

  const errors: Record<string, string> = {};
  for (const [field, message] of required) {
    if (!value(field)) errors[field] = message;
  }

  const email = value("email");
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Dit e mailadres lijkt niet te kloppen.";
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
    const sent = await sendQuoteMail(aanvraag);
    if (!sent) {
      // No SMTP credentials in this environment. Log it so a local or preview
      // run still shows the submission instead of silently dropping it.
      console.warn("[offerteaanvraag] SMTP niet geconfigureerd", aanvraag);
    }
  } catch (error) {
    console.error("[offerteaanvraag] versturen mislukt", error);
    return {
      status: "error",
      name: aanvraag.naam,
      errors: {
        form: "Uw aanvraag kon niet worden verstuurd. Probeer het opnieuw of bel ons direct.",
      },
    };
  }

  return { status: "sent", name: aanvraag.naam, errors: {} };
}
