import { clients, projects } from '../../content/siteData';
import { CardGrid, Container, Eyebrow, Hero, LogoGrid, Panel, Section, SectionTitle } from '../siteStyles';

export default function Cases() {
  return (
    <>
      <Hero $image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2200&q=82">
        <Container><Eyebrow>Obras e clientes</Eyebrow><h1>Histórico em plantas, plataformas e empreendimentos industriais relevantes.</h1><p className="copy">Projetos com clientes líderes e consórcios de engenharia em óleo e gás, energia, siderurgia e infraestrutura.</p></Container>
      </Hero>
      <Section>
        <Container>
          <SectionTitle><Eyebrow>Clientes</Eyebrow><h2>Relacionamento com operações industriais de alta exigência.</h2></SectionTitle>
          <LogoGrid>{clients.map((client) => <span key={client}>{client}</span>)}</LogoGrid>
        </Container>
      </Section>
      <Section $muted>
        <Container>
          <SectionTitle><Eyebrow>Estudos de caso</Eyebrow><h2>Obras realizadas com escopo técnico e execução documentada.</h2></SectionTitle>
          <CardGrid>{projects.map((project) => <Panel key={project.name}><h3>{project.name}</h3><p>{project.detail}</p></Panel>)}</CardGrid>
        </Container>
      </Section>
    </>
  );
}
