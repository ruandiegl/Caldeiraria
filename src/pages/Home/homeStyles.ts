import styled from 'styled-components';
import { EditorialMedia } from '../../components/brand/EditorialMedia';
import { Container } from '../siteStyles';

export const HomePage = styled.div`
  overflow: hidden;
  background: #fff;
`;

export const HomePhotoSection = styled.section`
  padding: calc(68px + 24px) 0 0;
  background: #fff;

  figure { margin: 0; }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (max-width: 640px) { padding-top: calc(64px + 14px); }
`;

export const HomePhotoContainer = styled.div`
  width: min(1360px, calc(100% - 64px));
  margin: 0 auto;

  @media (max-width: 640px) { width: calc(100% - 40px); }
`;

export const HomePhotoFrame = styled.div<{ $failed: boolean }>`
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 1;
  min-height: 240px;
  overflow: hidden;
  background: ${({ $failed }) => ($failed ? '#dce5ec' : '#102a43')};
  border: 1px solid #d8e3ef;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center 48%;
  }

  .photo-fallback {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    color: #475569;
    background: linear-gradient(135deg, #edf2f6, #dce5ec);
    font-size: 0.9rem;
  }

  .preview-badge {
    position: absolute;
    right: 16px;
    bottom: 16px;
    max-width: calc(100% - 32px);
    padding: 8px 12px;
    color: #fff;
    background: rgba(17, 24, 45, 0.78);
    border-left: 3px solid #fb7900;
    font-size: 0.7rem;
    font-weight: 700;
    line-height: 1.4;
  }

  @media (max-width: 640px) {
    aspect-ratio: 16 / 7;
    min-height: 0;
    .preview-badge { right: 10px; bottom: 10px; font-size: 0.65rem; }
  }
`;

export const SegmentOverviewSection = styled.section`
  padding: clamp(40px, 3vw, 48px) 0 clamp(64px, 8vw, 104px);
  background: #fff;
`;

export const SegmentOverviewContainer = styled(Container)`
  width: min(1120px, calc(100% - 40px));

  @media (max-width: 640px) {
    width: calc(100% - 40px);
  }
`;

export const SegmentOverviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: clamp(28px, 4vw, 48px);

  @media (max-width: 680px) { grid-template-columns: 1fr; }
