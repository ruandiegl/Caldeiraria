import { Link, Navigate, useParams } from 'react-router-dom';
import { type CSSProperties } from 'react';
import styled from 'styled-components';
import { Actions, Button, Container, Eyebrow, Hero } from '../siteStyles';

const peopleTopics = {
  carreira: {
    eyebrow: 'Carreira',
    title: 'Crescimento técnico para quem constrói indústria de verdade.',
    summary:
      'A Vulcano valoriza trajetórias que começam no aprendizado prático, avançam pela qualificação e ganham força com novas responsabilidades em fábrica, obra e campo.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2200&q=82',
    accent: '#fb7900',
    badge: 'Trilha profissional',
    signal: 'Fábrica | Obra | Campo',
    quote: 'Carreira industrial se constrói com prática, orientação e responsabilidade no detalhe.',
    points: [
      ['Entrada e evolução', 'Oportunidades para desenvolver habilidades em caldeiraria, soldagem, montagem e apoio operacional.'],
      ['Liderança técnica', 'Crescimento apoiado por experiência prática, acompanhamento de equipes e domínio de processos.'],
      ['Segurança no caminho', 'Carreira construída com atenção a normas, procedimentos e responsabilidade coletiva.'],
    ],
  },
  desenvolvimento: {
    eyebrow: 'Pessoas que movem a Vulcano',
    title: 'Conhecimento compartilhado entre gerações, áreas e contratos.',
    summary:
      'O desenvolvimento acontece na troca entre engenharia, produção, qualidade, logística e campo, conectando experiência industrial com melhoria contínua.',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=2200&q=82',
    accent: '#0f6f8f',
    badge: 'Aprendizado contínuo',
    signal: 'Engenharia | Produção | Qualidade',
    quote: 'Conhecimento vira valor quando circula entre engenharia, fábrica, qualidade e campo.',
    points: [
      ['Aprendizado aplicado', 'Rotinas de orientação, leitura técnica e prática acompanhada dentro das demandas reais de produção.'],
      ['Qualificação', 'Treinamentos, certificações e procedimentos que fortalecem a entrega técnica e documental.'],
      ['Cultura de melhoria', 'Ajustes de processo, escuta das equipes e evolução contínua da operação.'],
    ],
  },
  comunidade: {
    eyebrow: 'Comunidade',
    title: 'Relações locais que fortalecem pessoas, famílias e território.',
    summary:
      'A presença industrial da Vulcano também passa por vínculos com a comunidade, geração de oportunidades e respeito às relações que cercam cada unidade.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2200&q=82',
    accent: '#8a5a2b',
    badge: 'Pertencimento',
    signal: 'Pessoas | Famílias | Território',
    quote: 'A indústria também é feita dos vínculos que nascem ao redor dela.',
    points: [
      ['Oportunidade local', 'Abertura para talentos da região e valorização de trajetórias próximas às unidades.'],
      ['Famílias e redes', 'Uma cultura que reconhece a importância das pessoas para além do crachá.'],
      ['Pertencimento', 'Ambiente de trabalho conectado à responsabilidade social e ao impacto da indústria no entorno.'],
    ],
  },
  cuidado: {
    eyebrow: 'We Care',
    title: 'Cuidado, segurança e respeito como parte da rotina industrial.',
    summary:
      'Cuidar das pessoas é proteger a operação: segurança, prevenção, atenção ao ambiente de trabalho e respeito orientam a forma como a Vulcano atua.',
    image: 'https://images.unsplash.com/photo-1581091215367-59ab6b90d8f2?auto=format&fit=crop&w=2200&q=82',
    accent: '#1f9d55',
    badge: 'Cuidado diário',
    signal: 'Segurança | Respeito | Prevenção',
    quote: 'Cuidar das pessoas é proteger a operação antes, durante e depois da entrega.',
    points: [
      ['Segurança primeiro', 'Procedimentos, análise de risco e comportamento seguro em fábrica, obra, altura, campo e offshore.'],
      ['Ambiente respeitoso', 'Relações profissionais baseadas em confiança, colaboração e responsabilidade.'],
      ['Prevenção', 'Cuidado diário com condições de trabalho, uso correto de EPIs e atenção aos sinais da operação.'],
    ],
  },
} as const;

