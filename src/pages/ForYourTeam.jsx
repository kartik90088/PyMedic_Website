import { TEAM_PAGE as T } from '../content/site.js';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import RoleSections from '../components/RoleSections.jsx';
import Icon from '../components/Icon.jsx';
import SiteLink from '../components/SiteLink.jsx';
import Photo from '../components/Photo.jsx';
import { TenancyDiagram } from '../components/mocks/Screens.jsx';
import { FinalCTA } from '../components/Footer.jsx';

export default function ForYourTeam() {
  return (
    <>
      <Seo path="/for-admin-team" />
      <PageHero kicker={T.kicker} h1={T.h1} lead={T.lead} primary={T.primary} secondary={T.secondary} visual={<Photo id="team-hero" ratio="24 / 25" className="team-photo" />}>
        <ul className="subnav" aria-label="Roles on this page">
          {T.roles.map((r) => <li key={r.id}><a href={`#${r.id}`}><Icon name={r.icon} size={14} />{r.title}</a></li>)}
        </ul>
      </PageHero>

      <RoleSections />

      <section className="sec" id="groups" aria-labelledby="h-grp" style={{ background: 'var(--surface-2)' }}>
        <div className="wrap trust">
          <div>
            <p className="kicker">{T.groups.kicker}</p>
            <h2 id="h-grp" className="h2">{T.groups.title} <span>{T.groups.accent}</span></h2>
            <p className="lead">{T.groups.text}</p>
            <p className="sec-cta"><SiteLink href={T.groups.href} className="more">{T.groups.cta} →</SiteLink></p>
          </div>
          <TenancyDiagram clinics={['Branch · Indiranagar', 'Branch · Whitefield', 'Branch · Jayanagar']} />
        </div>
      </section>

      <FinalCTA title="Bring your admin, a doctor and the front desk to one demo." text="Each role sees its own screens in the same walkthrough, so the whole team can judge the fit."
        secondary={{ href: '/for-doctors', label: "See the Doctor's View" }} />
    </>
  );
}
