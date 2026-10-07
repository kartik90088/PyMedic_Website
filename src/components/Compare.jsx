/** Before / with-PyMedic comparison table. rows: [label, before, after]. */
export default function Compare({ heads, rows }) {
  return (
    <div className="compare-wrap">
      <table className="compare">
        <thead><tr>{heads.map((h, i) => <th key={i} scope="col">{h}</th>)}</tr></thead>
        <tbody>
          {rows.map(([k, a, b]) => (
            <tr key={k}><th scope="row">{k}</th><td className="before" data-label={heads[1]}>{a}</td><td className="after" data-label={heads[2]}>{b}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
