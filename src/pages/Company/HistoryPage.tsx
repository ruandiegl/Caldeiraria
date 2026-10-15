import { Link } from 'react-router-dom';
import { CallToAction } from '@/components/brand/CallToAction';
import { InstitutionalReading } from '@/components/InstitutionalReading';
import { SectionIntro } from '@/components/brand/SectionIntro';
import { Separator } from '@/components/ui/separator';
import { companyContent } from '@/content/companyContent';
import { institutionalContent } from '@/content/institutionalContent';
import { Container, Hero, Section } from '../siteStyles';
import { HistoryCarousel } from './HistoryCarousel';
import { EditorialSection } from './companyStyles';
import { CompanySubnav } from './CompanySubnav';

export default function HistoryPage() {
  return (
    <>
      <CompanySubnav />
      <Hero
        $image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2200&q=82"
        aria-label="Apresentação histórica da Metalúrgica Vulcano"
      >
        <Container>
          <p className="eyebrow">{companyContent.hero.eyebrow}</p>
          <h1>Nossa História</h1>
          <p className="copy">{companyContent.hero.body}</p>
          <p className="preview-note">Imagem de demonstração via Unsplash — substituir por foto autorizada da Vulcano.</p>
        </Container>
      </Hero>
      <Section aria-labelledby="carousel-heading">
        <Container>
          <div id="carousel-heading">
            <SectionIntro
              eyebrow="Linha do tempo"
              title="Marcos históricos: expansão orientada por capacidade técnica."
              body="Explore cinco décadas de consolidação industrial através dos principais marcos narrativos da Vulcano."
            />
          </div>
          <HistoryCarousel slides={companyContent.slides} />
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link to="/obras-clientes">Veja nossa galeria de obras e projetos entregues &rarr;</Link>
          </div>
        </Container>
      </Section>
      <Container><Separator style={{ opacity: 0.6 }} /></Container>
      <Section aria-labelledby="longform-heading">
        <Container>
          <div id="longform-heading">
            <SectionIntro
              eyebrow="Leitura completa"
              title="Da origem ao futuro: a história completa da Vulcano."
              body="Os marcos acima são um convite. A seguir, leia a trajetória e os princípios completos da empresa."
            />
          </div>
        </Container>
        <InstitutionalReading section={institutionalContent.history} sectionId="historia-completa" />
        <InstitutionalReading section={institutionalContent.identity} sectionId="identidade-completa" />
      </Section>
      <EditorialSection $dark aria-labelledby="cta-heading">
        <Container>
          <div id="cta-heading">
            <SectionIntro
              eyebrow="Próximos passos"
              title="Pronto para transformar grandes desafios em soluções de engenharia?"
              body="Converse com nossos especialistas sobre fabricações sob medida, paradas operacionais ou fornecimento de insumos siderúrgicos."
              light
            />
          </div>
          <div style={{ marginTop: '28px' }}>
            <CallToAction
              primary={{ label: 'Fale com a nossa equipe', href: '/contato' }}
              secondary={{ label: 'Conheça nossas instalações', href: '/instalacoes' }}
              dark
            />
          </div>
        </Container>
      </EditorialSection>
    </>
  );
}
