import type { ShlokaBlock } from '@/lib/content/ramayana-data';

export function ShlokaBlockDisplay({ devanagari, translation, source, reference }: ShlokaBlock) {
  return (
    <div>
      <p className="text-overline text-saffron-400 mb-4 uppercase tracking-widest">Opening śloka</p>
      <p className="font-devanagari text-[20px] text-saffron-200 leading-[1.9] mb-3 whitespace-pre-line">
        {devanagari}
      </p>
      <p className="font-serif text-[17px] italic text-sandal-200 leading-relaxed mb-2 max-w-[500px]">
        {translation}
      </p>
      <p className="text-caption text-ink-faint tracking-wide">{source}</p>
      <p className="text-caption text-ink-faint tracking-wide">{reference}</p>
    </div>
  );
}
