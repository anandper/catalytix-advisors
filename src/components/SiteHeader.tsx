import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/audit", label: "The Audit" },
  { to: "/verticals/dental", label: "Verticals" },
  { to: "/insights", label: "Insights" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-rule bg-paper">
      <nav className="mx-auto flex max-w-7xl items-baseline justify-between px-6 py-7">
        <Link to="/" className="font-serif text-2xl italic tracking-tight text-ink">
          Catalytix
        </Link>
        <div className="hidden gap-10 text-sm font-medium uppercase tracking-wide md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-ink/80 transition-colors hover:text-tobacco"
              activeProps={{ className: "text-tobacco" }}
            >
              {n.label}
            </Link>
          ))}
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
          <div className="flex flex-col gap-4 text-sm font-medium uppercase tracking-wide">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
