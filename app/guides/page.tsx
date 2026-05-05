export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import Link from 'next/link';
import { EmptyState } from '@/components/content/empty-state';
import { IndexList } from '@/components/content/index-list';
import { getGuides } from '@/lib/sanity/content';
import { buildMetadata } from '@/lib/sanity/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Guides',
  description: 'Structured study guides and learning paths for Sanatan Dharma.'
});

export default async function GuidesPage() {
  const guides = await getGuides();

  return (
    <section className="mx-auto w-full max-w-4xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
      <div>
        <p className="mb-2 text-overline uppercase tracking-widest text-saffron-500">Guides</p>
        <h1 className="mb-3 font-serif text-display-sm text-ink">Study Guides</h1>
        <p className="text-body text-ink-muted">
          Structured reading guides and curated learning paths through Sanatan Dharma.
        </p>
      </div>

      {/* Featured: Learning Paths */}
      <div>
        <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-ink-muted">Featured</p>
        <Link
          href="/guides/learning-paths"
          className="block rounded-xl border border-[rgba(192,120,40,0.18)] bg-white p-6 no-underline transition-all hover:border-[rgba(192,120,40,0.30)] hover:shadow-card"
        >
          <p className="mb-1 text-[11px] font-medium uppercase tracking-wider text-ink-muted">3 paths · 18 steps</p>
          <p className="mb-2 font-serif text-subheading text-ink">Learning Paths</p>
          <p className="text-body-sm text-ink-muted">
            Structured journeys from first encounter to advanced scholarship — Beginner, Intermediate, and Advanced.
          </p>
          <p className="mt-3 text-caption font-medium text-saffron-500">Start learning →</p>
        </Link>
      </div>

      {/* CMS guides */}
      {guides.length > 0 && (
        <div>
          <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-ink-muted">All guides</p>
          <IndexList
            items={guides.map((guide) => ({
              id: guide._id,
              title: guide.title,
              href: `/guides/${guide.slug}`,
              summary: guide.excerpt,
            }))}
          />
        </div>
      )}

      {!guides.length && (
        <EmptyState title="No guides published yet" message="Publish guides in Sanity to render this index." />
      )}
    </section>
  );
}
