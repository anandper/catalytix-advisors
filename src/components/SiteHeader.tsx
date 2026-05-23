import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { PrimaryCTA } from "./PrimaryCTA";

const nav = [
  { to: "/audit", label: "Services" },
  { to: "/verticals/dental", label: "Industries" },
  { to: "/insights", label: "Insights" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-semibold tracking-tight text-ink">
          Catalytix<span className="text-tobacco">.</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-ink/70 transition-colors hover:text-ink"
              activeProps={{ className: "text-ink" }}
            >
              {n.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <PrimaryCTA>Book a consultation</PrimaryCTA>
        </div>
        <button
          aria-label="Menu"
          className="text-xs font-semibold uppercase tracking-widest md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <div className="border-t border-rule px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
            <PrimaryCTA>Book a consultation</PrimaryCTA>
          </div>
        </div>
      )}
    </header>
  );
}
