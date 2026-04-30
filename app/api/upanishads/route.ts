import { NextResponse } from 'next/server';
import { getUpanishads } from '@/lib/sanity/content';

export const dynamic = 'force-dynamic';

export async function GET() {
  const upanishads = await getUpanishads();
  return NextResponse.json(upanishads);
}
