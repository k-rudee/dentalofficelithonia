import Link from "next/link";
import { site } from "@/lib/site";
import { IconStar } from "./Icons";

export function TrustBar() {
  const items = [
    {
      href: "/reviews",
      label: `${site.ratingValue} Google rating · ${site.reviewCount} reviews`,
      icon: true,
    },
    { href: "/new-patients", label: `New patients ages ${site.newPatientAge}+` },
    { href: "/services/comfort-dentistry", label: "Nitrous for anxiety" },
    { href: "/insurance", label: "PPO insurance accepted" },
  ];

  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className="inline-flex items-center gap-1.5 border border-navy/15 bg-cream px-3 py-1.5 text-sm text-navy hover:border-champagne"
          >
            {"icon" in item && item.icon ? (
              <IconStar className="h-3.5 w-3.5 text-champagne" />
            ) : null}
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
