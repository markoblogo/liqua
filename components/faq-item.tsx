type FAQItemProps = {
  question: string;
  answer: string;
};

export function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="surface-card group section-fade" data-ascii-role="card">
      <summary className="cursor-pointer list-none pr-8 text-[1.04rem] font-semibold leading-relaxed text-[var(--text)] marker:hidden">
        {question}
      </summary>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--muted)]">{answer}</p>
    </details>
  );
}