const overviewCards = [
  ['Carreira', 'Percursos de crescimento técnico para fábrica, obra e campo.', '/pessoas/carreira'],
  ['Desenvolvimento', 'Conhecimento compartilhado, qualificação e melhoria contínua.', '/pessoas/desenvolvimento'],
  ['Comunidade', 'Vínculo com pessoas, famílias, território e oportunidades locais.', '/pessoas/comunidade'],
  ['We Care', 'Segurança, respeito e cuidado como rotina de trabalho.', '/pessoas/cuidado'],
] as const;

type PeopleTopicKey = keyof typeof peopleTopics;

const PeopleSection = styled.section.attrs({ className: 'reveal' })`
  padding: 78px 0 88px;
  background:
    linear-gradient(180deg, #ffffff 0%, var(--people-bg, #f5f9fc) 100%),
    #ffffff;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

const PeopleIntro = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.96fr) minmax(300px, 0.5fr);
  gap: 44px;
  align-items: end;
  margin-bottom: 36px;

  h2 {
    max-width: 850px;
    margin: 0;
    padding-bottom: 6px;
    color: #11182d;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: clamp(1.85rem, 4vw, 3.6rem);
    line-height: 1.12;
    text-transform: uppercase;
  }

  p {
    margin: 0;
    color: #475569;
    line-height: 1.72;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;

const PeopleCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 2px solid #fb7900;
  border-left: 1px solid #d8e3ef;

  a {
    min-height: 210px;
    padding: 24px;
    color: inherit;
    background: rgba(255, 255, 255, 0.76);
    border-right: 1px solid #d8e3ef;
    border-bottom: 1px solid #d8e3ef;
    text-decoration: none;
    transition: transform 180ms ease, background 180ms ease, box-shadow 180ms ease;
  }

  a:hover {
    transform: translateY(-4px);
    background: #fff;
    box-shadow: 0 18px 44px rgba(17, 24, 45, 0.09);
  }

  strong {
    display: block;
    color: #063e66;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: 1.05rem;
    text-transform: uppercase;
  }

  span {
    display: block;
    margin-top: 14px;
    color: #475569;
    line-height: 1.6;
  }

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;

    a {
      min-height: auto;
    }
  }
`;

const PeopleSystemMap = styled.div`
  position: relative;
  margin-top: 30px;
  padding: 28px;
  overflow: hidden;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.92), rgba(244, 247, 251, 0.7)),
    #fff;
  border: 1px solid #d8e3ef;
  border-radius: 8px;
  box-shadow: 0 24px 70px rgba(17, 24, 45, 0.08);

  &::before {
    content: "";
    position: absolute;
    inset: 22px;
    background:
      linear-gradient(90deg, rgba(251, 121, 0, 0.18) 0 1px, transparent 1px),
      linear-gradient(0deg, rgba(15, 47, 71, 0.12) 0 1px, transparent 1px);
    background-size: 52px 52px;
    mask-image: linear-gradient(90deg, transparent, #000 14%, #000 86%, transparent);
    pointer-events: none;
  }

  .map-label {
    position: relative;
    z-index: 1;
    margin-bottom: 22px;
    color: #063e66;
    font-size: 0.75rem;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .map-track {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
  }

  .map-track::before {
    content: "";
    position: absolute;
    top: 34px;
    right: 8%;
    left: 8%;
    height: 2px;
    background: linear-gradient(90deg, #fb7900, #0f6f8f, #8a5a2b, #1f9d55);
  }

  .map-node {
    position: relative;
    min-height: 150px;
    padding: 72px 18px 18px;
    background: rgba(255, 255, 255, 0.76);
    border: 1px solid rgba(216, 227, 239, 0.88);
    border-radius: 8px;
  }

  .map-node::before {
    content: "";
    position: absolute;
    top: 22px;
    left: 18px;
    width: 24px;
    height: 24px;
    border: 7px solid var(--node-color);
    border-radius: 999px;
    background: #fff;
    box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.82);
  }

  strong {
    display: block;
    color: #11182d;
    font-size: 0.95rem;
    text-transform: uppercase;
  }

  span {
    display: block;
    margin-top: 10px;
    color: #475569;
    font-size: 0.82rem;
    line-height: 1.55;
  }

  @media (max-width: 860px) {
    .map-track {
      grid-template-columns: 1fr;
    }

    .map-track::before {
      top: 14px;
      bottom: 14px;
      left: 30px;
      width: 2px;
      height: auto;
      background: linear-gradient(180deg, #fb7900, #0f6f8f, #8a5a2b, #1f9d55);
    }

    .map-node {
      min-height: auto;
      padding: 22px 18px 22px 66px;
    }

    .map-node::before {
      top: 22px;
    }
  }
`;

