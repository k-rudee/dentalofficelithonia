import type { Testimonial } from "@/lib/testimonials";

export function ReviewCard({
  review,
  snippet = false,
}: {
  review: Testimonial;
  snippet?: boolean;
}) {
  return (
    <figure className="flex h-full flex-col bg-cream p-6 ring-1 ring-navy/10">
      <span className="font-serif text-5xl leading-none text-champagne" aria-hidden>
        “
      </span>
      <blockquote className="-mt-4 flex-1 text-[1.05rem] leading-relaxed text-ink">
        {snippet ? review.snippet : review.quote}
      </blockquote>
      <figcaption className="mt-5 border-t border-champagne/40 pt-3 text-sm">
        <span className="font-medium text-navy">{review.name}</span>
        <span className="block text-ink/60">Google review</span>
      </figcaption>
    </figure>
  );
}
