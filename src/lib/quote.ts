export type QuoteState = {
  status: "idle" | "error" | "sent";
  name: string;
  errors: Record<string, string>;
};

export const emptyQuoteState: QuoteState = { status: "idle", name: "", errors: {} };
