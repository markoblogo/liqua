"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HERO_IMAGES } from "@/lib/constants";

const MOBILE_QUERY = "(max-width: 767px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function HeroMedia() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const mobileMedia = window.matchMedia(MOBILE_QUERY);
    const reducedMedia = window.matchMedia(REDUCED_MOTION_QUERY);

    const update = () => {
      setIsSmallScreen(mobileMedia.matches);
      setPrefersReducedMotion(reducedMedia.matches);
    };

    update();
    mobileMedia.addEventListener("change", update);
    reducedMedia.addEventListener("change", update);

    return () => {
      mobileMedia.removeEventListener("change", update);
      reducedMedia.removeEventListener("change", update);
    };
  }, []);

  const animate = !isSmallScreen && !prefersReducedMotion;
  const visibleIndex = animate ? index : 0;

  useEffect(() => {
    if (!animate) return;

    const intervalId = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5200);

    return () => window.clearInterval(intervalId);
  }, [animate]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {HERO_IMAGES.map((src, imageIndex) => {
        const active = imageIndex === visibleIndex;

        return (
          <Image
            key={src}
            src={src}
            alt="Monochrome commodity trading visual"
            fill
            priority={imageIndex === 0}
            sizes="100vw"
            className={`hero-slide ${active ? "is-active" : ""}`}
          />
        );
      })}
      <div className="hero-overlay" />
    </div>
  );
}
