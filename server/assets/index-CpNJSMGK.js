import { H as jsxRuntimeExports } from "./server-MPA8XId8.js";
import { L as Link, v as verticals, F as FaqList, h as homeFaq } from "./router-BHL9F3uu.js";
import { a as SiteHeader, P as PrimaryCTA, S as SiteFooter } from "./SiteFooter-DKAzsVXf.js";
import { A as ArrowRight } from "./arrow-right-CE8L9mMM.js";
import { H as Headphones, N as Network, S as ShieldCheck, C as Cloud, W as Wifi, B as Building2 } from "./wifi-Dihawb9H.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./createLucideIcon-0y03hql4.js";
const services = [{
  icon: Headphones,
  title: "UCaaS & CCaaS",
  desc: "Modern voice, contact center, and collaboration platforms designed around how your teams actually work."
}, {
  icon: Network,
  title: "SD-WAN & SASE",
  desc: "Resilient multi-site networking with integrated security — built for distributed operations and cloud-first apps."
}, {
  icon: ShieldCheck,
  title: "Cybersecurity & MDR",
  desc: "24/7 detection and response, identity, and compliance programs aligned to HIPAA, PCI, and SOC 2."
}, {
  icon: Cloud,
  title: "Cloud & DRaaS",
  desc: "IaaS, DaaS, and disaster recovery sized to your RPO/RTO — without the hyperscaler markup or surprise egress."
}, {
  icon: Wifi,
  title: "Connectivity",
  desc: "Fiber, wireless, and POTS replacement procurement across all your sites, on one contract and one rate sheet."
}, {
  icon: Building2,
  title: "Lifecycle Management",
  desc: "Renewals, audits, and supplier escalations handled by your advisor — not your IT team or finance department."
}];
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-paper text-ink", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-x-0 top-0 -z-10 h-[640px] bg-gradient-to-b from-tobacco/8 via-tobacco/3 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 pt-20 pb-24 lg:pt-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "max-w-4xl text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl", children: [
          "Modern IT, sourced and managed by",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-tobacco", children: "a team that knows your operation" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg text-ink/70 text-pretty", children: "Catalytix Advisors designs and procures the technology stack for multi-location operators — voice, network, security, and cloud — across a vetted portfolio of 200+ suppliers. Vendor-neutral. Outcome-aligned. Paid by the supplier, not by you." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(PrimaryCTA, { className: "px-6 py-3", children: [
            "Book a consultation ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 size-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryCTA, { variant: "ghost", to: "/audit", children: "See what we do" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-2 gap-8 border-t border-rule pt-10 lg:grid-cols-4", children: [{
          v: "200+",
          l: "Vetted suppliers"
        }, {
          v: "8",
          l: "Industries served"
        }, {
          v: "$1B+",
          l: "Channel spend influenced"
        }, {
          v: "1",
          l: "Advisor accountable"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-semibold tracking-tight md:text-4xl", children: s.v }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-ink/60", children: s.l })
        ] }, s.l)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-rule bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-20 lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 flex items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-xs font-semibold uppercase tracking-wider text-tobacco", children: "What we do" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl", children: "One advisor across the entire stack." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/audit", className: "hidden shrink-0 items-center gap-1 text-sm font-medium text-ink/70 hover:text-tobacco md:inline-flex", children: [
          "All services ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-rule bg-paper p-6 transition-colors hover:border-tobacco/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-tobacco/10 text-tobacco", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "size-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 text-base font-semibold", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink/65", children: s.desc })
      ] }, s.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20 lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-xs font-semibold uppercase tracking-wider text-tobacco", children: "How we work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl", children: "From assessment to cutover — in three steps." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 lg:grid-cols-3", children: [{
        n: "01",
        h: "Assess",
        p: "We map your current stack, contracts, and pain points. No questionnaire fatigue — we do the work."
      }, {
        n: "02",
        h: "Architect",
        p: "We design the target solution and shortlist suppliers from 200+, then negotiate on your behalf."
      }, {
        n: "03",
        h: "Operate",
        p: "We project-manage implementation and stay on as your advisor through renewals and growth."
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-rule p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 text-sm font-mono text-tobacco", children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 text-lg font-semibold", children: s.h }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink/65", children: s.p })
      ] }, s.n)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-rule bg-ink text-paper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-20 lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-12 flex items-end justify-between gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-xs font-semibold uppercase tracking-wider text-tobacco", children: "Industries" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl", children: "Specialists, not generalists." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px bg-paper/10 sm:grid-cols-2 lg:grid-cols-4", children: verticals.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/verticals/$slug", params: {
        slug: v.slug
      }, className: "group flex flex-col justify-between gap-6 bg-ink p-6 transition-colors hover:bg-paper/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-semibold group-hover:text-tobacco", children: v.shortName }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs font-medium text-paper/60", children: [
          "Learn more ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3" })
        ] })
      ] }, v.slug)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-4xl px-6 py-20 lg:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-xs font-semibold uppercase tracking-wider text-tobacco", children: "FAQ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold tracking-tight md:text-4xl", children: "Common questions." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FaqList, { items: homeFaq }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 rounded-2xl border border-rule bg-surface p-8 text-center md:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mx-auto max-w-xl text-2xl font-semibold tracking-tight md:text-3xl", children: "Ready to modernize your IT stack?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-lg text-ink/65", children: "A 30-minute call to scope your environment and see if we're a fit." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryCTA, { className: "px-6 py-3", children: "Book a consultation" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Index as component
};
