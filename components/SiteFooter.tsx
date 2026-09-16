import Link from "next/link";
import { HoursList } from "./HoursList";
import { NapBlock } from "./NapBlock";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-champagne/40 bg-navy text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl text-cream">{site.name}</p>
          <p className="mt-1 text-sm text-champagne-soft">{site.doctor}</p>
          <div className="mt-5 text-sm text-champagne-soft [&_a]:text-cream">
            <NapBlock />
          </div>
        </div>
        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-champagne">
            Hours
          </h2>
          <div className="mt-4 text-sm [&_dd]:text-cream [&_dt]:text-champagne-soft">
            <HoursList compact />
          </div>
          <p className="mt-3 text-sm text-champagne-soft">
            Request an appointment — we’ll confirm quickly.
          </p>
        </div>
        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-champagne">
            Insurance
          </h2>
          <p className="mt-4 text-sm text-champagne-soft">
            PPO plans including Aetna, Cigna, Delta Dental Premier, Guardian, and
            more.
          </p>
          <p className="mt-2 text-sm text-champagne-soft">{site.exclusions[0]}</p>
          <p className="text-sm text-champagne-soft">{site.exclusions[1]}</p>
          <Link
            href="/insurance"
            className="mt-3 inline-block text-sm text-cream underline underline-offset-4"
          >
            See if we accept your plan
          </Link>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <a href={site.facebook} className="underline-offset-4 hover:underline">
              Facebook
            </a>
            <a
              href={site.writeReviewUrl}
              className="underline-offset-4 hover:underline"
            >
              Write a Google review
            </a>
            <Link href="/reviews" className="underline-offset-4 hover:underline">
              Read reviews
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-xs text-champagne-soft">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-cream">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-cream">
              Terms
            </Link>
            <Link href="/blog" className="hover:text-cream">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
