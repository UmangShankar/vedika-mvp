import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';

export const sanityEnabled = Boolean(projectId);

export const sanityClient = sanityEnabled
  ? createClient({
      projectId: projectId!,
      dataset,
      apiVersion: '2025-01-01',
      useCdn: true,
      perspective: 'published'
    })
  : null;


export async function sanityFetch<T>(query: string, params: Record<string, string> = {}): Promise<T | null> {

export async function sanityFetch<T>(
  query: string,
  params: Record<string, string> = {}
): Promise<T | null> {

  if (!sanityClient) {
    return null;
  }

  try {
    return await sanityClient.fetch<T>(query, params);
  } catch {
    return null;
  }

}

}

