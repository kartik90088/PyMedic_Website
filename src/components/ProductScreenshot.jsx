/**
 * Browser-style frame for product screens.
 * Pass `src` to show a real screenshot, otherwise `children` (a mock UI) is rendered.
 *   <ProductScreenshot title="My OPD" src="/screens/opd.avif" alt="..." />
 */
export default function ProductScreenshot({ title, src, alt, sample = true, children, label, className = '', style, slot }) {
  return (
    <figure className={`shot ${className}`} style={style} aria-label={label || alt} data-slot={slot}>
      <div className="bar">
        <span className="dots"><i /><i /><i /></span>
        <span className="addr">{title}</span>
        {sample && !src && <span className="live"><i aria-hidden="true" />Live · sample data</span>}
      </div>
      {src ? (
        <img src={src} alt={alt || title} loading="lazy" decoding="async" style={{ width: '100%', height: 'auto' }} />
      ) : (
        children
      )}
    </figure>
  );
}
