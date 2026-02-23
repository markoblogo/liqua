"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HERO_IMAGES } from "@/lib/constants";

const MOBILE_QUERY = "(max-width: 767px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function HeroMedia() {
  const containerRef = useRef<HTMLDivElement | null>(null);
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
  const parallaxEnabled = !isSmallScreen && !prefersReducedMotion;
  const visibleIndex = animate ? index : 0;

  useEffect(() => {
    if (!animate) return;

    const intervalId = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5200);

    return () => window.clearInterval(intervalId);
  }, [animate]);

  useEffect(() => {
    if (!parallaxEnabled || !containerRef.current) {
      containerRef.current?.style.setProperty("--hero-parallax-x", "0px");
      containerRef.current?.style.setProperty("--hero-parallax-y", "0px");
      return;
    }

    const node = containerRef.current;
    const onMove = (event: MouseEvent) => {
      const x = ((event.clientX / window.innerWidth) - 0.5) * 4;
      const y = ((event.clientY / window.innerHeight) - 0.5) * 4;
      node.style.setProperty("--hero-parallax-x", `${x.toFixed(2)}px`);
      node.style.setProperty("--hero-parallax-y", `${y.toFixed(2)}px`);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [parallaxEnabled]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden" aria-hidden="true">
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
