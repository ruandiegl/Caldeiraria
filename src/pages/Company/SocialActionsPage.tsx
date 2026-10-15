import { InstitutionalReading } from '@/components/InstitutionalReading';
import { institutionalContent } from '@/content/institutionalContent';
import { Container, Section } from '../siteStyles';
import { CompanySubnav } from './CompanySubnav';
import { TopicHero, TopicLead } from './companyStyles';

export default function SocialActionsPage() {
  return (
    <>
      <CompanySubnav />
      <TopicHero><Container><p className="eyebrow">Comunidade</p><h1>Ações Sociais</h1><p className="copy">O compromisso social também se constrói no entorno das nossas unidades.</p></Container></TopicHero>
      <InstitutionalReading section={institutionalContent['social-actions']} sectionId="acoes-sociais-completas" />
      <Section aria-labelledby="social-media-title">
        <Container><TopicLead><h2 id="social-media-title">Registro das iniciativas</h2><p>Fotos das ações sociais aguardando aprovação do cliente.</p></TopicLead></Container>
      </Section>
    </>
  );
}
