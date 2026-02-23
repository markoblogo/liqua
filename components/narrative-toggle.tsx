"use client";

import { useState } from "react";

type Narrative = "liqua" | "cropto";

const NARRATIVE_COPY: Record<Narrative, { title: string; body: string; tone: string }> = {
  liqua: {
    title: "Liqua — Liquidity Layer",
    body: "Liqua structures execution and liquidity access in physical trade: verified participants, standardized workflows, and repeatable operational quality.",
    tone: "tone-liqua"
  },
  cropto: {
    title: "Cropto — Risk Layer",
    body: "Cropto extends the stack with practical risk tooling and hedging support, complementing Liqua’s execution layer without changing core operating discipline.",
    tone: "tone-cropto"
  }
};

export function NarrativeToggle() {
  const [active, setActive] = useState<Narrative>("liqua");
  const data = NARRATIVE_COPY[active];

  return (
    <section id="infrastructure" className="section-divider scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-8xl px-6 sm:px-10 lg:px-16">
        <div className="mb-10 max-w-3xl section-fade">
          <h2 className="section-title">Modern Market Infrastructure Stack</h2>
          <p className="section-copy">
            Liquidity layer first, risk layer next.
          </p>
        </div>

        <div className={`surface-card section-fade narrative-block ${data.tone}`} data-ascii-role="card">
          <div className="toggle-pill-group" role="tablist" aria-label="Infrastructure narrative">
            <button type="button" className={`toggle-pill ${active === "liqua" ? "is-active" : ""}`} onClick={() => setActive("liqua")} role="tab" aria-selected={active === "liqua"}>
              Liqua
            </button>
            <button type="button" className={`toggle-pill ${active === "cropto" ? "is-active" : ""}`} onClick={() => setActive("cropto")} role="tab" aria-selected={active === "cropto"}>
              Cropto
            </button>
          </div>

          <h3 className="mt-6 text-xl font-semibold text-[var(--text)]">{data.title}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">{data.body}</p>
        </div>
      </div>
    </section>
  );
}
