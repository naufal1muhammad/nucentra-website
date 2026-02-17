import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { MarketingFooter } from "./_components/marketing/marketing-footer";
import { MarketingHeader } from "./_components/marketing/marketing-header";
import {
  ArrowRightIcon,
  BellIcon,
  ClipboardIcon,
  PulseIcon,
} from "./_components/ui/icons";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-primary text-slate-900">
      <MarketingHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary to-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:flex lg:items-center lg:gap-12 lg:py-20">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary-soft px-3 py-1 text-xs font-semibold text-secondary-ink">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
                LEADING COLORECTAL SURVEILLANCE
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                Proactive <span className="text-secondary">Colorectal Health</span>
                <br className="hidden sm:block" />
                Management
              </h1>

              <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
                Advanced diagnostic surveillance designed to detect risks early.
                Take control of your long-term health with expert-led clinical
                monitoring and personalized screening protocols.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-secondary-hover"
                >
                  Check My Eligibility
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <Link
                  href="/#how-it-works"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                >
                  Learn More
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                </div>
                <span>Trusted by over 15,000+ patients nationwide</span>
              </div>
            </div>

            <div className="relative mt-12 w-full max-w-xl lg:mt-0">
              <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                <div className="relative h-[340px] w-full overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src="/hero.png"
                    alt="Clinician reviewing a digital health dashboard"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promise */}
        <section id="services" className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <p className="text-center text-[11px] font-semibold tracking-[0.22em] text-secondary">
              THE PROMISE
            </p>
            <h2 className="mt-3 text-center text-3xl font-semibold tracking-tight">
              Our Commitment to Your Longevity
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-slate-600">
              We bridge the gap between reactive treatment and proactive
              prevention with comprehensive colorectal monitoring.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <FeatureCard
                icon={<PulseIcon className="h-5 w-5" />}
                title="Advanced Diagnostics"
                desc="Utilizing cutting-edge biomarker screening and non-invasive initial assessments for a comprehensive health profile."
              />
              <FeatureCard
                icon={<ClipboardIcon className="h-5 w-5" />}
                title="Expert Oversight"
                desc="Every report is reviewed by board-certified gastroenterologists to ensure the highest standard of clinical care."
              />
              <FeatureCard
                icon={<BellIcon className="h-5 w-5" />}
                title="Real-time Alerts"
                desc="Continuous monitoring means we notify you immediately if any risks are detected, ensuring timely intervention."
              />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/device-illustration.png"
                    alt="Medical device illustration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-6 right-6 max-w-[260px] rounded-2xl bg-secondary px-5 py-4 text-white shadow-lg">
                  <p className="text-sm font-semibold">“95% Early Detection Rate”</p>
                  <p className="mt-1 text-xs leading-5 text-white/90">
                    In clinical trials using our integrated surveillance protocol.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight">
                  The Path to Prevention
                </h2>
                <div className="mt-8 space-y-6">
                  <Step
                    n={1}
                    title="Registration & History"
                    desc="Complete a comprehensive medical questionnaire and risk factor assessment to customize your plan."
                  />
                  <Step
                    n={2}
                    title="Screening Schedule"
                    desc="Receive a tailored surveillance timeline including home-based tests and clinical appointments."
                  />
                  <Step
                    n={3}
                    title="Ongoing Monitoring"
                    desc="Continuous analysis of results with immediate specialist consultation if any red flags appear."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="rounded-3xl bg-secondary px-6 py-14 text-center text-white shadow-xl sm:px-12">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to prioritize your colorectal health?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/85">
                Join thousands of patients who have chosen proactive monitoring
                over reactive treatment. Your journey to peace of mind starts
                today.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/register"
                  className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-secondary-ink shadow-sm transition hover:bg-secondary-soft"
                >
                  Register Now
                </Link>
                <Link
                  href="/#"
                  className="rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white/15"
                >
                  View Pricing Plans
                </Link>
              </div>

              <p className="mt-6 text-xs text-white/80">
                HIPAA Compliant &bull; Secure Data Management
              </p>
            </div>
          </div>
        </section>

        {/* Resources anchor (placeholder) */}
        <section id="resources" className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Resources</span>
              <span className="ml-2">
                Educational materials and FAQs can live here.
              </span>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary-soft text-secondary-ink">
        {icon}
      </div>
      <h3 className="mt-4 text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
    </div>
  );
}

function Step({
  n,
  title,
  desc,
}: {
  n: number;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-white shadow-sm">
        {n}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
      </div>
    </div>
  );
}
