import Image from "next/image";
import type { ReactNode } from "react";

type HeroHeaderProps = {
  kicker: string;
  title: string;
  lede?: string;
  /** Image basename in /public/images, without extension. */
  image: string;
  alt: string;
  priority?: boolean;
  children?: ReactNode;
};

/** Photo hero used at the top of every page. */
export function HeroHeader({
  kicker,
  title,
  lede,
  image,
  alt,
  priority = true,
  children,
}: HeroHeaderProps) {
  return (
    <section className="hero hero--short">
      <div className="hero__media">
        <Image
          src={`/images/${image}.jpg`}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="hero__scrim" />
      <div className="hero__body">
        <p className="kicker kicker--accent" style={{ marginBottom: 16 }}>
          {kicker}
        </p>
        <h1 className="title-page" style={{ marginBottom: lede || children ? 22 : 0 }}>
          {title}
        </h1>
        {lede ? <p className="hero__lede">{lede}</p> : null}
        {children}
      </div>
    </section>
  );
}
