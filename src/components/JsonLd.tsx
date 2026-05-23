type FaqItem = { q: string; a: string };

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <dl className="divide-y divide-rule border-y border-rule">
      {items.map((i, idx) => (
        <div key={idx} className="grid gap-4 py-8 lg:grid-cols-[1fr_2fr] lg:gap-12">
          <dt className="font-serif text-xl text-ink">{i.q}</dt>
          <dd className="text-ink/70 text-pretty leading-relaxed">{i.a}</dd>
        </div>
      ))}
    </dl>
  );
}
