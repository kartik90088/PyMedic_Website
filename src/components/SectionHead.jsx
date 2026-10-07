/** Kicker + heading + lead used at the top of most sections. `accent` renders in brand blue. */
export default function SectionHead({ id, kicker, title, accent, lead, center }) {
  return (
    <div className={`sec-head${center ? ' center' : ''}`}>
      {kicker && <p className="kicker">{kicker}</p>}
      <h2 id={id}>{title}{accent && <> <span>{accent}</span></>}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}
