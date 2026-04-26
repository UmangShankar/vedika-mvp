export function IndexHero() {
  return (
    <div className="bg-[#1C1208] px-8 py-14 relative overflow-hidden">
      <span
        aria-hidden="true"
        className="absolute right-0 top-0 text-[160px] text-saffron-500/[0.06]
                   leading-none pointer-events-none select-none font-devanagari"
      >
        दर्शन
      </span>
      <div className="relative z-10 max-w-wide mx-auto">
        <p className="text-overline text-saffron-400 mb-3 uppercase tracking-widest">
          Āstika Philosophy · Six Classical Schools
        </p>
        <h1 className="font-serif text-display text-sandal-50 mb-4 leading-tight">
          The Ṣaḍ Darśanas
        </h1>
        <p className="text-body text-sandal-200/70 max-w-[560px] mb-6 leading-relaxed">
          The six schools that form the philosophical spine of Sanatan Dharma.
          Three natural pairs — logic with atomism, enumeration with discipline,
          exegesis with enquiry into Brahman.
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { pair: 'Nyāya · Vaiśeṣika', color: '#2D7A6F' },
            { pair: 'Sāṃkhya · Yoga',    color: '#5B4A8A' },
            { pair: 'Mīmāṃsā · Vedānta', color: '#C07828' },
          ].map(p => (
            <span
              key={p.pair}
              className="text-caption px-3 py-1.5 rounded-full border"
              style={{ borderColor: `${p.color}60`, color: p.color, backgroundColor: `${p.color}15` }}
            >
              {p.pair}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
