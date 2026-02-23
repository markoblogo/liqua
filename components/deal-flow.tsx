"use client";

import { useState } from "react";

const STEPS = [
  {
    key: "offer",
    title: "Offer",
    detail: "Structured supply or demand entry with key terms"
  },
  {
    key: "match",
    title: "Match",
    detail: "Counterparty fit based on parameters and corridor"
  },
  {
    key: "deal-room",
    title: "Deal room",
    detail: "Shared workflow for negotiation and documentation"
  },
  {
    key: "milestones",
    title: "Execution milestones",
    detail: "Track checkpoints, deadlines, and responsibility"
  },
  {
    key: "completed",
    title: "Completed",
    detail: "Performance recorded for future trust and rating signals"
  }
] as const;

export function DealFlow() {
  const [active, setActive] = useState<typeof STEPS[number]["key"]>("offer");

  return (
    <section id="deal-flow" className="section-divider scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-8xl px-6 sm:px-10 lg:px-16">
        <div className="mb-10 max-w-3xl section-fade">
          <h2 className="section-title">Deal Infrastructure Flow</h2>
          <p className="section-copy">
            From brokerage activity to market infrastructure.
          </p>
        </div>

        <div className="surface-card section-fade" data-ascii-role="card">
          <ol className="deal-flow-track" role="list">
            {STEPS.map((step, index) => {
              const isActive = active === step.key;
              return (
                <li key={step.key} className="deal-flow-node-wrap">
                  <button
                    type="button"
                    className={`deal-flow-node ${isActive ? "is-active" : ""}`}
                    onMouseEnter={() => setActive(step.key)}
                    onFocus={() => setActive(step.key)}
                    onClick={() => setActive(step.key)}
                    aria-pressed={isActive}
                  >
                    <span className="deal-flow-index">{index + 1}</span>
                    <span>{step.title}</span>
                  </button>
                  {index < STEPS.length - 1 ? <span className="deal-flow-arrow">→</span> : null}
                </li>
              );
            })}
          </ol>

          <p className="mt-5 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 text-sm text-[var(--muted)]">
            {STEPS.find((step) => step.key === active)?.detail}
          </p>
        </div>
      </div>
    </section>
  );
}
