"use client";

import Link from "next/link";
import type { FormEvent, ReactNode } from "react";
import { useMemo, useState } from "react";
import {
  ClipboardIcon,
  LockIcon,
  MailIcon,
  ShieldIcon,
  UserIcon,
} from "../_components/ui/icons";

type SubmitState =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export default function RegisterPage() {
  const [submitState, setSubmitState] = useState<SubmitState>({ type: "idle" });

  const isSubmitting = submitState.type === "submitting";

  const statusText = useMemo(() => {
    if (submitState.type === "success") return submitState.message;
    if (submitState.type === "error") return submitState.message;
    return null;
  }, [submitState]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitState({ type: "submitting" });

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json: unknown = await res.json();

      if (!res.ok) {
        const message =
          typeof json === "object" && json && "error" in json
            ? String((json as { error?: unknown }).error ?? "Request failed")
            : "Request failed";
        setSubmitState({ type: "error", message });
        return;
      }

      setSubmitState({
        type: "success",
        message: "Registration received. Our team will review your intake shortly.",
      });
      e.currentTarget.reset();
    } catch {
      setSubmitState({
        type: "error",
        message: "Network error. Please try again.",
      });
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top bar */}
      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-600 text-white shadow-sm">
              <ShieldIcon className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold tracking-tight">Nucentra</span>
          </Link>

          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span className="hidden items-center gap-1.5 sm:inline-flex">
              <ShieldIcon className="h-4 w-4 text-slate-500" />
              HIPAA Compliant
            </span>
            <span className="inline-flex items-center gap-1.5">
              <LockIcon className="h-4 w-4 text-slate-500" />
              256-bit Encrypted
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight">Patient Registration</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Take the first step toward proactive health monitoring. Please
            complete this form to begin your colorectal health surveillance.
          </p>

          <Stepper />
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            <form onSubmit={onSubmit} className="space-y-10">
              <Section
                icon={<UserIcon className="h-5 w-5" />}
                title="Personal Information"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="First Name">
                    <input
                      name="firstName"
                      defaultValue=""
                      placeholder="John"
                      className="input"
                      autoComplete="given-name"
                    />
                  </Field>
                  <Field label="Last Name">
                    <input
                      name="lastName"
                      defaultValue=""
                      placeholder="Doe"
                      className="input"
                      autoComplete="family-name"
                    />
                  </Field>
                  <Field label="Date of Birth">
                    <input
                      name="dob"
                      placeholder="mm/dd/yyyy"
                      className="input"
                      autoComplete="bday"
                    />
                  </Field>
                  <Field label="Gender Identity">
                    <select name="gender" className="input">
                      <option value="">Select gender</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Non-binary">Non-binary</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                  </Field>
                </div>
              </Section>

              <Section
                icon={<MailIcon className="h-5 w-5" />}
                title="Contact Details"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Email Address" className="sm:col-span-2">
                    <input
                      name="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      className="input"
                      autoComplete="email"
                    />
                  </Field>
                  <Field label="Phone Number">
                    <input
                      name="phone"
                      placeholder="(555) 000-0000"
                      className="input"
                      autoComplete="tel"
                    />
                  </Field>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-slate-700">
                      Preferred Contact Method
                    </p>
                    <div className="flex items-center gap-6 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <label className="flex items-center gap-2 text-sm text-slate-700">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="Email"
                          defaultChecked
                        />
                        Email
                      </label>
                      <label className="flex items-center gap-2 text-sm text-slate-700">
                        <input type="radio" name="preferredContact" value="Phone" />
                        Phone
                      </label>
                    </div>
                  </div>
                </div>
              </Section>

              <Section
                icon={<ClipboardIcon className="h-5 w-5" />}
                title="Health Questionnaire"
              >
                <div className="space-y-6">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
                    <p className="text-sm font-semibold text-slate-900">
                      Do you have a family history of colorectal cancer?
                    </p>
                    <div className="mt-3 flex flex-wrap gap-6">
                      <Radio name="familyHistory" value="Yes" label="Yes" />
                      <Radio name="familyHistory" value="No" label="No" />
                      <Radio
                        name="familyHistory"
                        value="Not sure"
                        label="I’m not sure"
                      />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
                    <p className="text-sm font-semibold text-slate-900">
                      Are you currently experiencing any of the following?
                      <span className="font-normal text-slate-600">
                        {" "}
                        (Select all that apply)
                      </span>
                    </p>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      <Checkbox
                        name="symptoms"
                        value="Abdominal pain or cramping"
                        label="Abdominal pain or cramping"
                      />
                      <Checkbox
                        name="symptoms"
                        value="Changes in bowel habits"
                        label="Changes in bowel habits"
                      />
                      <Checkbox
                        name="symptoms"
                        value="Unexplained weight loss"
                        label="Unexplained weight loss"
                      />
                      <Checkbox
                        name="symptoms"
                        value="Persistent fatigue"
                        label="Persistent fatigue"
                      />
                    </div>
                  </div>
                </div>
              </Section>

              <div className="space-y-4 border-t border-slate-100 pt-6">
                <label className="flex items-start gap-3 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    className="mt-1"
                  />
                  <span>
                    I understand that my health information will be handled in
                    accordance with the{" "}
                    <Link href="#" className="font-semibold text-blue-600">
                      Privacy Policy
                    </Link>{" "}
                    and HIPAA regulations. I certify that the information
                    provided is accurate to the best of my knowledge.
                  </span>
                </label>

                {statusText ? (
                  <p
                    className={`rounded-2xl border px-4 py-3 text-sm ${
                      submitState.type === "success"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                        : "border-rose-200 bg-rose-50 text-rose-800"
                    }`}
                  >
                    {statusText}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting..." : "Submit Registration →"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom assurances */}
        <div className="mx-auto mt-10 max-w-4xl">
          <div className="grid gap-4 text-center text-xs text-slate-500 sm:grid-cols-4">
            <Assurance title="SECURE DATA" />
            <Assurance title="HIPAA COMPLIANT" />
            <Assurance title="CLIA CERTIFIED" />
            <Assurance title="EXPERT REVIEW" />
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Nucentra. All rights reserved.</p>
            <div className="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link href="#" className="hover:text-slate-700">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-slate-700">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-slate-700">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Tailwind helper styles */}
      <style jsx global>{`
        .input {
          width: 100%;
          border-radius: 1rem;
          border: 1px solid rgb(226 232 240);
          background: rgb(248 250 252);
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: rgb(15 23 42);
          outline: none;
        }
        .input:focus {
          border-color: rgb(59 130 246);
          box-shadow: 0 0 0 3px rgb(59 130 246 / 0.15);
          background: white;
        }
      `}</style>
    </div>
  );
}

function Stepper() {
  return (
    <div className="mx-auto mt-8 max-w-xl">
      <div className="flex items-center justify-center">
        <StepDot n={1} label="Personal" state="active" />
        <div className="h-px w-24 bg-slate-200" />
        <StepDot n={2} label="Health" state="upcoming" />
        <div className="h-px w-24 bg-slate-200" />
        <StepDot n={3} label="Confirm" state="disabled" />
      </div>
    </div>
  );
}

function StepDot({
  n,
  label,
  state,
}: {
  n: number;
  label: string;
  state: "active" | "upcoming" | "disabled";
}) {
  const circleClass =
    state === "active"
      ? "bg-blue-600 text-white"
      : state === "upcoming"
        ? "border border-blue-600 bg-white text-blue-700"
        : "bg-slate-200 text-slate-500";

  const labelClass =
    state === "active"
      ? "text-blue-700"
      : state === "upcoming"
        ? "text-blue-700"
        : "text-slate-500";

  return (
    <div className="flex flex-col items-center">
      <div
        className={`grid h-9 w-9 place-items-center rounded-full text-sm font-semibold ${circleClass}`}
      >
        {n}
      </div>
      <div className={`mt-2 text-xs font-semibold ${labelClass}`}>{label}</div>
    </div>
  );
}

function Section({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-700">
          {icon}
        </div>
        <h2 className="text-base font-semibold text-slate-900">{title}</h2>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className ?? ""}>
      <p className="mb-2 text-xs font-semibold text-slate-700">{label}</p>
      {children}
    </div>
  );
}

function Radio({
  name,
  value,
  label,
}: {
  name: string;
  value: string;
  label: string;
}) {
  return (
    <label className="flex items-center gap-2 text-sm text-slate-700">
      <input type="radio" name={name} value={value} />
      {label}
    </label>
  );
}

function Checkbox({
  name,
  value,
  label,
}: {
  name: string;
  value: string;
  label: string;
}) {
  return (
    <label className="flex items-center gap-2 text-sm text-slate-700">
      <input type="checkbox" name={name} value={value} />
      {label}
    </label>
  );
}

function Assurance({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white py-4">
      <div className="mx-auto h-7 w-7 rounded-full bg-slate-100" />
      <div className="mt-2 text-[11px] font-semibold tracking-[0.18em]">
        {title}
      </div>
    </div>
  );
}
