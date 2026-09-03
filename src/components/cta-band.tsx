import Link from "next/link";

type CtaBandProps = {
  heading: string;
  text?: string;
  buttonLabel: string;
  href?: string;
  tone?: "accent" | "ink";
};

/** The closing call-to-action band that ends most pages. */
export function CtaBand({
  heading,
  text,
  buttonLabel,
  href = "/contact",
  tone = "accent",
}: CtaBandProps) {
  const onAccent = tone === "accent";

  return (
    <section className={onAccent ? "band-accent" : "band-ink"}>
      <div className="wrap pad-lg cta">
        <div>
          <h2
            className="title-band"
            style={{ color: onAccent ? "var(--ink)" : "var(--light)" }}
          >
            {heading}
          </h2>
          {text ? (
            <p style={{ color: onAccent ? "var(--accent-ink)" : "var(--light-3)" }}>{text}</p>
          ) : null}
        </div>
        <Link href={href} className={`btn ${onAccent ? "btn--ink" : "btn--accent"}`}>
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
