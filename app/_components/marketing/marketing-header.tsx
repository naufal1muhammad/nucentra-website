import Link from "next/link";
import { Logo } from "./logo";

const nav = [
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/#how-it-works", label: "How it Works" },
  { href: "/#resources", label: "Resources" },
];

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-primary/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/register"
            className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-secondary-hover"
          >
            Register Now
          </Link>
        </div>
      </div>
    </header>
  );
}
