"use client";

import { useMemo, useState } from "react";

type Audience = "broker" | "trader";
type Phase = "before" | "after";

const CONTENT: Record<Audience, { title: string; subtitle: string; before: string[]; after: string[] }> = {
  broker: {
    title: "Broker",
    subtitle: "Convert operational drag into advisory capacity.",
    before: [
      "Contract admin and paperwork overload",
      "Manual execution follow-ups across channels",
      "Fragmented communication and document chasing",
      "Limited time for strategy and client advisory"
    ],
    after: [
      "Focus on relationships, negotiation, and trust",
      "Execution support through standardized workflow",
      "Checklist control, visibility, and auditability",
      "Growth via training, coaching, and market intelligence"
    ]
  },
  trader: {
    title: "Trader",
    subtitle: "Scale procurement through networked liquidity.",
    before: [
      "Procurement capacity tied to internal headcount",
      "Uneven regional coverage and high fixed cost",
      "Limited view of true physical market depth",
      "Recurring supply gaps reduce execution certainty"
    ],
    after: [
      "Access networked regional liquidity channels",
      "Expand procurement scale without fixed overhead growth",
      "Structured depth and behavioral market signals",
      "More reliable execution through shared process"
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
          <h2 className="section-title">Operational Transformation Snapshot</h2>
          <p className="section-copy">
            A concise before-and-after view of the leverage Liqua creates for execution partners.
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
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">{data.title}</p>
            <p className="mt-2 text-base font-medium text-[var(--text)]">{data.subtitle}</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {rows.map((row) => (
                <li key={row} className="rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 text-sm text-[var(--muted)]">
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
