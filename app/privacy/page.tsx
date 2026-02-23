export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-16 sm:px-10">
      <h1 className="section-title">Privacy Policy</h1>
      <p className="section-copy">Last updated: February 23, 2026</p>

      <section className="mt-8 space-y-4 text-sm leading-relaxed text-[var(--muted)]">
        <h2 className="text-lg font-semibold text-[var(--text)]">What we collect</h2>
        <p>
          We collect information you submit through the Request Access form, including name,
          company, email, role, and message. We may also collect basic technical logs required
          for site reliability and abuse prevention.
        </p>

        <h2 className="text-lg font-semibold text-[var(--text)]">How we use data</h2>
        <p>
          We use submitted data to reply to inquiries, evaluate partnership opportunities,
          and coordinate early access conversations.
        </p>

        <h2 className="text-lg font-semibold text-[var(--text)]">Retention</h2>
        <p>
          We retain inquiry records for as long as needed to manage discussions, compliance,
          and operational follow-up.
        </p>

        <h2 className="text-lg font-semibold text-[var(--text)]">Third-party services</h2>
        <p>
          The website is hosted on Vercel. Form email delivery is handled by Resend.
          These providers may process data necessary to deliver the service.
        </p>

        <h2 className="text-lg font-semibold text-[var(--text)]">Privacy requests</h2>
        <p>
          For privacy-related requests, please use the Request Access form on the homepage.
        </p>
      </section>
    </main>
  );
}
