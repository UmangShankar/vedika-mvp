import { ArticleHeader } from '@/components/content/article-header';
import { SummaryBox } from '@/components/content/summary-box';
import type { GlossaryEntry } from '@/lib/sanity/types';

type GlossaryTemplateProps = {
  entry: GlossaryEntry;
};

export function GlossaryTemplate({ entry }: GlossaryTemplateProps) {
  return (
    <article className="mx-auto max-w-content space-y-6 px-4 py-12 sm:px-6 lg:px-8">
      <ArticleHeader
        title={entry.term}
        subtitle={entry.transliteration ? `${entry.transliteration} — ${entry.definition}` : entry.definition}
      />
      <SummaryBox items={[entry.definition]} />
      <p className="font-serif text-body text-ink-light">{entry.definition}</p>
    </article>
  );
}
