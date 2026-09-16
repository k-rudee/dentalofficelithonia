import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getService, services } from "@/lib/services";
import { site, telHref } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.h1,
    description: service.lede,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <main id="main" className="pb-20 md:pb-0">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Services", path: "/services" },
          { name: service.shortTitle, path: `/services/${service.slug}` },
        ])}
      />
      <section className="border-b border-champagne/30 bg-ivory">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <p className="kicker">{site.name}</p>
          <h1 className="mt-3 max-w-3xl font-serif text-[2.1rem] leading-tight md:text-4xl">
            {service.h1}
          </h1>
          <p className="mt-4 max-w-xl text-ink/85">{service.lede}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={telHref()}>Call {site.phoneDisplay}</Button>
            <Button href="/contact#request" variant="secondary">
              Request appointment
            </Button>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 py-6">
        <Breadcrumbs
          items={[
            { href: "/services", label: "Services" },
            { href: `/services/${service.slug}`, label: service.shortTitle },
          ]}
        />
      </div>
      <article className="mx-auto max-w-3xl px-4 pb-14">
        {service.body.map((p) => (
          <p key={p} className="mt-4 text-ink/85">
            {p}
          </p>
        ))}
        <h2 className="mt-10 font-serif text-2xl">Who it’s for</h2>
        <p className="mt-3 text-ink/85">{service.who}</p>
        <h2 className="mt-10 font-serif text-2xl">What a visit is like</h2>
        <p className="mt-3 text-ink/85">{service.visit}</p>
        {service.nitrous ? (
          <p className="mt-6 border-l-4 border-champagne bg-cream px-4 py-3 text-ink/85">
            Laughing gas (nitrous) is available if you have anxiety.{" "}
            <Link href="/services/comfort-dentistry" className="link-navy">
              Learn about comfort dentistry
            </Link>
            .
          </p>
        ) : null}
        <p className="mt-6 text-sm text-ink/70">
          Questions about coverage?{" "}
          <Link href="/insurance" className="link-navy">
            See insurance we accept
          </Link>
          . New here?{" "}
          <Link href="/new-patients" className="link-navy">
            New patient guide
          </Link>
          .
        </p>
      </article>
      <CtaBand />
    </main>
  );
}
