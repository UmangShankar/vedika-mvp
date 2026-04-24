import { NextResponse } from 'next/server';
import { getUpanishads } from '@/lib/sanity/content';

export async function GET() {
  const upanishads = await getUpanishads();
  return NextResponse.json(upanishads);
}
