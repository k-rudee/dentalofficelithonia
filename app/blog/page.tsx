import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Lithonia Dental Tips",
  description:
    "Local notes for patients in Lithonia, Stonecrest, Conyers, and DeKalb County from The Dental Office of Lithonia.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <main id="main" className="pb-20 md:pb-0">
      <section className="mx-auto max-w-3xl px-4 py-12">
        <Breadcrumbs items={[{ href: "/blog", label: "Blog" }]} />
        <h1 className="mt-6 font-serif text-4xl">From the office</h1>
        <p className="mt-3 text-ink/80">
          Short guides for Lithonia and nearby patients. Informational only —
          not a diagnosis.
        </p>
        <ul className="mt-10 space-y-6">
          {posts.map((post) => (
            <li key={post.slug} className="border-l-2 border-champagne pl-4">
              <Link
                href={`/blog/${post.slug}`}
                className="font-serif text-2xl text-navy hover:text-navy-deep"
              >
                {post.title}
              </Link>
              <p className="mt-2 text-ink/80">{post.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
