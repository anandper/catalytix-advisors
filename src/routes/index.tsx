import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Cloud,
  Headphones,
  Network,
  ShieldCheck,
  Wifi,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { FaqList, faqJsonLd } from "@/components/JsonLd";
import { verticals } from "@/data/verticals";

const homeFaq = [
  {
    q: "How is Catalytix different from a telecom broker?",
    a: "Brokers lead with a supplier. We lead with your operation, design the target stack, then source against it from a vetted portfolio of 200+ providers.",
  },
  {
    q: "How are you compensated?",
    a: "Suppliers we recommend pay residual through Intelisys, our master agent. Clients pay nothing to Catalytix.",
  },
  {
    q: "Do we have to switch carriers?",
    a: "No. Often the right move is renegotiating the contract you already have. Replacement is one option, not the goal.",
  },
  {
    q: "What size companies do you work with?",
    a: "Multi-location operators — typically 2 to 100 sites — across healthcare, hospitality, retail, fuel, and cannabis.",
  },
];

const services = [
  {
    icon: Headphones,
    title: "UCaaS & CCaaS",
    desc: "Modern voice, contact center, and collaboration platforms designed around how your teams actually work.",
  },
  {
    icon: Network,
    title: "SD-WAN & SASE",
    desc: "Resilient multi-site networking with integrated security — built for distributed operations and cloud-first apps.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & MDR",
    desc: "24/7 detection and response, identity, and compliance programs aligned to HIPAA, PCI, and SOC 2.",
  },
  {
    icon: Cloud,
    title: "Cloud & DRaaS",
    desc: "IaaS, DaaS, and disaster recovery sized to your RPO/RTO — without the hyperscaler markup or surprise egress.",
  },
  {
    icon: Wifi,
    title: "Connectivity",
    desc: "Fiber, wireless, and POTS replacement procurement across all your sites, on one contract and one rate sheet.",
  },
  {
    icon: Building2,
    title: "Lifecycle Management",
    desc: "Renewals, audits, and supplier escalations handled by your advisor — not your IT team or finance department.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Catalytix — Technology advisory for modern operators" },
      {
        name: "description",
        content:
          "Catalytix is an independent technology advisory firm. We help multi-location businesses design, source, and run modern IT — from UCaaS and SD-WAN to cybersecurity and cloud.",
      },
      { property: "og:title", content: "Catalytix — Technology advisory for modern operators" },
      {
        property: "og:description",
        content:
          "Independent technology advisory powered by Intelisys. Vendor-neutral guidance across 200+ vetted suppliers.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(homeFaq)) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 -z-10 h-[640px] bg-gradient-to-b from-tobacco/8 via-tobacco/3 to-transparent"
        />
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 lg:pt-28">
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl">
            Modern IT, sourced and managed by{" "}
            <span className="text-tobacco">a team that knows your operation</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/70 text-pretty">
            Catalytix Advisors designs and procures the technology stack for multi-location
            operators — voice, network, security, and cloud — across a vetted portfolio of 200+
            suppliers. Vendor-neutral. Outcome-aligned. Paid by the supplier, not by you.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <PrimaryCTA className="px-6 py-3">
              Book a consultation <ArrowRight className="ml-2 size-4" />
            </PrimaryCTA>
            <PrimaryCTA variant="ghost" to="/audit">
              See what we do
            </PrimaryCTA>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-rule pt-10 lg:grid-cols-4">
            {[
              { v: "200+", l: "Vetted suppliers" },
              { v: "8", l: "Industries served" },
              { v: "$1B+", l: "Channel spend influenced" },
              { v: "1", l: "Advisor accountable" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-semibold tracking-tight md:text-4xl">{s.v}</div>
                <div className="mt-1 text-sm text-ink/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="border-t border-rule bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-tobacco">
                What we do
              </div>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
                One advisor across the entire stack.
              </h2>
            </div>
            <Link
              to="/audit"
              className="hidden shrink-0 items-center gap-1 text-sm font-medium text-ink/70 hover:text-tobacco md:inline-flex"
            >
              All services <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-rule bg-paper p-6 transition-colors hover:border-tobacco/40"
              >
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-tobacco/10 text-tobacco">
                  <s.icon className="size-5" />
                </div>
                <h3 className="mb-2 text-base font-semibold">{s.title}</h3>
                <p className="text-sm text-ink/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — compact */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="mb-12">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-tobacco">
            How we work
          </div>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            From assessment to cutover — in three steps.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              n: "01",
              h: "Assess",
              p: "We map your current stack, contracts, and pain points. No questionnaire fatigue — we do the work.",
            },
            {
              n: "02",
              h: "Architect",
              p: "We design the target solution and shortlist suppliers from 200+, then negotiate on your behalf.",
            },
            {
              n: "03",
              h: "Operate",
              p: "We project-manage implementation and stay on as your advisor through renewals and growth.",
            },
          ].map((s) => (
            <div key={s.n} className="rounded-xl border border-rule p-6">
              <div className="mb-4 text-sm font-mono text-tobacco">{s.n}</div>
              <h3 className="mb-2 text-lg font-semibold">{s.h}</h3>
              <p className="text-sm text-ink/65">{s.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="border-t border-rule bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-tobacco">
                Industries
              </div>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
                Specialists, not generalists.
              </h2>
            </div>
          </div>
          <div className="grid gap-px bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
            {verticals.map((v) => (
              <Link
                key={v.slug}
                to="/verticals/$slug"
                params={{ slug: v.slug }}
                className="group flex flex-col justify-between gap-6 bg-ink p-6 transition-colors hover:bg-paper/5"
              >
                <span className="text-base font-semibold group-hover:text-tobacco">
                  {v.shortName}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-paper/60">
                  Learn more <ArrowRight className="size-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:py-24">
        <div className="mb-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-tobacco">
            FAQ
          </div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Common questions.
          </h2>
        </div>
        <FaqList items={homeFaq} />
        <div className="mt-16 rounded-2xl border border-rule bg-surface p-8 text-center md:p-12">
          <h3 className="mx-auto max-w-xl text-2xl font-semibold tracking-tight md:text-3xl">
            Ready to modernize your IT stack?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-ink/65">
            A 30-minute call to scope your environment and see if we're a fit.
          </p>
          <div className="mt-6">
            <PrimaryCTA className="px-6 py-3">Book a consultation</PrimaryCTA>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
