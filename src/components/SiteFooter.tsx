import { Link } from "@tanstack/react-router";
import { verticals } from "@/data/verticals";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-surface text-ink/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-[42ch]">
          <Link to="/" className="mb-3 inline-flex items-baseline gap-1.5 text-lg font-semibold text-ink">
            <span>Catalytix</span>
            <span className="text-sm font-medium text-ink/60">Advisors</span>
          </Link>
          <p className="text-sm leading-relaxed">
            A technology advisory team helping multi-location operators design,
            source, and run modern IT — across UCaaS, CCaaS, SD-WAN, SASE,
            security, and cloud, with a 200+ supplier portfolio behind us.
          </p>
        </div>
        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-ink">
            Industries
          </div>
          <ul className="space-y-2 text-sm">
            {verticals.slice(0, 4).map((v) => (
              <li key={v.slug}>
                <Link to="/verticals/$slug" params={{ slug: v.slug }} className="hover:text-ink">
                  {v.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-ink">
            More
          </div>
          <ul className="space-y-2 text-sm">
            {verticals.slice(4).map((v) => (
              <li key={v.slug}>
                <Link to="/verticals/$slug" params={{ slug: v.slug }} className="hover:text-ink">
                  {v.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-ink">
            Firm
          </div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/audit" className="hover:text-ink">Services</Link></li>
            <li><Link to="/about" className="hover:text-ink">About</Link></li>
            <li><Link to="/insights" className="hover:text-ink">Insights</Link></li>
            <li><Link to="/contact" className="hover:text-ink">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-rule">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-ink/50 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Catalytix Advisory</span>
          <span>Catalytix Advisors LLC.</span>
        </div>
      </div>
    </footer>
  );
}
