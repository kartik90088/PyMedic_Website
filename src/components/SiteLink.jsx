import { Link } from 'react-router-dom';

/** "#section" links stay on the current page; everything else goes through the router. */
export default function SiteLink({ href, ...rest }) {
  return href.startsWith('#') ? <a href={href} {...rest} /> : <Link to={href} {...rest} />;
}
