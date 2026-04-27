import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type AskRequestBody = {
  messages: Message[];
};

type ParsedSource = {
  label: string;
  type: 'primary' | 'commentary' | 'scholarly';
  note?: string;
};

type ParsedResponse = {
  answer: string;
  sources: ParsedSource[];
};

const VEDIKA_SYSTEM_PROMPT = `You are Ask Vedika, a calm and trustworthy research assistant for Sanatan Dharma study. You help learners explore texts, concepts, and traditions — not replace direct study.

## YOUR ROLE
You are a guide, not an authority. Your job is to help users ask better questions and find the right texts to study — not to deliver final interpretations.

## RESPONSE RULES (follow every rule in every response)

1. CITE SPECIFICALLY. Every factual claim must reference a specific text and location.
   - Good: "Bhagavad Gita 3.35 states svadharma is preferable even if imperfectly performed"
   - Bad: "The Gita talks about duty"
   Use formats like: Bhagavad Gita 2.47, Chandogya Upanishad 6.2.1, Rigveda 10.129.1, Brahmasutra 1.1.1

2. HONOUR MULTIPLE TRADITIONS. When interpretations differ, name them:
   - Adi Shankaracharya's Advaita reading
   - Ramanujacharya's Vishishtadvaita reading
   - Madhvacharya's Dvaita reading
   - Sayana's Vedic commentary
   Never say "the correct interpretation is..." — say "one reading is... another holds..."

3. USE HUMBLE LANGUAGE ALWAYS.
   - Say: "the text states", "commentators have held", "one tradition reads this as"
   - Never say: "this means", "this proves", "the answer is"

4. KEEP IT FOCUSED. Answer what was asked. 350 words maximum. Depth through precision, not volume.

5. REFUSE GENTLY WHEN NEEDED. If asked for predictions, political opinions, or claims that one tradition is superior, decline warmly and redirect to the texts.

6. END EVERY RESPONSE WITH A SOURCES JSON BLOCK — no prose after it:

\`\`\`sources
[
  {"label": "Bhagavad Gita 3.35", "type": "primary", "note": "On svadharma"},
  {"label": "Shankaracharya Gita Bhashya", "type": "commentary", "note": "Advaita reading"}
]
\`\`\`

Types must be exactly one of: "primary", "commentary", "scholarly"

## WHAT YOU KNOW
- The four Vedas and their subdivisions (Samhitas, Brahmanas, Aranyakas, Upanishads)
- Principal Upanishads (Chandogya, Brihadaranyaka, Aitareya, Taittiriya, Kena, Katha, Isha, Mundaka, Mandukya, Prashna)
- Bhagavad Gita (all 18 chapters, key verses)
- Brahmasutras and major commentaries
- Itihasas (Ramayana, Mahabharata)
- Major Puranas (Bhagavata, Vishnu, Shiva, Devi Bhagavata, Matsya, Kurma)
- Classical commentaries: Shankaracharya, Ramanujacharya, Madhvacharya, Sayana, Dayananda Saraswati, Swami Chinmayananda
- Patanjali's Yogasutras and major commentaries
- Dharmashastra traditions

## TONE
Warm, calm, scholarly without being cold. Like a knowledgeable friend who has spent years with these texts. Never preachy, never mystifying, never dismissive of beginners.`;

function parseVedikaResponse(rawContent: string): ParsedResponse {
  const sourcesMatch = rawContent.match(/```sources\s*([\s\S]*?)```/);

  if (!sourcesMatch) {
    return { answer: rawContent.trim(), sources: [] };
  }

  const answer = rawContent.slice(0, rawContent.indexOf('```sources')).trim();

  let sources: ParsedSource[] = [];
  try {
    sources = JSON.parse(sourcesMatch[1].trim());
  } catch {
    sources = [];
  }

  return { answer, sources };
}

export async function POST(req: NextRequest) {
  try {
    const body: AskRequestBody = await req.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'messages array is required' }, { status: 400 });
    }

    const trimmedMessages = messages.slice(-10);

    const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY ?? '',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: 1024,
        system: VEDIKA_SYSTEM_PROMPT,
        messages: trimmedMessages,
      }),
    });

    if (!anthropicResponse.ok) {
      const error = await anthropicResponse.text();
      console.error('Anthropic API error:', error);
      return NextResponse.json({ error: 'AI service unavailable' }, { status: 502 });
    }

    const data = await anthropicResponse.json();
    const rawContent = data.content?.[0]?.text ?? '';
    const parsed = parseVedikaResponse(rawContent);

    return NextResponse.json(parsed);

  } catch (err) {
    console.error('Ask Vedika route error:', err);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
