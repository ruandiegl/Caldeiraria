import { Link } from 'react-router-dom';
import { facilities } from '../../content/siteData';
import { CardGrid, Container, Eyebrow, Hero, Panel, Section, SectionTitle } from '../siteStyles';

export default function Facilities() {
  return (
    <>
      <Hero $image="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=2200&q=82">
        <Container><Eyebrow>Instalações</Eyebrow><h1>Footprint industrial para obras de grande porte.</h1><p className="copy">Três unidades vizinhas com pontes rolantes e pátios para estocagem.</p><p className="preview-note">Imagem de demonstração via Unsplash — substituir por foto autorizada da Vulcano.</p></Container>
      </Hero>
      <Section $muted>
        <Container>
          <SectionTitle><Eyebrow>Unidades</Eyebrow><h2>Capacidade fabril distribuída por especialidade.</h2></SectionTitle>
          <CardGrid $columns={3}>
            {facilities.map((facility) => (
              <Panel key={facility.title}>
                <h3>{facility.title}</h3>
                <p><strong>{facility.area}</strong></p>
                <ul>{facility.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </Panel>
            ))}
          </CardGrid>
          <p><Link to="/empresa/estrutura">Conheça a estrutura da empresa</Link></p>
        </Container>
      </Section>
    </>
  );
}
