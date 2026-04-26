interface SutraBlockProps {
  devanagari: string
  transliteration: string
  source: string
  color: string
}

export function SutraBlock({ devanagari, transliteration, source, color }: SutraBlockProps) {
  return (
    <div className="bg-[#1C1208] px-8 py-10 relative overflow-hidden">
      <span
        aria-hidden="true"
        className="absolute right-4 bottom-0 font-devanagari text-[80px]
                   text-saffron-500/[0.06] leading-none pointer-events-none select-none"
      >
        सूत्र
      </span>
      <div className="relative z-10 max-w-wide mx-auto">
        <p className="text-overline mb-4 uppercase tracking-widest" style={{ color }}>
          Opening sūtra
        </p>
        <p
          className="font-devanagari text-[1.02rem] leading-[2.2] mb-4 whitespace-pre-line"
          style={{
            fontFamily: "'Noto Serif Devanagari', serif",
            color: '#F5EDD8',
          }}
        >
          {devanagari}
        </p>
        <p className="font-serif text-[15px] italic mb-3" style={{ color: `${color}CC` }}>
          "{transliteration}"
        </p>
        <p className="text-caption text-sandal-200/50 tracking-wide">{source}</p>
      </div>
    </div>
  )
}
