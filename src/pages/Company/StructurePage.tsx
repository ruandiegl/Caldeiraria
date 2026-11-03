import { Link } from 'react-router-dom';
import { InstitutionalReading } from '@/components/InstitutionalReading';
import { institutionalContent } from '@/content/institutionalContent';
import { Container, Section } from '../siteStyles';
import { CompanySubnav } from './CompanySubnav';
import { TopicHero, TopicLead } from './companyStyles';

export default function StructurePage() {
  const units = institutionalContent.history.paragraphs.find((paragraph) => paragraph.originRefs.some((source) => source.documentId === 'word-18-10' && source.paragraph === 15))!;
  return (
    <>
      <CompanySubnav />
      <TopicHero><Container><p className="eyebrow">Capacidade fabril</p><h1>Estrutura industrial</h1><p className="copy">Três unidades vizinhas em Barra Mansa, projetadas para processos industriais diferentes e complementares.</p></Container></TopicHero>
      <Section aria-labelledby="units-title">
        <Container>
          <TopicLead data-reveal>
            <h2 id="units-title">Três unidades, uma operação integrada</h2>
            <p>{units.text}</p>
            <Link to="/instalacoes">Conheça as instalações técnicas →</Link>
          </TopicLead>
        </Container>
      </Section>
      <InstitutionalReading section={institutionalContent.structure} sectionId="estrutura-completa" />
    </>
  );
}
