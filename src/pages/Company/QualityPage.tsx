import { Link } from 'react-router-dom';
import { InstitutionalReading } from '@/components/InstitutionalReading';
import { institutionalContent } from '@/content/institutionalContent';
import { Container, Section } from '../siteStyles';
import { CompanySubnav } from './CompanySubnav';
import { EditorialBadge, TopicHero, TopicLead } from './companyStyles';

export default function QualityPage() {
  return (
    <>
      <CompanySubnav />
      <TopicHero><Container><p className="eyebrow">Gestão e conformidade</p><h1>Qualidade</h1><p className="copy">Rigor técnico e responsabilidade operacional em cada etapa.</p></Container></TopicHero>
      <Section aria-labelledby="quality-status-title">
        <Container>
          <TopicLead data-reveal>
            <h2 id="quality-status-title">Certificações e transição</h2>
            <div>
              <EditorialBadge $variant="active">ISO 9001:2015 vigente</EditorialBadge>
              <EditorialBadge $variant="transition">ISO 14001 e ISO 45001 em transição</EditorialBadge>
            </div>
            <p>ISO 14001 e ISO 45001 têm previsão para o primeiro semestre de 2027; não são certificações emitidas.</p>
            <Link to="/certificacoes">Veja as certificações técnicas →</Link>
          </TopicLead>
        </Container>
      </Section>
      <InstitutionalReading section={institutionalContent.quality} sectionId="qualidade-completa" />
    </>
  );
}
