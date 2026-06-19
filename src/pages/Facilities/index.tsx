import { facilities } from '../../content/siteData';
import { CardGrid, Container, Eyebrow, Hero, Panel, Section, SectionTitle } from '../siteStyles';

export default function Facilities() {
  return (
    <>
      <Hero $image="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=2200&q=82">
        <Container><Eyebrow>Instalações</Eyebrow><h1>Footprint industrial para obras de grande porte.</h1><p className="copy">Quatro unidades com áreas produtivas, apoio logístico, laboratório e movimentação interna para fabricar componentes de alta complexidade.</p></Container>
      </Hero>
      <Section $muted>
        <Container>
          <SectionTitle><Eyebrow>Unidades</Eyebrow><h2>Capacidade fabril distribuída por especialidade.</h2></SectionTitle>
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
    </>
  );
}
