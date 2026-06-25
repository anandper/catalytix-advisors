import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Cloud,
  Cog,
  GitBranch,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { FaqList, faqJsonLd } from "@/components/JsonLd";

const stats = [
  { v: "20+", l: "Years enterprise software & delivery leadership" },
  { v: "$20M+", l: "Annual delivery portfolio managed" },
  { v: "120+", l: "Engineers led across concurrent engagements" },
  { v: "F500", l: "FinServ · Insurance · Life Sciences · Manufacturing" },
];

const services = [
  {
    n: "01",
    icon: Brain,
    title: "Technology Strategy & Advisory",
    tags: ["Engineering Org Design", "Tech Strategy", "Vendor Negotiation", "Board Reporting"],
  },
  {
    n: "02",
    icon: Cloud,
    title: "AI & Cloud Transformation",
    tags: ["GenAI / Agentic AI", "RAG Pipelines", "AI-Driven SDLC", "Cloud Migration"],
  },
  {
    n: "03",
    icon: Workflow,
    title: "Program & Delivery Leadership",
    tags: ["P&L Ownership", "SOW Development", "Risk Management", "Executive Reporting"],
  },
  {
    n: "04",
    icon: ShieldCheck,
    title: "AI Framework Evaluation & Governance",
    tags: ["LLM Selection", "AI Governance", "Build vs Buy", "Responsible AI"],
  },
  {
    n: "05",
    icon: GitBranch,
    title: "Engineering Modernization",
    tags: ["Strangler Fig", "Microservices", "DevSecOps", "CI/CD"],
  },
  {
    n: "06",
    icon: Cog,
    title: "Delivery in Regulated Environments",
    tags: ["Life Sciences", "HL7 / FHIR", "Insurance & Mortgage", "FinServ Compliance"],
  },
];

const aiPractice = [
  {
    n: "01",
    title: "LLM Integration",
    items: [
      "Azure OpenAI",
      "Vector store and indexing",
      "Prompt engineering and evaluation frameworks",
      "Agentic workflows",
    ],
  },
  {
    n: "02",
    title: "AI-Driven SDLC & QA Transformation",
    items: [
      "AI-powered requirements & user story generation",
      "AI-powered QA test case generation",
      "Agentic project status reporting — automated weekly compilation",
      "AI-powered engineering team metrics dashboard",
    ],
  },
  {
    n: "03",
    title: "AI Framework Evaluation & Governance",
    items: [
      "LLM selection: Claude, Gemini — use-case matched",
      "Build vs. buy vs. fine-tune analysis",
      "Responsible AI governance and policy alignment",
      "IAPP AI Governance Professional alignment",
    ],
  },
  {
    n: "04",
    title: "Agentic AI & Intelligent Automation",
    items: [
      "LLM-powered IT support chatbot — 40% ticket resolution reduction",
      "Automated business rules engine — 90% process efficiency gain",
      "MCP Server over Azure DevOps for codebase navigation",
      "UiPath RPA with AI-enhanced decision layers",
    ],
  },
];

const built = [
  "AI Requirements & User Story Generator",
  "QA Test Case Generator",
  "Agentic PM Status Report Workflow",
  "Engineering Metrics Dashboard",
  "MCP Server → Azure DevOps",
];

const work = [
  {
    sector: "Insurance / FinServ",
    metric: "40%",
    detail: "Ticket resolution time reduction",
    title: "Contact Center AI Transformation",
  },
  {
    sector: "Title Insurance",
    metric: "90%",
    detail: "Technical debt eliminated · zero downtime",
    title: "Legacy Platform Modernization",
  },
  {
    sector: "Financial Services",
    metric: "65%",
    detail: "Operating cost reduction · 79% productivity gain",
    title: "Operating Cost Transformation",
  },
  {
    sector: "Manufacturing",
    metric: "25%",
    detail: "Delivery acceleration · 40% defect detection improvement",
    title: "AI-Driven Delivery Acceleration",
  },
];

const faq = [
  {
    q: "How does Modern IT Advisory fit alongside your IT services?",
    a: "It's the leadership layer on top of the technology we source and run. Where our advisory team designs and procures your UCaaS, network, security, and cloud stack, Modern IT Advisory provides the executive engineering ownership to set strategy, govern delivery, and turn that stack into outcomes.",
  },
  {
    q: "What engagement models do you offer?",
    a: "Advisory, interim Director of Engineering, and embedded technology leadership. We step in as a senior leadership team that owns outcomes — teams, budgets, stakeholder alignment, and execution — at the cadence your business needs.",
  },
  {
    q: "How is this different from a typical consultant?",
    a: "We don't leave the technical depth behind. Our advisory team can go deep when it matters, which means we ask better questions, make faster decisions, and aren't misled by the delivery teams we lead. You work directly with our principals — no handoffs, no junior substitution.",
  },
  {
    q: "Can you take AI initiatives to production?",
    a: "Yes. Most AI initiatives stall between pilot and production. We have led the full journey — architecture, team enablement, governance, and deployment — and we build and prototype hands-on with the delivery infrastructure to scale it across an enterprise.",
  },
  {
    q: "What industries do you know best?",
    a: "Fortune 500 and mid-market organizations across Financial Services, Insurance, Life Sciences, Manufacturing, and Retail — including regulated delivery environments with HL7/FHIR, mortgage, and FinServ compliance requirements.",
  },
];

