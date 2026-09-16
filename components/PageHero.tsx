import { Button } from "./Button";
import { telHref } from "@/lib/site";
import { site } from "@/lib/site";

type Props = {
  eyebrow?: string;
  title: string;
  lede: string;
};

export function PageHero({ eyebrow, title, lede }: Props) {
  return (
    <section className="border-b border-champagne/30 bg-ivory">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {eyebrow ? <p className="kicker stagger-1">{eyebrow}</p> : null}
        <h1 className="mt-3 max-w-3xl font-serif text-[2.25rem] leading-[1.12] text-navy md:text-[3rem]">
          {title}
        </h1>
        <p className="stagger-2 mt-4 max-w-xl text-ink/85">{lede}</p>
        <div className="stagger-3 mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href={telHref()}>Call {site.phoneDisplay}</Button>
          <Button href="/contact#request" variant="secondary">
            Request appointment
          </Button>
        </div>
      </div>
    </section>
  );
}
