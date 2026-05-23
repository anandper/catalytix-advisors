import { Q as reactExports, H as jsxRuntimeExports } from "./server-MPA8XId8.js";
import { a as SiteHeader, S as SiteFooter } from "./SiteFooter-DKAzsVXf.js";
import { v as verticals } from "./router-BHL9F3uu.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ContactPage() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-paper text-ink", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1fr_1.2fr] lg:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-6 block text-xs font-semibold uppercase tracking-[0.2em] text-tobacco", children: "Schedule the Audit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-8 font-serif text-5xl font-medium leading-tight lg:text-6xl", children: "Tell us your operation." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8 max-w-[44ch] text-lg leading-relaxed text-ink/70", children: "One scoping call. 30 minutes. We'll tell you whether the Audit fits before you book it. If it doesn't, we'll say so on the call." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm text-ink/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] font-semibold uppercase tracking-widest text-ink/40", children: "Response time" }),
            "One business day."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] font-semibold uppercase tracking-widest text-ink/40", children: "Coverage" }),
            "California focus, multi-location operators across the U.S."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: (e) => {
        e.preventDefault();
        setSubmitted(true);
      }, className: "border border-rule bg-secondary/30 p-8 lg:p-12", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 font-serif text-3xl", children: "Received." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink/70", children: "We'll reach out within one business day." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "name", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company", name: "company", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", type: "tel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-[10px] font-semibold uppercase tracking-widest text-ink/60", children: "Vertical" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "vertical", required: true, className: "w-full border border-rule bg-paper px-4 py-3 text-sm text-ink focus:border-tobacco focus:outline-none", defaultValue: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Select your operation" }),
            verticals.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: v.slug, children: v.shortName }, v.slug)),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "other", children: "Other" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Number of locations", name: "locations", type: "number", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-[10px] font-semibold uppercase tracking-widest text-ink/60", children: "What's leaking?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", rows: 4, placeholder: "One or two sentences. Specific is better than polite.", className: "w-full border border-rule bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-tobacco focus:outline-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full rounded-sm bg-ink px-6 py-4 text-sm font-medium text-paper ring-1 ring-ink transition-colors hover:bg-tobacco hover:ring-tobacco", children: "Schedule the Operator's Audit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-ink/40", children: "Mutual NDA before any on-site work begins." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-[10px] font-semibold uppercase tracking-widest text-ink/60", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, name, required, className: "w-full border border-rule bg-paper px-4 py-3 text-sm text-ink focus:border-tobacco focus:outline-none" })
  ] });
}
export {
  ContactPage as component
};
