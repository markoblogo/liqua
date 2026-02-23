import { GOOGLE_SLIDES_EMBED_URL, PDF_URL } from "@/lib/constants";

export function DeckSection() {
  return (
    <section id="deck" className="section-divider scroll-mt-28 py-20 sm:py-24" aria-label="Project deck">
      <div className="mx-auto w-full max-w-8xl px-6 sm:px-10 lg:px-16">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Project Deck
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Investor and partner presentation with detailed Liqua model and rollout thesis.
          </p>
        </div>

        <div className="rounded-2xl border border-black/15 p-4 sm:p-6">
          <div className="overflow-hidden rounded-xl border border-black/20 bg-black/[0.02]">
            <div className="relative w-full pb-[56.25%]">
              <iframe
                src={GOOGLE_SLIDES_EMBED_URL}
                title="Liqua deck on Google Slides"
                aria-label="Embedded Liqua project deck"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-5 flex justify-end">
            <a
              href={PDF_URL}
              download
              className="rounded-full border border-black px-5 py-2 text-sm font-medium transition hover:bg-black hover:text-white"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