const TopicExperience = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.76fr) minmax(0, 1.24fr);
  gap: 42px;
  align-items: start;

  @media (max-width: 1120px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const TopicBadge = styled.span`
  width: max-content;
  margin-bottom: 16px;
  padding: 8px 12px;
  display: inline-flex;
  color: #fff;
  background: var(--people-accent, #fb7900);
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const TopicContent = styled.article`
  min-width: 0;
  padding: 22px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    max-width: 760px;
    margin: 0;
    color: #11182d;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: clamp(1.65rem, 3.1vw, 2.85rem);
    line-height: 1.14;
    text-transform: uppercase;
    overflow-wrap: anywhere;
  }

  p {
    max-width: 680px;
    margin: 18px 0 0;
    color: #475569;
    line-height: 1.72;
    overflow-wrap: anywhere;
  }

  @media (max-width: 1120px) {
    padding: 0;
  }
`;

const TopicVisual = styled.article.attrs({ className: 'people-visual' })`
  position: relative;
  align-self: start;
  min-width: 0;
  min-height: 430px;
  padding: 22px;
  overflow: hidden;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(244, 247, 251, 0.76)),
    #ffffff;
  border: 1px solid rgba(216, 227, 239, 0.94);
  border-radius: 8px;
  box-shadow: 0 28px 80px rgba(17, 24, 45, 0.1);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(17, 24, 45, 0.06) 0 1px, transparent 1px),
      linear-gradient(0deg, rgba(17, 24, 45, 0.05) 0 1px, transparent 1px);
    background-size: 44px 44px;
    mask-image: radial-gradient(circle at 72% 22%, #000, transparent 65%);
    pointer-events: none;
  }

  .visual-header,
  .visual-stage,
  .network-board,
  .territory-map,
  .care-panel {
    position: relative;
    z-index: 1;
  }

  .visual-header {
    display: grid;
    grid-template-columns: minmax(0, 0.58fr) minmax(220px, 0.42fr);
    align-items: start;
    gap: 18px;
    margin-bottom: 18px;
    padding-bottom: 14px;
    border-bottom: 1px solid #d8e3ef;
  }

  .visual-header strong {
    display: block;
    color: #11182d;
    font-size: clamp(1rem, 1.45vw, 1.28rem);
    line-height: 1.16;
    text-transform: uppercase;
    overflow-wrap: anywhere;
  }

  .visual-header span {
    color: #64748b;
    font-size: 0.74rem;
    font-weight: 800;
    line-height: 1.45;
    text-transform: uppercase;
    overflow-wrap: anywhere;
  }

  .visual-stage {
    min-height: 330px;
  }

  .visual-legend {
    position: relative;
    z-index: 1;
    margin-top: 14px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
  }

  .visual-legend span {
    min-height: 38px;
    padding: 9px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #063e66;
    background: rgba(255, 255, 255, 0.78);
    border: 1px solid rgba(216, 227, 239, 0.9);
    border-radius: 8px;
    font-size: 0.66rem;
    font-weight: 900;
    line-height: 1.25;
    text-align: center;
    text-transform: uppercase;
  }

  .career-ladder {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    align-items: stretch;
    min-height: 312px;
  }

  .career-ladder::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 28px;
    left: 28px;
    height: 2px;
    background: linear-gradient(90deg, rgba(251, 121, 0, 0.18), var(--people-accent, #fb7900));
    transform: translateY(-50%);
  }

  .career-step {
    position: relative;
    min-width: 0;
    min-height: 148px;
    padding: 18px 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: #fff;
    border: 1px solid #d8e3ef;
    border-top: 5px solid var(--people-accent, #fb7900);
    border-radius: 8px;
    box-shadow: 0 18px 44px rgba(17, 24, 45, 0.07);
  }

  .career-step em {
    position: absolute;
    top: 16px;
    left: 18px;
    color: var(--people-accent, #fb7900);
    font-style: normal;
    font-size: 1.25rem;
    font-weight: 900;
  }

  .career-step strong,
  .network-node strong,
  .map-marker strong,
  .care-card strong {
    display: block;
    color: #063e66;
    font-size: 0.82rem;
    line-height: 1.2;
    text-transform: uppercase;
    overflow-wrap: anywhere;
  }

  .career-step span,
  .network-node span,
  .map-marker span,
  .care-card span {
    display: block;
    margin-top: 8px;
    color: #475569;
    font-size: 0.74rem;
    line-height: 1.5;
    overflow-wrap: anywhere;
  }

  .network-board {
    position: relative;
    min-height: 330px;
  }

  .network-board svg {
    position: absolute;
    inset: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  .network-board line,
  .territory-map path {
    stroke: var(--people-accent, #0f6f8f);
    stroke-width: 2.4;
    stroke-dasharray: 7 7;
    stroke-linecap: round;
    opacity: 0.72;
  }

  .network-node {
    position: absolute;
    width: min(178px, 31%);
    min-height: 86px;
    padding: 13px;
    display: grid;
    align-content: center;
    z-index: 1;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #d8e3ef;
    border-radius: 8px;
    box-shadow: 0 16px 38px rgba(17, 24, 45, 0.08);
  }

  .network-node.center {
    top: 50%;
    left: 50%;
    color: #fff;
    background: var(--people-accent, #0f6f8f);
    border-color: transparent;
    transform: translate(-50%, -50%);
  }

  .network-node.center strong,
  .network-node.center span {
    color: #fff;
  }

  .network-node.n1 { top: 4%; left: 7%; }
  .network-node.n2 { top: 7%; right: 5%; }
  .network-node.n3 { right: 8%; bottom: 2%; }
  .network-node.n4 { bottom: 4%; left: 8%; }

  .territory-map {
    position: relative;
    min-height: 310px;
    background:
      radial-gradient(circle at 50% 48%, rgba(138, 90, 43, 0.12), transparent 36%),
      linear-gradient(135deg, rgba(255, 255, 255, 0.78), rgba(244, 247, 251, 0.58));
    border: 1px solid #d8e3ef;
    border-radius: 8px;
  }

  .territory-map svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .map-core {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 118px;
    height: 118px;
    display: grid;
    place-items: center;
    color: #fff;
    background: var(--people-accent, #8a5a2b);
    border: 10px solid rgba(255, 255, 255, 0.82);
    border-radius: 50%;
    box-shadow: 0 18px 50px rgba(17, 24, 45, 0.16);
    font-size: 0.82rem;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
    transform: translate(-50%, -50%);
  }

  .map-marker {
    position: absolute;
    width: min(182px, 34%);
    padding: 12px;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #d8e3ef;
    border-radius: 8px;
    box-shadow: 0 14px 36px rgba(17, 24, 45, 0.08);
  }

  .map-marker.m1 { top: 4%; left: 6%; }
  .map-marker.m2 { top: 8%; right: 5%; }
  .map-marker.m3 { right: 7%; bottom: 3%; }
  .map-marker.m4 { bottom: 5%; left: 6%; }

  .care-panel {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 18px;
    min-height: 330px;
    align-items: stretch;
  }

  .care-gauge {
    position: relative;
    min-height: 282px;
    display: grid;
    place-items: center;
    background: #fff;
    border: 1px solid #d8e3ef;
    border-radius: 8px;
  }

  .care-gauge::before {
    content: "";
    width: min(220px, 74%);
    aspect-ratio: 1;
    border-radius: 50%;
    background:
      radial-gradient(circle, #fff 0 61%, transparent 62%),
      conic-gradient(var(--people-accent, #1f9d55) 0 82%, #d8e3ef 82% 100%);
    box-shadow: inset 0 0 0 1px #d8e3ef;
  }

  .care-gauge div {
    position: absolute;
    width: min(116px, 46%);
    text-align: center;
  }

  .care-gauge strong {
    display: block;
    color: #11182d;
    font-size: clamp(1.65rem, 3.2vw, 2.55rem);
    line-height: 1;
  }

  .care-gauge span {
    display: block;
    margin-top: 7px;
    color: #475569;
    font-size: 0.58rem;
    font-weight: 900;
    line-height: 1.25;
    text-transform: uppercase;
    overflow-wrap: normal;
  }

  .care-list {
    display: grid;
    gap: 12px;
  }

  .care-card {
    padding: 14px;
    background: rgba(255, 255, 255, 0.88);
    border: 1px solid #d8e3ef;
    border-left: 5px solid var(--people-accent, #1f9d55);
    border-radius: 8px;
  }

  @media (max-width: 760px) {
    min-height: auto;
    padding: 20px;

    .visual-header {
      display: grid;
      grid-template-columns: 1fr;
    }

    .visual-header span {
      max-width: none;
    }

    .visual-stage,
    .career-ladder,
    .network-board,
    .territory-map,
    .care-panel {
      min-height: auto;
    }

    .career-ladder,
    .care-panel {
      grid-template-columns: 1fr;
    }

    .career-ladder::before,
    .network-board svg,
    .territory-map svg {
      display: none;
    }

    .career-step,
    .network-node,
    .network-node.center,
    .map-core,
    .map-marker {
      position: static;
      width: auto;
      min-height: auto;
      transform: none;
    }

    .career-step em {
      display: none;
    }

    .network-board,
    .territory-map {
      display: grid;
      gap: 12px;
    }

    .map-core {
      width: auto;
      height: auto;
      padding: 22px;
      border-radius: 8px;
    }

    .care-gauge {
      min-height: 280px;
    }

    .visual-legend {
      grid-template-columns: 1fr;
    }
  }
`;

const TopicPoints = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 34px;
  border-top: 2px solid var(--people-accent, #fb7900);
  border-left: 1px solid #d8e3ef;

  article {
    min-width: 0;
    min-height: 170px;
    padding: 22px;
    background: #fff;
    border-right: 1px solid #d8e3ef;
    border-bottom: 1px solid #d8e3ef;
  }

  h3 {
    margin: 0 0 12px;
    color: #063e66;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: 0.95rem;
    line-height: 1.25;
    text-transform: uppercase;
    overflow-wrap: anywhere;
  }

  p {
    margin: 0;
    color: #475569;
    line-height: 1.6;
    overflow-wrap: anywhere;
  }

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

const TopicQuote = styled.aside`
  margin-top: 26px;
  padding: 22px 24px;
  color: #102a43;
  background: rgba(255, 255, 255, 0.88);
  border-left: 6px solid var(--people-accent, #fb7900);
  border-radius: 8px;
  box-shadow: 0 18px 46px rgba(17, 24, 45, 0.08);
  font-size: clamp(1rem, 1.45vw, 1.18rem);
  font-weight: 800;
  line-height: 1.5;
  overflow-wrap: anywhere;

  @media (max-width: 640px) {
    padding: 22px;
  }
`;

const TopicNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 0;

  a {
    min-height: 38px;
    padding: 0 14px;
    display: inline-flex;
    align-items: center;
    color: #063e66;
    border: 1px solid #d8e3ef;
    border-radius: 999px;
    background: #fff;
    font-size: 0.72rem;
    font-weight: 900;
    line-height: 1.2;
    text-decoration: none;
    text-transform: uppercase;
    white-space: normal;
  }

  a:hover {
    color: #fff;
    border-color: #fb7900;
    background: #fb7900;
  }
`;

const TopicFooterNav = styled.div`
  margin-top: 26px;
  padding: 18px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-top: 1px solid #d8e3ef;

  ${Actions} {
    margin-top: 0;
  }

  @media (max-width: 760px) {
    display: grid;
  }
`;

function renderTopicVisual(topic: PeopleTopicKey) {
  if (topic === 'carreira') {
    return (
      <TopicVisual>
        <div className="visual-header">
          <strong>Mapa de crescimento</strong>
          <span>Uma trilha visual do primeiro contato técnico à liderança em campo</span>
        </div>
        <div className="visual-stage career-ladder">
          <div className="career-step" style={{ '--lift': '0px' } as CSSProperties}>
            <em>01</em>
            <strong>Entrada</strong>
            <span>Aprendizado prático, leitura de processo e rotina de segurança.</span>
          </div>
          <div className="career-step" style={{ '--lift': '46px' } as CSSProperties}>
            <em>02</em>
            <strong>Ofício</strong>
            <span>Soldagem, montagem, caldeiraria e domínio de ferramentas.</span>
          </div>
          <div className="career-step" style={{ '--lift': '92px' } as CSSProperties}>
            <em>03</em>
            <strong>Especialização</strong>
            <span>Certificações, qualidade, documentação e autonomia técnica.</span>
          </div>
          <div className="career-step" style={{ '--lift': '138px' } as CSSProperties}>
            <em>04</em>
            <strong>Liderança</strong>
            <span>Coordenação de equipes, contratos críticos e atuação em campo.</span>
          </div>
        </div>
      </TopicVisual>
    );
  }

  if (topic === 'desenvolvimento') {
    return (
      <TopicVisual>
        <div className="visual-header">
          <strong>Rede de conhecimento</strong>
          <span>O aprendizado acontece quando as áreas deixam de trabalhar isoladas</span>
        </div>
        <div className="visual-stage network-board">
          <svg aria-hidden="true" viewBox="0 0 640 420" preserveAspectRatio="none">
            <line x1="320" y1="210" x2="145" y2="78" />
            <line x1="320" y1="210" x2="506" y2="92" />
            <line x1="320" y1="210" x2="500" y2="342" />
            <line x1="320" y1="210" x2="130" y2="342" />
          </svg>
          <div className="network-node center">
            <strong>Troca técnica</strong>
            <span>Experiência compartilhada em contratos reais.</span>
          </div>
          <div className="network-node n1">
            <strong>Engenharia</strong>
            <span>Projeto, desenho, planejamento e método.</span>
          </div>
          <div className="network-node n2">
            <strong>Produção</strong>
            <span>Prática, montagem, fabricação e acabamento.</span>
          </div>
          <div className="network-node n3">
            <strong>Qualidade</strong>
            <span>Procedimentos, inspeção e rastreabilidade.</span>
          </div>
          <div className="network-node n4">
            <strong>Campo</strong>
            <span>Aprendizado aplicado em operação e manutenção.</span>
          </div>
        </div>
      </TopicVisual>
    );
  }

  if (topic === 'comunidade') {
    return (
      <TopicVisual>
        <div className="visual-header">
          <strong>Mapa de vínculos</strong>
          <span>O impacto humano aparece no entorno da operação, não só dentro da fábrica</span>
        </div>
        <div className="visual-stage territory-map">
          <svg aria-hidden="true" viewBox="0 0 640 420" preserveAspectRatio="none">
            <path d="M320 210 C210 120, 155 95, 105 76" fill="none" />
            <path d="M320 210 C430 112, 495 90, 540 92" fill="none" />
            <path d="M320 210 C430 300, 480 334, 524 344" fill="none" />
            <path d="M320 210 C220 315, 155 340, 108 342" fill="none" />
          </svg>
          <div className="map-core">Vulcano</div>
          <div className="map-marker m1">
            <strong>Talentos locais</strong>
            <span>Entrada de profissionais da região nas rotinas industriais.</span>
          </div>
          <div className="map-marker m2">
            <strong>Famílias</strong>
            <span>Reconhecimento da vida que existe além do crachá.</span>
          </div>
          <div className="map-marker m3">
            <strong>Território</strong>
            <span>Relação responsável com o entorno das unidades.</span>
          </div>
          <div className="map-marker m4">
            <strong>Oportunidades</strong>
            <span>Geração de trabalho, aprendizado e continuidade.</span>
          </div>
        </div>
      </TopicVisual>
    );
  }

  return (
    <TopicVisual>
      <div className="visual-header">
        <strong>Painel de cuidado</strong>
        <span>Segurança, prevenção e respeito como indicadores vivos da operação</span>
      </div>
      <div className="visual-stage care-panel">
        <div className="care-gauge">
          <div>
            <strong>82%</strong>
            <span>prevenção antes da execução</span>
          </div>
        </div>
        <div className="care-list">
          <div className="care-card">
            <strong>Análise de risco</strong>
            <span>Condições avaliadas antes de cada etapa crítica.</span>
          </div>
          <div className="care-card">
            <strong>Comportamento seguro</strong>
            <span>Decisões diárias que protegem pessoas e contratos.</span>
          </div>
          <div className="care-card">
            <strong>Ambiente respeitoso</strong>
            <span>Relações profissionais com confiança, escuta e responsabilidade.</span>
          </div>
          <div className="care-card">
            <strong>Resposta rápida</strong>
            <span>Procedimentos claros para agir quando a operação exige atenção.</span>
          </div>
        </div>
      </div>
    </TopicVisual>
  );
}

export default function People() {
  const { topic } = useParams();

  if (topic && !(topic in peopleTopics)) {
    return <Navigate to="/pessoas" replace />;
  }

  if (!topic) {
    return (
      <>
        <Hero $image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2200&q=82">
          <Container>
            <Eyebrow>Pessoas</Eyebrow>
            <h1>Gente que aprende, cuida e transforma a indústria todos os dias.</h1>
            <p className="copy">
              Uma área dedicada a carreira, desenvolvimento, comunidade e cuidado, mostrando o lado humano por trás da
              operação metalúrgica.
            </p>
          </Container>
        </Hero>

        <PeopleSection>
          <Container>
            <PeopleIntro>
              <div>
                <Eyebrow>Fluxo humano</Eyebrow>
                <h2>Da entrada na fábrica ao crescimento em campo, pessoas sustentam cada entrega.</h2>
              </div>
              <p>
                A Vulcano é feita por trajetórias reais: equipes que aprendem com a prática, compartilham experiência,
                cuidam umas das outras e constroem vínculos com a comunidade.
              </p>
            </PeopleIntro>
            <PeopleCards>
              {overviewCards.map(([title, text, to]) => (
                <Link key={title} to={to}>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </Link>
              ))}
            </PeopleCards>
            <PeopleSystemMap>
              <div className="map-label">Mapa da experiência de pessoas</div>
              <div className="map-track">
                <div className="map-node" style={{ '--node-color': '#fb7900' } as CSSProperties}>
                  <strong>Carreira</strong>
                  <span>Entrada, prática, evolução técnica e liderança.</span>
                </div>
                <div className="map-node" style={{ '--node-color': '#0f6f8f' } as CSSProperties}>
                  <strong>Desenvolvimento</strong>
                  <span>Conhecimento circulando entre áreas e contratos.</span>
                </div>
                <div className="map-node" style={{ '--node-color': '#8a5a2b' } as CSSProperties}>
                  <strong>Comunidade</strong>
                  <span>Vínculos locais, famílias e território.</span>
                </div>
                <div className="map-node" style={{ '--node-color': '#1f9d55' } as CSSProperties}>
                  <strong>We Care</strong>
                  <span>Prevenção, segurança e respeito todos os dias.</span>
                </div>
              </div>
            </PeopleSystemMap>
          </Container>
        </PeopleSection>
      </>
    );
  }

  const page = peopleTopics[topic as keyof typeof peopleTopics];
  const topicKey = topic as PeopleTopicKey;

  return (
    <>
      <Hero $image={page.image}>
        <Container>
          <Eyebrow>{page.eyebrow}</Eyebrow>
          <h1>{page.title}</h1>
          <p className="copy">{page.summary}</p>
        </Container>
      </Hero>

      <PeopleSection
        style={{
          '--people-accent': page.accent,
          '--people-bg': `${page.accent}10`,
        } as CSSProperties}
      >
        <Container>
          <TopicExperience>
            <TopicContent>
              <TopicBadge>{page.badge}</TopicBadge>
              <Eyebrow>Pessoas</Eyebrow>
              <h2>{page.title}</h2>
              <p>{page.summary}</p>
              <TopicQuote>{page.quote}</TopicQuote>
            </TopicContent>
            {renderTopicVisual(topicKey)}
          </TopicExperience>
          <TopicPoints>
            {page.points.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </TopicPoints>
          <TopicFooterNav>
            <Actions><Button as={Link} to="/contato">Fale com a Vulcano</Button></Actions>
            <TopicNav aria-label="Outras páginas de pessoas">
              {overviewCards.map(([title, , to]) => <Link key={title} to={to}>{title}</Link>)}
            </TopicNav>
          </TopicFooterNav>
        </Container>
      </PeopleSection>
    </>
  );
}

