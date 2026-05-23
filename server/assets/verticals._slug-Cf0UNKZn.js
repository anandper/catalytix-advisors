import { H as jsxRuntimeExports } from "./server-MPA8XId8.js";
import { R as Route, v as verticals, L as Link, F as FaqList } from "./router-BHL9F3uu.js";
import { a as SiteHeader, P as PrimaryCTA, S as SiteFooter } from "./SiteFooter-DKAzsVXf.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function VerticalPage() {
  const v = Route.useLoaderData();
  const others = verticals.filter((o) => o.slug !== v.slug);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-paper text-ink", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20 lg:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mb-8 inline-block text-xs font-semibold uppercase tracking-widest text-ink/50 hover:text-tobacco", children: "← All verticals" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-6 block text-xs font-semibold uppercase tracking-[0.2em] text-tobacco", children: "The Operator's Audit for" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-8 max-w-[22ch] font-serif text-5xl font-medium leading-[1.05] lg:text-7xl", children: v.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-[60ch] text-lg leading-relaxed text-ink/70 lg:text-xl", children: v.intro }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryCTA, { children: "Schedule the Operator's Audit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryCTA, { variant: "ghost", to: "/audit", children: "How the Audit works" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-rule", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-20 lg:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-tobacco", children: "What we typically find" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-16 max-w-[28ch] font-serif text-4xl font-medium leading-tight lg:text-5xl", children: "Patterns we see on the floor." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "divide-y divide-rule border-y border-rule", children: v.findings.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "grid gap-6 py-10 lg:grid-cols-[80px_1fr_2fr] lg:gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-2xl text-tobacco", children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl font-medium", children: f.symptom }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink/70 text-pretty leading-relaxed", children: f.detail })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24 lg:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-12 font-serif text-3xl font-medium lg:text-4xl", children: "Common questions." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FaqList, { items: v.faq })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-rule bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-10 font-serif text-2xl font-medium", children: "Other verticals we go deep on." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-x-12 gap-y-2 sm:grid-cols-2 lg:grid-cols-3", children: others.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/verticals/$slug", params: {
        slug: o.slug
      }, className: "group flex items-baseline justify-between border-b border-rule py-4 transition-colors hover:text-tobacco", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-lg", children: o.shortName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-widest opacity-60 group-hover:opacity-100", children: "→" })
      ] }, o.slug)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-rule", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24 text-center lg:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mx-auto mb-10 max-w-[26ch] font-serif text-4xl font-medium leading-tight lg:text-5xl", children: "Tell us your operation. We'll show you where it's leaking." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryCTA, { className: "px-8 py-4 text-base" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  VerticalPage as component
};
