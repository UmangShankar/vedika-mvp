import Link from 'next/link'

export function CompareTeaser() {
  return (
    <div className="mx-8 my-8 rounded-xl border border-[rgba(192,120,40,0.20)] bg-sandal-50 p-6 flex items-center justify-between gap-6">
      <div>
        <p className="text-overline text-saffron-500 mb-1 uppercase tracking-widest">Compare all six</p>
        <h3 className="font-serif text-heading text-ink mb-1">The Comparison Matrix</h3>
        <p className="text-body-sm text-ink-muted max-w-[480px]">
          Eight dimensions — ultimate reality, theory of knowledge, liberation, Vedic authority
          and more — compared across all six schools in a single view.
        </p>
      </div>
      <Link
        href="/darshanas/matrix"
        className="flex-shrink-0 text-body-sm font-medium px-5 py-2.5 rounded-full
                   bg-[#1C1208] text-sandal-50 no-underline hover:bg-ink transition-colors"
      >
        View matrix →
      </Link>
    </div>
  )
}
