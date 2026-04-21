import type { Metadata } from 'next';
import { AskPreview } from '@/components/home/ask-preview';
import { EntryCards } from '@/components/home/entry-cards';
import { SiteFooter } from '@/components/home/footer';
import { FeaturedGuides } from '@/components/home/featured-guides';
import { FeaturedTopics } from '@/components/home/featured-topics';
import { Hero } from '@/components/home/hero';
import { NewsletterSignup } from '@/components/home/newsletter';
import { Section } from '@/components/home/section';
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
    <div className="flex flex-col">
      <Hero />

      <Section id="entry-points" title="Start where you are">
        <EntryCards />
      </Section>

      <Section
        id="why-vedika"
        title="Why Vedika"
        subtitle="Built for learners and researchers who value source clarity over quick takes."
        bg="sandal"
      >
        <WhyVedika />
      </Section>

      <Section id="featured-topics" title="Featured topics">
        <FeaturedTopics />
      </Section>

      <Section id="featured-guides" title="Featured guides" bg="sandal">
        <FeaturedGuides />
      </Section>

      <Section id="ask-preview" title="Ask Vedika">
        <AskPreview />
      </Section>

      <Section id="newsletter" title="Newsletter">
        <NewsletterSignup />
      </Section>

      <SiteFooter />
    </div>
  );
}
