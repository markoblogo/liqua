import type { ReactNode } from "react";

type ValueCardProps = {
  title: string;
  hero: string;
  children: ReactNode;
};

export function ValueCard({ title, hero, children }: ValueCardProps) {
  return (
    <article className="surface-card section-fade" data-ascii-role="card">
      <p className="meta-label">
        {title}
      </p>
      <p className="mt-4 card-title">{hero}</p>
      <div className="mt-6 space-y-3.5 text-[0.95rem] leading-relaxed text-[var(--muted)]">{children}</div>
    </article>
  );
}
