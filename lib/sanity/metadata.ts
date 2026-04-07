import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import type { SeoFields } from '@/lib/sanity/types';

export function buildMetadata({
  title,
  description,
  seo
}: {
  title: string;
  description: string;
  seo?: SeoFields;
}): Metadata {
  const resolvedTitle = seo?.metaTitle || title;
  const resolvedDescription = seo?.metaDescription || description;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      type: 'article',
      url: siteConfig.baseUrl
    }
  };
}
