type IconProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconCheckup({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path {...stroke} d="M12 3.5c1.8 2.2 3 4.6 3 7.2 0 3.3-1.3 5.8-3 7.8-1.7-2-3-4.5-3-7.8 0-2.6 1.2-5 3-7.2Z" />
      <path {...stroke} d="M9 11.5h6M12 8.5v6" />
    </svg>
  );
}

export function IconCosmetic({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path {...stroke} d="M8 14c.8 2 2.2 3.5 4 3.5s3.2-1.5 4-3.5" />
      <path {...stroke} d="M7 11.5V10a5 5 0 0 1 10 0v1.5" />
      <path {...stroke} d="M12 4v2M5 8l1.2 1M19 8l-1.2 1" />
    </svg>
  );
}

export function IconWhitening({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path {...stroke} d="M12 4.5 13.2 8h3.6L14.4 10.4 15.6 14 12 11.9 8.4 14l1.2-3.6L6.2 8h3.6L12 4.5Z" />
      <path {...stroke} d="M6 17.5h12" />
    </svg>
  );
}

export function IconFilling({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path {...stroke} d="M8 6.5c2-.8 6-.8 8 0 1.2.5 2 1.8 2 3.2 0 4-2.2 8.8-4 10.3-.6.5-1.4.5-2 0C10.2 18.5 8 13.7 8 9.7c0-1.4.8-2.7 2-3.2Z" />
    </svg>
  );
}

export function IconCrown({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path {...stroke} d="M5 16.5 7 8l5 4 5-4 2 8.5H5Z" />
      <path {...stroke} d="M6 19h12" />
    </svg>
  );
}

export function IconImplant({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path {...stroke} d="M9 6.5h6v3.5H9z" />
      <path {...stroke} d="M12 10v8M10 13.5h4M10 16h4" />
    </svg>
  );
}

export function IconExtraction({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path {...stroke} d="M8 5.5h8l-1 5.5H9L8 5.5Z" />
      <path {...stroke} d="M10 11v7.5M14 11v7.5" />
    </svg>
  );
}

export function IconComfort({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path {...stroke} d="M6 14.5c0-3.6 2.5-6 6-6s6 2.4 6 6" />
      <path {...stroke} d="M8.5 15.5c.7 1.4 1.9 2.2 3.5 2.2s2.8-.8 3.5-2.2" />
      <path {...stroke} d="M5 10c1.2-1 2.2-1.3 3.2-.8M19 10c-1.2-1-2.2-1.3-3.2-.8" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        {...stroke}
        d="M7 3.8h3.2l1 4.2-2 1.2a12 12 0 0 0 5.6 5.6l1.2-2 4.2 1V17a2.2 2.2 0 0 1-2.4 2.2A15.2 15.2 0 0 1 4.8 6.2 2.2 2.2 0 0 1 7 3.8Z"
      />
    </svg>
  );
}

export function IconStar({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="m12 3.5 2.3 5.1 5.5.6-4.1 3.7 1.2 5.4L12 15.7 7.1 18.3l1.2-5.4-4.1-3.7 5.5-.6L12 3.5Z"
      />
    </svg>
  );
}

const map = {
  checkup: IconCheckup,
  cosmetic: IconCosmetic,
  whitening: IconWhitening,
  filling: IconFilling,
  crown: IconCrown,
  implant: IconImplant,
  extraction: IconExtraction,
  comfort: IconComfort,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: keyof typeof map;
  className?: string;
}) {
  const Cmp = map[name];
  return <Cmp className={className} />;
}
