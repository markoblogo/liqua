"use client";

import { useEffect, useMemo, useRef } from "react";
import { YOUTUBE_VIDEO_ID } from "@/lib/constants";

function postPlayerCommand(iframe: HTMLIFrameElement | null, func: "playVideo" | "pauseVideo" | "mute") {
  if (!iframe?.contentWindow) return;

  iframe.contentWindow.postMessage(
    JSON.stringify({
      event: "command",
      func,
      args: []
    }),
    "*"
  );
}

export function VideoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const playerSrc = useMemo(
    () =>
      `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&controls=0&disablekb=1&playsinline=1&modestbranding=1&rel=0&loop=1&playlist=${YOUTUBE_VIDEO_ID}&enablejsapi=1&fs=0`,
    []
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some((entry) => entry.isIntersecting);
        if (isVisible) {
          postPlayerCommand(iframeRef.current, "mute");
          postPlayerCommand(iframeRef.current, "playVideo");
          return;
        }

        postPlayerCommand(iframeRef.current, "pauseVideo");
      },
      {
        threshold: 0.2
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="teaser" className="section-divider scroll-mt-28 py-20 sm:py-24">
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
              ref={iframeRef}
              title="Liqua teaser video"
              aria-label="Embedded Liqua mood teaser video"
              src={playerSrc}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              allow="autoplay; encrypted-media; picture-in-picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
