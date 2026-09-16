import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { site, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <main id="main" className="pb-20 md:pb-0">
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <h1 className="font-serif text-4xl">Thank you</h1>
        <p className="mt-4 text-lg text-ink/85">
          Thank you for contacting The Dental Office of Lithonia. We’ll get back
          to you as soon as we can.
        </p>
        <p className="mt-3 text-ink/80">
          If you need us sooner, call during {site.hoursShort}.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href={telHref()}>Call {site.phoneDisplay}</Button>
          <Button href="/" variant="secondary">
            Back to home
          </Button>
        </div>
      </section>
    </main>
  );
}
