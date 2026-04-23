import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Bhagavad Gita — Jñāna Chakra',
  description:
    'Explore all 18 adhyayas of the Bhagavad Gita through an interactive knowledge web. Full shlokas in Devanagari, scene setting, speakers, context, commentary and fascinating facts.',
  openGraph: {
    title: 'Bhagavad Gita — Jñāna Chakra | Vedika',
    description:
      'All 18 chapters of the Bhagavad Gita with full Sanskrit shlokas, scene setting, speakers, central teaching, commentary, and fascinating facts.',
  },
};

export default function GitaLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
