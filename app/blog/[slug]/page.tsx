import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { getPost, posts } from "@/lib/blog";
import { site, telHref } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main id="main" className="pb-20 md:pb-0">
      <article className="mx-auto max-w-3xl px-4 py-12">
        <Breadcrumbs
          items={[
            { href: "/blog", label: "Blog" },
            { href: `/blog/${post.slug}`, label: post.title },
          ]}
        />
        <p className="mt-6 text-sm text-ink/60">{post.date} · {site.name}</p>
        <h1 className="mt-2 font-serif text-4xl leading-tight">{post.title}</h1>
        {post.body.map((block, i) => (
          <section key={i} className="mt-8">
            {block.heading ? (
              <h2 className="font-serif text-2xl">{block.heading}</h2>
            ) : null}
            {block.paragraphs.map((p) => (
              <p key={p} className="mt-3 text-ink/85">
                {p}
              </p>
            ))}
          </section>
        ))}
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={telHref()}>Call {site.phoneDisplay}</Button>
          <Button href="/new-patients" variant="secondary">
            New patient guide
          </Button>
          <Button href="/contact#request" variant="secondary">
            Request appointment
          </Button>
        </div>
        <p className="mt-6 text-sm">
          <Link href="/blog" className="link-navy">
            All posts
          </Link>
        </p>
      </article>
    </main>
  );
}
