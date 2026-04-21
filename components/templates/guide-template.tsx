import { ArticleHeader } from '@/components/content/article-header';
import { KeyTakeawayBox } from '@/components/content/key-takeaway-box';
import { PortableContent } from '@/components/content/portable-content';
import { RelatedReadingGrid } from '@/components/content/related-reading-grid';
import type { Guide } from '@/lib/sanity/types';

type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

type GuideTemplateProps = {
  guide: Guide;
  relatedReading?: Array<{ title: string; href: string; summary: string }>;
  difficulty?: Difficulty;
};

const difficultyBadge: Record<Difficulty, string> = {
  Beginner:     'bg-dharma-light text-dharma',
  Intermediate: 'bg-saffron-50 text-saffron-600',
  Advanced:     'bg-lotus-light text-lotus',
};

export function GuideTemplate({ guide, relatedReading = [], difficulty = 'Beginner' }: GuideTemplateProps) {
  return (
    <article className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8">
      <ArticleHeader title={guide.title} subtitle={guide.excerpt} readingTime="8 min" />

      {/* Difficulty badge */}
      <div className="mt-4">
        <span className={`inline-flex rounded-sm px-2 py-0.5 text-label ${difficultyBadge[difficulty]}`}>
          {difficulty}
        </span>
      </div>

      <div className="mt-8 space-y-8">
        <KeyTakeawayBox>
          Use this guide as a pathway, not a replacement for primary sources. Follow linked
          readings to validate interpretation context.
        </KeyTakeawayBox>

        <PortableContent blocks={guide.body} />

        <RelatedReadingGrid
          items={relatedReading.map((r) => ({ ...r, type: 'guide' as const }))}
        />
      </div>
    </article>
  );
}
