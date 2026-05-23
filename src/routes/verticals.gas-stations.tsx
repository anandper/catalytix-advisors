import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { FaqList, faqJsonLd } from "@/components/JsonLd";
import { verticals } from "@/data/verticals";

const findings = [
  {
    symptom: "POTS replacement nobody has scoped",
    detail:
      "Tank monitoring, fire panels, alarms, and elevator phones still ride aging copper. Carriers are sunsetting it; the cost of doing nothing climbs every quarter and brand inspections increasingly flag it.",
  },
  {
    symptom: "EMV liability sitting on a generation-old dispenser",
    detail:
      "Pumps that were grandfathered are now in the chargeback line. The brand fuel agreement does not protect you. Every counterfeit-card swipe on a non-EMV pump is on the operator.",
  },
  {
    symptom: "PCI-DSS scope creep at the forecourt",
    detail:
      "POS, dispenser controller, ATG, surveillance, and back-office all sit on the same flat network. PCI scope expands to every device on the wire. Segmentation is the only path back.",
  },
  {
    symptom: "Skimmer and tamper-detection gaps",
    detail:
      "California and federal weights-and-measures inspectors are pulling pumps. Tamper-evident seals, encrypted PIN pads, and remote skimmer alerting are uneven across the footprint.",
  },
  {
    symptom: "Surveillance retention shorter than the brand requires",
    detail:
      "DVRs were installed at the original spec; brand and law-enforcement retention requirements moved. Cameras that used to be 30 days are now 90+. Storage and bandwidth were never re-sized.",
  },
  {
    symptom: "Stranded carrier spend across the footprint",
    detail:
      "Sites added one at a time accumulated single-site contracts at retail rates. Nobody renegotiated the original locations once the footprint hit ten. Multi-site MRC is leaking.",
  },
  {
    symptom: "Back-office visibility you don't actually have",
    detail:
      "You can't see in real time which sites are taking cards, which are down, which have a tank reading the manager hasn't acknowledged. Outages are reported by phone calls, not dashboards.",
  },
  {
    symptom: "ATG and ISD telemetry on a connection that was never designed for it",
    detail:
      "Automatic tank gauges and CARB ISD reporting were bolted onto whatever circuit the jobber happened to provision. When the link drops, the regulatory clock keeps ticking.",
  },
];

const caRegulatory = [
  {
    code: "CARB EVR / ISD",
    note: "Enhanced Vapor Recovery In-Station Diagnostics requires continuous telemetry off the dispensers. A flaky circuit becomes a notice of violation.",
  },
  {
    code: "SWRCB UST monitoring",
    note: "Underground Storage Tank monitoring under the State Water Resources Control Board demands 24/7 ATG connectivity and audit-grade logs.",
  },
  {
    code: "Title 24 / Cal/OSHA",
    note: "Energy and life-safety provisions intersect with networking — lighting controls, EMS, and emergency comms all sit on the same backplane as payments.",
  },
  {
    code: "STAR / SB X1-2",
    note: "California's certified technician program plus SB X1-2 gallon-fee reporting put recordkeeping pressure on the back-office stack, not just the forecourt.",
  },
  {
    code: "ADA at fueling",
    note: "Call-for-assistance and accessibility tech at dispensers needs reliable comms and recorded interactions — another quiet dependency on the network.",
  },
  {
    code: "PCI-DSS v4.0",
    note: "California operators are seeing brand and acquirer audits accelerate to v4.0 timelines. Forecourt segmentation and authenticated scans are the long pole.",
  },
];

const faq = [
  {
    q: "Do you only work with California operators?",
    a: "California is our focus because the regulatory environment — CARB EVR, SWRCB UST, STAR, Title 24 — shapes the architecture more than any other state. We support multi-state operators headquartered or anchored in California.",
  },
  {
    q: "We have a brand fuel agreement. Does that constrain what you can do?",
    a: "Sometimes. Major brand agreements specify dispenser, payment, and POS components. We design within those constraints and focus on what they don't dictate: connectivity, network, security, surveillance, back-office, and POTS replacement.",
  },
  {
    q: "Can you handle pump-side technology directly?",
    a: "We don't replace dispenser controllers or service forecourt hardware. We make sure the connectivity, payments path, ATG telemetry, and back-office serve the forecourt properly — and we hold those suppliers accountable.",
  },
  {
    q: "What about the c-store side of the building?",
    a: "Same engagement. Most California fuel sites have a meaningful c-store attached, and the architecture has to serve both. See the convenience stores page for the c-store specifics.",
  },
  {
    q: "What's the smallest footprint you'll engage with?",
    a: "Ten sites is the threshold for fuel. Below that, the multi-site economics and the regulatory exposure don't justify the engagement model.",
  },
  {
    q: "Are you a jobber or a fuel reseller?",
    a: "No. We don't supply fuel, finance dispensers, or operate stations. We're a technology advisory team. Your jobber relationship stays intact.",
  },
  {
    q: "How are you compensated?",
    a: "When you move forward with a recommended supplier, the supplier pays residual through our master agent, Intelisys. You don't pay Catalytix Advisors directly.",
  },
];

