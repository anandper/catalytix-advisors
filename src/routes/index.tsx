import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { FaqList, faqJsonLd } from "@/components/JsonLd";
import { verticals } from "@/data/verticals";
import storefronts from "@/assets/storefronts.jpg";

const homeFaq = [
  {
    q: "Are you a telecom broker?",
    a: "No. Brokers lead with a supplier and back into the customer. We lead with the operator and recommend a supplier last. The Audit is the product.",
  },
  {
    q: "Are you an MSP?",
    a: "No. We don't operate networks day-to-day. We architect what an MSP is asked to operate, and we hold MSPs accountable to a single design.",
  },
  {
    q: "How are you paid?",
    a: "Suppliers we recommend pay residual to the master agent we operate under, Intelisys. Clients pay nothing to Catalytix.",
  },
  {
    q: "Why a vertical specialist?",
    a: "A national carrier rep covers fifty industries. We cover eight. By the time we're in your building, the patterns in your vertical are already familiar.",
  },
  {
    q: "What size operator do you work with?",
    a: "Multi-location only. Two locations and up for healthcare; four for c-stores; ten for fuel.",
  },
  {
    q: "Do you require us to switch carriers?",
    a: "No. The Audit may find you have the right carrier on the wrong contract. We renegotiate. Replacement is one option, not the goal.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Catalytix — The Operator's Audit" },
      {
        name: "description",
        content:
          "We don't sell technology. We run the Operator's Audit — a structured on-site assessment for multi-location operators in healthcare, cannabis, hospitality, fuel, and retail.",
      },
      { property: "og:title", content: "Catalytix — The Operator's Audit" },
      {
        property: "og:description",
        content:
          "Structured on-site assessment for multi-location operators. We find the gaps your carriers and your IT vendor don't.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(homeFaq)),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="max-w-[48ch]">
          <h1 className="mb-8 font-serif text-5xl font-medium leading-[1.05] text-balance lg:text-7xl">
            We don't sell technology. We run the Operator's Audit.
          </h1>
          <p className="mb-12 text-lg leading-relaxed text-ink/70 text-pretty lg:text-xl">
            Catalytix runs a structured on-site assessment for multi-location operators in
            healthcare, cannabis, hospitality, fuel, and retail. We find the operational gaps your
            carriers and your IT guy don't — then architect what fixes them.
          </p>
          <div className="flex flex-wrap gap-4">
            <PrimaryCTA>Schedule the Operator's Audit</PrimaryCTA>
            <PrimaryCTA variant="ghost" to="/audit">
              How the Audit works
            </PrimaryCTA>
          </div>
        </div>
        <div className="mt-20">
          <img
            src={storefronts}
            alt="Line-drawn sequence of operator storefronts: gas station, dental clinic, veterinary practice, cannabis dispensary, urgent care, and hotel."
            width={1920}
            height={640}
            className="w-full rounded-md border border-rule bg-ink/[0.02] object-cover"
          />
        </div>
      </section>

      {/* Numbers band */}
      <section className="border-y border-rule">
        <div className="mx-auto grid max-w-7xl grid-cols-2 items-end gap-12 px-6 py-16 lg:grid-cols-4">
          <div>
            <span className="mb-2 block font-serif text-4xl">200+</span>
            <span className="text-xs uppercase tracking-widest text-ink/50">
              Intelisys suppliers vetted
            </span>
          </div>
          <div>
            <span className="mb-2 block font-serif text-4xl">$1B+</span>
            <span className="text-xs uppercase tracking-widest text-ink/50">
              Annual technology spend across the channel
            </span>
          </div>
          <div>
            <span className="mb-2 block font-serif text-4xl">8</span>
            <span className="text-xs uppercase tracking-widest text-ink/50">
              Verticals we go deep on
            </span>
          </div>
          <div className="border-l border-tobacco/30 pl-8">
            <span className="-mb-1 block font-serif text-7xl leading-none text-tobacco">1</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-tobacco">
              Advisor accountable for outcomes
            </span>
          </div>
        </div>
      </section>

      {/* The problem we solve */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="mb-20">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-tobacco">
            The problem we solve
          </span>
          <h2 className="max-w-[30ch] font-serif text-4xl font-medium leading-tight lg:text-5xl">
            Technology fails when no one knows your operation.
          </h2>
          <p className="mt-8 max-w-[60ch] text-lg text-ink/70 text-pretty">
            A national carrier rep doesn't know your vertical. Your IT guy doesn't know your
            suppliers. Your master agent doesn't know your floor. The result is a stack architected
            by people who've never worked a shift in your business. The Operator's Audit closes
            that gap by starting where everyone else ends — on-site.
          </p>
        </div>

        <div className="grid gap-x-16 gap-y-14 lg:grid-cols-2">
          {[
            {
              quote: "We're paying three carriers for what one used to do.",
              symptom: "Stranded carrier spend across multi-site footprints",
              detail:
                "When sites get added one at a time, contract terms accumulate; nobody renegotiates the whole portfolio.",
            },
            {
              quote: "Our IT guy says it's the carrier's fault. The carrier says it's our IT.",
              symptom: "No single party accountable for the stack",
              detail:
                "Every vendor has someone to blame. Nobody has a reason to fix it.",
            },
            {
              quote: "We pass our PCI scan but I'd never bet the business on it.",
              symptom: "Compliance theater instead of real risk reduction",
              detail:
                "Passing a scan is not the same as actually segmenting the network. Most operators have the first; almost none have the second.",
            },
            {
              quote: "We added three locations and the wheels came off.",
              symptom: "Operating stack that doesn't scale past 5 sites",
              detail:
                "What works for one location is not architecture. It's improvisation that hasn't broken yet.",
            },
          ].map((p, i) => (
            <div key={i} className="space-y-4">
              <blockquote className="font-serif text-3xl italic leading-snug text-tobacco">
                "{p.quote}"
              </blockquote>
              <h3 className="pt-4 text-lg font-medium">{p.symptom}</h3>
              <p className="max-w-[52ch] text-ink/60 text-pretty">{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vertical selector */}
      <section className="bg-ink py-24 text-paper lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-paper/40">
              Pick your operation
            </span>
            <h2 className="font-serif text-4xl font-medium lg:text-5xl">
              Eight verticals we go deep on.
            </h2>
          </div>
          <div className="grid border-t border-paper/10 lg:grid-cols-2 lg:gap-x-12">
            {verticals.map((v) => (
              <Link
                key={v.slug}
                to="/verticals/$slug"
                params={{ slug: v.slug }}
                className="group -mx-4 flex items-center justify-between gap-8 border-b border-paper/10 px-4 py-10 transition-colors hover:bg-paper/5"
              >
                <div className="max-w-[44ch]">
                  <span className="mb-2 block font-serif text-2xl transition-colors group-hover:text-tobacco">
                    {v.name}
                  </span>
                  <p className="text-sm text-paper/50">{v.pain}</p>
                </div>
                <span className="shrink-0 text-xs font-semibold uppercase tracking-widest">
                  See what we find &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Audit explainer */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-tobacco">
          How the Audit works
        </span>
        <h2 className="mb-20 font-serif text-4xl font-medium leading-tight text-balance lg:text-5xl">
          A day on your floor. A brief in your hands. <br className="hidden lg:block" />A stack you
          can act on.
        </h2>
        <div className="grid gap-12 lg:grid-cols-3">
          {[
            {
              n: "01",
              h: "On-site",
              p: "We walk your locations with a clipboard. We look at the cabling, the racks, the staff workflows, and the actual hardware. We see the workarounds your team built to bypass broken systems. No Zoom. No questionnaire. The work is on the floor.",
            },
            {
              n: "02",
              h: "Brief",
              p: "A plainspoken document covering six dimensions: hidden revenue, cost optimization, risk exposure, compliance, workforce enablement, and growth. No vendor names yet. No pitch. A clear inventory of what's leaking and where.",
            },
            {
              n: "03",
              h: "Architecture",
              p: "Only after the brief do we recommend suppliers. We negotiate against them on your behalf. We don't leave until the last site is cut over and your team knows how to use what we built.",
            },
          ].map((s) => (
            <div key={s.n} className="relative">
              <span className="pointer-events-none absolute -left-4 -top-8 select-none font-serif text-6xl text-ink/5">
                {s.n}
              </span>
              <h3 className="relative mb-4 text-xl font-medium">{s.h}</h3>
              <p className="max-w-[42ch] text-ink/70 text-pretty">{s.p}</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <PrimaryCTA variant="ghost" to="/audit">
            Read the full process &rarr;
          </PrimaryCTA>
        </div>
      </section>

      {/* Independence */}
      <section className="border-t border-rule bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-tobacco">
            Why we're independent
          </span>
          <p className="font-serif text-2xl leading-relaxed text-ink/80 text-pretty lg:text-3xl">
            Catalytix is an authorized advisor of <span className="italic">Intelisys</span>, a
            ScanSource company. We are not employed by any supplier. Suppliers pay us residual.
            Clients pay us nothing. We negotiate against the supplier on the client's behalf.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="mb-12">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-tobacco">
            Common questions
          </span>
          <h2 className="font-serif text-4xl font-medium lg:text-5xl">
            What operators ask before they book.
          </h2>
        </div>
        <FaqList items={homeFaq} />
      </section>

      {/* Closing CTA */}
      <section className="border-t border-rule">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:py-40">
          <h2 className="mx-auto mb-12 max-w-[24ch] font-serif text-4xl font-medium leading-tight lg:text-6xl">
            Tell us your operation. We'll show you where it's leaking.
          </h2>
          <PrimaryCTA className="px-8 py-4 text-base">
            Schedule the Operator's Audit
          </PrimaryCTA>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
