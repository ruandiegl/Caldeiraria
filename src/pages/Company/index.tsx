import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Actions, Button, CardGrid, Container, Eyebrow, Hero, Panel, Section, SectionTitle } from '../siteStyles';

const timeline = [
  {
    year: '1974',
    label: 'Fundação',
    title: 'Início da operação metalúrgica',
    text:
      'A Vulcano nasce com vocação para fabricação metálica, atendendo demandas industriais que exigiam domínio de chapa, soldagem e montagem.',
    image:
      'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=82',
  },
  {
    year: '2006',
    label: 'Serviços especiais',
    title: 'Nova frente para obras técnicas',
    text:
      'A Unidade Serviços Especiais amplia a capacidade de atendimento em soldagem, manutenção, preparação de campo e fabricações de maior complexidade.',
    image:
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=82',
  },
  {
    year: '2010',
    label: 'Apoio operacional',
    title: 'Mais estrutura para suportar contratos',
    text:
      'A Unidade Apoio fortalece a logística, o armazenamento técnico, a movimentação e a preparação de conjuntos fabricados para obras industriais.',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=82',
  },
  {
    year: '2012',
    label: 'Nova Vulcano',
    title: 'Expansão da capacidade fabril',
    text:
      'Com a Nova Vulcano, a empresa passa a operar com maior área produtiva para spools, estruturas especiais, caldeiraria e linhas de montagem.',
    image:
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=82',
  },
  {
    year: '2025+',
    label: 'Offshore',
    title: 'Expansão para campo e mar',
    text:
      'A empresa intensifica a atuação offshore, integrando equipes qualificadas, procedimentos de segurança e serviços para ativos de óleo e gás.',
    image:
      'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=82',
  },
];

const TimelineShowcase = styled.div.attrs({ className: 'reveal' })`
  margin-top: 44px;
`;

const TimelineStage = styled.div<{ $direction: number }>`
  display: grid;
  grid-template-columns: 0.95fr 1fr;
  gap: 34px;
  align-items: center;

  figure,
  article {
    animation: slide-stage 420ms cubic-bezier(0.2, 0.72, 0.24, 1) both;
  }

  article {
    animation-delay: 45ms;
  }

  @keyframes slide-stage {
    from {
      opacity: 0;
      transform: translateX(${({ $direction }) => ($direction >= 0 ? '34px' : '-34px')});
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 24px;
    overflow: hidden;
  }
`;

const TimelinePhoto = styled.figure`
  margin: 0;
  min-height: 315px;
  overflow: hidden;
  border-radius: 2px;
  background: #11182d;

  img {
    width: 100%;
    height: 315px;
    object-fit: cover;
    filter: grayscale(0.86) contrast(1.08);
    transition: transform 600ms ease, filter 260ms ease;
  }

  &:hover img {
    transform: scale(1.035);
    filter: grayscale(0.35) contrast(1.04);
  }

  @media (max-width: 640px) {
    min-height: 178px;

    img {
      height: 178px;
    }
  }
`;

const TimelineCopy = styled.article`
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    color: #fb7900;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  h3 {
    margin: 10px 0 18px;
    color: #063e66;
    font-family: Montserrat, Inter, sans-serif;
    font-size: clamp(1.75rem, 3.5vw, 3rem);
    line-height: 1.05;
    text-transform: uppercase;
  }

  p {
    max-width: 520px;
    margin: 0;
    color: #334155;
    font-size: 0.98rem;
    line-height: 1.72;
  }

  @media (max-width: 640px) {
    min-height: 0;

    h3 {
      margin-bottom: 16px;
      font-size: clamp(1.45rem, 7vw, 2rem);
      line-height: 1.08;
    }

    p {
      max-width: 100%;
      font-size: 0.9rem;
      line-height: 1.65;
    }
  }
`;

const TimelineControls = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;

  @media (max-width: 640px) {
    margin-top: 30px;
  }
`;

const TimelineTrack = styled.div<{ $progress: number; $dragging: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: repeat(${timeline.length}, minmax(0, 1fr));
  gap: 0;
  padding-top: 2px;
  cursor: ${({ $dragging }) => ($dragging ? 'grabbing' : 'grab')};
  user-select: none;
  touch-action: pan-y;
  --step: ${100 / timeline.length}%;
  --marker-center: calc(var(--step) / 2);
  --rail-width: calc(100% - var(--step));

  &::before {
    content: "";
    position: absolute;
    top: 12px;
    left: var(--marker-center);
    width: var(--rail-width);
    height: 1px;
    background: #102a43;
  }

  &::after {
    content: "";
    position: absolute;
    top: 12px;
    left: var(--marker-center);
    width: calc(var(--rail-width) * ${({ $progress }) => $progress / 100});
    height: 2px;
    background: #fb7900;
    transition: width 360ms cubic-bezier(0.2, 0.72, 0.24, 1);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(${timeline.length}, minmax(0, 1fr));
    padding: 2px 0 8px;
    margin-inline: 0;
    overflow: visible;
    --step: ${100 / timeline.length}%;
    --marker-center: calc(var(--step) / 2);
    --rail-width: calc(100% - var(--step));
  }
`;

