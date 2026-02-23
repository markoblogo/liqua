const CHIPS = [
  "Broker verification",
  "Execution checklists",
  "Dispute framework",
  "Performance rating",
  "Audit trail"
] as const;

export function TrustStrip() {
  return (
    <section className="section-divider py-10 sm:py-12">
      <div className="mx-auto w-full max-w-8xl px-6 sm:px-10 lg:px-16">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)] section-fade">
          Execution quality markers
        </p>
        <ul className="flex flex-wrap gap-3" aria-label="Trust status features">
          {CHIPS.map((chip) => (
            <li key={chip} className="trust-chip section-fade" data-ascii-role="badge">
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
