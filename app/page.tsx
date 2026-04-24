import type { Metadata } from 'next';
import { Hero } from '@/components/home/hero';
import { SacredTexts } from '@/components/home/sacred-texts';
import { WhyVedika } from '@/components/home/why-vedika';
import { FeaturedTopics } from '@/components/home/featured-topics';
import { AskPreview } from '@/components/home/ask-preview';
import { NewsletterSignup } from '@/components/home/newsletter';
import { SiteFooter } from '@/components/home/footer';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Vedika is a content-first Sanatan Dharma research platform. Source-grounded, trust-first.',
  openGraph: {
    title: 'Vedika | Sanatan Dharma Research',
    description: 'Source-grounded study paths with a carefully labelled AI companion for thoughtful exploration of primary texts and traditions.',
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SacredTexts />
      <WhyVedika />
      <FeaturedTopics />
      <AskPreview />
      <NewsletterSignup />
      <SiteFooter />
    </main>
  );
}
