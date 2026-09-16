"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site, telHref } from "@/lib/site";

export function StickyCallBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onFocusIn = (e: FocusEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.matches("input, textarea, select")) setHidden(true);
    };
    const onFocusOut = (e: FocusEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.matches("input, textarea, select")) {
        requestAnimationFrame(() => {
          const active = document.activeElement;
          if (
            !active ||
            !(active instanceof HTMLElement) ||
            !active.matches("input, textarea, select")
          ) {
            setHidden(false);
          }
        });
      }
    };
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-champagne/50 bg-cream/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgba(1,42,74,0.08)] md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={telHref()}
          className="bg-navy px-3 py-3 text-center text-sm font-medium text-cream"
        >
          Call {site.phoneDisplay}
        </a>
        <Link
          href="/contact#request"
          className="border border-navy/20 bg-cream px-3 py-3 text-center text-sm font-medium text-navy"
        >
          Request appointment
        </Link>
      </div>
    </div>
  );
}
