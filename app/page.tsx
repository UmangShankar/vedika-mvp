import type { Metadata } from 'next';
import { AskPreview } from '@/components/home/ask-preview';
import { SiteFooter } from '@/components/home/footer';
import { FeaturedTopics } from '@/components/home/featured-topics';
import { Hero } from '@/components/home/hero';
import { NewsletterSignup } from '@/components/home/newsletter';
import { SacredTexts } from '@/components/home/sacred-texts';
import { WhyVedika } from '@/components/home/why-vedika';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Vedika is a content-first Sanatan Dharma research platform with trusted source pathways and an AI assistant labeled Beta.',
  openGraph: {
    title: 'Vedika | Content-first Sanatan Dharma research',
    description:
      'Study through source-grounded guides, linked topic maps, and a trust-first AI companion clearly labeled Beta.',
  },
};

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <SacredTexts />
      <WhyVedika />
      <FeaturedTopics />
      <AskPreview />
      <NewsletterSignup />
      <div className="mx-auto w-full max-w-wide px-4 py-10 sm:px-6 lg:px-8">
        <SiteFooter />
      </div>
    </main>
  );
}
