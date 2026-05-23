import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { FaqList, faqJsonLd } from "@/components/JsonLd";

const stages = [
  {
    n: "01",
    h: "Scoping call",
    p: "30 minutes by phone. We confirm vertical, footprint, and the operating questions you want answered. We tell you whether the Audit fits before you book it.",
  },
  {
    n: "02",
    h: "On-site walk",
    p: "We come to your floor. One day per site for groups under five locations; sampled visits for larger groups. We walk the building with whoever runs it day-to-day, not the corporate liaison.",
  },
  {
    n: "03",
    h: "Six-dimension diagnostic",
    p: "Hidden revenue. Cost optimization. Risk exposure. Compliance. Workforce enablement. Growth. Every finding ties to one of the six. Nothing floats.",
  },
  {
    n: "04",
    h: "The Operator's Brief",
    p: "A written document delivered within two weeks of the last visit. Plainspoken, prioritized, and specific. No vendor names yet. No proposal attached. The brief is yours to act on or sit on.",
  },
  {
    n: "05",
    h: "Architecture & supplier selection",
    p: "Only if you want to proceed. We design the target stack against the brief, then select suppliers from a vetted portfolio of 200+ across UCaaS, CCaaS, SD-WAN, SASE, MDR, POTS replacement, BDR, IaaS, DaaS, and managed mobility.",
  },
  {
    n: "06",
    h: "Execution & cutover",
    p: "We don't leave at signature. We project-manage the cutover, hold the supplier to SLA, and stay through the first 90 days while the new stack stabilizes.",
  },
];

const auditFaq = [
  {
    q: "What does the Audit cost?",
    a: "Nothing direct to you. We are compensated by the supplier residual on what gets implemented through the master agent. If nothing gets implemented, we are not paid.",
  },
  {
    q: "Are we obligated to implement what you recommend?",
    a: "No. The brief is yours regardless. About 70% of operators move forward; 30% take the brief and do the work themselves or with their incumbent vendor. Both are fine outcomes.",
  },
  {
    q: "How does this compare to a TEM or telecom broker?",
    a: "A TEM (telecom expense manager) audits the bill. A broker pitches a supplier. We audit the operation, then — and only then — recommend suppliers. The bill is one of six dimensions.",
  },
  {
    q: "What's in scope?",
    a: "Communications, connectivity, security, and continuity. Voice (UCaaS, CCaaS), data (SD-WAN, SASE/SSE), security (MDR/SOC, segmentation), POTS replacement, business continuity (BDR, DRaaS), IaaS, DaaS, and managed mobility.",
  },
  {
    q: "What's out of scope?",
    a: "Clinical/PMS/EHR software selection. POS selection. Custom application development. Endpoint management we'd compete with your MSP on. We tell you out-of-scope on the scoping call.",
  },
  {
    q: "Will you sign an NDA?",
    a: "Yes. Mutual NDA before any on-site work begins.",
  },
];

export const Route = createFileRoute("/audit")({
  head: () => ({
    meta: [
      { title: "The Operator's Audit — How it works | Catalytix" },
      {
        name: "description",
        content:
          "A six-stage diagnostic engagement for multi-location operators. On-site walk, written brief, architecture, and execution — supplier recommendation comes last.",
      },
      { property: "og:title", content: "The Operator's Audit | Catalytix" },
      {
        property: "og:description",
        content:
          "Six stages. One advisor accountable. The supplier recommendation comes at the end, not the beginning.",
      },
      { property: "og:url", content: "/audit" },
    ],
    links: [{ rel: "canonical", href: "/audit" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(auditFaq)) },
    ],
  }),
  component: AuditPage,
});

function AuditPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.2em] text-tobacco">
          The Operator's Audit
        </span>
        <h1 className="mb-8 max-w-[24ch] font-serif text-5xl font-medium leading-[1.05] lg:text-7xl">
          The supplier recommendation comes last.
        </h1>
        <p className="max-w-[60ch] text-lg leading-relaxed text-ink/70 lg:text-xl">
          The Audit is a six-stage diagnostic engagement built for multi-location operators. It
          starts on your floor and ends with a stack that someone is finally accountable for. The
          process below is the entire engagement — there's no "premium tier."
        </p>
      </section>

      {/* Comparison */}
      <section className="border-y border-rule bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="mb-12 font-serif text-3xl font-medium lg:text-4xl">
            Traditional broker vs. the Operator's Audit
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-rule">
                  <th className="py-4 pr-6 text-xs font-semibold uppercase tracking-widest text-ink/50"></th>
                  <th className="py-4 pr-6 text-xs font-semibold uppercase tracking-widest text-ink/50">
                    Traditional broker
                  </th>
                  <th className="py-4 pr-6 text-xs font-semibold uppercase tracking-widest text-tobacco">
                    The Operator's Audit
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rule">
                {[
                  ["Starts with", "A supplier they need to place", "Your operation, on the floor"],
                  ["Discovery format", "A 30-minute call", "A day per site, with the people who run it"],
                  ["Diagnostic", "The phone bill", "Six dimensions: revenue, cost, risk, compliance, workforce, growth"],
                  ["Vertical depth", "Generalist across every industry", "Eight verticals, nothing else"],
                  ["Recommendation timing", "First conversation", "After the brief"],
                  ["Accountability", "Hands off after signature", "Through cutover and 90 days post"],
                  ["Compensation", "Supplier residual", "Supplier residual"],
                  ["Loyalty", "The supplier with the best spiff", "The operator"],
                ].map(([label, broker, audit]) => (
                  <tr key={label as string}>
                    <td className="py-4 pr-6 align-top font-medium">{label}</td>
                    <td className="py-4 pr-6 align-top text-ink/60">{broker}</td>
                    <td className="py-4 pr-6 align-top">{audit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Six stages */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <h2 className="mb-16 font-serif text-4xl font-medium lg:text-5xl">Six stages.</h2>
        <ol className="divide-y divide-rule border-y border-rule">
          {stages.map((s) => (
            <li key={s.n} className="grid gap-6 py-10 lg:grid-cols-[120px_1fr_2fr] lg:gap-12">
              <span className="font-serif text-3xl text-tobacco">{s.n}</span>
              <h3 className="font-serif text-2xl font-medium">{s.h}</h3>
              <p className="text-ink/70 text-pretty leading-relaxed">{s.p}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Six dimensions */}
      <section className="border-t border-rule bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="mb-12 font-serif text-3xl font-medium lg:text-4xl">
            What we measure: six dimensions.
          </h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Hidden revenue", "Calls dropped, missed-call recovery, abandoned booking flows, after-hours coverage that goes nowhere."],
              ["Cost optimization", "Stranded contracts, overlapping circuits, POTS lines you forgot you were paying for, market-rate gaps."],
              ["Risk exposure", "Single-point failures, flat networks, credentials in shared documents, surveillance retention shorter than your liability window."],
              ["Compliance", "HIPAA, PCI, state cannabis rules, brand standards. The difference between passing a scan and being defensible."],
              ["Workforce enablement", "Friction your staff routes around. Tools that fight each other. Workflows held together by one person."],
              ["Growth", "What today's stack will and will not absorb at 2x, 5x, and 10x sites. The point at which improvisation breaks."],
            ].map(([h, p]) => (
              <div key={h}>
                <h3 className="mb-3 font-serif text-xl font-medium text-tobacco">{h}</h3>
                <p className="text-sm text-ink/70 text-pretty">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <h2 className="mb-12 font-serif text-3xl font-medium lg:text-4xl">Common questions.</h2>
        <FaqList items={auditFaq} />
      </section>

      {/* CTA */}
      <section className="border-t border-rule">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
          <h2 className="mx-auto mb-10 max-w-[26ch] font-serif text-4xl font-medium leading-tight lg:text-5xl">
            Tell us your operation. We'll show you where it's leaking.
          </h2>
          <PrimaryCTA className="px-8 py-4 text-base" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
