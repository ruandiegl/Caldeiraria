import { Link } from 'react-router-dom';
import { companyTopicPaths } from '@/content/institutionalContent';
import { Container, Hero, Section } from '../siteStyles';
import { CompanyIndexGrid, CompanyIndexLink } from './companyStyles';

const topics = [
  { label: 'História', href: companyTopicPaths.history, description: 'Da fundação em 1974 à evolução da engenharia industrial.' },
  { label: 'Estrutura', href: companyTopicPaths.structure, description: 'Três unidades e um parque fabril dedicado a projetos complexos.' },
  { label: 'Qualidade', href: companyTopicPaths.quality, description: 'Gestão da qualidade, segurança e certificações.' },
  { label: 'ESG', href: companyTopicPaths.esg, description: 'Compromissos ambientais, sociais e de governança.' },
  { label: 'Ações Sociais', href: companyTopicPaths['social-actions'], description: 'Nossa relação com as comunidades do entorno.' },
] as const;

export default function Company() {
  return (
    <>
      <Hero $image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2200&q=82">
        <Container>
          <p className="eyebrow">Conheça a Vulcano</p>
          <h1>Empresa</h1>
          <p className="copy">Uma trajetória de engenharia, capacidade industrial e compromisso com pessoas e futuro.</p>
          <p className="preview-note">Imagem de demonstração via Unsplash — substituir por foto autorizada da Vulcano.</p>
        </Container>
      </Hero>
      <Section aria-labelledby="company-index-title">
        <Container>
          <h2 id="company-index-title">Explore a nossa empresa</h2>
          <CompanyIndexGrid>
            {topics.map(({ label, href, description }, index) => (
              <CompanyIndexLink key={href} as={Link} to={href} data-reveal>
                <span className="number">0{index + 1}</span>
                <strong>{label}</strong>
                <span>{description}</span>
                <span className="arrow" aria-hidden="true">↗</span>
              </CompanyIndexLink>
            ))}
          </CompanyIndexGrid>
        </Container>
      </Section>
    </>
  );
}
