import styled from 'styled-components';
import { Container, Section } from '../siteStyles';

export const TopicHero = styled.section.attrs({ className: 'reveal' })`
  display: flex;
  align-items: flex-end;
  min-height: clamp(310px, 43vh, 490px);
  padding: 110px 0 64px;
  color: #fff;
  background:
    linear-gradient(118deg, #11182d 0%, #063e66 72%, #184967 100%);

  h1 {
    margin: 0;
    font-family: var(--font-condensed, "IBM Plex Sans Condensed", sans-serif);
    font-size: clamp(3.1rem, 7vw, 6rem);
    line-height: .94;
    letter-spacing: -.035em;
  }
  .eyebrow {
    color: #ffb26e;
    font-size: .75rem;
    font-weight: 800;
    letter-spacing: .14em;
    text-transform: uppercase;
  }
  .copy {
    max-width: 64ch;
    margin: 1.3rem 0 0;
    color: rgba(255,255,255,.82);
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    line-height: 1.6;
  }
`;

export const CompanyIndexGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1px;
  margin-top: 2rem;
  background: #d5dce5;
  border: 1px solid #d5dce5;
  @media (max-width: 680px) { grid-template-columns: 1fr; }
`;

export const CompanyIndexLink = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: .6rem;
  min-height: 196px;
  padding: clamp(1.25rem, 3vw, 2rem);
  background: #fff;
  color: #334155;
  text-decoration: none;
  transition: background .2s ease;
  &:hover { background: #f4f7fb; }
  &:focus-visible { outline: 3px solid #fb7900; outline-offset: -3px; }
  .number { color: #a84d00; font-size: .75rem; font-weight: 800; letter-spacing: .16em; }
  strong { color: #063e66; font-family: var(--font-condensed, "IBM Plex Sans Condensed", sans-serif); font-size: clamp(1.8rem, 3vw, 2.45rem); line-height: 1.1; }
  .arrow { position: absolute; right: 1.5rem; top: 1.5rem; font-size: 1.5rem; color: #fb7900; }
`;

export const CompanySubnavBar = styled.nav`
  background: #f4f7fb;
  border-bottom: 1px solid #e2e8f0;
  padding-block: .75rem;
  .overview { display: inline-block; margin-bottom: .5rem; color: #063e66; font-size: .82rem; font-weight: 700; text-underline-offset: 3px; }
  .topic-links { display: flex; flex-wrap: wrap; gap: .35rem 1.2rem; }
  .topic-links a { color: #475569; font-size: .86rem; font-weight: 600; text-decoration: none; padding: .2rem .1rem; border-bottom: 2px solid transparent; }
  .topic-links a:hover, .topic-links a[aria-current="page"] { color: #063e66; border-color: #fb7900; }
  a:focus-visible { outline: 2px solid #fb7900; outline-offset: 2px; }
`;

export const TopicLead = styled.div`
  max-width: 800px;
  padding-block: clamp(2rem, 5vw, 4rem);
  h2 {
    margin: 0 0 1.5rem;
    color: #063e66;
    font-family: var(--font-condensed, "IBM Plex Sans Condensed", sans-serif);
    font-size: clamp(2rem, 4vw, 3.4rem);
    line-height: 1.06;
  }
  p { max-width: 72ch; color: #334155; font-size: 1.02rem; line-height: 1.75; }
  a { display: inline-block; margin-top: 1rem; color: #063e66; font-weight: 700; text-underline-offset: 4px; }
  a:focus-visible { outline: 2px solid #fb7900; outline-offset: 4px; }
`;

export const CompanyContainer = styled(Container)`
  /* Herda container global com largura padrão de 1062px */
`;

export const EditorialSection = styled(Section)<{ $dark?: boolean }>`
  background: ${({ $dark }) => ($dark ? '#11182d' : 'transparent')};
  color: ${({ $dark }) => ($dark ? '#ffffff' : 'inherit')};
  position: relative;
`;

/* ==========================================================================
   CARROSSEL / LINHA DO TEMPO
   ========================================================================== */

export const CarouselWrapper = styled.div`
  margin-top: 40px;
  position: relative;
`;

export const CarouselStage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 40px;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(17, 24, 45, 0.05);

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const SlideMedia = styled.figure`
  margin: 0;
  position: relative;
  min-height: 380px;
  background: #11182d;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    min-height: 380px;
    object-fit: cover;
    display: block;
    filter: grayscale(0.2) contrast(1.04);
    transition: transform 700ms cubic-bezier(0.2, 0.72, 0.24, 1);
  }

  figcaption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: .55rem .8rem;
    color: #fff;
    background: rgba(17, 24, 45, .88);
    font-size: .7rem;
    line-height: 1.4;
  }

  &:hover img {
    transform: scale(1.03);
  }

  @media (prefers-reduced-motion: reduce) {
    img { transition: none; }
    &:hover img { transform: none; }
  }

  @media (max-width: 860px) {
    min-height: 240px;
    img {
      min-height: 240px;
      max-height: 280px;
    }
  }
`;

