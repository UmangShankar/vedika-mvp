export function NewsletterSignup() {
  return (
    <section className="mx-auto max-w-wide rounded-xl bg-saffron-50 p-8 text-center md:p-10">
      <h2 className="font-serif text-heading text-ink">Stay close to the sources</h2>
      <p className="mt-2 text-caption text-ink-muted">
        Occasional deep dives on primary texts, interpretation threads, and new research paths.
      </p>
      <form
        className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
        action="#"
        method="post"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-sm border border-[rgba(192,120,40,0.30)] bg-white px-3 py-2 text-body-sm text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-saffron-400"
        />
        <button
          type="submit"
          className="rounded-sm bg-saffron-500 px-4 py-2 text-body-sm font-medium text-white transition-colors hover:bg-saffron-600"
        >
          Subscribe
        </button>
      </form>
      <p className="mt-3 text-caption text-ink-faint">No noise. Occasional deep dives.</p>
    </section>
  );
}
