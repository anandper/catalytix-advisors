import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { verticals } from "@/data/verticals";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Schedule the Operator's Audit | Catalytix" },
      {
        name: "description",
        content:
          "Tell us your operation. We'll get back within one business day to scope the Audit.",
      },
      { property: "og:title", content: "Schedule the Operator's Audit" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1fr_1.2fr] lg:py-32">
        <div>
          <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.2em] text-tobacco">
            Schedule the Audit
          </span>
          <h1 className="mb-8 font-serif text-5xl font-medium leading-tight lg:text-6xl">
            Tell us your operation.
          </h1>
          <p className="mb-8 max-w-[44ch] text-lg leading-relaxed text-ink/70">
            One scoping call. 30 minutes. We'll tell you whether the Audit fits before you book it.
            If it doesn't, we'll say so on the call.
          </p>
          <div className="space-y-3 text-sm text-ink/60">
            <p>
              <span className="block text-[10px] font-semibold uppercase tracking-widest text-ink/40">
                Response time
              </span>
              One business day.
            </p>
            <p>
              <span className="block text-[10px] font-semibold uppercase tracking-widest text-ink/40">
                Coverage
              </span>
              California focus, multi-location operators across the U.S.
            </p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="border border-rule bg-secondary/30 p-8 lg:p-12"
        >
          {submitted ? (
            <div className="py-12 text-center">
              <h2 className="mb-4 font-serif text-3xl">Received.</h2>
              <p className="text-ink/70">We'll reach out within one business day.</p>
            </div>
          ) : (
            <div className="space-y-6">
              <Field label="Name" name="name" required />
              <Field label="Company" name="company" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <div>
                <label className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-ink/60">
                  Vertical
                </label>
                <select
                  name="vertical"
                  required
                  className="w-full border border-rule bg-paper px-4 py-3 text-sm text-ink focus:border-tobacco focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your operation
                  </option>
                  {verticals.map((v) => (
                    <option key={v.slug} value={v.slug}>
                      {v.shortName}
                    </option>
                  ))}
                  <option value="other">Other</option>
                </select>
              </div>
              <Field label="Number of locations" name="locations" type="number" required />
              <div>
                <label className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-ink/60">
                  What's leaking?
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="One or two sentences. Specific is better than polite."
                  className="w-full border border-rule bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-tobacco focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-sm bg-ink px-6 py-4 text-sm font-medium text-paper ring-1 ring-ink transition-colors hover:bg-tobacco hover:ring-tobacco"
              >
                Schedule the Operator's Audit
              </button>
              <p className="text-[10px] uppercase tracking-widest text-ink/40">
                Mutual NDA before any on-site work begins.
              </p>
            </div>
          )}
        </form>
      </section>
      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-ink/60">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border border-rule bg-paper px-4 py-3 text-sm text-ink focus:border-tobacco focus:outline-none"
      />
    </div>
  );
}
