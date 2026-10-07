/** Accordion of {q, a} items. The first one is open by default. */
export default function FaqList({ items, openFirst = true }) {
  return (
    <div className="faq">
      {items.map((f, i) => (
        <details key={f.q} open={openFirst && i === 0} id={f.id ? `faq-${f.id}` : undefined}>
          <summary>{f.q}</summary>
          <div className="a">{f.a}</div>
        </details>
      ))}
    </div>
  );
}

export const faqSchema = (items) => ({
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});
