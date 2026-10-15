import { InstitutionalReading } from '@/components/InstitutionalReading';
import { institutionalContent } from '@/content/institutionalContent';
import { Container } from '../siteStyles';
import { CompanySubnav } from './CompanySubnav';
import { TopicHero } from './companyStyles';

export default function EsgPage() {
  return (
    <>
      <CompanySubnav />
      <TopicHero><Container><p className="eyebrow">Ambiental · Social · Governança</p><h1>ESG</h1><p className="copy">Três pilares para uma atuação industrial responsável.</p></Container></TopicHero>
      <InstitutionalReading section={institutionalContent.esg} sectionId="esg-completo" />
    </>
  );
}
