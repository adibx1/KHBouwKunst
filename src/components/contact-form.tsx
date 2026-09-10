"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitQuote } from "@/lib/actions";
import { emptyQuoteState, type QuoteState } from "@/lib/quote";

type Labels = {
  title: string;
  naam: string;
  telefoon: string;
  email: string;
  locatie: string;
  type: string;
  typePlaceholder: string;
  bericht: string;
  submit: string;
  submitting: string;
  sentKicker: string;
  sentTitle: string;
  sentText: string;
  sentAgain: string;
  options: string[];
};

function SubmitButton({ labels }: { labels: Labels }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn--accent form__submit" disabled={pending}>
      {pending ? labels.submitting : labels.submit}
    </button>
  );
}

function Field({
  name,
  label,
  type = "text",
  error,
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <input
        name={name}
        type={type}
        required
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-fout` : undefined}
      />
      {error ? (
        <span className="field__error" id={`${name}-fout`}>
          {error}
        </span>
      ) : null}
    </label>
  );
}

export function ContactForm({
  labels,
  locale,
  contactHref,
  phone,
}: {
  labels: Labels;
  locale: string;
  contactHref: string;
  phone: string;
}) {
  const [state, formAction] = useActionState<QuoteState, FormData>(submitQuote, emptyQuoteState);

  if (state.status === "sent") {
    return (
      <div className="sent">
        <p className="kicker kicker--accent">{labels.sentKicker}</p>
        <h2>
          {labels.sentTitle}
          {state.name ? `, ${state.name}` : ""}
        </h2>
        <p>
          {labels.sentText} {phone}
        </p>
        <a href={contactHref} className="btn btn--sm btn--outline-light">
          {labels.sentAgain}
        </a>
      </div>
    );
  }

  return (
    <form action={formAction} className="form" noValidate>
      <h2 className="title-block">{labels.title}</h2>

      <input type="hidden" name="locale" value={locale} />

      <div className="form__grid">
        <Field name="naam" label={labels.naam} error={state.errors.naam} />
        <Field name="telefoon" label={labels.telefoon} type="tel" error={state.errors.telefoon} />
        <Field name="email" label={labels.email} type="email" error={state.errors.email} />
        <Field name="locatie" label={labels.locatie} error={state.errors.locatie} />
      </div>

      <label className="field">
        <span>{labels.type}</span>
        <select name="type" defaultValue="" required>
          <option value="" disabled>
            {labels.typePlaceholder}
          </option>
          {labels.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {state.errors.type ? <span className="field__error">{state.errors.type}</span> : null}
      </label>

      <label className="field">
        <span>{labels.bericht}</span>
        <textarea name="bericht" rows={5} />
      </label>

      {state.errors.form ? (
        <p className="form__error" role="alert">
          {state.errors.form}
        </p>
      ) : null}

      <SubmitButton labels={labels} />
    </form>
  );
}
