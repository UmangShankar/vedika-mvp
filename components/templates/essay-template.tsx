import { ArticleHeader } from '@/components/content/article-header';
import { PortableContent } from '@/components/content/portable-content';
import { PullQuote } from '@/components/content/pull-quote';
import type { Essay } from '@/lib/sanity/types';

type EssayTemplateProps = {
  essay: Essay;
};

export function EssayTemplate({ essay }: EssayTemplateProps) {
  return (
    <article className="mx-auto max-w-content space-y-8 px-4 py-12 sm:px-6 lg:px-8">
      <ArticleHeader title={essay.title} subtitle={essay.dek} readingTime="10 min" />
      <PullQuote quote={essay.dek} />
      <PortableContent blocks={essay.body} />
    </article>
  );
}
