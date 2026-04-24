import { sanityFetch } from '@/lib/sanity/client';
import type { Comparison, Essay, GitaChapter, GlossaryEntry, Guide, Rishi, TextEntry, Topic, Upanishad } from '@/lib/sanity/types';
import {
  comparisonBySlugQuery,
  comparisonListQuery,
  essayBySlugQuery,
  essayListQuery,
  gitaChapterByNumberQuery,
  gitaChaptersFullQuery,
  gitaChapterListQuery,
  glossaryBySlugQuery,
  glossaryListQuery,
  guideBySlugQuery,
  guideListQuery,
  rishiBySlugQuery,
  rishiListQuery,
  textBySlugQuery,
  textListQuery,
  topicBySlugQuery,
  topicListQuery,
  upanishadBySlugQuery,
  upanishadListQuery
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

export async function getRishis(): Promise<Rishi[]> {
  return (await sanityFetch<Rishi[]>(rishiListQuery)) ?? [];
}

export async function getRishi(slug: string): Promise<Rishi | null> {
  return await sanityFetch<Rishi>(rishiBySlugQuery, { slug });
}

export async function getComparisons(): Promise<Comparison[]> {
  return (await sanityFetch<Comparison[]>(comparisonListQuery)) ?? [];
}

export async function getComparison(slug: string): Promise<Comparison | null> {
  return await sanityFetch<Comparison>(comparisonBySlugQuery, { slug });
}

export async function getGitaChapters(): Promise<GitaChapter[]> {
  return (await sanityFetch<GitaChapter[]>(gitaChapterListQuery)) ?? [];
}

export async function getGitaChaptersWithContent(): Promise<GitaChapter[]> {
  return (await sanityFetch<GitaChapter[]>(gitaChaptersFullQuery)) ?? [];
}

export async function getGitaChapter(chapterNumber: number): Promise<GitaChapter | null> {
  return await sanityFetch<GitaChapter>(gitaChapterByNumberQuery, { chapterNumber });
}

export async function getUpanishads(): Promise<Upanishad[]> {
  return (await sanityFetch<Upanishad[]>(upanishadListQuery)) ?? [];
}

export async function getUpanishad(slug: string): Promise<Upanishad | null> {
  return await sanityFetch<Upanishad>(upanishadBySlugQuery, { slug });
}
