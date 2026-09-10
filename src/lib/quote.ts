export type QuoteState = {
  status: "idle" | "error" | "sent";
  name: string;
  errors: Record<string, string>;
};

export const emptyQuoteState: QuoteState = { status: "idle", name: "", errors: {} };

export type Aanvraag = {
  naam: string;
  telefoon: string;
  email: string;
  locatie: string;
  type: string;
  bericht: string;
  ontvangen: string;
};
