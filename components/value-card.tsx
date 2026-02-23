import type { ReactNode } from "react";

type ValueCardProps = {
  title: string;
  hero: string;
  children: ReactNode;
};

export function ValueCard({ title, hero, children }: ValueCardProps) {
  return (
    <article className="rounded-2xl border border-black/15 bg-white p-7 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/60">
        {title}
      </p>
      <p className="mt-4 text-xl font-semibold leading-tight text-black">{hero}</p>
      <div className="mt-6 space-y-3 text-sm leading-relaxed text-black/80">{children}</div>
    </article>
  );
}
