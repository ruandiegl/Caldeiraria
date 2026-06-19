import styled from 'styled-components';
import { clients, projects } from '../../content/siteData';
import { Container, Eyebrow, Hero } from '../siteStyles';

const sectors = [
  ['Energia', 'Plantas, utilidades industriais e apoio a paradas programadas'],
  ['Óleo e gás', 'Ativos offshore, refino, tubulações e serviços especiais'],
  ['Siderurgia', 'Estruturas, spools, bases, manutenção e componentes sob demanda'],
  ['Infraestrutura', 'Empreendimentos industriais com documentação e rastreabilidade'],
] as const;

const CasesSection = styled.section.attrs({ className: 'reveal' })`
  padding: 72px 0 82px;
  background:
    linear-gradient(180deg, #ffffff 0%, #f7fafc 100%),
    #ffffff;
`;

const CasesContainer = styled(Container)`
  width: min(1180px, calc(100% - 56px));

  @media (max-width: 640px) {
    width: min(100% - 28px, 1180px);
  }
`;

const ClientProof = styled.div`
  display: grid;
  gap: 28px;
`;

const ClientCopy = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.78fr) minmax(320px, 0.36fr);
  gap: 48px;
  align-items: start;

  h2 {
    max-width: 860px;
    margin: 0;
    color: #11182d;
    font-family: Montserrat, Inter, sans-serif;
    font-size: clamp(1.9rem, 3.45vw, 3.75rem);
    line-height: 1.06;
    text-transform: uppercase;
  }

  > p:not(:first-child) {
    max-width: 420px;
    margin: 29px 0 0;
    color: #475569;
    line-height: 1.72;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 18px;

    > p:not(:first-child) {
      max-width: 680px;
      margin-top: 0;
    }
  }
`;

const ClientLedger = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 270px;
  gap: 0;
  align-items: stretch;
  border-top: 1px solid #d8e3ef;
  border-left: 1px solid #d8e3ef;
  background: #ffffff;
  box-shadow: 0 22px 58px rgba(17, 24, 45, 0.07);

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

const ClientWall = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  span {
    min-height: 74px;
    padding: 16px;
    display: flex;
    align-items: center;
    color: #0f2f47;
    border-right: 1px solid #d8e3ef;
    border-bottom: 1px solid #d8e3ef;
    font-family: Montserrat, Inter, sans-serif;
    font-size: 0.74rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  @media (max-width: 620px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    span {
      min-height: 54px;
      padding: 12px;
      font-size: 0.66rem;
    }
  }
`;

const ClientStats = styled.div`
  display: grid;
  background: #11182d;

  article {
    padding: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  }

  strong {
    display: block;
    color: #ff8424;
    font-family: Montserrat, Inter, sans-serif;
    font-size: 1.65rem;
    line-height: 1;
    text-transform: uppercase;
  }

  span {
    display: block;
    margin-top: 8px;
    color: rgba(255, 255, 255, 0.78);
    font-size: 0.68rem;
    font-weight: 900;
    line-height: 1.45;
    text-transform: uppercase;
  }

  @media (max-width: 920px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const SectorBand = styled.div`
  margin-top: 6px;
  padding-top: 22px;
  border-top: 2px solid #fb7900;

  > div {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border-left: 1px solid #d8e3ef;
  }

  article {
    min-height: 120px;
    padding: 20px 22px;
    background: rgba(255, 255, 255, 0.68);
    border-right: 1px solid #d8e3ef;
    border-bottom: 1px solid #d8e3ef;
  }

  h3 {
    margin: 0 0 10px;
    color: #063e66;
    font-family: Montserrat, Inter, sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
  }

  p {
    margin: 0;
    color: #475569;
    font-size: 0.82rem;
    line-height: 1.55;
  }

  @media (max-width: 920px) {
    > div {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 560px) {
    > div {
      grid-template-columns: 1fr;
    }
  }
`;

const ProjectsSection = styled.section.attrs({ className: 'reveal' })`
  padding: 82px 0 92px;
  background: #f4f7fb;
`;

const ProjectHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.86fr) minmax(280px, 0.5fr);
  gap: 42px;
  align-items: end;
  margin-bottom: 34px;

  h2 {
    margin: 0;
    color: #11182d;
    font-family: Montserrat, Inter, sans-serif;
    font-size: clamp(1.75rem, 3.7vw, 3.25rem);
    line-height: 1.05;
    text-transform: uppercase;
  }

  p {
    margin: 0;
    color: #475569;
    line-height: 1.7;
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1px;
  background: #d8e3ef;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.article`
  min-height: 220px;
  padding: 24px;
  background: #ffffff;

  span {
    display: block;
    color: #fb7900;
    font-size: 0.72rem;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h3 {
    margin: 18px 0 14px;
    color: #11182d;
    font-family: Montserrat, Inter, sans-serif;
    font-size: 1.2rem;
    line-height: 1.12;
    text-transform: uppercase;
  }

  p {
    margin: 0;
    color: #475569;
    line-height: 1.65;
  }
`;

export default function Cases() {
  return (
    <>
      <Hero $image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2200&q=82">
        <Container>
          <Eyebrow>Obras e clientes</Eyebrow>
          <h1>Histórico em plantas, plataformas e empreendimentos industriais relevantes.</h1>
          <p className="copy">
            Projetos com clientes líderes e consórcios de engenharia em óleo e gás, energia, siderurgia e
            infraestrutura.
          </p>
        </Container>
      </Hero>

      <CasesSection>
        <CasesContainer>
          <ClientProof>
            <ClientCopy>
              <div>
                <Eyebrow>Clientes</Eyebrow>
                <h2>Relacionamentos em operações onde confiabilidade é parte do escopo.</h2>
              </div>
              <p>
                A Vulcano atende cadeias industriais que exigem prazo, documentação técnica, rastreabilidade e equipes
                preparadas para fabricação, manutenção e campo.
              </p>
            </ClientCopy>
            <ClientLedger>
              <ClientWall>
                {clients.map((client) => <span key={client}>{client}</span>)}
              </ClientWall>
              <ClientStats aria-label="Resumo de atuação">
                <article><strong>09</strong><span>clientes e grupos industriais citados</span></article>
                <article><strong>04</strong><span>setores estratégicos atendidos</span></article>
                <article><strong>B2B</strong><span>contratos técnicos e relacionamento recorrente</span></article>
              </ClientStats>
            </ClientLedger>
          </ClientProof>

          <SectorBand>
            <Eyebrow>Setores atendidos</Eyebrow>
            <div>
              {sectors.map(([title, text]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </SectorBand>
        </CasesContainer>
      </CasesSection>

      <ProjectsSection>
        <Container>
          <ProjectHeader>
            <div>
              <Eyebrow>Estudos de caso</Eyebrow>
              <h2>Obras realizadas com escopo técnico e execução documentada.</h2>
            </div>
            <p>
              Amostras de contratos e frentes industriais que demonstram atuação em refino, offshore, plantas e
              montagem especializada.
            </p>
          </ProjectHeader>
          <ProjectGrid>
            {projects.map((project, index) => (
              <ProjectCard key={project.name}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{project.name}</h3>
                <p>{project.detail}</p>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </Container>
      </ProjectsSection>
    </>
  );
}
