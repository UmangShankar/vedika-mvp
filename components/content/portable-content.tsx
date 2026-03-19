import { portableTextToParagraphs } from '@/lib/sanity/portable-text';
import type { PortableBlock } from '@/lib/sanity/types';

type PortableContentProps = {
  blocks?: PortableBlock[];
};

export function PortableContent({ blocks }: PortableContentProps) {
  const paragraphs = portableTextToParagraphs(blocks);

  if (!paragraphs.length) {
    return <p className="text-slate-600">Content coming soon.</p>;
  }

  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p key={`${index}-${paragraph.slice(0, 20)}`}>{paragraph}</p>
      ))}
    </>
  );
}
