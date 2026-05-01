import { createClient } from '@sanity/client';

// Strip BOM (U+FEFF) that Windows tools can prepend to env var values
const rawProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const projectId = rawProjectId && rawProjectId.charCodeAt(0) === 0xFEFF ? rawProjectId.slice(1) : rawProjectId;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01';

if (!projectId) throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID');

export const sanityClient = createClient({ projectId, dataset, apiVersion, useCdn: process.env.NODE_ENV === 'production' });

export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T> {
  return sanityClient.fetch<T>(query, params);
}
