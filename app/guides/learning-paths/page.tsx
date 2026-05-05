import type { Metadata } from 'next';
import { LearningPathsPage } from '@/components/guides/learning-paths-page';
import { buildMetadata } from '@/lib/sanity/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Learning Paths',
  description: 'Structured journeys through Sanatan Dharma — from first encounter to advanced scholarship across three levels: Beginner, Intermediate, and Advanced.',
});

export default function LearningPathsRoute() {
  return <LearningPathsPage />;
}
