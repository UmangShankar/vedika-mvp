import { sanityFetch } from '@/lib/sanity/client';
import type { Essay, GlossaryEntry, Guide, TextEntry, Topic } from '@/lib/sanity/types';
import {
  essayBySlugQuery,
  essayListQuery,
  glossaryBySlugQuery,
  glossaryListQuery,
  guideBySlugQuery,
  guideListQuery,
  textBySlugQuery,
  textListQuery,
  topicBySlugQuery,
  topicListQuery
} from '@/lib/sanity/queries';

export async function getTopics(): Promise<Topic[]> {
  return (await sanityFetch<Topic[]>(topicListQuery)) ?? [];
}

export async function getTopic(slug: string): Promise<Topic | null> {
  return await sanityFetch<Topic>(topicBySlugQuery, { slug });
}

export async function getTexts(): Promise<TextEntry[]> {
  return (await sanityFetch<TextEntry[]>(textListQuery)) ?? [];
}

export async function getText(slug: string): Promise<TextEntry | null> {
  return await sanityFetch<TextEntry>(textBySlugQuery, { slug });
}

export async function getGlossaryEntries(): Promise<GlossaryEntry[]> {
  return (await sanityFetch<GlossaryEntry[]>(glossaryListQuery)) ?? [];
}

export async function getGlossaryEntry(slug: string): Promise<GlossaryEntry | null> {
  return await sanityFetch<GlossaryEntry>(glossaryBySlugQuery, { slug });
}

export async function getGuides(): Promise<Guide[]> {
  return (await sanityFetch<Guide[]>(guideListQuery)) ?? [];
}

export async function getGuide(slug: string): Promise<Guide | null> {
  return await sanityFetch<Guide>(guideBySlugQuery, { slug });
}

export async function getEssays(): Promise<Essay[]> {
  return (await sanityFetch<Essay[]>(essayListQuery)) ?? [];
}

export async function getEssay(slug: string): Promise<Essay | null> {
  return await sanityFetch<Essay>(essayBySlugQuery, { slug });
}
