import { ContactCtaSection } from './sections/ContactSection';
import { CareersSection } from './sections/CareersSection';
import { CultureSection } from './sections/CultureSection';
import { HumanHero } from './sections/HumanHero';
import { InsideWorkSection } from './sections/InsideWorkSection';
import { LegacySection } from './sections/LegacySection';
import { EsgSection, IdentitySection } from './sections/NarrativeTeasers';
import { SolutionsSection } from './sections/SolutionsSection';
import { StructureSection } from './sections/StructureSection';
import { HomePage } from './homeStyles';

export default function Home() {
  return (
    <HomePage>
      <HumanHero />
      <LegacySection />
      <IdentitySection />
      <InsideWorkSection />
      <StructureSection />
      <SolutionsSection />
      <CultureSection />
      <EsgSection />
      <CareersSection />
      <ContactCtaSection />
    </HomePage>
  );
}
