/** Numbered, connected list of steps: [title, text] pairs. `cols` sets the desktop column count. */
export default function StepList({ steps, cols = 2, className = '' }) {
  return (
    <ol className={`steps cols-${cols} ${className}`}>
      {steps.map(([t, s]) => <li key={t}><b>{t}</b>{s && <p>{s}</p>}</li>)}
    </ol>
  );
}
