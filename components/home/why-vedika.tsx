const pillars = [
  {
    title: 'Source-grounded',
    description: 'Every claim traces to a primary text. Citations are first-class UI elements, not footnotes.',
  },
  {
    title: 'Multiple traditions',
    description: 'Sāyaṇa, Dayananda, Chinmoy — interpretations are presented with lineage context, not flattened.',
  },
  {
    title: 'AI clearly labelled',
    description: 'Ask Vedika is Beta, never authoritative. Content leads; AI assists.',
  },
];

export function WhyVedika() {
  return (
    <section className="w-full bg-sandal-50 py-14 md:py-20">
      <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
        <header className="mb-10 space-y-1">
          <p className="text-overline uppercase tracking-widest text-saffron-500">Why Vedika</p>
          <h2 className="font-serif text-display-sm text-ink">Built for source clarity</h2>
          <p className="max-w-content text-body text-ink-muted">
            For learners and researchers who value primary sources over quick takes.
          </p>
        </header>
        <ul className="grid gap-10 md:grid-cols-3">
          {pillars.map((pillar) => (
            <li key={pillar.title} className="flex flex-col gap-3">
              <span className="h-0.5 w-10 bg-saffron-400" aria-hidden="true" />
              <h3 className="font-serif text-subheading font-semibold text-ink">{pillar.title}</h3>
              <p className="text-body-sm text-ink-muted">{pillar.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
