"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { projectTypeOptions, site } from "@/content";
import { submitQuote } from "@/lib/actions";
import { emptyQuoteState, type QuoteState } from "@/lib/quote";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn--accent form__submit" disabled={pending}>
      {pending ? "Versturen…" : "Verstuur aanvraag"}
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

export function ContactForm() {
  const [state, formAction] = useActionState<QuoteState, FormData>(submitQuote, emptyQuoteState);

  if (state.status === "sent") {
    return (
      <div className="sent">
        <p className="kicker kicker--accent">Aanvraag verstuurd</p>
        <h2>Bedankt, {state.name || "voor uw aanvraag"}</h2>
        <p>
          We hebben uw aanvraag ontvangen en reageren binnen één werkdag. Heeft u het snel nodig,
          bel dan direct: {site.phone}.
        </p>
        <a href="/contact" className="btn btn--sm btn--outline-light">
          Nieuwe aanvraag
        </a>
      </div>
    );
  }

  return (
    <form action={formAction} className="form" noValidate>
      <h2 className="title-block">Offerte aanvragen</h2>

      <div className="form__grid">
        <Field name="naam" label="Naam" error={state.errors.naam} />
        <Field name="telefoon" label="Telefoonnummer" type="tel" error={state.errors.telefoon} />
        <Field name="email" label="E mailadres" type="email" error={state.errors.email} />
        <Field name="locatie" label="Locatie van het project" error={state.errors.locatie} />
      </div>

      <label className="field">
        <span>Type project</span>
        <select name="type" defaultValue="" required>
          <option value="" disabled>
            Maak een keuze
          </option>
          {projectTypeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {state.errors.type ? <span className="field__error">{state.errors.type}</span> : null}
      </label>

      <label className="field">
        <span>Bericht of korte omschrijving van de wensen</span>
        <textarea name="bericht" rows={5} />
      </label>

      {state.errors.form ? (
        <p className="form__error" role="alert">
          {state.errors.form}
        </p>
      ) : null}

      <SubmitButton />
    </form>
  );
}
