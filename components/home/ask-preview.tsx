import Link from 'next/link';

const sampleQuestions = [
  'How do different commentators explain svadharma in Bhagavad Gita 3?',
  'What are key differences between selected Upanishadic discussions of Atman?',
  'Where should I start if I want a beginner-safe path into Vedanta sources?'
];

export function AskPreview() {
  return (
    <div className="rounded-xl border border-amber-200 bg-white p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl font-semibold tracking-tight">
          Ask Vedika <span className="text-base font-medium text-saffron">Beta</span>
        </h3>
        <Link href="/ask-vedika" className="rounded-md border border-amber-300 px-3 py-2 text-sm font-medium no-underline">
          Open Ask Vedika
        </Link>
      </div>
      <p className="mt-3 text-slate-700">
        Ask better questions, then verify answers using linked source pages before relying on output.
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
        {sampleQuestions.map((question) => (
          <li key={question}>{question}</li>
        ))}
      </ul>
    </div>
  );
}
