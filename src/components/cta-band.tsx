import Link from "next/link";

type CtaBandProps = {
  heading: string;
  text?: string;
  buttonLabel: string;
  href?: string;
  tone?: "accent" | "ink";
};

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
      <div className={`wrap pad-lg cta ${onAccent ? "cta--accent" : "cta--ink"}`}>
        <div>
          <h2 className="title-band">{heading}</h2>
          {text ? <p>{text}</p> : null}
        </div>
        <Link href={href} className={`btn ${onAccent ? "btn--ink" : "btn--accent"}`}>
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
