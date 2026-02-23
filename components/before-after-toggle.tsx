"use client";

import { useMemo, useState } from "react";

type Audience = "broker" | "trader";
type Phase = "before" | "after";

const CONTENT: Record<Audience, { title: string; subtitle: string; before: string[]; after: string[] }> = {
  broker: {
    title: "Broker",
    subtitle: "Execution quality as a product feature for advisory businesses.",
    before: [
      "Paperwork and contract admin overload",
      "Manual execution follow-up",
      "Scattered communication and document chasing",
      "Too little room for strategy and advisory growth"
    ],
    after: [
      "Focus on relationships, negotiation, and trust",
      "Standardized execution support via platform",
      "Better visibility, checklists, and deal control",
      "Growth through training, coaching, and market intelligence"
    ]
  },
  trader: {
    title: "Trader",
    subtitle: "From fragmented coverage to a procurement network.",
    before: [
      "Procurement depends on internal headcount",
      "Regional coverage is expensive and uneven",
      "Limited visibility into true market depth",
      "Cyclic supply gaps disrupt execution"
    ],
    after: [
      "Access networked regional liquidity",
      "Scale procurement without fixed overhead expansion",
      "Structured depth and behavioral signals",
      "More reliable execution through standardized process"
    ]
  }
};

export function BeforeAfterToggle() {
  const [audience, setAudience] = useState<Audience>("broker");
  const [phase, setPhase] = useState<Phase>("before");

  const data = useMemo(() => CONTENT[audience], [audience]);
  const rows = phase === "before" ? data.before : data.after;

  return (
    <section id="transformation" className="section-divider scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-8xl px-6 sm:px-10 lg:px-16">
        <div className="mb-10 max-w-3xl section-fade">
          <h2 className="section-title">Before / With Liqua</h2>
          <p className="section-copy">
            Structured liquidity, not just contacts.
          </p>
        </div>

        <div className="surface-card section-fade" data-ascii-role="card">
          <div className="flex flex-wrap items-center gap-3">
            <div className="toggle-pill-group" role="tablist" aria-label="Audience">
              <button className={`toggle-pill ${audience === "broker" ? "is-active" : ""}`} type="button" onClick={() => setAudience("broker")} role="tab" aria-selected={audience === "broker"}>
                Broker
              </button>
              <button className={`toggle-pill ${audience === "trader" ? "is-active" : ""}`} type="button" onClick={() => setAudience("trader")} role="tab" aria-selected={audience === "trader"}>
                Trader
              </button>
            </div>

            <div className="toggle-pill-group" role="tablist" aria-label="Phase">
              <button className={`toggle-pill ${phase === "before" ? "is-active" : ""}`} type="button" onClick={() => setPhase("before")} role="tab" aria-selected={phase === "before"}>
                Before Liqua
              </button>
              <button className={`toggle-pill ${phase === "after" ? "is-active" : ""}`} type="button" onClick={() => setPhase("after")} role="tab" aria-selected={phase === "after"}>
                With Liqua
              </button>
            </div>
          </div>

          <div className="mt-6">
            <p className="meta-label">{data.title}</p>
            <p className="mt-2 text-lg font-medium text-[var(--text)]">{data.subtitle}</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {rows.map((row) => (
                <li key={row} className="rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 text-[0.95rem] leading-relaxed text-[var(--muted)]">
                  {row}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
