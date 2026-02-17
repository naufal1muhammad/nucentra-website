import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { MarketingFooter } from "../_components/marketing/marketing-footer";
import { MarketingHeader } from "../_components/marketing/marketing-header";
import { CheckIcon, ShieldIcon } from "../_components/ui/icons";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary text-slate-900">
      <MarketingHeader />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary to-slate-50">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary-soft px-3 py-1 text-xs font-semibold text-secondary-ink">
                <ShieldIcon className="h-4 w-4" />
                ABOUT NUCENTRA
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                Built for proactive prevention,
                <span className="text-secondary"> backed by clinicians</span>.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                Nucentra helps people reduce colorectal cancer risk through
                evidence-informed screening, specialist review, and ongoing
                monitoring.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-secondary-hover"
                >
                  Start Registration
                </Link>
                <Link
                  href="/#services"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                >
                  Explore Services
                </Link>
              </div>

              <div className="mt-10 grid gap-3 text-sm text-slate-600">
                <Bullet>Board-certified specialist review</Bullet>
                <Bullet>Secure handling of patient data</Bullet>
                <Bullet>Personalized surveillance schedules</Bullet>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-slate-200 bg-white p-2 shadow-xl">
                <div className="relative h-[360px] overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="/hero.png"
                    alt="Clinical team workflow"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 left-6 hidden max-w-[320px] rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600 shadow-lg lg:block">
                <p className="font-semibold text-slate-900">Why we exist</p>
                <p className="mt-2 leading-6">
                  Early detection saves lives. We make proactive monitoring
                  accessible, clear, and clinician-led.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] text-secondary">
                  OUR APPROACH
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  A simple model: assess, screen, monitor.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  We combine risk stratification with non-invasive screening and
                  clinician oversight. When something changes, you get clear
                  guidance on what to do next.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <ValueCard
                  title="Clinical Rigor"
                  desc="Protocols aligned to established medical guidance and continually reviewed."
                />
                <ValueCard
                  title="Patient Clarity"
                  desc="Plain-language summaries, transparent next steps, and support when you need it."
                />
                <ValueCard
                  title="Privacy First"
                  desc="Security-conscious design with least-access principles and strong encryption."
                />
                <ValueCard
                  title="Actionable Monitoring"
                  desc="Continuous evaluation with prompt alerts for meaningful changes."
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Ready to begin your surveillance plan?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Registration takes only a few minutes. A specialist will
                    review your intake and recommend a schedule.
                  </p>
                </div>
                <Link
                  href="/register"
                  className="rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-secondary-hover"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-secondary-soft text-secondary-ink">
        <CheckIcon className="h-3.5 w-3.5" />
      </span>
      <span>{children}</span>
    </div>
  );
}

function ValueCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
    </div>
  );
}
