import { NextRequest, NextResponse } from 'next/server';

// In-memory rate limiter — effective per edge instance.
// For multi-region production, replace with Upstash Redis.
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 10;

const ipMap = new Map<string, { count: number; resetAt: number }>();

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/api/ask') {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
      request.headers.get('x-real-ip') ??
      'unknown';

    const now = Date.now();
    const entry = ipMap.get(ip);

    if (!entry || now > entry.resetAt) {
      ipMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    } else if (entry.count >= MAX_REQUESTS) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    } else {
      entry.count++;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/ask'],
};
