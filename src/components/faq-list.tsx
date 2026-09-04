"use client";

import { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { faqs } from "@/content";

export function FaqList() {
  const [open, setOpen] = useState(0);

  return (
    <div>
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div className="faq__row" key={faq.q}>
            <h2>
              <button
                type="button"
                className="faq__q"
                aria-expanded={isOpen}
                aria-controls={`faq-antwoord-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{faq.q}</span>
                {isOpen ? (
                  <LuMinus size={26} color="var(--accent)" strokeWidth={2.4} aria-hidden />
                ) : (
                  <LuPlus size={26} color="var(--accent)" strokeWidth={2.4} aria-hidden />
                )}
              </button>
            </h2>
            {isOpen ? (
              <p className="faq__a" id={`faq-antwoord-${i}`}>
                {faq.a}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
