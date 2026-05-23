import { H as jsxRuntimeExports } from "./server-MPA8XId8.js";
import { v as verticals, L as Link, F as FaqList, f as faq } from "./router-BHL9F3uu.js";
import { a as SiteHeader, P as PrimaryCTA, S as SiteFooter } from "./SiteFooter-DKAzsVXf.js";
import { C as CircleCheck } from "./circle-check-B-UoRtDK.js";
import { A as ArrowRight } from "./arrow-right-CE8L9mMM.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./createLucideIcon-0y03hql4.js";
const findings = [{
  symptom: "POTS replacement nobody has scoped",
  detail: "Tank monitoring, fire panels, alarms, and elevator phones still ride aging copper. Carriers are sunsetting it; the cost of doing nothing climbs every quarter and brand inspections increasingly flag it."
}, {
  symptom: "EMV liability sitting on a generation-old dispenser",
  detail: "Pumps that were grandfathered are now in the chargeback line. The brand fuel agreement does not protect you. Every counterfeit-card swipe on a non-EMV pump is on the operator."
}, {
  symptom: "PCI-DSS scope creep at the forecourt",
  detail: "POS, dispenser controller, ATG, surveillance, and back-office all sit on the same flat network. PCI scope expands to every device on the wire. Segmentation is the only path back."
}, {
  symptom: "Skimmer and tamper-detection gaps",
  detail: "California and federal weights-and-measures inspectors are pulling pumps. Tamper-evident seals, encrypted PIN pads, and remote skimmer alerting are uneven across the footprint."
}, {
  symptom: "Surveillance retention shorter than the brand requires",
  detail: "DVRs were installed at the original spec; brand and law-enforcement retention requirements moved. Cameras that used to be 30 days are now 90+. Storage and bandwidth were never re-sized."
}, {
  symptom: "Stranded carrier spend across the footprint",
  detail: "Sites added one at a time accumulated single-site contracts at retail rates. Nobody renegotiated the original locations once the footprint hit ten. Multi-site MRC is leaking."
}, {
  symptom: "Back-office visibility you don't actually have",
  detail: "You can't see in real time which sites are taking cards, which are down, which have a tank reading the manager hasn't acknowledged. Outages are reported by phone calls, not dashboards."
}, {
  symptom: "ATG and ISD telemetry on a connection that was never designed for it",
  detail: "Automatic tank gauges and CARB ISD reporting were bolted onto whatever circuit the jobber happened to provision. When the link drops, the regulatory clock keeps ticking."
}];
const caRegulatory = [{
  code: "CARB EVR / ISD",
  note: "Enhanced Vapor Recovery In-Station Diagnostics requires continuous telemetry off the dispensers. A flaky circuit becomes a notice of violation."
}, {
  code: "SWRCB UST monitoring",
  note: "Underground Storage Tank monitoring under the State Water Resources Control Board demands 24/7 ATG connectivity and audit-grade logs."
}, {
  code: "Title 24 / Cal/OSHA",
  note: "Energy and life-safety provisions intersect with networking — lighting controls, EMS, and emergency comms all sit on the same backplane as payments."
}, {
  code: "STAR / SB X1-2",
  note: "California's certified technician program plus SB X1-2 gallon-fee reporting put recordkeeping pressure on the back-office stack, not just the forecourt."
}, {
  code: "ADA at fueling",
  note: "Call-for-assistance and accessibility tech at dispensers needs reliable comms and recorded interactions — another quiet dependency on the network."
}, {
  code: "PCI-DSS v4.0",
  note: "California operators are seeing brand and acquirer audits accelerate to v4.0 timelines. Forecourt segmentation and authenticated scans are the long pole."
}];
function GasStationsPage() {
  const others = verticals.filter((v) => v.slug !== "gas-stations");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-paper text-ink", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-6 pt-16 pb-16 lg:pt-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mb-8 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-ink/50 hover:text-tobacco", children: "← All industries" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-xs font-semibold uppercase tracking-wider text-tobacco", children: "California gas station operators" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl", children: "Forecourt technology, sourced and managed for multi-site California operators." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg text-ink/70", children: "California-focused, multi-site, jobber-supplied fuel operators are the most demanding c-store / fuel hybrid in the country. CARB, EMV, ADA, PCI, and the brand fuel agreement all converge on a network the carrier rep has never set foot inside. We engage starting at ten sites." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryCTA, { className: "px-6 py-3", children: "Book a consultation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryCTA, { variant: "ghost", to: "/audit", children: "See what we do" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-rule bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16 lg:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-xs font-semibold uppercase tracking-wider text-tobacco", children: "California regulatory overlay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold tracking-tight md:text-4xl", children: "Six regimes that shape the network before any vendor opens a quote." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-ink/70", children: "In California, the technology decisions are downstream of the rulebook. Here is the part of the rulebook we read first." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: caRegulatory.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-rule bg-paper p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 font-mono text-xs font-semibold tracking-wider text-tobacco", children: r.code }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink/70", children: r.note })
      ] }, r.code)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20 lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-xs font-semibold uppercase tracking-wider text-tobacco", children: "What we typically find" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold tracking-tight md:text-4xl", children: "Eight patterns we see on the forecourt." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "grid gap-px overflow-hidden rounded-xl border border-rule bg-rule sm:grid-cols-2", children: findings.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "bg-paper p-6 lg:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs font-semibold text-tobacco", children: String(i + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 text-tobacco" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 text-lg font-semibold tracking-tight", children: f.symptom }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink/70 leading-relaxed", children: f.detail })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-rule bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-xs font-semibold uppercase tracking-wider text-tobacco", children: "FAQ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold tracking-tight md:text-4xl", children: "California fuel operators ask us this first." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FaqList, { items: faq })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-rule", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-8 text-xl font-semibold tracking-tight", children: "Other industries we serve." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-3", children: others.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/verticals/$slug", params: {
        slug: o.slug
      }, className: "group flex items-center justify-between border-b border-rule py-4 text-sm transition-colors hover:text-tobacco", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: o.shortName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 opacity-50 transition-opacity group-hover:opacity-100" })
      ] }, o.slug)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-4xl px-6 py-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold tracking-tight md:text-4xl", children: "Ten sites or more? Let's scope your forecourt." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-lg text-ink/65", children: "A 30-minute consultation. We come prepared with the regulatory map. You bring the site list." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryCTA, { className: "px-6 py-3", children: "Book a consultation" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  GasStationsPage as component
};
