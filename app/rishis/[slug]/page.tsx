import type { Metadata } from 'next';
import { EmptyState } from '@/components/content/empty-state';
import { RishiTemplate } from '@/components/templates/rishi-template';
import { getRishi } from '@/lib/sanity/content';
import { buildMetadata } from '@/lib/sanity/metadata';

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const rishi = await getRishi(params.slug);
  if (!rishi) return buildMetadata({ title: 'Rishi not found', description: '' });
  return buildMetadata({ title: rishi.name, description: rishi.summary, seo: rishi.seo });
}

export default async function RishiDetailPage({ params }: Props) {
  const rishi = await getRishi(params.slug);

  if (!rishi) {
    return (
      <section className="mx-auto max-w-content px-4 py-12">
        <EmptyState
          title="Rishi not found"
          message="This profile does not exist or is not published."
        />
      </section>
    );
  }

  return <RishiTemplate rishi={rishi} />;
}
