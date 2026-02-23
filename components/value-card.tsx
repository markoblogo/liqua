import type { ReactNode } from "react";

type ValueCardProps = {
  title: string;
  hero: string;
  children: ReactNode;
};

export function ValueCard({ title, hero, children }: ValueCardProps) {
  return (
    <article className="surface-card section-fade" data-ascii-role="card">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
        {title}
      </p>
      <p className="mt-4 text-xl font-semibold leading-tight text-[var(--text)]">{hero}</p>
      <div className="mt-6 space-y-3 text-sm leading-relaxed text-[var(--muted)]">{children}</div>
    </article>
  );
}
