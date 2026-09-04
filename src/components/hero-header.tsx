import Image from "next/image";
import type { ReactNode } from "react";

type HeroHeaderProps = {
  kicker: string;
  title: string;
  lede?: string;
  /** Image basename in /public/images, without the extension. */
  image: string;
  alt: string;
  children?: ReactNode;
};

/** The photo hero at the top of every interior page. */
export function HeroHeader({ kicker, title, lede, image, alt, children }: HeroHeaderProps) {
  return (
    <section className="hero hero--short">
      <div className="hero__media">
        <Image src={`/images/${image}.jpg`} alt={alt} fill priority sizes="100vw" />
      </div>
      <div className="hero__scrim" />
      <div className="hero__body">
        <p className="kicker kicker--accent">{kicker}</p>
        <h1 className="title-page">{title}</h1>
        {lede ? <p className="hero__lede">{lede}</p> : null}
        {children}
      </div>
    </section>
  );
}
