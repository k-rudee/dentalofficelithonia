import Link from "next/link";

const base =
  "inline-flex w-full items-center justify-center gap-2 rounded-none px-5 py-3 text-[0.95rem] font-medium tracking-wide transition-[background-color,border-color,color,box-shadow] duration-200 sm:w-auto";

const variants = {
  primary:
    "bg-navy text-cream hover:bg-navy-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne",
  secondary:
    "border border-navy/20 bg-cream text-navy hover:border-champagne hover:bg-ivory",
  ghost: "text-navy underline-offset-4 hover:underline",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const external =
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("http") ||
    href.endsWith(".pdf");
  if (external) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
