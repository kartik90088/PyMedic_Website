import { START_STEPS } from '../content/site.js';
import Seo from '../components/Seo.jsx';
import SectionHead from '../components/SectionHead.jsx';
import DemoForm from '../components/DemoForm.jsx';

export default function BookDemo() {
  return (
    <>
      <Seo path="/book-demo" />
      <DemoForm heading="h1" />
      <section className="sec" id="get-started" aria-labelledby="h-gs">
        <div className="wrap">
          <SectionHead id="h-gs" kicker="After the demo" title="Up and running" accent="in three steps." />
          <ol className="start" style={{ padding: 0, margin: 0 }}>
            {START_STEPS.map((s) => <li key={s.title}><h3>{s.title}</h3><p>{s.text}</p></li>)}
          </ol>
        </div>
      </section>
    </>
  );
}
