"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { images } from "@/lib/assets";
import { services } from "@/lib/services";
import { site, telHref } from "@/lib/site";
import { CallLink } from "./CallLink";

const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", children: true },
  { href: "/new-patients", label: "New patients" },
  { href: "/insurance", label: "Insurance" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-champagne/50 bg-cream/95 backdrop-blur">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 transition-[padding] duration-200 ${
          compact ? "py-2" : "py-3"
        }`}
      >
        <Link href="/" className="shrink-0" aria-label={`${site.name} home`}>
          <Image
            src={images.logo.src}
            alt={images.logo.alt}
            width={280}
            height={90}
            className={`w-auto transition-[height] duration-200 ${compact ? "h-9 sm:h-10" : "h-10 sm:h-11"}`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {nav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`text-sm text-navy hover:text-navy-deep ${
                    pathname.startsWith("/services") ? "underline" : ""
                  }`}
                >
                  {item.label}
                </Link>
                <ul className="invisible absolute left-0 top-full z-50 min-w-56 border border-navy/10 bg-cream py-2 opacity-0 shadow-sm transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="block px-4 py-2 text-sm text-ink hover:bg-ivory"
                      >
                        {s.shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm text-navy hover:text-navy-deep ${
                  pathname === item.href ? "underline" : ""
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CallLink
            className="tabular text-sm font-medium text-navy hover:text-navy-deep"
            showIcon
          >
            {site.phoneDisplay}
          </CallLink>
          <Link
            href="/contact#request"
            className="bg-navy px-4 py-2 text-sm font-medium text-cream hover:bg-navy-deep"
          >
            Request appointment
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={telHref()}
            className="border border-navy/15 p-2 text-navy"
            aria-label={`Call ${site.phoneDisplay}`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                d="M7 3.8h3.2l1 4.2-2 1.2a12 12 0 0 0 5.6 5.6l1.2-2 4.2 1V17a2.2 2.2 0 0 1-2.4 2.2A15.2 15.2 0 0 1 4.8 6.2 2.2 2.2 0 0 1 7 3.8Z"
              />
            </svg>
          </a>
          <button
            type="button"
            className="border border-navy/15 px-3 py-2 text-sm text-navy"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-navy/10 bg-cream px-4 py-4 lg:hidden"
        >
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-1 text-navy">
                  {item.label}
                </Link>
                {item.children ? (
                  <ul className="ml-3 mt-1 space-y-1 border-l border-champagne/60 pl-3">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="block py-1 text-sm text-ink/80"
                        >
                          {s.shortTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
            <li>
              <Link href="/contact#request" className="block py-2 font-medium text-navy">
                Request appointment
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
