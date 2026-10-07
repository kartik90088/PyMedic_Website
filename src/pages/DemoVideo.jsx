import { DEMO_PAGE as D } from '../content/site.js';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import StepList from '../components/StepList.jsx';
import VideoSection from '../components/VideoSection.jsx';
import { FinalCTA } from '../components/Footer.jsx';

export default function DemoVideo() {
  return (
    <>
      <Seo path="/demo-video" />
      <PageHero kicker={D.kicker} h1={D.h1} lead={D.lead} />
      <VideoSection head={false} chapters={false} />
      <section className="sec" id="covers" aria-labelledby="h-cov">
        <div className="wrap">
          <SectionHead id="h-cov" kicker={D.covers.kicker} title={D.covers.title} accent={D.covers.accent} />
          <StepList steps={D.covers.items} cols={4} />
        </div>
      </section>
      <FinalCTA title={D.live.title} text={D.live.text} primary={{ href: D.live.href, label: D.live.label }}
        secondary={{ href: '/features', label: 'Browse Features' }} />
    </>
  );
}
