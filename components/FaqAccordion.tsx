"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/faq";

export function FaqAccordion({ items }: { items: readonly FaqItem[] | FaqItem[] }) {
  const [open, setOpen] = useState<string | null>(items[0]?.question ?? null);

  return (
    <div className="divide-y divide-navy/10 border-y border-navy/10">
      {items.map((item) => {
        const isOpen = open === item.question;
        const id = item.question.replace(/\W+/g, "-").toLowerCase();
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 py-4 text-left font-medium text-navy"
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => setOpen(isOpen ? null : item.question)}
              >
                {item.question}
                <span aria-hidden className="text-champagne">
                  {isOpen ? "–" : "+"}
                </span>
              </button>
            </h3>
            <div id={id} hidden={!isOpen} className="pb-4 text-ink/85">
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
