import { NextRequest, NextResponse } from 'next/server';

const RESEND_BASE = 'https://api.resend.com';

const WELCOME_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Welcome to Vedika</title>
</head>
<body style="margin:0;padding:0;background:#F0EBE0;font-family:Georgia,serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F0EBE0;padding:40px 16px;">
<tr><td align="center">
<table width="580" cellpadding="0" cellspacing="0">

  <!-- Header -->
  <tr><td align="center" style="padding:36px 0 28px;">
    <img src="https://askvedika.com/logo-om.png" width="64" height="64" alt="Vedika" style="display:block;margin:0 auto 10px;"/>
    <p style="margin:0;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#C07828;font-family:system-ui,sans-serif;font-weight:500;">Vedika</p>
  </td></tr>

  <!-- Card -->
  <tr><td style="background:#FDFAF6;border:0.5px solid rgba(192,120,40,0.22);border-radius:4px;overflow:hidden;">

    <!-- Hero -->
    <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td style="padding:44px 48px 36px;border-bottom:0.5px solid rgba(192,120,40,0.15);">
      <p style="margin:0 0 16px;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#C07828;font-family:system-ui,sans-serif;">A note from Umang</p>
      <h1 style="margin:0;font-size:26px;font-weight:400;color:#1C1208;line-height:1.35;">So glad you found your way here.</h1>
    </td></tr>

    <!-- Body -->
    <tr><td style="padding:36px 48px;border-bottom:0.5px solid rgba(192,120,40,0.15);">
      <p style="margin:0 0 18px;font-size:14px;color:#4A3B28;line-height:1.85;">I know that feeling — that pull towards Sanatan Dharma, the curiosity about where it all comes from, what it really means, how it all fits together. And then the frustration of not quite knowing where to start, or what to trust.</p>
      <p style="margin:0 0 18px;font-size:14px;color:#4A3B28;line-height:1.85;">That gap is exactly why I built Vedika. I wanted it to be the bridge — the place where curiosity about Sanatan Dharma meets the knowledge itself. Not dumbed down. Not buried in academia. Just honest, well-organised, and genuinely useful for anyone who wants to understand.</p>
      <p style="margin:0;font-size:14px;color:#4A3B28;line-height:1.85;">Whether you are just beginning or have been on this path for years, I built this for you. I am really glad you are here.</p>
    </td></tr>

    <!-- Links -->
    <tr><td style="padding:32px 48px;border-bottom:0.5px solid rgba(192,120,40,0.15);background:#FAF5EE;">
      <p style="margin:0 0 20px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#7A6A56;font-family:system-ui,sans-serif;">Start wherever you are</p>
      <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td width="48%" style="padding-right:5px;padding-bottom:10px;vertical-align:top;">
          <a href="https://askvedika.com/explore" style="display:block;background:#FDFAF6;border:0.5px solid rgba(192,120,40,0.22);border-radius:3px;padding:14px 16px;text-decoration:none;">
            <p style="margin:0 0 3px;font-size:13px;font-weight:500;color:#1C1208;font-family:system-ui,sans-serif;">Explore</p>
            <p style="margin:0;font-size:12px;color:#7A6A56;font-family:system-ui,sans-serif;line-height:1.4;">Browse the full library of texts and traditions</p>
          </a>
        </td>
        <td width="48%" style="padding-left:5px;padding-bottom:10px;vertical-align:top;">
          <a href="https://askvedika.com/traditions" style="display:block;background:#FDFAF6;border:0.5px solid rgba(192,120,40,0.22);border-radius:3px;padding:14px 16px;text-decoration:none;">
            <p style="margin:0 0 3px;font-size:13px;font-weight:500;color:#1C1208;font-family:system-ui,sans-serif;">Traditions</p>
            <p style="margin:0;font-size:12px;color:#7A6A56;font-family:system-ui,sans-serif;line-height:1.4;">17 living traditions mapped and cross-referenced</p>
          </a>
        </td>
      </tr>
      <tr>
        <td width="48%" style="padding-right:5px;vertical-align:top;">
          <a href="https://askvedika.com/darshanas" style="display:block;background:#FDFAF6;border:0.5px solid rgba(192,120,40,0.22);border-radius:3px;padding:14px 16px;text-decoration:none;">
            <p style="margin:0 0 3px;font-size:13px;font-weight:500;color:#1C1208;font-family:system-ui,sans-serif;">Darśanas</p>
            <p style="margin:0;font-size:12px;color:#7A6A56;font-family:system-ui,sans-serif;line-height:1.4;">The six orthodox schools of Indian philosophy</p>
          </a>
        </td>
        <td width="48%" style="padding-left:5px;vertical-align:top;">
          <a href="https://askvedika.com/learning-paths" style="display:block;background:#FDFAF6;border:0.5px solid rgba(192,120,40,0.22);border-radius:3px;padding:14px 16px;text-decoration:none;">
            <p style="margin:0 0 3px;font-size:13px;font-weight:500;color:#1C1208;font-family:system-ui,sans-serif;">Learning paths</p>
            <p style="margin:0;font-size:12px;color:#7A6A56;font-family:system-ui,sans-serif;line-height:1.4;">Structured journeys from first text to deep study</p>
          </a>
        </td>
      </tr>
      </table>
    </td></tr>

    <!-- CTA -->
    <tr><td style="padding:36px 48px;text-align:center;border-bottom:0.5px solid rgba(192,120,40,0.15);">
      <a href="https://askvedika.com/explore" style="display:inline-block;padding:11px 32px;background:#C07828;color:#FDFAF6;font-family:system-ui,sans-serif;font-size:13px;font-weight:500;letter-spacing:0.04em;text-decoration:none;border-radius:2px;">Enter Vedika →</a>
    </td></tr>

    <!-- Closing -->
    <tr><td style="padding:36px 48px;border-bottom:0.5px solid rgba(192,120,40,0.15);">
      <p style="margin:0 0 18px;font-size:14px;color:#4A3B28;line-height:1.85;">I will write occasionally — when something new and genuinely worth your time arrives on the platform. No noise, I promise. Just things I think you will find meaningful.</p>
      <p style="margin:0 0 20px;font-size:14px;color:#4A3B28;line-height:1.85;">And if something resonates, or you have a question, just reply to this email. I read every single one.</p>
      <p style="margin:0;font-size:14px;color:#1C1208;font-style:italic;line-height:1.7;">Umang</p>
      <p style="margin:4px 0 0;font-size:12px;color:#7A6A56;font-family:system-ui,sans-serif;">Founder, Vedika · namaskar@askvedika.com</p>
    </td></tr>

    <!-- Footer -->
    <tr><td style="padding:24px 48px;text-align:center;">
      <p style="margin:0;font-size:11px;color:#7A6A56;font-family:system-ui,sans-serif;line-height:1.9;">
        You are receiving this because you subscribed at <a href="https://askvedika.com" style="color:#C07828;text-decoration:none;">askvedika.com</a><br/>
        <a href="https://askvedika.com/unsubscribe" style="color:#C07828;text-decoration:none;">Unsubscribe</a> &nbsp;·&nbsp; <a href="https://askvedika.com" style="color:#C07828;text-decoration:none;">askvedika.com</a>
      </p>
    </td></tr>

    </table>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function resendPost(path: string, body: unknown, apiKey: string): Promise<Response> {
  return fetch(`${RESEND_BASE}${path}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const apiKey = process.env.RESEND_API_KEY;
  const topicId = process.env.RESEND_TOPIC_ID;

  if (!apiKey || !topicId) {
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
  }

  let email: string;
  let source: string | undefined;

  try {
    const body = await req.json() as { email?: unknown; source?: unknown };
    email = typeof body.email === 'string' ? body.email.trim() : '';
    source = typeof body.source === 'string' ? body.source : undefined;
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }

  // Create contact and subscribe to topic in one call (409 = already exists, treat as success)
  const createRes = await resendPost('/contacts', {
    email,
    topics: [{ id: topicId, subscription: 'opt_in' }],
  }, apiKey);
  if (!createRes.ok && createRes.status !== 409) {
    return NextResponse.json({ error: 'Failed to create contact' }, { status: 502 });
  }

  // Send welcome email
  const emailRes = await resendPost('/emails', {
    from: 'Umang from Vedika <namaskar@askvedika.com>',
    reply_to: 'namaskar@askvedika.com',
    to: [email],
    subject: 'So glad you found your way here',
    html: WELCOME_HTML,
    ...(source ? { tags: [{ name: 'source', value: source }] } : {}),
  }, apiKey);

  if (!emailRes.ok) {
    // Contact is subscribed — don't surface welcome-email failure to the user
    console.error('Welcome email failed', await emailRes.text());
  }

  return NextResponse.json({ success: true });
}
