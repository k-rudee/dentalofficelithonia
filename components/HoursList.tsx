import { site } from "@/lib/site";

export function HoursList({ compact = false }: { compact?: boolean }) {
  return (
    <dl className={compact ? "grid gap-1 text-sm" : "grid gap-1.5"}>
      {site.hoursRows.map((row) => (
        <div key={row.days} className="flex justify-between gap-6 tabular">
          <dt>{row.days}</dt>
          <dd className="font-medium">{row.hours}</dd>
        </div>
      ))}
    </dl>
  );
}
