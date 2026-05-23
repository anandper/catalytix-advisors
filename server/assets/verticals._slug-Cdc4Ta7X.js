import { H as jsxRuntimeExports } from "./server-MPA8XId8.js";
import { L as Link } from "./router-BHL9F3uu.js";
import { a as SiteHeader, S as SiteFooter } from "./SiteFooter-DKAzsVXf.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-paper", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6 py-32 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-4xl", children: "Vertical not found." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-ink/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "underline", children: "Back home" }) })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
] });
export {
  SplitNotFoundComponent as notFoundComponent
};
