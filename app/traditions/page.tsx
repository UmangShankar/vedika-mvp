import type { Metadata } from 'next';
import { TraditionsHub } from '@/components/traditions/traditions-hub';

export const metadata: Metadata = {
  title: 'Traditions | Vedika',
  description:
    'The philosophical and spiritual paths adjacent to, in dialogue with, and transformed by the Vedic world — heterodox schools, Buddhist lineages, world traditions, foundational concepts, and cross-tradition comparisons.',
};

export default function TraditionsPage() {
  return <TraditionsHub />;
}
