export function NewsletterSignup() {
  return (
    <div className="rounded-xl border border-amber-200 bg-white p-6">
      <h3 className="text-xl font-semibold tracking-tight">Get new research guides</h3>
      <p className="mt-2 text-slate-700">Receive periodic updates on new topics, source maps, and study guides.</p>
      <form className="mt-4 flex flex-col gap-3 sm:flex-row" action="#" method="post">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-md border border-amber-200 bg-white px-3 py-2 text-sm"
        />
        <button type="submit" className="rounded-md bg-saffron px-4 py-2 text-sm font-medium text-white">
          Subscribe
        </button>
      </form>
    </div>
  );
}
