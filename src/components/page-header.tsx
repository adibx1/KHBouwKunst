import type { ReactNode } from "react";

type PageHeaderProps = {
  kicker: string;
  title: string;
  lede?: string;
  children?: ReactNode;
};

/** The ruled text header used by the interior index pages. */
export function PageHeader({ kicker, title, lede, children }: PageHeaderProps) {
  return (
    <div style={{ borderBottom: "var(--rule)" }}>
      <div className="wrap pad-lg">
        <p className="kicker" style={{ marginBottom: 16 }}>
          {kicker}
        </p>
        <h1 className="title-page" style={{ marginBottom: 22 }}>
          {title}
        </h1>
        {lede ? <p className="lede">{lede}</p> : null}
        {children}
      </div>
    </div>
  );
}
