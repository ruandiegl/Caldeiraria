import { equipment } from '../../content/siteData';
import { CardGrid, Container, Eyebrow, Hero, Panel, Section, SectionTitle } from '../siteStyles';

export default function Equipment() {
  return (
    <>
      <Hero $image="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=2200&q=82">
        <Container><Eyebrow>Equipamentos</Eyebrow><h1>Catalogo fabril para transformar chapa, perfil e tubo.</h1><p className="copy">Recursos de corte, conformacao, acabamento, usinagem e movimentacao integrados ao planejamento de obras.</p></Container>
      </Hero>
      <Section $muted>
        <Container>
          <SectionTitle><Eyebrow>Parque industrial</Eyebrow><h2>Equipamentos organizados por etapa produtiva.</h2></SectionTitle>
          <CardGrid>
            {equipment.map(([title, text]) => <Panel key={title}><h3>{title}</h3><p>{text}</p><ul><li>Especificacao tecnica por projeto</li><li>Controle de prazo e qualidade</li><li>Integracao com fabricacao</li></ul></Panel>)}
          </CardGrid>
        </Container>
      </Section>
    </>
  );
}
