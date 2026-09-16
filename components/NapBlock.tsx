import { mailtoHref, site, telHref } from "@/lib/site";

export function NapBlock() {
  return (
    <address className="not-italic space-y-2">
      <p className="font-medium">{site.name}</p>
      <p>
        <a
          href={site.mapsPlaceUrl}
          className="underline-offset-4 hover:underline"
        >
          {site.address}
        </a>
      </p>
      <p>
        <a
          href={telHref()}
          className="tabular underline-offset-4 hover:underline"
        >
          {site.phoneDisplay}
        </a>
      </p>
      <p>
        <a
          href={mailtoHref()}
          className="break-all underline-offset-4 hover:underline"
        >
          {site.email}
        </a>
      </p>
    </address>
  );
}
