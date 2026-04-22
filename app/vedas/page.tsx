'use client';

import Link from 'next/link';
import { VedaVrikshaExplorer } from '@/components/content/veda-vriksha';

export default function VedasPage() {
  return (
    <main className="mx-auto max-w-wide px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-caption text-ink-muted" aria-label="Breadcrumb">
        <Link href="/" className="no-underline hover:text-saffron-500">Home</Link>
        <span aria-hidden="true">→</span>
        <span className="text-ink">Vedas</span>
      </nav>

      <VedaVrikshaExplorer />
    </main>
  );
}
