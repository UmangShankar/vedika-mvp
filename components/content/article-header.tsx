type ArticleHeaderProps = {
  title: string;
  dek?: string;
  meta?: string;
  badges?: string[];
};

export function ArticleHeader({ title, dek, meta, badges = [] }: ArticleHeaderProps) {
  return (
    <header className="space-y-3 border-b border-amber-100 pb-6">
      <div className="flex flex-wrap gap-2">
        {badges.map((badge) => (
          <span key={badge} className="rounded-full border border-amber-200 px-3 py-1 text-xs font-medium text-saffron">
            {badge}
          </span>
        ))}
      </div>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
      {meta ? <p className="text-sm text-slate-500">{meta}</p> : null}
      {dek ? <p className="max-w-3xl text-lg text-slate-700">{dek}</p> : null}
    </header>
  );
}
