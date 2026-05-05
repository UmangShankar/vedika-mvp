import { NextRequest, NextResponse } from 'next/server';

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
  }

  let email: string;

  try {
    const body = await req.json() as { email?: unknown };
    email = typeof body.email === 'string' ? body.email.trim() : '';
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }

  const res = await fetch(`https://api.resend.com/contacts/${encodeURIComponent(email)}`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ unsubscribed: true }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to unsubscribe' }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
