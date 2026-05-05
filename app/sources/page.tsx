import type { Metadata } from 'next';
import { SourcesIndexPage } from '@/components/sources/sources-index-page';

export const metadata: Metadata = {
  title: 'Source Collections',
  description: 'Vedic literature organised by textual authority — from eternal revelation through classical commentary.',
};

export default function SourcesRoute() {
  return <SourcesIndexPage />;
}
