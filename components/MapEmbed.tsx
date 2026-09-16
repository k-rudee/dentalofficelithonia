import { mapsEmbedSrc, site } from "@/lib/site";

export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <iframe
      title={`Map of ${site.name}`}
      src={mapsEmbedSrc()}
      className={`h-72 w-full border-0 ${className}`}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}
