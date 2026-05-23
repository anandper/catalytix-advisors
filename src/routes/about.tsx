import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PrimaryCTA } from "@/components/PrimaryCTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Catalytix & Anand" },
      {
        name: "description",
        content:
          "Catalytix is a vertical-specialized technology advisory firm and authorized advisor of Intelisys, a ScanSource company. Built for operators, by operators.",
      },
      { property: "og:title", content: "About Catalytix" },
      {
        property: "og:description",
        content: "A vertical-specialized advisory firm. Authorized advisor of Intelisys.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
        <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.2em] text-tobacco">
          About the firm
        </span>
        <h1 className="mb-10 font-serif text-5xl font-medium leading-tight lg:text-6xl">
          One advisor. Eight verticals. The operator's seat.
        </h1>
        <div className="space-y-6 text-lg leading-relaxed text-ink/75">
          <p>
            Catalytix is a vertical-specialized technology advisory firm working with multi-location
            owner-operators in healthcare, cannabis, hospitality, fuel, and retail. We are an
            authorized advisor of Intelisys, a ScanSource company — one of the largest and most
            established master agents in North America. That access gives us a vetted portfolio of
            roughly 200 suppliers across UCaaS, CCaaS, SD-WAN, SASE/SSE, MDR/SOC, POTS replacement,
            BDR/DRaaS, IaaS, DaaS, and managed mobility.
          </p>
          <p>
            We don't sell technology. The supplier recommendation comes at the end of the
            engagement, not the beginning. The Operator's Audit is the product. Suppliers pay us
            residual; clients pay us nothing. We negotiate against the supplier on the client's
            behalf.
          </p>
          <p>
            We work in eight verticals. Going deep in those eight is the only way to be useful on a
            site walk. A national carrier rep covers fifty industries. We cover eight. That's the
            trade.
          </p>
        </div>

        <div className="mt-16 grid gap-8 border-y border-rule py-12 sm:grid-cols-2">
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-tobacco">
              What we are not
            </div>
            <ul className="space-y-2 text-ink/70">
              <li>— A telecom broker</li>
              <li>— A master agent</li>
              <li>— A reseller</li>
              <li>— An MSP</li>
              <li>— A generalist IT consultant</li>
            </ul>
          </div>
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-tobacco">
              What we are
            </div>
            <ul className="space-y-2 text-ink/70">
              <li>— A diagnostic firm</li>
              <li>— Vertical-specialized</li>
              <li>— On the operator's side</li>
              <li>— Accountable through cutover</li>
              <li>— Independent of any single supplier</li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <PrimaryCTA className="px-8 py-4 text-base">
            Schedule the Operator's Audit
          </PrimaryCTA>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
