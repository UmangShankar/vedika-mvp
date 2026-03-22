import { ArticleHeader } from '@/components/content/article-header';
import { PortableContent } from '@/components/content/portable-content';
import { PullQuote } from '@/components/content/pull-quote';
import type { Essay } from '@/lib/sanity/types';

type EssayTemplateProps = {
  essay: Essay;
};

export function EssayTemplate({ essay }: EssayTemplateProps) {
  return (
    <article className="mx-auto w-full max-w-3xl space-y-6 px-4 py-12 sm:px-6 lg:px-8">
      <ArticleHeader title={essay.title} dek={essay.dek} badges={['Essay']} />
      <PullQuote quote={essay.dek} />
      <PortableContent blocks={essay.body} />
    </article>
  );
}
