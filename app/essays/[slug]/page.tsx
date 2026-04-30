export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import { EmptyState } from '@/components/content/empty-state';
import { EssayTemplate } from '@/components/templates/essay-template';
import { getEssay } from '@/lib/sanity/content';
import { buildMetadata } from '@/lib/sanity/metadata';

type EssayDetailPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: EssayDetailPageProps): Promise<Metadata> {
  const { slug } = params;
  const essay = await getEssay(slug);

  if (!essay) {
    return buildMetadata({ title: 'Essay not found', description: 'This essay is unavailable.' });
  }

  return buildMetadata({ title: essay.title, description: essay.dek, seo: essay.seo });
}

export default async function EssayDetailPage({ params }: EssayDetailPageProps) {
  const { slug } = params;
  const essay = await getEssay(slug);

  if (!essay) {
    return (
      <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <EmptyState title="Essay unavailable" message="This essay does not exist or is not published." />
      </section>
    );
  }

  return <EssayTemplate essay={essay} />;
}