const TimelineMarker = styled.button<{ $active: boolean }>`
  position: relative;
  z-index: 1;
  min-width: 0;
  padding: 0;
  color: ${({ $active }) => ($active ? '#063e66' : '#9ca3af')};
  background: transparent;
  border: 0;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  cursor: pointer;
  text-align: center;
  transition: color 180ms ease;

  &::before {
    content: "";
    display: block;
    width: 21px;
    height: 21px;
    margin: 0 auto 12px;
    border: 1px solid ${({ $active }) => ($active ? '#063e66' : '#d1d5db')};
    border-radius: 50%;
    background: ${({ $active }) => ($active ? '#063e66' : '#fff')};
    box-shadow: 0 0 0 5px #fff;
    transition: background 180ms ease, border-color 180ms ease, transform 180ms ease;
  }

  &:hover::before {
    transform: scale(1.08);
  }

  &[aria-current="true"]::before {
    transform: scale(1.12);
  }

  strong {
    display: block;
    font-family: Montserrat, Inter, sans-serif;
    font-size: 1.45rem;
    line-height: 1;
  }

  span {
    display: block;
    margin-top: 7px;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  @media (max-width: 640px) {
    &::before {
      width: 17px;
      height: 17px;
      margin-bottom: 8px;
      box-shadow: 0 0 0 4px #fff;
    }

    strong {
      font-size: 0.92rem;
    }

    span {
      max-width: 58px;
      margin-inline: auto;
      font-size: 6.8px;
      line-height: 1.2;
    }
  }
`;

const GalleryLink = styled(Link)`
  width: max-content;
  margin: 34px auto 0;
  display: block;
  color: #11182d;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;

  &:hover {
    color: #fb7900;
  }

  @media (max-width: 640px) {
    margin-top: 24px;
    font-size: 0.9rem;
  }
`;

export default function Company() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const active = timeline[activeIndex];
  const progress = timeline.length === 1 ? 100 : (activeIndex / (timeline.length - 1)) * 100;

  function selectTimeline(index: number) {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }

  function moveTimeline(direction: -1 | 1) {
    setDirection(direction);
    setActiveIndex((current) => Math.max(0, Math.min(timeline.length - 1, current + direction)));
  }

  function finishDrag(clientX: number) {
    if (dragStart === null) return;

    const distance = clientX - dragStart;
    setDragStart(null);

    if (Math.abs(distance) < 34) return;
    moveTimeline(distance < 0 ? 1 : -1);
  }

  return (
    <>
      <Hero $image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2200&q=82">
        <Container>
          <Eyebrow>Empresa</Eyebrow>
          <h1>Uma trajetória industrial construída em obras de alta responsabilidade.</h1>
          <p className="copy">
            Desde 1974, a Vulcano evolui em capacidade fabril, serviços especiais e atendimento offshore para responder
            a contratos técnicos de grande porte.
          </p>
        </Container>
      </Hero>
      <Section>
        <Container>
          <SectionTitle>
            <Eyebrow>Linha do tempo</Eyebrow>
            <h2>Expansão orientada por capacidade técnica.</h2>
          </SectionTitle>
          <TimelineShowcase>
            <TimelineStage $direction={direction} key={active.year}>
              <TimelinePhoto>
                <img src={active.image} alt={`Marco histórico da Vulcano em ${active.year}`} />
              </TimelinePhoto>
              <TimelineCopy>
                <span>{active.year}</span>
                <h3>{active.title}</h3>
                <p>{active.text}</p>
              </TimelineCopy>
            </TimelineStage>
            <TimelineControls>
              <TimelineTrack
                aria-label="Marcos históricos"
                $progress={progress}
                $dragging={dragStart !== null}
                onPointerDown={(event) => {
                  event.currentTarget.setPointerCapture(event.pointerId);
                  setDragStart(event.clientX);
                }}
                onPointerUp={(event) => finishDrag(event.clientX)}
                onPointerCancel={() => setDragStart(null)}
              >
                {timeline.map((item, index) => (
                  <TimelineMarker
                    key={item.year}
                    type="button"
                    $active={index === activeIndex}
                    aria-current={index === activeIndex}
                    onPointerDown={(event) => event.stopPropagation()}
                    onPointerUp={(event) => event.stopPropagation()}
                    onClick={() => selectTimeline(index)}
                  >
                    <strong>{item.year}</strong>
                    <span>{item.label}</span>
                  </TimelineMarker>
                ))}
              </TimelineTrack>
            </TimelineControls>
            <GalleryLink to="/obras-clientes">Veja nossa galeria de obras</GalleryLink>
          </TimelineShowcase>
        </Container>
      </Section>
      <Section $muted>
        <Container>
          <CardGrid>
            <Panel><h3>Missão</h3><p>Entregar soluções metálicas industriais com segurança, qualidade e engenharia aplicada.</p></Panel>
            <Panel><h3>Visão</h3><p>Ser referência brasileira em caldeiraria, tubulação, soldagem especial e serviços offshore.</p></Panel>
            <Panel><h3>Política da qualidade</h3><p>Atuar com processos controlados, melhoria contínua, rastreabilidade e atendimento a requisitos contratuais.</p></Panel>
            <Panel><h3>Meio ambiente</h3><p>Executar operações com gestão de resíduos, redução de impactos e conformidade ambiental.</p></Panel>
            <Panel><h3>Segurança</h3><p>Priorizar capacitação, análise de risco, procedimentos e normas regulamentadoras aplicáveis.</p></Panel>
            <Panel><h3>Engenharia</h3><p>Traduzir demandas complexas em soluções fabricáveis, montáveis e documentadas.</p></Panel>
          </CardGrid>
          <Actions><Button as={Link} to="/instalacoes">Ver instalações</Button></Actions>
        </Container>
      </Section>
    </>
  );
}



