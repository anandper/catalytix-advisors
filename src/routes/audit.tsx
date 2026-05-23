import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { FaqList, faqJsonLd } from "@/components/JsonLd";
import {
  Cloud,
  Headphones,
  Network,
  ShieldCheck,
  Wifi,
  Building2,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Headphones,
    title: "Unified Communications (UCaaS)",
    desc: "Cloud voice, messaging, video, and collaboration platforms with deep CRM and EHR integrations.",
    items: ["Cloud PBX & SIP", "Microsoft Teams voice", "Mobile-first calling", "Compliance recording"],
  },
  {
    icon: Headphones,
    title: "Contact Center (CCaaS)",
    desc: "Omnichannel customer engagement with workforce management, AI, and analytics.",
    items: ["Omnichannel routing", "AI agent assist", "WFM & QA", "Self-service IVR"],
  },
  {
    icon: Network,
    title: "Network & SD-WAN",
    desc: "Resilient multi-site connectivity built for cloud-first applications and distributed teams.",
    items: ["SD-WAN", "Dedicated fiber & broadband", "Wireless / 5G failover", "Managed LAN/WiFi"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & SASE",
    desc: "Identity-aware perimeter, 24/7 monitoring, and compliance-aligned controls.",
    items: ["MDR / SOC", "SASE / SSE", "Zero-trust access", "Compliance (HIPAA, PCI, SOC 2)"],
  },
  {
    icon: Cloud,
    title: "Cloud & Continuity",
    desc: "Right-sized cloud infrastructure and disaster recovery with predictable economics.",
    items: ["IaaS / private cloud", "DaaS", "BDR & DRaaS", "Microsoft 365 management"],
  },
  {
    icon: Wifi,
    title: "Connectivity & POTS Replacement",
    desc: "Modernize legacy lines and consolidate carriers across your entire footprint.",
    items: ["POTS replacement", "Multi-site procurement", "Carrier consolidation", "E-rate & rural support"],
  },
  {
    icon: Building2,
    title: "Lifecycle & Vendor Management",
    desc: "Ongoing advocacy across renewals, escalations, audits, and M&A integration.",
    items: ["Contract optimization", "Renewal management", "Bill audits", "M&A IT integration"],
  },
];

const auditFaq = [
  {
    q: "How long does engagement take?",
    a: "A scoping call takes 30 minutes. A typical assessment runs 2–4 weeks depending on footprint. Implementation timelines depend on the solution selected.",
  },
  {
    q: "Do you charge for assessments?",
    a: "No. Catalytix is compensated by suppliers via Intelisys when you move forward with a recommended solution. Clients pay nothing.",
  },
  {
    q: "What if we already have suppliers we like?",
    a: "Great. Our job is to make those relationships work harder — through better contracts, integrations, and accountability — not to replace them by default.",
  },
  {
    q: "Do you support implementation?",
    a: "Yes. We project-manage cutover, hold suppliers accountable to SLAs, and stay on as your advisor for renewals and ongoing optimization.",
  },
];

export const Route = createFileRoute("/audit")({
  head: () => ({
    meta: [
      { title: "Services — Catalytix" },
      {
        name: "description",
        content:
          "Technology advisory and procurement across UCaaS, CCaaS, SD-WAN, SASE, cybersecurity, cloud, and connectivity. Powered by 200+ vetted Intelisys suppliers.",
      },
      { property: "og:title", content: "Services — Catalytix" },
    ],
    links: [{ rel: "canonical", href: "/audit" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(auditFaq)) },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-tobacco">
          Services
        </div>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          One advisor across your entire technology stack.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink/70">
          We design, source, and manage modern IT for multi-location businesses — drawing on a
          vetted portfolio of 200+ suppliers through our partnership with Intelisys, a ScanSource
          company.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-rule bg-paper p-6">
              <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-tobacco/10 text-tobacco">
                <s.icon className="size-5" />
              </div>
              <h2 className="mb-2 text-lg font-semibold">{s.title}</h2>
              <p className="mb-4 text-sm text-ink/65">{s.desc}</p>
              <ul className="space-y-1.5 text-sm text-ink/75">
                {s.items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-tobacco" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-rule bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="mb-10 text-3xl font-semibold tracking-tight md:text-4xl">
            Frequently asked.
          </h2>
          <FaqList items={auditFaq} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Let's scope your stack.
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-ink/65">
          A 30-minute consultation to understand your environment and identify quick wins.
        </p>
        <div className="mt-8">
          <PrimaryCTA className="px-6 py-3">Book a consultation</PrimaryCTA>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
