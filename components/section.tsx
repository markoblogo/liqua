import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="section-divider scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-8xl px-6 sm:px-10 lg:px-16">
        <div className="mb-12 max-w-3xl section-fade">
          <h2 className="section-title">{title}</h2>
          {description ? <p className="section-copy">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
