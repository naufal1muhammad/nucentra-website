import Link from "next/link";
import { FooterLogo } from "./logo";

const footer = {
  Services: [
    { href: "/#services", label: "Risk Assessment" },
    { href: "/#services", label: "Home Testing Kits" },
    { href: "/#services", label: "Specialist Consults" },
    { href: "/#services", label: "Clinical Reports" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/#", label: "Our Doctors" },
    { href: "/#", label: "Careers" },
    { href: "/#", label: "Contact" },
  ],
  Legal: [
    { href: "/#", label: "Privacy Policy" },
    { href: "/#", label: "Terms of Service" },
    { href: "/#", label: "Cookie Policy" },
    { href: "/#", label: "HIPAA Compliance" },
  ],
} as const;

export function MarketingFooter() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="[&_span]:text-white">
              <FooterLogo />
            </div>
            <p className="text-sm leading-6 text-slate-400">
              Dedicated to advancing colorectal health through proactive
              surveillance and clinical excellence.
            </p>
            <div className="flex items-center gap-3 text-slate-400">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-800">
                f
              </span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-800">
                in
              </span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-800">
                x
              </span>
            </div>
          </div>

          {Object.entries(footer).map(([title, links]) => (
            <div key={title} className="space-y-3">
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-slate-200">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-900 pt-6 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Nucentra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
