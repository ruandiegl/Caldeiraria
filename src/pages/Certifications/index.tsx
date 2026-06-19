import { certifications } from '../../content/siteData';
import { CardGrid, Container, Eyebrow, Hero, Panel, Section, SectionTitle } from '../siteStyles';

const labels = {
  seguranca: 'Segurança',
  offshore: 'Offshore',
  soldagem: 'Soldagem',
  qualidade: 'Qualidade',
};

export default function Certifications() {
  return (
    <>
      <Hero $image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2200&q=82">
        <Container><Eyebrow>Certificações</Eyebrow><h1>Conformidade para fabricar, soldar, montar e operar em campo.</h1><p className="copy">Credenciais organizadas por segurança, offshore, soldagem e qualidade para apoiar contratações industriais exigentes.</p></Container>
      </Hero>
      <Section $muted>
        <Container>
          <SectionTitle><Eyebrow>Controle técnico</Eyebrow><h2>Normas, registros e requisitos por disciplina.</h2></SectionTitle>
          <CardGrid $columns={4}>
            {Object.entries(certifications).map(([key, items]) => (
              <Panel key={key}>
                <h3>{labels[key as keyof typeof labels]}</h3>
                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </Panel>
            ))}
          </CardGrid>
        </Container>
      </Section>
    </>
  );
}
