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
        className="h-8 w-auto"
        priority
      />
    </Link>
  );
}

export function FooterLogo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="flex items-center">
      <Image
        src="/nucentra-icon-bw.png"
        alt="Nucentra"
        width={80}
        height={80}
        className="h-8 w-auto"
        priority
      />
    </Link>
  );
}
