import { GOOGLE_SLIDES_EMBED_URL, PDF_URL } from "@/lib/constants";

export function DeckSection() {
  return (
    <section id="deck" className="section-divider scroll-mt-28 py-24 sm:py-28" aria-label="Project deck">
      <div className="mx-auto w-full max-w-8xl px-6 sm:px-10 lg:px-16">
        <div className="mb-12 max-w-3xl section-fade">
          <p className="meta-label">Partner deck / Investor overview</p>
          <h2 className="section-title">Project Deck</h2>
          <p className="section-copy max-w-2xl">
            The deck outlines Liqua’s market thesis, operating model, rollout sequencing,
            and partnership logic for corridor expansion.
          </p>
        </div>

        <div className="media-frame deck-frame section-fade" data-ascii-role="card">
          <div className="media-ratio">
            <iframe
              src={GOOGLE_SLIDES_EMBED_URL}
              title="Liqua deck on Google Slides"
              aria-label="Embedded Liqua project deck"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              allowFullScreen
            />
          </div>

          <div className="mt-5 flex justify-end">
            <a href={PDF_URL} download className="button-secondary button-deck cta-shine">
              Download PDF <span className="cta-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
