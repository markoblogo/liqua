export function MarketValueModel() {
  return (
    <section id="market-value-model" className="section-divider scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-8xl px-6 sm:px-10 lg:px-16">
        <div className="mb-10 max-w-3xl section-fade">
          <h2 className="section-title">Market Value Model</h2>
          <p className="section-copy">
            A structured exchange of value between supply, brokerage competence, and demand.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <article className="surface-card section-fade" data-ascii-role="card">
            <p className="meta-label">Farmer</p>
            <ul className="mt-4 space-y-2.5 text-[0.95rem] leading-relaxed text-[var(--muted)]">
              <li>• Loyalty and stable supply</li>
              <li>• Local market context</li>
              <li>• Better selling outcomes through professional support</li>
            </ul>
          </article>

          <article className="surface-card section-fade" data-ascii-role="card">
            <p className="meta-label">Broker</p>
            <ul className="mt-4 space-y-2.5 text-[0.95rem] leading-relaxed text-[var(--muted)]">
              <li>• Trust and negotiation</li>
              <li>• Execution intelligence</li>
              <li>• Structured process without operational overload</li>
            </ul>
          </article>

          <article className="surface-card section-fade" data-ascii-role="card">
            <p className="meta-label">Trader</p>
            <ul className="mt-4 space-y-2.5 text-[0.95rem] leading-relaxed text-[var(--muted)]">
              <li>• System demand and monetization</li>
              <li>• Scalable procurement access</li>
              <li>• Better timing through market depth signals</li>
            </ul>
          </article>
        </div>

        <p className="mt-8 text-center text-base font-semibold text-[var(--text)]">
          Liqua makes this exchange structured, repeatable, and scalable.
        </p>
        <p className="mt-2 text-center text-[0.95rem] leading-relaxed text-[var(--muted)]">
          This is not just a marketplace layer - it is an execution infrastructure layer.
        </p>
      </div>
    </section>
  );
}
