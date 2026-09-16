import Link from "next/link";
import type { Service } from "@/lib/services";
import { ServiceIcon } from "./Icons";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col bg-cream p-6 ring-1 ring-navy/10 transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:ring-champagne"
    >
      <span className="text-navy">
        <ServiceIcon name={service.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-4 font-serif text-xl text-navy group-hover:text-navy-deep">
        {service.shortTitle}
      </h3>
      <p className="mt-2 flex-1 text-sm text-ink/80">{service.cardLine}</p>
      <span className="mt-4 text-sm font-medium text-navy">Learn more</span>
    </Link>
  );
}
