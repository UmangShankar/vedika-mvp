'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

type Source = {
  label: string;
  type: 'primary' | 'commentary' | 'scholarly';
  note?: string;
};

type Message = {
  role: 'user' | 'assistant';
  content: string;
  sources?: Source[];
};

const SOURCE_ICONS: Record<string, string> = {
  primary: '📜',
  commentary: '✍️',
  scholarly: '📚',
};

const SUGGESTED_QUESTIONS = [
  'What does the Gita say about svadharma?',
  'How do the Upanishads describe Brahman?',
  'What is the difference between jnana and bhakti yoga?',
];

export default function AskVedikaPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;

    const userMessage: Message = { role: 'user', content: text.trim() };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) throw new Error('Request failed');

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.answer,
          sources: data.sources ?? [],
        },
      ]);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <div className="mx-auto max-w-[720px] px-4 py-10 sm:px-6">

      {/* Page header */}
      <div className="mb-6 space-y-1">
        <div className="flex items-center gap-3">
          <h1 className="text-[1.75rem] font-semibold leading-tight tracking-[-0.01em] text-[#1C1208] font-serif">
            Ask Vedika
          </h1>
          <span className="inline-flex items-center text-[0.6875rem] tracking-[0.12em] font-semibold text-[#C07828] bg-[#FEF7ED] border border-[#FDECD3] px-2 py-0.5 rounded-sm uppercase">
            Beta
          </span>
        </div>
        <p className="text-[0.9375rem] text-[#7A6A56] leading-relaxed">
          Explore Sanatan Dharma through primary texts. Always verify with linked sources.
        </p>
      </div>

      {/* Trust notice */}
      <div className="mb-6 rounded-lg border border-[#A8D8D2] bg-[#E8F5F3] px-4 py-3">
        <p className="text-[0.875rem] text-[#2D7A6F] leading-relaxed">
          <strong className="font-semibold">Research tool, not authority.</strong>{' '}
          Responses are AI-assisted explorations drawing on primary texts and classical commentaries.
          Always trace claims back to the cited sources before relying on them.
        </p>
      </div>

      {/* Chat area */}
      <div className="rounded-xl border border-[rgba(192,120,40,0.18)] bg-white shadow-[0_4px_12px_rgba(28,18,8,0.08),0_1px_3px_rgba(28,18,8,0.04)] overflow-hidden">

        {/* Message list */}
        <div className="min-h-[360px] max-h-[500px] overflow-y-auto px-5 py-5 space-y-5">

          {/* Empty state */}
          {messages.length === 0 && !loading && (
            <div className="flex flex-col items-center justify-center h-64 space-y-5 text-center">
              <div className="w-12 h-12 rounded-full bg-[#FEF7ED] border border-[#FDECD3] flex items-center justify-center">
                <span className="text-[#C07828] text-xl font-serif">ॐ</span>
              </div>
              <div className="space-y-1">
                <p className="text-[0.9375rem] font-medium text-[#1C1208]">Begin your inquiry</p>
                <p className="text-[0.8125rem] text-[#A89880]">Ask about texts, concepts, or traditions</p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center max-w-sm">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-[0.8125rem] text-[#C07828] border border-[rgba(192,120,40,0.25)] bg-[#FEF7ED] hover:bg-[#FDECD3] px-3 py-1.5 rounded-md transition-colors text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'user' ? (
                <div className="max-w-[80%] rounded-lg bg-[#F5EFE5] px-4 py-3">
                  <p className="text-[0.9375rem] text-[#1C1208] leading-relaxed">{msg.content}</p>
                </div>
              ) : (
                <div className="max-w-[90%] space-y-3">
                  {/* Response bubble */}
                  <div className="rounded-lg border border-[rgba(192,120,40,0.15)] bg-white px-5 py-4 shadow-[0_1px_3px_rgba(28,18,8,0.06)]">
                    <p className="text-[0.9375rem] text-[#4A3B28] leading-[1.75] font-serif whitespace-pre-wrap">
                      {msg.content}
                    </p>
                  </div>

                  {/* Source badges */}
                  {msg.sources && msg.sources.length > 0 && (
                    <div className="space-y-1.5">
                      <p className="text-[0.6875rem] tracking-[0.12em] font-semibold text-[#A89880] uppercase px-1">
                        Sources
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {msg.sources.map((source, j) => (
                          <span
                            key={j}
                            title={source.note}
                            className="inline-flex items-center gap-1.5 text-[0.8125rem] text-[#7A6A56] border border-[rgba(192,120,40,0.20)] bg-[#FDFAF6] px-2.5 py-1 rounded-sm"
                          >
                            <span>{SOURCE_ICONS[source.type] ?? '📄'}</span>
                            <span>{source.label}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Loading indicator */}
          {loading && (
            <div className="flex justify-start">
              <div className="rounded-lg border border-[rgba(192,120,40,0.15)] bg-white px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C07828] animate-bounce [animation-delay:0ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C07828] animate-bounce [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C07828] animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="text-center text-[0.875rem] text-[#C0392B] bg-[#FBEAEA] border border-[#F5C6C6] rounded-lg px-4 py-3">
              {error}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input bar */}
        <div className="border-t border-[rgba(192,120,40,0.15)] bg-[#FDFAF6] px-4 py-3">
          <div className="flex items-end gap-3">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about a text, concept, or tradition…"
              rows={1}
              disabled={loading}
              className="flex-1 resize-none bg-white border border-[rgba(192,120,40,0.20)] rounded-lg px-4 py-2.5 text-[0.9375rem] text-[#1C1208] placeholder:text-[#A89880] focus:outline-none focus:border-[#C07828] focus:ring-1 focus:ring-[#C07828] transition-colors disabled:opacity-50 leading-relaxed"
              style={{ minHeight: '42px', maxHeight: '120px' }}
              onInput={(e) => {
                const t = e.currentTarget;
                t.style.height = 'auto';
                t.style.height = Math.min(t.scrollHeight, 120) + 'px';
              }}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || loading}
              className="shrink-0 bg-[#C07828] hover:bg-[#9A5E1C] disabled:opacity-40 disabled:cursor-not-allowed text-white text-[0.875rem] font-medium px-4 py-2.5 rounded-lg transition-colors"
            >
              Ask
            </button>
          </div>
          <p className="mt-2 text-[0.75rem] text-[#A89880]">
            Press Enter to send · Shift+Enter for new line
          </p>
        </div>
      </div>

      {/* Footer link */}
      <p className="mt-6 text-center text-[0.875rem] text-[#7A6A56]">
        Or explore the{' '}
        <Link href="/research" className="text-[#C07828] underline underline-offset-4 hover:text-[#9A5E1C]">
          Research Library →
        </Link>
      </p>
    </div>
  );
}
