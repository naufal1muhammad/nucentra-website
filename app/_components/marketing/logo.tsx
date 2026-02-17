import Image from "next/image";
import Link from "next/link";

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="flex items-center">
      <Image
        src="/nucentra-logo.png"
        alt="Nucentra"
        width={300}
        height={70}
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
        src="/nucentra-icon-bww.png"
        alt="Nucentra"
        width={80}
        height={80}
        className="h-10 w-auto md:h-12 lg:h-14"
        priority
      />
    </Link>
  );
}
