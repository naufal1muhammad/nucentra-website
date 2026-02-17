import Image from "next/image";
import Link from "next/link";

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="flex items-center">
      <Image
        src="/nucentra-logo.png"
        alt="Nucentra"
        width={140}
        height={32}
        className="h-8 w-auto"
        priority
      />
    </Link>
  );
}