export const SlideContent = styled.article`
  padding: 40px 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 860px) {
    padding: 28px 22px;
  }
`;

export const SlideMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

export const SlideMarker = styled.span`
  color: #a84d00;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const SlideLabel = styled.span`
  color: #64748b;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: #f1f5f9;
  padding: 2px 8px;
  border-radius: 2px;
`;

export const SlideTitle = styled.h3`
  margin: 0 0 16px;
  color: #063e66;
  font-family: var(--font-condensed, "IBM Plex Sans Condensed", Arial, sans-serif);
  font-size: clamp(1.6rem, 2.8vw, 2.2rem);
  line-height: 1.15;
  font-weight: 700;
  text-transform: uppercase;
`;

export const SlideSummary = styled.p`
  margin: 0 0 24px;
  color: #334155;
  font-size: 1.02rem;
  line-height: 1.7;
`;

export const SlideActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

export const ChapterJumpLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #063e66;
  font-size: 0.92rem;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 4px;
  cursor: pointer;
  transition: color 150ms ease;

  &:hover {
    color: #063e66;
  }
`;

/* Trilho de navegação */
export const CarouselTrackArea = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TimelineTrack = styled.div<{ $progress: number; $steps: number; $dragging: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: repeat(${({ $steps }) => $steps}, minmax(0, 1fr));
  padding-top: 4px;
  cursor: ${({ $dragging }) => ($dragging ? 'grabbing' : 'grab')};
  user-select: none;
  touch-action: pan-y;
  --step: calc(100% / ${({ $steps }) => $steps});
  --marker-center: calc(var(--step) / 2);
  --rail-width: calc(100% - var(--step));

  /* Linha cinza de fundo */
  &::before {
    content: "";
    position: absolute;
    top: 14px;
    left: var(--marker-center);
    width: var(--rail-width);
    height: 2px;
    background: #e2e8f0;
  }

  /* Linha laranja de progresso */
  &::after {
    content: "";
    position: absolute;
    top: 14px;
    left: var(--marker-center);
    width: calc(var(--rail-width) * ${({ $progress }) => $progress / 100});
    height: 2px;
    background: #fb7900;
    transition: width 320ms cubic-bezier(0.2, 0.72, 0.24, 1);
  }

  @media (prefers-reduced-motion: reduce) {
    &::after { transition: none; }
  }
`;

export const TimelineMarker = styled.button<{ $active: boolean }>`
  position: relative;
  z-index: 1;
  min-width: 0;
  padding: 0 4px;
  color: ${({ $active }) => ($active ? '#063e66' : '#64748b')};
  background: transparent;
  border: 0;
  appearance: none;
  touch-action: manipulation;
  cursor: pointer;
  text-align: center;
  transition: color 180ms ease;

  &::before {
    content: "";
    display: block;
    width: 22px;
    height: 22px;
    margin: 3px auto 12px;
    border: 2px solid ${({ $active }) => ($active ? '#fb7900' : '#cbd5e1')};
    border-radius: 50%;
    background: ${({ $active }) => ($active ? '#fb7900' : '#ffffff')};
    box-shadow: 0 0 0 4px #ffffff;
    transition: background 180ms ease, border-color 180ms ease, transform 180ms ease;
  }

  &:hover::before {
    transform: scale(1.15);
    border-color: #fb7900;
  }

  &:focus-visible {
    outline: 2px solid #fb7900;
    outline-offset: 4px;
    border-radius: 4px;
  }

  &[aria-current="true"]::before {
    transform: scale(1.18);
    box-shadow: 0 0 0 5px rgba(251, 121, 0, 0.18), 0 0 0 2px #ffffff;
  }

  strong {
    display: block;
    font-family: var(--font-condensed, "IBM Plex Sans Condensed", Arial, sans-serif);
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1;
    color: ${({ $active }) => ($active ? '#063e66' : '#475569')};
  }

  span {
    display: block;
    margin-top: 6px;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  @media (max-width: 640px) {
    &::before {
      width: 18px;
      height: 18px;
      margin-bottom: 8px;
      box-shadow: 0 0 0 3px #ffffff;
    }

    strong {
      font-size: 0.95rem;
    }

    span {
      max-width: 62px;
      margin-inline: auto;
      font-size: 7px;
      line-height: 1.15;
    }
  }
`;

export const CarouselNavRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

export const CarouselCounter = styled.span`
  color: #64748b;
  font-size: 0.88rem;
  font-weight: 600;
`;

export const CarouselNavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

/* ==========================================================================
   LEITURA COMPLETA / LONG-FORM
   ========================================================================== */

export const LongformContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin-top: 48px;

  @media (max-width: 640px) {
    gap: 56px;
    margin-top: 36px;
  }
`;

export const Chapter = styled.article`
  scroll-margin-top: 96px;
  position: relative;
`;

export const ChapterHeader = styled.header`
  margin-bottom: 24px;
`;

export const ChapterEyebrow = styled.p`
  margin: 0 0 8px;
  color: #a84d00;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export const ChapterTitle = styled.h2`
  margin: 0;
  color: #063e66;
  font-family: var(--font-condensed, "IBM Plex Sans Condensed", Arial, sans-serif);
  font-size: clamp(1.75rem, 3.2vw, 2.5rem);
  line-height: 1.15;
  font-weight: 700;
  text-transform: uppercase;
`;

export const ProseWrapper = styled.div`
  color: #334155;
  font-size: 1.02rem;
  line-height: 1.8;
  max-width: 860px;

  p {
    margin: 0 0 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: #11182d;
    font-weight: 700;
  }
`;

/* Grade de capacidades estruturais */
export const CapabilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-top: 28px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const CapabilityCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-top: 3px solid #063e66;
  padding: 24px;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(17, 24, 45, 0.03);

  h3 {
    margin: 0 0 10px;
    color: #063e66;
    font-size: 1.05rem;
    font-weight: 700;
  }

  p {
    margin: 0;
    color: #475569;
    font-size: 0.94rem;
    line-height: 1.6;
  }
`;

/* Pilares ESG / Identidade */
export const PillarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 28px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;

export const PillarCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 28px;
  box-shadow: 0 2px 8px rgba(17, 24, 45, 0.03);

  h3 {
    margin: 0 0 14px;
    color: #063e66;
    font-size: 1.15rem;
    font-weight: 700;
  }

  p {
    margin: 0 0 16px;
    color: #334155;
    font-size: 0.95rem;
    line-height: 1.65;
  }

  ul {
    margin: 0;
    padding-left: 20px;
    color: #475569;
    font-size: 0.92rem;
    line-height: 1.6;

    li {
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

/* Disclosure / Accordion técnico */
export const AccordionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
`;

export const DisclosureDetails = styled.details`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
  transition: border-color 150ms ease;

  &[open] {
    border-color: #cbd5e1;
    box-shadow: 0 4px 14px rgba(17, 24, 45, 0.04);
  }
`;

export const DisclosureSummary = styled.summary`
  padding: 18px 24px;
  font-weight: 700;
  font-size: 1.05rem;
  color: #063e66;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  user-select: none;
  transition: background-color 150ms ease;

  &::-webkit-details-marker {
    display: none;
  }

  &:hover {
    background-color: #f8fafc;
  }

  &:focus-visible {
    outline: 2px solid #fb7900;
    outline-offset: -2px;
  }

  /* Ícone customizado de chevron */
  &::after {
    content: "+";
    font-size: 1.35rem;
    font-weight: 400;
    color: #fb7900;
    transition: transform 200ms ease;
    margin-left: 16px;
  }

  details[open] &::after {
    content: "−";
    transform: rotate(180deg);
  }
`;

export const DisclosureContent = styled.div`
  padding: 0 24px 24px;
  color: #334155;
  font-size: 0.96rem;
  line-height: 1.75;
  border-top: 1px solid #f1f5f9;
  padding-top: 16px;
`;

/* Badges e notas editoriais */
export const EditorialBadge = styled.span<{ $variant?: 'active' | 'transition' | 'pending' }>`
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 2px;
  margin-top: 8px;
  margin-right: 8px;
  background: ${({ $variant }) =>
    $variant === 'active'
      ? 'rgba(16, 185, 129, 0.12)'
      : $variant === 'transition'
      ? 'rgba(251, 121, 0, 0.12)'
      : 'rgba(100, 116, 139, 0.12)'};
  color: ${({ $variant }) =>
    $variant === 'active'
      ? '#047857'
      : $variant === 'transition'
      ? '#c2410c'
      : '#475569'};
  border: 1px solid
    ${({ $variant }) =>
      $variant === 'active'
        ? 'rgba(16, 185, 129, 0.28)'
        : $variant === 'transition'
        ? 'rgba(251, 121, 0, 0.28)'
        : 'rgba(100, 116, 139, 0.24)'};
`;

/* Contatos estruturados */
export const ContactCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-top: 24px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const ContactCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 24px;

  h3 {
    margin: 0 0 10px;
    color: #063e66;
    font-size: 1.05rem;
    font-weight: 700;
  }

  p {
    margin: 0;
    color: #475569;
    font-size: 0.94rem;
    line-height: 1.6;
  }
`;
