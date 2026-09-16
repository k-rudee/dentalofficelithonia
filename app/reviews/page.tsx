import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ReviewCard } from "@/components/ReviewCard";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Patient Reviews in Lithonia, GA",
  description: `Google reviews for ${site.name}: ${site.ratingValue} from ${site.reviewCount} reviews (as shown on the practice site as of ${site.ratingAsOf}).`,
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <main id="main" className="pb-20 md:pb-0">
      <JsonLd data={breadcrumbSchema([{ name: "Reviews", path: "/reviews" }])} />
      <PageHero
        eyebrow={`Google ${site.ratingValue} · ${site.reviewCount} reviews`}
        title="Patient reviews"
        lede="Names and substance from Google reviews published on the current practice site. Grammar polished lightly; voice preserved."
      />
      <div className="mx-auto max-w-6xl px-4 py-6">
        <Breadcrumbs items={[{ href: "/reviews", label: "Reviews" }]} />
      </div>
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <p className="text-sm text-ink/70">
          Rating cited from the live website widgets on {site.ratingAsOf}.
          Recheck Google Business Profile at launch.
        </p>
        <div className="mt-6">
          <Button href={site.writeReviewUrl} variant="secondary">
            Write a Google review
          </Button>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {testimonials.map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
