import Link from "next/link";
import { ShieldIcon } from "../ui/icons";

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="flex items-center gap-2">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-600 text-white shadow-sm">
        <ShieldIcon className="h-5 w-5" />
      </span>
      <span className="text-sm font-semibold tracking-tight text-slate-900">
        Nucentra
      </span>
    </Link>
  );
}
