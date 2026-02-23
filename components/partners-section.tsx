import { PARTNERS } from "@/lib/constants";
import { Section } from "@/components/section";

type PartnerMeta = {
  action: string;
  mark: "spike" | "trade" | "deck" | "beta";
};

const PARTNER_META: Record<string, PartnerMeta> = {
  "Spike.brokers": { action: "Open site", mark: "spike" },
  "Trade Solution": { action: "Open site", mark: "trade" },
  "Cropto (Investor Deck)": { action: "Open deck", mark: "deck" },
  "Cropto Test Beta": { action: "Open beta", mark: "beta" }
};

function PartnerMark({ variant }: { variant: PartnerMeta["mark"] }) {
  if (variant === "spike") {
    return (
      <svg viewBox="0 0 36 24" className="partner-mark-svg" aria-hidden="true">
        <path d="M2 19 L14 5 L24 12 L34 4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }

  if (variant === "trade") {
    return (
      <svg viewBox="0 0 36 24" className="partner-mark-svg" aria-hidden="true">
        <path d="M2 6h8v5H2zM13 6h8v5h-8zM24 6h10v5H24zM2 14h13v5H2zM18 14h16v5H18z" fill="currentColor" />
      </svg>
    );
  }

  if (variant === "deck") {
    return (
      <svg viewBox="0 0 36 24" className="partner-mark-svg" aria-hidden="true">
        <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 36 24" className="partner-mark-svg" aria-hidden="true">
      <circle cx="12" cy="12" r="3.4" fill="currentColor" />
      <circle cx="24" cy="12" r="2.1" fill="currentColor" opacity="0.62" />
    </svg>
  );
}

export function PartnersSection() {
  return (
    <Section
      id="partners"
      title="Partners"
      description="Projects and companies connected to the Liqua market infrastructure vision."
    >
      <p className="partner-strip-kicker section-fade">Ecosystem Strip</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {PARTNERS.map((partner) => {
          const status = "status" in partner ? partner.status : undefined;
          const meta = PARTNER_META[partner.name] ?? { action: "Open site", mark: "trade" as const };

          return (
          <a
            key={partner.name}
            href={partner.href}
            target="_blank"
            rel="noreferrer"
            className="surface-card partner-tile section-fade group flex min-h-40 flex-col"
            data-ascii-role="card"
            aria-label={`${partner.name} (opens in a new tab)`}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className={`partner-mark partner-mark-${meta.mark}`}>
                <PartnerMark variant={meta.mark} />
                </span>
                <h3 className="partner-heading truncate">{partner.name}</h3>
              </div>
              {status ? (
                <span className="partner-status text-[0.68rem] uppercase tracking-[0.08em]">
                  {status}
                </span>
              ) : null}
            </div>
            <p className="partner-desc clamp-2">{partner.description}</p>
            <p className="partner-action mt-auto inline-flex items-center gap-2 font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              {meta.action}
              <span
                className="partner-action-arrow inline-block transition-transform duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px] motion-reduce:transition-none motion-reduce:transform-none"
                aria-hidden="true"
              >
                ↗
              </span>
            </p>
          </a>
          );
        })}
      </div>
    </Section>
  );
}
