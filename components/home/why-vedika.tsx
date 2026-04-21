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
    <ul className="grid gap-6 md:grid-cols-3">
      {pillars.map((pillar) => (
        <li key={pillar.title} className="flex flex-col gap-2">
          <span className="h-1.5 w-6 rounded-full bg-saffron-400" aria-hidden="true" />
          <h3 className="font-serif text-subheading font-semibold text-ink">{pillar.title}</h3>
          <p className="text-body-sm text-ink-muted">{pillar.description}</p>
        </li>
      ))}
    </ul>
  );
}
