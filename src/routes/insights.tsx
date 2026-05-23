import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Field notes from multi-location operators | Catalytix" },
      {
        name: "description",
        content:
          "Plainspoken field notes for multi-location operators in healthcare, cannabis, hospitality, fuel, and retail.",
      },
      { property: "og:title", content: "Catalytix Insights" },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
        <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.2em] text-tobacco">
          Insights
        </span>
        <h1 className="mb-10 font-serif text-5xl font-medium leading-tight lg:text-6xl">
          Field notes from the floor.
        </h1>
        <p className="text-lg leading-relaxed text-ink/70">
          Plainspoken writing for owner-operators. Specific to the eight verticals we work in. New
          pieces published on the cadence the field actually produces them, not the cadence a
          content calendar dictates.
        </p>
        <div className="mt-16 border-t border-rule py-16 text-center">
          <p className="font-serif text-2xl italic text-ink/50">
            The first dispatches are in the field.
          </p>
          <p className="mt-4 text-sm text-ink/50">Come back next week.</p>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
