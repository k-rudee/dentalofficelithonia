import Link from "next/link";

export function Breadcrumbs({
  items,
}: {
  items: { href: string; label: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-ink/70">
      <ol className="flex flex-wrap gap-2">
        <li>
          <Link href="/" className="hover:text-navy">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.href} className="flex gap-2">
            <span aria-hidden>/</span>
            {i === items.length - 1 ? (
              <span className="text-navy">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-navy">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
