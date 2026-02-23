"use client";

import { useEffect, useState } from "react";

export function MobileStickyCta() {
  const [hiddenForKeyboard, setHiddenForKeyboard] = useState(false);

  useEffect(() => {
    const viewport = window.visualViewport;
    if (!viewport) return;

    const onResize = () => {
      const ratio = viewport.height / window.innerHeight;
      setHiddenForKeyboard(ratio < 0.75);
    };

    viewport.addEventListener("resize", onResize);
    onResize();

    return () => viewport.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className={`mobile-cta-bar ${hiddenForKeyboard ? "is-hidden" : ""}`}>
      <a href="#deck" className="button-secondary" aria-label="Jump to deck">
        View deck
      </a>
      <a href="#contact" className="button-primary" aria-label="Jump to request access form">
        Request access
      </a>
    </div>
  );
}
