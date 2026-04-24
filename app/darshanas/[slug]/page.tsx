import type { Metadata } from 'next';
import Link from 'next/link';

interface Props {
  params: { slug: string };
}

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `${params.slug.charAt(0).toUpperCase() + params.slug.slice(1)} — Darśanas`,
    description: `Explore the ${params.slug} school of Indian philosophy.`,
  };
}

export default function DarshanasDetailPage({ params }: Props) {
  return (
    <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-overline uppercase tracking-widest text-saffron-500 mb-2">Darśanas</p>
      <h1 className="font-serif text-display-sm text-ink mb-4 capitalize">{params.slug}</h1>
      <p className="text-body text-ink-muted mb-8">
        Deep dive into this school coming soon. Explore the overview below.
      </p>
      <Link href="/darshanas" className="text-body-sm text-saffron-500 no-underline hover:text-saffron-600">
        ← All Darśanas
      </Link>
    </div>
  );
}
