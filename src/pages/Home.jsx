import Seo from '../components/Seo.jsx';
import { Hero, CapabilityStrip } from '../components/Hero.jsx';
import { Problem, Journey, Modules, ConsultHighlight, WhatsAppSection, Billing, LeadFlow, DataFlow, Abdm, FaqPreview } from '../components/HomeSections.jsx';
import { Tenancy } from '../components/TrustSections.jsx';
import VideoSection from '../components/VideoSection.jsx';
import ModuleOrbit from '../components/ModuleOrbit.jsx';
import DemoPopup from '../components/DemoPopup.jsx';
import { FinalCTA } from '../components/Footer.jsx';

export default function Home() {
  return (
    <>
      <Seo path="/" />
      <DemoPopup />
      <Hero />
      <CapabilityStrip />
      <VideoSection cta={{ href: '/demo-video', label: 'Open the demo page' }} />
      <Problem />
      <Journey />
      <Modules />
      <ConsultHighlight />
      <WhatsAppSection />
      <Billing />
      <LeadFlow />
      <Tenancy cta={{ href: '/features#multi-location', label: 'How multi-location works' }} />
      <Abdm />
      <ModuleOrbit base="/features" lead="Every capability runs on the same platform and the same patient record. Select a module to see it in detail." />
      <DataFlow />
      <FaqPreview />
      <FinalCTA
        title="Spend your OPD on patients, not paperwork."
        text="Queue, notes, prescriptions, WhatsApp and billing, connected by PyMedic. See it with your own practice in mind."
        secondary={{ href: '/for-admin-team', label: 'See It by Role' }}
      />
    </>
  );
}
