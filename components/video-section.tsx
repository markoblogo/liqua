import { YOUTUBE_VIDEO_ID } from "@/lib/constants";

const playerSrc = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&playsinline=1`;

export function VideoSection() {
  return (
    <section id="teaser" className="section-divider scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-8xl px-6 sm:px-10 lg:px-16">
        <div className="mb-12 max-w-3xl section-fade">
          <h2 className="section-title">Liqua Mood Teaser</h2>
          <p className="section-copy">
            Visual direction of execution-grade liquidity infrastructure.
          </p>
        </div>

        <div className="media-frame section-fade" data-ascii-role="card">
          <div className="media-ratio">
            <iframe
              title="Liqua teaser video"
              aria-label="Embedded Liqua mood teaser video"
              src={playerSrc}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
