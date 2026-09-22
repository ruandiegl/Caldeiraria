import styled from 'styled-components';
import { EditorialMedia } from '../../components/brand/EditorialMedia';
import { Container } from '../siteStyles';

export const HomePage = styled.div`
  overflow: hidden;
  background: #f8fafc;
`;

export const HeroSection = styled.section`
  position: relative;
  min-height: 100svh;
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
`;

export const LightTextLink = styled(TextLink)`
  color: #fff;
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
  padding: clamp(72px, 10vw, 136px) 0;
  background: #fff;
`;

export const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 48px;
  margin-top: 54px;
  border-top: 1px solid #d8e3ef;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const SolutionLink = styled.a`
  min-height: 150px;
  padding: 24px 0;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 22px;
  align-content: start;
  border-bottom: 1px solid #d8e3ef;
  color: #11182d;
  text-decoration: none;
  transition: color 180ms ease, padding 180ms ease;

  &::before {
    content: '→';
    color: #fb7900;
    font-size: 1.3rem;
    transition: transform 180ms ease;
  }

  &:hover {
    padding-left: 8px;
    color: #063e66;
  }

  &:hover::before {
    transform: translateX(4px);
  }

  strong {
    display: block;
    font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif;
    font-size: clamp(1.8rem, 3.5vw, 3.3rem);
    font-weight: 600;
    line-height: 0.94;
  }

  span {
    display: block;
    max-width: 300px;
    margin-top: 10px;
    color: #64748b;
    font-size: 0.9rem;
    line-height: 1.5;
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
