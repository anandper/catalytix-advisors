import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { FaqList, faqJsonLd } from "@/components/JsonLd";
import { verticals, verticalBySlug } from "@/data/verticals";

export const Route = createFileRoute("/verticals/$slug")({
  loader: ({ params }) => {
    const v = verticalBySlug(params.slug);
    if (!v) throw notFound();
    return v;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Vertical not found | Catalytix" }] };
    return {
      meta: [
        { title: loaderData.metaTitle },
        { name: "description", content: loaderData.metaDescription },
        { property: "og:title", content: loaderData.metaTitle },
        { property: "og:description", content: loaderData.metaDescription },
        { property: "og:url", content: `/verticals/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/verticals/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(faqJsonLd(loaderData.faq)),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-paper">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-serif text-4xl">Vertical not found.</h1>
        <p className="mt-4 text-ink/60">
          <Link to="/" className="underline">
            Back home
          </Link>
        </p>
      </div>
      <SiteFooter />
    </div>
  ),
  component: VerticalPage,
});

function VerticalPage() {
  const v = Route.useLoaderData();
  const others = verticals.filter((o) => o.slug !== v.slug);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <Link
          to="/"
          className="mb-8 inline-block text-xs font-semibold uppercase tracking-widest text-ink/50 hover:text-tobacco"
        >
          &larr; All verticals
        </Link>
        <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.2em] text-tobacco">
          The Operator's Audit for
        </span>
        <h1 className="mb-8 max-w-[22ch] font-serif text-5xl font-medium leading-[1.05] lg:text-7xl">
          {v.name}
        </h1>
        <p className="max-w-[60ch] text-lg leading-relaxed text-ink/70 lg:text-xl">{v.intro}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <PrimaryCTA>Schedule the Operator's Audit</PrimaryCTA>
          <PrimaryCTA variant="ghost" to="/audit">
            How the Audit works
          </PrimaryCTA>
        </div>
      </section>

      {/* Findings */}
      <section className="border-y border-rule">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-tobacco">
            What we typically find
          </span>
          <h2 className="mb-16 max-w-[28ch] font-serif text-4xl font-medium leading-tight lg:text-5xl">
            Patterns we see on the floor.
          </h2>
          <ol className="divide-y divide-rule border-y border-rule">
            {v.findings.map((f, i) => (
              <li key={i} className="grid gap-6 py-10 lg:grid-cols-[80px_1fr_2fr] lg:gap-12">
                <span className="font-serif text-2xl text-tobacco">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl font-medium">{f.symptom}</h3>
                <p className="text-ink/70 text-pretty leading-relaxed">{f.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
        <h2 className="mb-12 font-serif text-3xl font-medium lg:text-4xl">Common questions.</h2>
        <FaqList items={v.faq} />
      </section>

      {/* Other verticals */}
      <section className="border-t border-rule bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="mb-10 font-serif text-2xl font-medium">Other verticals we go deep on.</h2>
          <div className="grid gap-x-12 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/verticals/$slug"
                params={{ slug: o.slug }}
                className="group flex items-baseline justify-between border-b border-rule py-4 transition-colors hover:text-tobacco"
              >
                <span className="font-serif text-lg">{o.shortName}</span>
                <span className="text-xs font-semibold uppercase tracking-widest opacity-60 group-hover:opacity-100">
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-rule">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
          <h2 className="mx-auto mb-10 max-w-[26ch] font-serif text-4xl font-medium leading-tight lg:text-5xl">
            Tell us your operation. We'll show you where it's leaking.
          </h2>
          <PrimaryCTA className="px-8 py-4 text-base" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
