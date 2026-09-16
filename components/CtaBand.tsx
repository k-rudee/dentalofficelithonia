import { Button } from "./Button";
import { site, telHref } from "@/lib/site";

export function CtaBand({
  title = "Request an appointment — we’ll confirm quickly.",
  text = `Open ${site.hoursShort}. ${site.hoursNote}.`,
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-navy text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 border-t-2 border-champagne px-4 py-12 md:flex-row md:items-center">
        <div>
          <h2 className="font-serif text-3xl text-cream">{title}</h2>
          <p className="mt-2 max-w-xl text-champagne-soft">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            href={telHref()}
            className="bg-cream text-navy hover:bg-champagne-soft"
          >
            Call {site.phoneDisplay}
          </Button>
          <Button
            href="/contact#request"
            variant="secondary"
            className="border-cream/40 bg-transparent text-cream hover:bg-cream/10"
          >
            Request appointment
          </Button>
        </div>
      </div>
    </section>
  );
}
