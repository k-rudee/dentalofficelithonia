import { site } from "@/lib/site";

export function InsuranceList({
  showExclusions = true,
}: {
  showExclusions?: boolean;
}) {
  return (
    <div>
      <p className="mb-4 text-ink/80">{site.insuranceIntro}</p>
      <ul className="grid gap-2 sm:grid-cols-2">
        {site.insurance.map((plan) => (
          <li
            key={plan}
            className="border-l-[3px] border-champagne bg-cream px-4 py-2 text-navy"
          >
            {plan}
          </li>
        ))}
      </ul>
      {showExclusions ? (
        <ul className="mt-5 space-y-1 text-sm text-ink/80">
          {site.exclusions.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
