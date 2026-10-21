import { DIAGNOSTIC_PAGE as D } from '../content/site.js';
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

export default function DiagnosticCentre() {
  const Tests = FEATURE_SCREENS.diagnostics.body;
  return (
    <>
      <Seo path="/diagnostic-centre" jsonLd={faqSchema(D.faq)} />
      <PageHero kicker={D.kicker} h1={D.h1} primary={D.primary} secondary={D.secondary}
        lead={<>{D.lead[0]}<span className="hosp-lead2">{D.lead[1]}</span></>}
        visual={<ProductScreenshot slot="screenshot-diagnostic-hero" title={FEATURE_SCREENS.diagnostics.title} label="Diagnostic test panel being added to an order, with the diagnostic invoice (sample data)"><Tests /></ProductScreenshot>} />

      <section className="sec" id="simplify" aria-labelledby="h-simp">
        <div className="wrap hosp-connected">
          <SectionHead id="h-simp" title={D.simplify.title} accent={D.simplify.accent} lead={D.simplify.text} />
          <div className="bridge">
            <span className="ico"><Icon name="check" size={18} /></span>
            <div><p>{D.simplify.bridge}</p></div>
          </div>
        </div>
      </section>

      <section className="sec" id="workflows" aria-labelledby="h-dwf">
        <div className="wrap">
          <SectionHead id="h-dwf" title={D.workflows.title} accent={D.workflows.accent} />
          <CardGrid items={D.workflows.items} cols={3} numbered />
        </div>
      </section>

      <section className="sec" id="diagnostic-flow" aria-labelledby="h-dflow">
        <div className="wrap">
          <SectionHead id="h-dflow" title={D.flow.title} accent={D.flow.accent} lead={D.flow.lead} />
          <FlowCards items={D.flow.items} every={1600} />
        </div>
      </section>

      <section className="sec" id="who" aria-labelledby="h-who">
        <div className="wrap">
          <SectionHead id="h-who" title={D.who.title} accent={D.who.accent} />
          <CardGrid items={D.who.items} cols={4} />
        </div>
      </section>

      <section className="sec tight" id="diagnostic-faq" aria-labelledby="h-dfaq">
        <div className="wrap">
          <SectionHead id="h-dfaq" title="Frequently asked questions." />
          <FaqList items={D.faq} tools />
        </div>
      </section>

      <FinalCTA title={D.final.title} text={D.final.text} primary={D.final.primary} secondary={D.final.secondary} />
    </>
  );
}
