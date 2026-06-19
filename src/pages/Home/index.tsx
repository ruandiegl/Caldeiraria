import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { certifications, clients, facilities, projects, services } from '../../content/siteData';
import {
  Actions,
  Button,
  CapabilityGrid,
  CardGrid,
  Container,
  Eyebrow,
  HeroCarousel,
  HeroSlide,
  IdentityBand,
  IdentityContent,
  IdentityGrid,
  IdentityMedia,
  LogoGrid,
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

export default function Home() {
  const certs = Object.values(certifications).flat();
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
          <Eyebrow>Caldeiraria, tubulacao e offshore services</Eyebrow>
          <h1>Engenharia Industrial com mais de 50 anos de experiencia</h1>
          <p className="copy">
            Desenvolvendo solucoes metalicas, sistemas de tubulacao, estruturas especiais e servicos offshore para os
            maiores empreendimentos do Brasil.
          </p>
          <Actions>
            <Button as={Link} to="/contato">Solicitar orcamento</Button>
            <Button as={Link} to="/servicos" $ghost>Conheca nossos servicos</Button>
          </Actions>
          <Metrics>
            <article><strong>+50</strong><span>anos de experiencia</span></article>
            <article><strong>+200k</strong><span>toneladas produzidas</span></article>
            <article><strong>4</strong><span>unidades industriais</span></article>
            <article><strong>LATAM</strong><span>atuacao regional</span></article>
          </Metrics>
        </Container>
      </HeroCarousel>

      <IdentityBand>
        <Container>
          <IdentityGrid>
            <IdentityMedia>
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1500&q=82"
                alt="Operacao metalurgica com tubulacoes industriais"
              />
              <figcaption>Caldeiraria, soldagem e tubulacao sob medida</figcaption>
            </IdentityMedia>
            <IdentityContent>
              <Eyebrow>Quem somos</Eyebrow>
              <h2>Uma operacao metalurgica preparada para projetos criticos.</h2>
              <p>
                A Vulcano atua na fabricacao, montagem e manutencao de componentes industriais sob medida, combinando
                caldeiraria pesada, soldagem qualificada e engenharia aplicada a setores de petroleo, gas, siderurgia,
                mineracao, energia e infraestrutura.
              </p>
              <CapabilityGrid aria-label="Capacidades industriais">
                <article><strong>01</strong><span>Engenharia aplicada a contratos de alta complexidade</span></article>
                <article><strong>02</strong><span>Fabricacao metalica, spools e estruturas especiais</span></article>
                <article><strong>03</strong><span>Equipe preparada para campo, manutencao e offshore</span></article>
              </CapabilityGrid>
              <Actions><Button as={Link} to="/empresa">Conheca nossa trajetoria</Button></Actions>
            </IdentityContent>
          </IdentityGrid>
        </Container>
      </IdentityBand>

      <Section $muted>
        <Container>
          <SectionTitle>
            <Eyebrow>Nossas solucoes</Eyebrow>
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
              <Eyebrow>Offshore services</Eyebrow>
              <h2 style={{ color: '#fff' }}>Fabricacao, montagem e manutencao offshore.</h2>
              <p style={{ color: 'rgba(255,255,255,.76)' }}>
                Equipes qualificadas para soldagem AWS e ASME IX, tubulacoes FRP, linhas metalicas, sistemas em CPVC,
                PEAD e PTFE, revestimentos especiais e montagens mecanicas em campo.
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

      <Section>
        <Container>
          <SectionTitle>
            <Eyebrow>Certificacoes</Eyebrow>
            <h2>Qualidade, seguranca e conformidade para contratos industriais.</h2>
          </SectionTitle>
          <LogoGrid>{certs.map((cert) => <span key={cert}>{cert}</span>)}</LogoGrid>
        </Container>
      </Section>

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

      <Section>
        <Container>
          <SectionTitle>
            <Eyebrow>Grandes clientes</Eyebrow>
            <h2>Historico com operacoes lideres em energia, oleo e gas, siderurgia e infraestrutura.</h2>
          </SectionTitle>
          <LogoGrid>{clients.map((client) => <span key={client}>{client}</span>)}</LogoGrid>
        </Container>
      </Section>

      <Section $muted>
        <Container>
          <SectionTitle>
            <Eyebrow>Obras realizadas</Eyebrow>
            <h2>Projetos executados em plantas e ativos industriais estrategicos.</h2>
          </SectionTitle>
          <CardGrid>
            {projects.map((project) => <Panel key={project.name}><h3>{project.name}</h3><p>{project.detail}</p></Panel>)}
          </CardGrid>
        </Container>
      </Section>
    </>
  );
}
