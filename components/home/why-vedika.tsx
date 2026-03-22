const pillars = [
  {
    title: 'Source-grounded content',
    detail: 'Research pages are structured to keep primary and secondary sources visible and connected.'
  },
  {
    title: 'Trust-first AI layering',
    detail: 'AI assistance is clearly marked Beta and framed as guidance, not authority.'
  },
  {
    title: 'Editorial clarity',
    detail: 'Readable hierarchy and restrained design support focused long-form study across devices.'
  }
];

export function WhyVedika() {
  return (
    <ul className="grid gap-4 md:grid-cols-3">
      {pillars.map((pillar) => (
        <li key={pillar.title} className="rounded-xl border border-amber-100 bg-white p-5">
          <h3 className="font-semibold">{pillar.title}</h3>
          <p className="mt-2 text-sm text-slate-700">{pillar.detail}</p>
        </li>
      ))}
    </ul>
  );
}
