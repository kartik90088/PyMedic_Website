import { HOSPITALS_PAGE as H } from '../content/site.js';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import ProductScreenshot from '../components/ProductScreenshot.jsx';
import FlowCards from '../components/FlowCards.jsx';
import CardGrid from '../components/CardGrid.jsx';
import FaqList, { faqSchema } from '../components/FaqList.jsx';
import Icon from '../components/Icon.jsx';
import { FinalCTA } from '../components/Footer.jsx';
import { FEATURE_SCREENS } from '../components/mocks/Screens.jsx';

export default function Hospitals() {
  const Queue = FEATURE_SCREENS.queue.body;
  return (
    <>
      <Seo path="/hospitals" jsonLd={faqSchema(H.faq)} />
      <PageHero kicker={H.kicker} h1={H.h1} primary={H.primary} secondary={H.secondary}
        lead={<>{H.lead[0]}<span className="hosp-lead2">{H.lead[1]}</span></>}
        visual={<ProductScreenshot slot="screenshot-hospitals-hero" title="Waiting room display · OPD" label="Hospital OPD waiting-room display with each doctor's current token (sample data)"><Queue /></ProductScreenshot>} />

      <section className="sec" id="connected" aria-labelledby="h-conn">
        <div className="wrap hosp-connected">
          <SectionHead id="h-conn" title={H.connected.title} accent={H.connected.accent} lead={H.connected.text} />
          <div className="bridge">
            <span className="ico"><Icon name="check" size={18} /></span>
            <div><p>{H.connected.bridge}</p></div>
          </div>
        </div>
      </section>

      <section className="sec band-plain" id="workflows" aria-labelledby="h-wf">
        <div className="wrap">
          <SectionHead id="h-wf" title={H.workflows.title} accent={H.workflows.accent} />
          <CardGrid items={H.workflows.items} cols={4} numbered />
        </div>
      </section>

      <section className="sec" id="teams" aria-labelledby="h-teams">
        <div className="wrap">
          <SectionHead id="h-teams" title={H.teams.title} accent={H.teams.accent} />
          <CardGrid items={H.teams.items} cols={5} />
        </div>
      </section>

      <section className="sec" id="hospital-flow" aria-labelledby="h-hflow">
        <div className="wrap">
          <SectionHead id="h-hflow" title={H.flow.title} accent={H.flow.accent} lead={H.flow.lead} />
          <FlowCards items={H.flow.items} cols={4} every={1500} />
        </div>
      </section>

      <section className="sec tight" id="hospital-faq" aria-labelledby="h-hfaq">
        <div className="wrap">
          <SectionHead id="h-hfaq" title="Frequently asked questions." />
          <FaqList items={H.faq} tools />
        </div>
      </section>

      <FinalCTA title={H.final.title} text={H.final.text} primary={H.final.primary} secondary={H.final.secondary} />
    </>
  );
}
