import Image from "next/image";
import Link from "next/link";

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="flex items-center">
      <Image
        src="/nucentra-logo.png"
        alt="Nucentra"
        width={250}
        height={60}
        className="h-10 w-auto md:h-12 lg:h-14"
        priority
      />
    </Link>
  );
}

export function FooterLogo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="flex items-center">
      <Image
        src="/nucentra-icon-slate.png"
        alt="Nucentra"
        width={80}
        height={80}
        className="h-10 w-auto md:h-12 lg:h-14"
        priority
      />
    </Link>
  );
}
