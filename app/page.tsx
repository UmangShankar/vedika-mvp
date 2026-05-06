import type { Metadata } from 'next';
import { Hero } from '@/components/home/hero';
import { SacredTexts } from '@/components/home/sacred-texts';
import { ItihasaSection } from '@/components/home/itihasa-section';
import { DarshanasSection } from '@/components/home/darshanas-section';
import { AskPreview } from '@/components/home/ask-preview';
import { NewsletterSignup } from '@/components/home/newsletter';
import { SiteFooter } from '@/components/home/footer';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Vedika is a content-first Sanatan Dharma research platform. Source-grounded, trust-first.',
  openGraph: {
    title: 'Vedika | Sanatan Dharma Research',
    description:
      'Source-grounded study paths with a carefully labelled AI companion for thoughtful exploration of primary texts and traditions.',
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SacredTexts />
      <ItihasaSection />
      <DarshanasSection />
      <section className="py-16 px-6">
        <div className="mx-auto max-w-wide">
          <AskPreview />
        </div>
      </section>
      <NewsletterSignup />
      <SiteFooter />
    </main>
  );
}
