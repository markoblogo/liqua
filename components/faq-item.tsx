type FAQItemProps = {
  question: string;
  answer: string;
};

export function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group rounded-xl border border-black/15 bg-white p-5">
      <summary className="cursor-pointer list-none pr-8 text-base font-medium text-black marker:hidden">
        {question}
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-black/75">{answer}</p>
    </details>
  );
}
