import { H as jsxRuntimeExports } from "./server-MPA8XId8.js";
import { F as FaqList, a as auditFaq } from "./router-BHL9F3uu.js";
import { a as SiteHeader, P as PrimaryCTA, S as SiteFooter } from "./SiteFooter-DKAzsVXf.js";
import { H as Headphones, N as Network, S as ShieldCheck, C as Cloud, W as Wifi, B as Building2 } from "./wifi-Dihawb9H.js";
import { C as CircleCheck } from "./circle-check-B-UoRtDK.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./createLucideIcon-0y03hql4.js";
const services = [{
  icon: Headphones,
  title: "Unified Communications (UCaaS)",
  desc: "Cloud voice, messaging, video, and collaboration platforms with deep CRM and EHR integrations.",
  items: ["Cloud PBX & SIP", "Microsoft Teams voice", "Mobile-first calling", "Compliance recording"]
}, {
  icon: Headphones,
  title: "Contact Center (CCaaS)",
  desc: "Omnichannel customer engagement with workforce management, AI, and analytics.",
  items: ["Omnichannel routing", "AI agent assist", "WFM & QA", "Self-service IVR"]
}, {
  icon: Network,
  title: "Network & SD-WAN",
  desc: "Resilient multi-site connectivity built for cloud-first applications and distributed teams.",
  items: ["SD-WAN", "Dedicated fiber & broadband", "Wireless / 5G failover", "Managed LAN/WiFi"]
}, {
  icon: ShieldCheck,
  title: "Cybersecurity & SASE",
  desc: "Identity-aware perimeter, 24/7 monitoring, and compliance-aligned controls.",
  items: ["MDR / SOC", "SASE / SSE", "Zero-trust access", "Compliance (HIPAA, PCI, SOC 2)"]
}, {
  icon: Cloud,
  title: "Cloud & Continuity",
  desc: "Right-sized cloud infrastructure and disaster recovery with predictable economics.",
  items: ["IaaS / private cloud", "DaaS", "BDR & DRaaS", "Microsoft 365 management"]
}, {
  icon: Wifi,
  title: "Connectivity & POTS Replacement",
  desc: "Modernize legacy lines and consolidate carriers across your entire footprint.",
  items: ["POTS replacement", "Multi-site procurement", "Carrier consolidation", "E-rate & rural support"]
}, {
  icon: Building2,
  title: "Lifecycle & Vendor Management",
  desc: "Ongoing advocacy across renewals, escalations, audits, and M&A integration.",
  items: ["Contract optimization", "Renewal management", "Bill audits", "M&A IT integration"]
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-paper text-ink", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-6 pt-20 pb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-xs font-semibold uppercase tracking-wider text-tobacco", children: "Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl", children: "One advisor across your entire technology stack." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg text-ink/70", children: "We design, source, and manage modern IT for multi-location businesses — drawing on a vetted portfolio of 200+ suppliers through our partnership with Intelisys, a ScanSource company." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-rule bg-paper p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-tobacco/10 text-tobacco", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "size-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-2 text-lg font-semibold", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-sm text-ink/65", children: s.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 text-sm text-ink/75", children: s.items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 text-tobacco" }),
        i
      ] }, i)) })
    ] }, s.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-rule bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-10 text-3xl font-semibold tracking-tight md:text-4xl", children: "Frequently asked." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FaqList, { items: auditFaq })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-4xl px-6 py-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold tracking-tight md:text-4xl", children: "Let's scope your stack." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-lg text-ink/65", children: "A 30-minute consultation to understand your environment and identify quick wins." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryCTA, { className: "px-6 py-3", children: "Book a consultation" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ServicesPage as component
};
