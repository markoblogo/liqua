export function PreContactCta() {
  return (
    <section className="section-divider py-24 sm:py-28">
      <div className="mx-auto w-full max-w-8xl px-6 sm:px-10 lg:px-16">
        <div className="dark-cta-band section-fade" data-ascii-role="card">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/78">
            Partner & Investor Conversations
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Build the liquidity layer first. Scale the market around it.
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/82 sm:text-base">
            Liqua is designed as infrastructure: broker-enabled liquidity, standardized execution,
            and a platform model that can scale across corridors and commodities.
            We are open to partnerships, pilot corridors, and investor conversations.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="button-primary cta-shine" data-ascii-role="cta">
              Request access <span className="cta-arrow">→</span>
            </a>
            <a href="#deck" className="button-secondary cta-shine" data-ascii-role="cta-secondary">
              View deck <span className="cta-arrow">→</span>
            </a>
          </div>

          <div className="mt-6 space-y-1 text-sm leading-relaxed text-white/78">
            <p>Early access / partnership conversations only.</p>
            <p>We reply personally.</p>
            <p>No mailing-list spam.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
