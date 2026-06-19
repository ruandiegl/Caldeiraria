import { Link, Navigate, useParams } from 'react-router-dom';
import { services } from '../../content/siteData';
import { Actions, Button, CardGrid, Container, Eyebrow, Hero, Panel, Section, SectionTitle, Split } from '../siteStyles';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) return <Navigate to="/servicos" replace />;

  return (
    <>
      <Hero $image={service.image}>
        <Container><Eyebrow>{service.eyebrow}</Eyebrow><h1>{service.title}</h1><p className="copy">{service.summary}</p></Container>
      </Hero>
      <Section>
        <Container>
          <Split>
            <SectionTitle><Eyebrow>Descrição</Eyebrow><h2>Execução técnica com rastreabilidade e foco em campo.</h2><p>{service.summary}</p></SectionTitle>
            <img src={service.image} alt="" style={{ minHeight: 440, objectFit: 'cover', borderRadius: 8 }} />
          </Split>
        </Container>
      </Section>
      <Section $muted>
        <Container>
          <CardGrid>
            <Panel><h3>Aplicações</h3><ul>{service.applications.map((item) => <li key={item}>{item}</li>)}</ul></Panel>
            <Panel><h3>Diferenciais</h3><ul>{service.differentials.map((item) => <li key={item}>{item}</li>)}</ul></Panel>
            <Panel><h3>Normas atendidas</h3><ul>{service.standards.map((item) => <li key={item}>{item}</li>)}</ul></Panel>
          </CardGrid>
          <Actions><Button as={Link} to="/contato">Solicitar orçamento</Button></Actions>
        </Container>
      </Section>
    </>
  );
}
