import { NextResponse } from 'next/server';
import { getGitaChaptersWithContent } from '@/lib/sanity/content';

export async function GET() {
  const chapters = await getGitaChaptersWithContent();
  return NextResponse.json(chapters);
}
