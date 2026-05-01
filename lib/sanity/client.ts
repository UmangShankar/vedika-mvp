import { createClient } from '@sanity/client';

function stripBom(s: string | undefined): string | undefined {
  if (!s) return s;
  return s.charCodeAt(0) === 0xFEFF ? s.slice(1) : s;
}

const projectId = stripBom(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
const dataset = stripBom(process.env.NEXT_PUBLIC_SANITY_DATASET) ?? 'production';
const apiVersion = stripBom(process.env.NEXT_PUBLIC_SANITY_API_VERSION) ?? '2024-01-01';

if (!projectId) throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID');

export const sanityClient = createClient({ projectId, dataset, apiVersion, useCdn: process.env.NODE_ENV === 'production' });

export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T> {
  return sanityClient.fetch<T>(query, params);
}