const metaTitle = "Technology advisor for California gas station operators | Catalytix";
const metaDescription =
  "Catalytix Advisors designs the technology stack for multi-site California gas station operators — POTS replacement, EMV, PCI segmentation, ATG telemetry, surveillance, and CARB ISD connectivity.";

export const Route = createFileRoute("/verticals/gas-stations")({
  head: () => ({
    meta: [
      { title: metaTitle },
      { name: "description", content: metaDescription },
      { property: "og:title", content: metaTitle },
      { property: "og:description", content: metaDescription },
      { property: "og:url", content: "/verticals/gas-stations" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/verticals/gas-stations" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(faq)),
      },
    ],
  }),
  component: GasStationsPage,
});

function GasStationsPage() {
  const others = verticals.filter((v) => v.slug !== "gas-stations");

  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-16 lg:pt-24">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-ink/50 hover:text-tobacco"
        >
          &larr; All industries
        </Link>
        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-tobacco">
          California gas station operators
        </div>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
          Forecourt technology, sourced and managed for multi-site California operators.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink/70">
          California-focused, multi-site, jobber-supplied fuel operators are the most demanding
          c-store / fuel hybrid in the country. CARB, EMV, ADA, PCI, and the brand fuel agreement
          all converge on a network the carrier rep has never set foot inside. We engage starting
          at ten sites.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <PrimaryCTA className="px-6 py-3">Book a consultation</PrimaryCTA>
          <PrimaryCTA variant="ghost" to="/audit">
            See what we do
          </PrimaryCTA>
        </div>
      </section>

      {/* CA regulatory overlay */}
      <section className="border-y border-rule bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-tobacco">
              California regulatory overlay
            </div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Six regimes that shape the network before any vendor opens a quote.
            </h2>
            <p className="mt-4 text-ink/70">
              In California, the technology decisions are downstream of the rulebook. Here is the
              part of the rulebook we read first.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {caRegulatory.map((r) => (
              <div key={r.code} className="rounded-xl border border-rule bg-paper p-5">
                <div className="mb-2 font-mono text-xs font-semibold tracking-wider text-tobacco">
                  {r.code}
                </div>
                <p className="text-sm text-ink/70">{r.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eight findings */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-tobacco">
            What we typically find
          </div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Eight patterns we see on the forecourt.
          </h2>
        </div>
        <ol className="grid gap-px overflow-hidden rounded-xl border border-rule bg-rule sm:grid-cols-2">
          {findings.map((f, i) => (
            <li key={i} className="bg-paper p-6 lg:p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-tobacco">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <CheckCircle2 className="size-4 text-tobacco" />
              </div>
              <h3 className="mb-2 text-lg font-semibold tracking-tight">{f.symptom}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{f.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section className="border-t border-rule bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="mb-10">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-tobacco">
              FAQ
            </div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              California fuel operators ask us this first.
            </h2>
          </div>
          <FaqList items={faq} />
        </div>
      </section>

      {/* Other industries */}
      <section className="border-t border-rule">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="mb-8 text-xl font-semibold tracking-tight">Other industries we serve.</h2>
          <div className="grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/verticals/$slug"
                params={{ slug: o.slug }}
                className="group flex items-center justify-between border-b border-rule py-4 text-sm transition-colors hover:text-tobacco"
              >
                <span className="font-medium">{o.shortName}</span>
                <ArrowRight className="size-4 opacity-50 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Ten sites or more? Let's scope your forecourt.
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-ink/65">
          A 30-minute consultation. We come prepared with the regulatory map. You bring the site
          list.
        </p>
        <div className="mt-8">
          <PrimaryCTA className="px-6 py-3">Book a consultation</PrimaryCTA>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