export const Route = createFileRoute("/modern-it-advisory")({
  head: () => ({
    meta: [
      { title: "Modern IT Advisory — Executive Engineering Leadership | Catalytix" },
      {
        name: "description",
        content:
          "Catalytix Modern IT Advisory pairs executive engineering leadership with our IT services — strategy, AI transformation, and delivery governance across your modern technology stack.",
      },
      {
        property: "og:title",
        content: "Modern IT Advisory — Executive Engineering Leadership | Catalytix",
      },
      {
        property: "og:description",
        content:
          "Executive engineering leadership layered on top of the IT stack we source and run — strategy, AI transformation, and delivery governance.",
      },
    ],
    links: [{ rel: "canonical", href: "/modern-it-advisory" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faq)) }],
  }),
  component: ModernItAdvisory,
});

function ModernItAdvisory() {
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
          <div className="mb-5 text-xs font-semibold uppercase tracking-wider text-tobacco">
            Modern IT Advisory · Catalytix
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl">
            The leadership layer on top of the technology we source and run.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium text-ink/80">
            Modern IT Advisory is the executive engineering partnership that sits above your
            UCaaS, network, security, and cloud stack. We set strategy, govern delivery, and turn
            technology investments into measurable business outcomes.
          </p>
          <p className="mt-6 max-w-2xl text-lg text-ink/70 text-pretty">
            Our advisory team designs and procures your modern IT infrastructure, then provides the
            senior leadership to make it perform. That means P&L accountability, architecture
            oversight, AI transformation, and delivery governance — without the overhead of a
            full-time executive bench.
          </p>

          <div className="mt-10">
            <PrimaryCTA className="px-6 py-3">
              Start a Conversation <ArrowRight className="ml-2 size-4" />
            </PrimaryCTA>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-rule pt-10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-semibold tracking-tight md:text-4xl">{s.v}</div>
                <div className="mt-1 text-sm text-ink/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="border-t border-rule bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <div className="mb-12">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-tobacco">
              What we do
            </div>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              Senior-level leadership across the full delivery lifecycle.
            </h2>
            <p className="mt-4 max-w-2xl text-ink/65">
              We work alongside your team — no handoffs, no junior substitution, no methodology theater.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-rule bg-paper p-6 transition-colors hover:border-tobacco/40"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex size-10 items-center justify-center rounded-lg bg-tobacco/10 text-tobacco">
                    <s.icon className="size-5" />
                  </div>
                  <span className="text-sm font-mono text-ink/40">{s.n}</span>
                </div>
                <h3 className="mb-3 text-base font-semibold">{s.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-rule bg-surface px-2.5 py-1 text-xs text-ink/65"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Practice */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="mb-12">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-tobacco">
            AI Practice
          </div>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Strategy to production — not just the slide.
          </h2>
          <p className="mt-4 max-w-2xl text-ink/65">
            Most AI initiatives stall between pilot and production. We have led the full journey —
            architecture, team enablement, governance, and deployment. We build and prototype
            hands-on, and we have the delivery infrastructure to scale AI across an enterprise.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {aiPractice.map((p) => (
            <div key={p.title} className="rounded-xl border border-rule p-6">
              <div className="mb-2 text-sm font-mono text-tobacco">{p.n}</div>
              <h3 className="mb-4 text-lg font-semibold">{p.title}</h3>
              <ul className="space-y-2">
                {p.items.map((i) => (
                  <li key={i} className="flex gap-3 text-sm text-ink/70">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-tobacco" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-xl border border-rule bg-surface p-6">
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-tobacco">
            Built —
          </div>
          <div className="flex flex-wrap gap-2">
            {built.map((b) => (
              <span
                key={b}
                className="rounded-full border border-rule bg-paper px-3 py-1.5 text-sm text-ink/75"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="border-t border-rule bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <div className="mb-12">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-tobacco">
              Selected work
            </div>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              Outcomes from our delivery experience.
            </h2>
            <p className="mt-4 max-w-2xl text-paper/60">
              Client names withheld per confidentiality. Direct delivery track record — not firm history.
            </p>
          </div>
          <div className="grid gap-px bg-paper/10 sm:grid-cols-2">
            {work.map((w) => (
              <div key={w.title} className="bg-ink p-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-paper/50">
                  {w.sector}
                </div>
                <div className="mt-4 text-4xl font-semibold tracking-tight text-tobacco md:text-5xl">
                  {w.metric}
                </div>
                <div className="mt-2 text-sm text-paper/60">{w.detail}</div>
                <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
              </div>
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
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Common questions.</h2>
        </div>
        <FaqList items={faq} />
        <div className="mt-16 rounded-2xl border border-rule bg-surface p-8 text-center md:p-12">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-tobacco">
            Let's work together
          </div>
          <h3 className="mx-auto max-w-xl text-2xl font-semibold tracking-tight md:text-3xl">
            Looking for senior engineering leadership to guide your modern IT stack?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-ink/65">
            Tell us the problem. We'll be direct about whether we're the right fit — and if so,
            exactly how we'd approach it. No pitch deck. No follow-up from someone you haven't met.
          </p>
          <div className="mt-6">
            <PrimaryCTA className="px-6 py-3">Start a Conversation</PrimaryCTA>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
