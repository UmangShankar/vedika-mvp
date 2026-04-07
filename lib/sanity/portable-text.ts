import type { PortableBlock } from '@/lib/sanity/types';

export function portableTextToParagraphs(blocks: PortableBlock[] | undefined): string[] {
  if (!blocks?.length) {
    return [];
  }

  return blocks
    .map((block) => block.children?.map((child) => child.text ?? '').join('').trim() ?? '')
    .filter(Boolean);
}
