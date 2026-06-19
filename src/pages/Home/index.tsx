import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { certifications, clients, facilities, projects, services } from '../../content/siteData';
import {
  Actions,
  AssuranceBand,
  AssuranceCard,
  AssuranceGrid,
  AssuranceIntro,
  AssuranceList,
  Button,
  CapabilityGrid,
  CardGrid,
  ClientBand,
  ClientContent,
  ClientGrid,
  ClientMedia,
  ClientNames,
  Container,
  Eyebrow,
  HeroCarousel,
  HeroSlide,
  IdentityBand,
  IdentityContent,
  IdentityGrid,
  IdentityMedia,
  Metrics,
  Panel,
  Section,
  SectionTitle,
  ServiceCard,
  Split,
} from '../siteStyles';

const heroSlides = [
  'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=2400&q=84',
  'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2400&q=84',
  'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=2400&q=84',
];

const certificationLabels: Record<string, string> = {
  seguranca: 'Segurança operacional',
  offshore: 'Operação offshore',
  soldagem: 'Soldagem qualificada',
  qualidade: 'Qualidade e processo',
};

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5600);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <HeroCarousel
        $home
        $image="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=2400&q=84"
      >
        {heroSlides.map((slide, index) => (
          <HeroSlide key={slide} $image={slide} $active={index === activeSlide} aria-hidden={index !== activeSlide} />
        ))}
        <Container>
          <Eyebrow>Caldeiraria, tubulação e serviços offshore</Eyebrow>
          <h1>Engenharia industrial com mais de 50 anos de experiência</h1>
          <p className="copy">
            Desenvolvendo soluções metálicas, sistemas de tubulação, estruturas especiais e serviços offshore para os
            maiores empreendimentos do Brasil.
          </p>
          <Actions>
            <Button as={Link} to="/contato">Solicitar orçamento</Button>
            <Button as={Link} to="/servicos" $ghost>Conheça nossos serviços</Button>
          </Actions>
          <Metrics>
            <article><strong>+50</strong><span>anos de experiência</span></article>
            <article><strong>+200k</strong><span>toneladas produzidas</span></article>
            <article><strong>4</strong><span>unidades industriais</span></article>
            <article><strong>LATAM</strong><span>atuação regional</span></article>
          </Metrics>
        </Container>
      </HeroCarousel>

      <IdentityBand>
        <Container>
          <IdentityGrid>
            <IdentityMedia>
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1500&q=82"
                alt="Operação metalúrgica com tubulações industriais"
              />
              <figcaption>Caldeiraria, soldagem e tubulação sob medida</figcaption>
            </IdentityMedia>
            <IdentityContent>
              <Eyebrow>Quem somos</Eyebrow>
              <h2>Uma operação metalúrgica preparada para projetos críticos.</h2>
              <p>
                A Vulcano atua na fabricação, montagem e manutenção de componentes industriais sob medida, combinando
                caldeiraria pesada, soldagem qualificada e engenharia aplicada a setores de petróleo, gás, siderurgia,
                mineração, energia e infraestrutura.
              </p>
              <CapabilityGrid aria-label="Capacidades industriais">
                <article><strong>01</strong><span>Engenharia aplicada a contratos de alta complexidade</span></article>
                <article><strong>02</strong><span>Fabricação metálica, spools e estruturas especiais</span></article>
                <article><strong>03</strong><span>Equipe preparada para campo, manutenção e offshore</span></article>
              </CapabilityGrid>
              <Actions><Button as={Link} to="/empresa">Conheça nossa trajetória</Button></Actions>
            </IdentityContent>
          </IdentityGrid>
        </Container>
      </IdentityBand>

      <Section $muted>
        <Container>
          <SectionTitle>
            <Eyebrow>Nossas soluções</Eyebrow>
            <h2>Capacidade produtiva para metal, tubo, campo e mar.</h2>
          </SectionTitle>
          <CardGrid $columns={4}>
            {services.map((service) => (
              <ServiceCard as={Link} to={`/servicos/${service.slug}`} key={service.slug}>
                <img src={service.image} alt="" />
                <div><span>{service.eyebrow}</span><strong>{service.title}</strong></div>
              </ServiceCard>
            ))}
          </CardGrid>
        </Container>
      </Section>

      <Section $dark>
        <Container>
          <Split>
            <SectionTitle>
              <Eyebrow>Serviços offshore</Eyebrow>
              <h2 style={{ color: '#fff' }}>Fabricação, montagem e manutenção offshore.</h2>
              <p style={{ color: 'rgba(255,255,255,.76)' }}>
                Equipes qualificadas para soldagem AWS e ASME IX, tubulações FRP, linhas metálicas, sistemas em CPVC,
                PEAD e PTFE, revestimentos especiais e montagens mecânicas em campo.
              </p>
              <Actions><Button as={Link} to="/contato">Solicitar proposta offshore</Button></Actions>
            </SectionTitle>
            <ServiceCard as={Link} to="/servicos/offshore" style={{ minHeight: 520 }}>
              <img src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1600&q=84" alt="" />
              <div><span>Campo e mar</span><strong>AWS, ASME IX, FRP, CPVC, PEAD e PTFE</strong></div>
            </ServiceCard>
          </Split>
        </Container>
      </Section>

      <AssuranceBand>
        <Container>
          <AssuranceGrid>
            <AssuranceIntro>
              <Eyebrow>Certificações</Eyebrow>
              <h2>Conformidade para fabricar, soldar, montar e operar em campo.</h2>
              <p>
                Credenciais organizadas por disciplina para apoiar contratos industriais que exigem segurança,
                rastreabilidade, qualidade e atendimento a normas.
              </p>
            </AssuranceIntro>
            <AssuranceList>
              {Object.entries(certifications).map(([group, items]) => (
                <AssuranceCard key={group}>
                  <h3>{certificationLabels[group] ?? group}</h3>
                  <div>{items.map((item) => <span key={item}>{item}</span>)}</div>
                </AssuranceCard>
              ))}
            </AssuranceList>
          </AssuranceGrid>
        </Container>
      </AssuranceBand>

      <Section $muted>
        <Container>
          <SectionTitle>
            <Eyebrow>Estrutura industrial</Eyebrow>
            <h2>Quatro unidades integradas para fabricar, movimentar, testar e entregar.</h2>
          </SectionTitle>
          <CardGrid $columns={4}>
            {facilities.map((facility) => (
              <Panel key={facility.title}>
                <h3>{facility.title}</h3>
                <p><strong>{facility.area}</strong></p>
                <ul>{facility.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </Panel>
            ))}
          </CardGrid>
        </Container>
      </Section>

      <ClientBand>
        <Container>
          <ClientGrid>
            <ClientContent>
              <Eyebrow>Grandes clientes</Eyebrow>
              <h2>Histórico com operações líderes em energia, óleo e gás, siderurgia e infraestrutura.</h2>
              <p>
                A Vulcano participa de obras e manutenções para plantas, ativos offshore e cadeias industriais em que
                confiabilidade, prazo e documentação técnica fazem parte do escopo.
              </p>
              <ClientNames>{clients.map((client) => <span key={client}>{client}</span>)}</ClientNames>
            </ClientContent>
            <ClientMedia>
              <strong>Setores atendidos</strong>
              <figcaption>
                Relacionamentos em operações onde parada, prazo e rastreabilidade técnica fazem parte do contrato.
              </figcaption>
              <div>
                <span><b>Energia</b>plantas e utilidades industriais</span>
                <span><b>Óleo e gás</b>ativos offshore e apoio a campo</span>
                <span><b>Siderurgia</b>estruturas, spools e manutenção</span>
                <span><b>Infraestrutura</b>projetos técnicos sob demanda</span>
              </div>
            </ClientMedia>
          </ClientGrid>
        </Container>
      </ClientBand>

      <Section $muted>
        <Container>
          <SectionTitle>
            <Eyebrow>Obras realizadas</Eyebrow>
            <h2>Projetos executados em plantas e ativos industriais estratégicos.</h2>
          </SectionTitle>
          <CardGrid>
            {projects.map((project) => <Panel key={project.name}><h3>{project.name}</h3><p>{project.detail}</p></Panel>)}
          </CardGrid>
        </Container>
      </Section>
    </>
  );
}
