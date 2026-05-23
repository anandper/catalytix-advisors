import { H as jsxRuntimeExports, Q as reactExports } from "./server-MPA8XId8.js";
import { L as Link, v as verticals } from "./router-BHL9F3uu.js";
function PrimaryCTA({
  children = "Book a consultation",
  variant = "solid",
  to = "/contact",
  className = "",
  ...rest
}) {
  const base = "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium tracking-tight transition-colors";
  const styles = variant === "solid" ? "bg-tobacco text-paper hover:bg-tobacco/90" : "text-ink/80 hover:text-tobacco";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, ...rest, className: `${base} ${styles} ${className}`, children });
}
const nav = [
  { to: "/audit", label: "Services" },
  { to: "/verticals/$slug", label: "Industries", params: { slug: "dental" } },
  { to: "/insights", label: "Insights" },
  { to: "/about", label: "About" }
];
function SiteHeader() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 border-b border-rule bg-paper/85 backdrop-blur", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-baseline gap-1.5 text-lg font-semibold tracking-tight text-ink", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Catalytix" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-ink/60", children: "Advisors" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden items-center gap-8 text-sm font-medium md:flex", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: n.to,
          params: n.params,
          className: "text-ink/70 transition-colors hover:text-ink",
          activeProps: { className: "text-ink" },
          children: n.label
        },
        n.to + (n.params ? JSON.stringify(n.params) : "")
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryCTA, { children: "Book a consultation" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          "aria-label": "Menu",
          className: "text-xs font-semibold uppercase tracking-widest md:hidden",
          onClick: () => setOpen((o) => !o),
          children: open ? "Close" : "Menu"
        }
      )
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-rule px-6 py-4 md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 text-sm font-medium", children: [
      nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: n.to, params: n.params, onClick: () => setOpen(false), children: n.label }, n.to + (n.params ? JSON.stringify(n.params) : ""))),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryCTA, { children: "Book a consultation" })
    ] }) })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-rule bg-surface text-ink/70", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[42ch]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "mb-3 inline-flex items-baseline gap-1.5 text-lg font-semibold text-ink", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Catalytix" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-ink/60", children: "Advisors" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", children: "A technology advisory team helping multi-location operators design, source, and run modern IT — across UCaaS, CCaaS, SD-WAN, SASE, security, and cloud, with a 200+ supplier portfolio behind us." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 text-xs font-semibold uppercase tracking-wider text-ink", children: "Industries" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: verticals.slice(0, 4).map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/verticals/$slug", params: { slug: v.slug }, className: "hover:text-ink", children: v.shortName }) }, v.slug)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 text-xs font-semibold uppercase tracking-wider text-ink", children: "More" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: verticals.slice(4).map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/verticals/$slug", params: { slug: v.slug }, className: "hover:text-ink", children: v.shortName }) }, v.slug)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 text-xs font-semibold uppercase tracking-wider text-ink", children: "Firm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/audit", className: "hover:text-ink", children: "Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-ink", children: "About" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/insights", className: "hover:text-ink", children: "Insights" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-ink", children: "Contact" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-rule", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-ink/50 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Catalytix Advisory"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Catalytix Advisors LLC." })
    ] }) })
  ] });
}
export {
  PrimaryCTA as P,
  SiteFooter as S,
  SiteHeader as a
};
