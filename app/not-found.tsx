import { Button } from "@/components/Button";
import { site, telHref } from "@/lib/site";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="font-serif text-4xl">Page not found</h1>
      <p className="mt-4 text-ink/80">
        That address isn’t on this site. Call us or head back home.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Button href="/">Home</Button>
        <Button href={telHref()} variant="secondary">
          Call {site.phoneDisplay}
        </Button>
      </div>
    </main>
  );
}
