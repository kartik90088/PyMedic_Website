import { FEATURES_PAGE as F } from '../content/site.js';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import FeatureHeroArt from '../components/FeatureHeroArt.jsx';
import FeatureBlocks, { FeatureIndex } from '../components/FeatureBlocks.jsx';
import { Trust } from '../components/TrustSections.jsx';
import ModuleOrbit from '../components/ModuleOrbit.jsx';
import { FinalCTA } from '../components/Footer.jsx';

export default function Features() {
  return (
    <>
      <Seo path="/features" />
      <PageHero kicker={F.kicker} h1={F.h1} lead={F.lead} primary={F.primary} secondary={F.secondary} visual={<FeatureHeroArt />}>
        <FeatureIndex />
      </PageHero>
      <FeatureBlocks />
      <Trust />
      <ModuleOrbit />
      <FinalCTA title="Eleven capabilities. One demo." text="Pick the workflows that matter to your clinic and we'll walk through those first."
        secondary={{ href: '/for-your-team', label: 'See Who Uses What' }} />
    </>
  );
}
