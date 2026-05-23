import { Link } from "@tanstack/react-router";
import { verticals } from "@/data/verticals";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div className="max-w-[42ch]">
          <Link to="/" className="mb-4 block font-serif text-xl italic text-paper">
            Catalytix
          </Link>
          <p className="text-xs leading-relaxed">
            Authorized advisor of Intelisys, a ScanSource company. Suppliers pay us residual; clients
            pay us nothing. We negotiate against the supplier on the client's behalf. We are not
            employed by any supplier.
          </p>
        </div>
        <div>
          <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/60">
            Verticals
          </div>
          <ul className="space-y-3 text-xs">
            {verticals.slice(0, 4).map((v) => (
              <li key={v.slug}>
                <Link
                  to="/verticals/$slug"
                  params={{ slug: v.slug }}
                  className="hover:text-paper"
                >
                  {v.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/60">
            More verticals
          </div>
          <ul className="space-y-3 text-xs">
            {verticals.slice(4).map((v) => (
              <li key={v.slug}>
                <Link
                  to="/verticals/$slug"
                  params={{ slug: v.slug }}
                  className="hover:text-paper"
                >
                  {v.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/60">
            Firm
          </div>
          <ul className="space-y-3 text-xs">
            <li>
              <Link to="/audit" className="hover:text-paper">
                The Operator's Audit
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-paper">
                About
              </Link>
            </li>
            <li>
              <Link to="/insights" className="hover:text-paper">
                Insights
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-paper">
                Schedule the Audit
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-[10px] uppercase tracking-widest sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Catalytix Advisory</span>
          <span>Not a broker. An operator.</span>
        </div>
      </div>
    </footer>
  );
}
