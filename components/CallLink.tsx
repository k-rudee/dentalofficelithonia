import { site, telHref } from "@/lib/site";
import { IconPhone } from "./Icons";

type Props = {
  className?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
};

export function CallLink({ className = "", showIcon = false, children }: Props) {
  return (
    <a href={telHref()} className={className}>
      {showIcon ? <IconPhone className="h-4 w-4 shrink-0" /> : null}
      {children ?? `Call ${site.phoneDisplay}`}
    </a>
  );
}
