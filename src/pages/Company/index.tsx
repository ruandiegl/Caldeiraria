import { Link } from 'react-router-dom';
import { Actions, Button, CardGrid, Container, Eyebrow, Hero, Panel, Section, SectionTitle } from '../siteStyles';

const timeline = [
  ['1974', 'Fundacao e inicio das atividades de fabricacao metalurgica.'],
  ['2006', 'Implantacao da Unidade Servicos Especiais.'],
  ['2010', 'Consolidacao da Unidade Apoio para suporte operacional.'],
  ['2012', 'Entrada da Nova Vulcano e ampliacao produtiva.'],
  ['2025+', 'Expansao do atendimento offshore e projetos de campo.'],
];

export default function Company() {
  return (
    <>
      <Hero $image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2200&q=82">
        <Container><Eyebrow>Empresa</Eyebrow><h1>Uma trajetoria industrial construida em obras de alta responsabilidade.</h1><p className="copy">Desde 1974, a Vulcano evolui em capacidade fabril, servicos especiais e atendimento offshore para responder a contratos tecnicos de grande porte.</p></Container>
      </Hero>
      <Section>
        <Container>
          <SectionTitle><Eyebrow>Linha do tempo</Eyebrow><h2>Expansao orientada por capacidade tecnica.</h2></SectionTitle>
          <CardGrid $columns={5}>{timeline.map(([year, text]) => <Panel key={year}><h3>{year}</h3><p>{text}</p></Panel>)}</CardGrid>
        </Container>
      </Section>
      <Section $muted>
        <Container>
          <CardGrid>
            <Panel><h3>Missao</h3><p>Entregar solucoes metalicas industriais com seguranca, qualidade e engenharia aplicada.</p></Panel>
            <Panel><h3>Visao</h3><p>Ser referencia brasileira em caldeiraria, tubulacao, soldagem especial e offshore services.</p></Panel>
            <Panel><h3>Politica da qualidade</h3><p>Atuar com processos controlados, melhoria continua, rastreabilidade e atendimento a requisitos contratuais.</p></Panel>
            <Panel><h3>Meio ambiente</h3><p>Executar operacoes com gestao de residuos, reducao de impactos e conformidade ambiental.</p></Panel>
            <Panel><h3>Seguranca</h3><p>Priorizar capacitacao, analise de risco, procedimentos e normas regulamentadoras aplicaveis.</p></Panel>
            <Panel><h3>Engenharia</h3><p>Traduzir demandas complexas em solucoes fabricaveis, montaveis e documentadas.</p></Panel>
          </CardGrid>
          <Actions><Button as={Link} to="/instalacoes">Ver instalacoes</Button></Actions>
        </Container>
      </Section>
    </>
  );
}
