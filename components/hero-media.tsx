"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { HERO_IMAGES, YOUTUBE_VIDEO_ID } from "@/lib/constants";

const MOBILE_QUERY = "(max-width: 767px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function HeroMedia() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const mobileMedia = window.matchMedia(MOBILE_QUERY);
    const reducedMedia = window.matchMedia(REDUCED_MOTION_QUERY);

    const update = () => {
      setIsSmallScreen(mobileMedia.matches);
      setPrefersReducedMotion(reducedMedia.matches);
      setIsMounted(true);
    };

    update();

    mobileMedia.addEventListener("change", update);
    reducedMedia.addEventListener("change", update);

    return () => {
      mobileMedia.removeEventListener("change", update);
      reducedMedia.removeEventListener("change", update);
    };
  }, []);

  const shouldRenderVideo = isMounted && !isSmallScreen && !prefersReducedMotion;

  const youtubeEmbedSrc = useMemo(() => {
    const params = new URLSearchParams({
      autoplay: "1",
      mute: "1",
      controls: "0",
      loop: "1",
      playlist: YOUTUBE_VIDEO_ID,
      modestbranding: "1",
      playsinline: "1",
      rel: "0"
    });

    return `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?${params.toString()}`;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <Image
        src={HERO_IMAGES[0]}
        alt="Monochrome commodity trading visual"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {shouldRenderVideo ? (
        <iframe
          title="Liqua teaser video"
          src={youtubeEmbedSrc}
          className="absolute inset-0 h-full w-full scale-[1.35]"
          allow="autoplay; encrypted-media; picture-in-picture"
          loading="eager"
        />
      ) : null}

      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}