`;

export const SegmentOverviewLink = styled.a`
  min-width: 0;
  min-height: 150px;
  padding: 19px 22px 23px 30px;
  position: relative;
  display: block;
  border-top: 1px solid #d8e3ef;
  color: inherit;
  text-decoration: none;
  transition: background 160ms ease, padding-left 160ms ease;

  &::before {
    content: '→';
    position: absolute;
    top: 23px;
    left: 0;
    color: #fb7900;
    font-size: 1.15rem;
  }

  &:hover { padding-left: 35px; background: #fbfcfe; }
  &:focus-visible { outline: 3px solid #fb7900; outline-offset: 2px; }

  h2 {
    margin: 0;
    color: #11182d;
    font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif;
    font-size: clamp(1.65rem, 3.1vw, 2.65rem);
    font-weight: 600;
    line-height: 1.04;
    overflow-wrap: anywhere;
  }

  p {
    max-width: 56ch;
    margin: 9px 0 0;
    color: #64748b;
    font-size: 0.9rem;
    line-height: 1.55;
  }

  @media (max-width: 680px) {
    min-height: 0;
    padding: 20px 10px 22px 30px;
    &:hover { padding-left: 34px; }
    h2 { font-size: clamp(1.55rem, 7vw, 2.1rem); }
  }
`;

export const HeroSection = styled.section`
  position: relative;
  min-height: min(78svh, 760px);
  padding: 104px 0 48px;
  display: flex;
  align-items: center;
  color: #fff;
  background:
    radial-gradient(circle at 76% 24%, rgba(255, 132, 36, 0.22), transparent 28%),
    linear-gradient(130deg, #11182d 0%, #063e66 58%, #102a43 100%);

  &::after {
    content: '';
    position: absolute;
    right: -14vw;
    bottom: -32%;
    width: 58vw;
    height: 58vw;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 50%;
    pointer-events: none;
  }

  @media (max-width: 760px) {
    min-height: auto;
    padding: 116px 0 56px;
  }
`;

export const HeroContainer = styled(Container)`
  position: relative;
  z-index: 1;
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
  gap: clamp(34px, 5vw, 72px);
  align-items: center;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroCopy = styled.div`
  max-width: 610px;

  h1 {
    max-width: 600px;
    margin: 0;
    font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif;
    font-size: clamp(3.2rem, 5.2vw, 5.8rem);
    font-weight: 600;
    line-height: 0.89;
    letter-spacing: -0.045em;
  }

  p {
    max-width: 510px;
    margin: 24px 0 0;
    color: rgba(255, 255, 255, 0.78);
    font-size: clamp(1rem, 1.8vw, 1.22rem);
    line-height: 1.64;
  }

  @media (max-width: 560px) {
    h1 {
      font-size: clamp(3.2rem, 16vw, 5.2rem);
    }
  }
`;

export const HeroLabel = styled.p`
  margin: 0 0 18px !important;
  color: #ffb26e !important;
  font-size: 0.72rem !important;
  font-weight: 800;
  letter-spacing: 0.16em;
  line-height: 1.2 !important;
  text-transform: uppercase;
`;

export const HeroMedia = styled(EditorialMedia)`
  max-width: 470px;
  margin: 0 0 0 auto;

  ${'> div'} {
    min-height: clamp(320px, 48vh, 430px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 0.5rem 0.5rem 0 0.5rem;
  }

  figcaption {
    color: rgba(255, 255, 255, 0.64);
  }

  @media (max-width: 820px) {
    max-width: none;
    margin: 0;

    ${'> div'} {
      min-height: 330px;
    }
  }
`;

export const IntroSection = styled.section`
  padding: clamp(72px, 10vw, 136px) 0;
  background: #fff;
`;

export const IntroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
  gap: clamp(36px, 8vw, 112px);
  align-items: center;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const LegacyMedia = styled(EditorialMedia)`
  margin: 0;

  ${'> div'} {
    min-height: 520px;
  }

  @media (max-width: 820px) {
    ${'> div'} {
      min-height: 350px;
    }
  }
`;

export const TextLink = styled.a`
  display: inline-flex;
  margin-top: 28px;
  color: #063e66;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;

  &::after {
    content: '↗';
    margin-left: 9px;
    color: #fb7900;
    transition: transform 180ms ease;
  }

  &:hover::after {
    transform: translate(3px, -3px);
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 6px;
  }
`;

export const LightTextLink = styled(TextLink)`
  color: #fff;
`;

export const IdentityBand = styled.section`
  padding: clamp(72px, 10vw, 124px) 0;
  background: #e7f0f4;
`;

export const IdentityGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(36px, 7vw, 100px);
  align-items: center;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const IdentityStatement = styled.div`
  padding: clamp(32px, 5vw, 64px);
  color: #fff;
  background: #063e66;
  box-shadow: -12px 12px 0 #fb7900;

  h2 {
    margin: 0;
    font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif;
    font-size: clamp(3.3rem, 6vw, 6.2rem);
    font-weight: 600;
    line-height: 0.91;
    letter-spacing: -0.04em;
  }

  p {
    max-width: 36ch;
    margin: 24px 0 0;
    color: rgba(255, 255, 255, 0.82);
    line-height: 1.65;
  }
`;

export const TeaserEyebrow = styled.p`
  margin: 0 0 22px !important;
  color: #fb7900 !important;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.13em;
  line-height: 1.3;
  text-transform: uppercase;
`;

export const IdentityValues = styled.div`
  display: grid;
  gap: 0;

  article {
    padding: 20px 0;
    border-bottom: 1px solid #b8ced8;
  }

  article:first-child {
    border-top: 1px solid #b8ced8;
  }

  strong {
    display: block;
    color: #063e66;
    font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif;
    font-size: 1.55rem;
    line-height: 1.1;
  }

  span {
    display: block;
    margin-top: 6px;
    color: #465c6c;
    line-height: 1.5;
  }
`;

export const EsgBand = styled.section`
  padding: clamp(72px, 10vw, 124px) 0;
  background: #e7f0f4;
`;

export const EsgGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: clamp(36px, 7vw, 100px);
  align-items: center;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const EsgPillars = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;

  article {
    min-height: 216px;
    padding: 26px 20px;
    background: #fff;
    border-top: 5px solid #fb7900;
  }

  strong {
    display: block;
    color: #063e66;
    font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif;
    font-size: clamp(1.45rem, 2vw, 2rem);
  }

  span {
    display: block;
    margin-top: 14px;
    color: #465c6c;
    font-size: 0.9rem;
    line-height: 1.55;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;

    article {
      min-height: auto;
    }
  }
`;

export const WorkSection = styled.section`
  padding: clamp(72px, 10vw, 136px) 0;
  background: #f4f7fb;
`;

export const WorkIntro = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 0.5fr);
  gap: 42px;
  align-items: end;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const WorkNote = styled.p`
  max-width: 360px;
  margin: 0;
  color: #64748b;
  line-height: 1.65;
`;

export const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.92fr 0.82fr;
  gap: 16px;
  margin-top: 48px;

  figure:nth-child(2) {
    margin-top: 54px;
  }

  figure:nth-child(3) {
    margin-top: 108px;
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr 1fr;

    figure:nth-child(2),
    figure:nth-child(3) {
      margin-top: 0;
    }

    figure:first-child {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const MetricsSection = styled.section`
  padding: clamp(72px, 10vw, 128px) 0;
  color: #fff;
  background: #11182d;
`;

export const MetricsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: end;

  p {
    max-width: 300px;
    margin: 0;
    color: rgba(255, 255, 255, 0.64);
    line-height: 1.6;
  }

  @media (max-width: 700px) {
    display: grid;
  }
`;

export const MetricGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1px;
  margin-top: 52px;
  background: rgba(255, 255, 255, 0.2);

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const SolutionsSection = styled.section`
  position: relative;
  padding: clamp(56px, 7vw, 88px) 0;
  overflow: hidden;
  color: #11182d;
  background: #f4f7fb;

  &::before {
    content: '';
    position: absolute;
    inset: 24px auto 24px 24px;
    width: 46px;
    border-left: 1px solid #cbd9eb;
    border-top: 1px solid #cbd9eb;
    border-bottom: 1px solid #cbd9eb;
    pointer-events: none;
  }

  @media (max-width: 650px) {
    &::before { display: none; }
  }
`;

export const SolutionsLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(420px, 0.9fr);
  gap: clamp(32px, 4vw, 64px);
  align-items: center;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

export const SolutionsCopy = styled.div`
  max-width: 600px;

  @media (max-width: 1050px) {
    max-width: 690px;
  }
`;

export const SolutionSpotlight = styled.div`
  min-height: 114px;
  max-width: 460px;
  margin-top: clamp(24px, 2.5vw, 40px);
  padding: 18px 0 0 22px;
  border-left: 2px solid #ff9a3d;

  > span {
    display: block;
    margin-bottom: 9px;
    color: #a84d00;
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  strong {
    display: block;
    font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif;
    font-size: clamp(1.45rem, 2.7vw, 2rem);
    font-weight: 600;
    line-height: 1;
    color: #11182d;
  }

  p {
    max-width: 36ch;
    margin: 8px 0 0;
    color: #475569;
    font-size: 0.88rem;
    line-height: 1.5;
  }
`;

export const SolutionsGrid = styled.div`
  --hex-size: clamp(124px, 11vw, 145px);
  display: grid;
  width: calc(var(--hex-size) * 3.5);
  max-width: 100%;
  grid-template-columns: repeat(3, var(--hex-size));
  grid-auto-rows: calc(var(--hex-size) * 0.80214);
  gap: 0px;
  justify-content: start;
  padding-bottom: calc(var(--hex-size) * 0.26738);

  > :nth-child(n + 4) {
    left: calc(var(--hex-size) / 2);
  }

  @media (max-width: 1050px) {
    margin-inline: auto;
  }

  @media (max-width: 650px) {
    --hex-size: clamp(116px, 35vw, 146px);
    width: calc(var(--hex-size) * 2.5);
    grid-template-columns: repeat(2, var(--hex-size));

    > :nth-child(n + 4) { left: 0; }
    > :nth-child(3),
    > :nth-child(4) { left: calc(var(--hex-size) / 2); }
  }
`;

export const SolutionLink = styled.a`
  --hex-start: #3478f6;
  --hex-end: #2258d1;
  --hex-hover-start: #4d8eff;
  --hex-hover-end: #2a64e8;
  --hex-icon: #c9ecff;
  --hex-focus: #ffbd83;
  position: relative;
  z-index: 0;
  width: var(--hex-size);
  height: calc(var(--hex-size) / 0.935);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 26px 18px;
  color: #fff;
  text-decoration: none;
  text-align: center;
  transform: scale(1);
  transition: transform 280ms cubic-bezier(0.2, 0.72, 0.24, 1), filter 280ms ease;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: -1px;
    background: linear-gradient(145deg, var(--hex-start), var(--hex-end) 75%);
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
    transition: background 280ms ease;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -2;
    inset: -6px;
    background: var(--hex-focus);
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
    opacity: 0;
  }

  &:hover,
  &:focus-visible {
    z-index: 2;
    transform: scale(1.12);
    filter: drop-shadow(0 18px 24px rgba(4, 18, 50, 0.38));
  }

  &:hover::before,
  &:focus-visible::before {
    background: linear-gradient(145deg, var(--hex-hover-start), var(--hex-hover-end) 75%);
  }

  &:focus-visible {
    outline: none;
  }

  &:focus-visible::after {
    opacity: 1;
  }

  svg {
    width: 34px;
    height: 34px;
    color: var(--hex-icon);
    flex: none;
  }

  strong {
    display: block;
    max-width: 12ch;
    font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif;
    font-size: clamp(0.95rem, 1.6vw, 1.2rem);
    font-weight: 600;
    line-height: 1.13;
  }

  &[data-tone='offshore'] {
    --hex-start: #ff3d43;
    --hex-end: #d71928;
    --hex-hover-start: #ff5b5f;
    --hex-hover-end: #e22432;
    --hex-icon: #ffe4e6;
  }

  &[data-tone='linha-amarela'] {
    --hex-start: #ffdc2e;
    --hex-end: #edba00;
    --hex-hover-start: #ffe65e;
    --hex-hover-end: #f6c513;
    --hex-icon: #16385b;
    --hex-focus: #16385b;
    color: #17243d;
  }

  @media (max-width: 650px) {
    gap: 6px;
    padding: 12px 8px;

    svg {
      width: 27px;
      height: 27px;
    }

    strong {
      font-size: clamp(0.78rem, 3.3vw, 0.98rem);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &::before { transition: none; }
    &:hover,
    &:focus-visible { transform: none; }
  }
`;

export const CultureSection = styled.section`
  padding: clamp(72px, 10vw, 136px) 0;
  color: #fff;
  background: #063e66;
`;

export const CultureGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.75fr);
  gap: 72px;
  align-items: end;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const CredentialList = styled.div`
  display: grid;
  gap: 12px;
`;

export const Credential = styled.article`
  padding: 18px 20px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(17, 24, 45, 0.18);

  strong {
    display: block;
    color: #ffb26e;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  span {
    display: block;
    margin-top: 8px;
    color: #fff;
    font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif;
    font-size: 1.8rem;
  }
`;

export const CareersSection = styled.section`
  padding: clamp(72px, 10vw, 136px) 0;
  background: #fb7900;

  p:first-child {
    color: #11182d;
  }

  a {
    color: #fff;
    background: #11182d;
    border-color: #11182d;
  }

  a:hover {
    color: #fff;
    background: #063e66;
    border-color: #063e66;
  }
`;

export const CareersGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 0.62fr);
  gap: 64px;
  align-items: end;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const CareersNote = styled.p`
  max-width: 300px;
  margin: 0;
  color: #11182d;
  font-size: 1.05rem;
  line-height: 1.55;
`;

export const ContactSection = styled.section`
  padding: clamp(72px, 10vw, 116px) 0;
  color: #fff;
  background: #11182d;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 40px;
  align-items: end;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
