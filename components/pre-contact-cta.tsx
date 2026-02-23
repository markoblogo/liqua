export function PreContactCta() {
  return (
    <section className="section-divider py-24 sm:py-28">
      <div className="mx-auto w-full max-w-8xl px-6 sm:px-10 lg:px-16">
        <div className="dark-cta-band section-fade" data-ascii-role="card">
          <p className="precta-label text-sm font-semibold uppercase tracking-[0.14em]">
            Partner & Investor Conversations
          </p>
          <h2 className="precta-headline mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Build the liquidity layer first. Scale the market around it.
          </h2>
          <p className="precta-copy mt-5 max-w-3xl text-sm leading-relaxed sm:text-base">
            Liqua is designed as infrastructure: broker-enabled liquidity, standardized execution,
            and a platform model that can scale across corridors and commodities.
            We are open to partnerships, pilot corridors, and investor conversations.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="button-primary cta-shine precta-primary-btn" data-ascii-role="cta">
              Request access <span className="cta-arrow">→</span>
            </a>
            <a href="#deck" className="button-secondary cta-shine" data-ascii-role="cta-secondary">
              View deck <span className="cta-arrow">→</span>
            </a>
          </div>

          <div className="precta-proof mt-6 text-sm leading-relaxed">
            <p>Early access / partnership conversations only. We reply personally. No mailing-list spam.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
