import { ArticleHeader } from '@/components/content/article-header';
import { SummaryBox } from '@/components/content/summary-box';
import type { GlossaryEntry } from '@/lib/sanity/types';

type GlossaryTemplateProps = {
  entry: GlossaryEntry;
};

export function GlossaryTemplate({ entry }: GlossaryTemplateProps) {
  return (
    <article className="mx-auto w-full max-w-3xl space-y-6 px-4 py-12 sm:px-6 lg:px-8">
      <ArticleHeader title={entry.term} dek={entry.definition} meta={entry.transliteration} badges={['Glossary']} />
      <SummaryBox title="Meaning" content={entry.definition} />
      <p className="text-slate-800">{entry.definition}</p>
    </article>
  );
}
