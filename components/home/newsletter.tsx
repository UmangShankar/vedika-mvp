import { NewsletterSignup as NewsletterSignupWidget } from '@/components/NewsletterSignup';

export function NewsletterSignup() {
  return (
    <section className="w-full bg-sandal-100 py-14 md:py-20">
      <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
        <NewsletterSignupWidget variant="section" source="homepage" />
      </div>
    </section>
  );
}
