export default function TermsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-16 sm:px-10">
      <h1 className="section-title">Terms of Use</h1>
      <p className="section-copy">Last updated: February 23, 2026</p>

      <section className="mt-8 space-y-4 text-sm leading-relaxed text-[var(--muted)]">
        <h2 className="text-lg font-semibold text-[var(--text)]">Informational purpose</h2>
        <p>
          This site provides high-level product and partnership information about Liqua.
        </p>

        <h2 className="text-lg font-semibold text-[var(--text)]">No offer or guarantee</h2>
        <p>
          Content is for discussion and evaluation purposes only. Nothing on this site
          constitutes investment, legal, or commercial advice.
        </p>

        <h2 className="text-lg font-semibold text-[var(--text)]">Early-stage product status</h2>
        <p>
          Liqua capabilities, roadmap, and availability may change as the product evolves.
        </p>

        <h2 className="text-lg font-semibold text-[var(--text)]">Intellectual property</h2>
        <p>
          All site content, product names, and visuals are protected by applicable intellectual
          property laws and may not be reused without permission.
        </p>

        <h2 className="text-lg font-semibold text-[var(--text)]">Acceptable use</h2>
        <p>
          You agree not to misuse the website, submit malicious content, or attempt unauthorized
          access to systems or data.
        </p>

        <h2 className="text-lg font-semibold text-[var(--text)]">Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, Liqua is not liable for damages arising from
          use of this website or reliance on its informational content.
        </p>

        <h2 className="text-lg font-semibold text-[var(--text)]">Changes</h2>
        <p>
          We may update these terms at any time. Updates become effective when posted on this page.
        </p>
      </section>
    </main>
  );
}
