import styled from 'styled-components';

export const SegmentIntro = styled.section`
  padding: clamp(64px, 9vw, 112px) 0 54px;
  background: #f4f7fb;
  border-bottom: 1px solid #d8e3ef;

  .eyebrow {
    margin: 0 0 14px;
    color: #e76b00;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  h1 {
    max-width: 900px;
    margin: 0;
    color: #11182d;
    font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif;
    font-size: clamp(2.7rem, 7vw, 5.5rem);
    font-weight: 600;
    line-height: 0.98;
  }

  .copy {
    max-width: 700px;
    margin: 22px 0 0;
    color: #475569;
    font-size: clamp(1rem, 1.5vw, 1.16rem);
    line-height: 1.7;
  }
`;

export const SegmentIndexList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid #cbd5e1;
  border-left: 1px solid #cbd5e1;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const SegmentIndexLink = styled.a`
  position: relative;
  min-width: 0;
  min-height: 188px;
  padding: 25px 30px 27px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-right: 1px solid #cbd5e1;
  border-bottom: 1px solid #cbd5e1;
  color: inherit;
  background: #fff;
  text-decoration: none;
  transition: background 180ms ease, box-shadow 180ms ease;

  &:hover {
    background: #f8fafc;
    box-shadow: inset 3px 0 #f58220;
  }

  &:focus-visible {
    z-index: 1;
    outline: 3px solid #f58220;
    outline-offset: -3px;
  }

  .index {
    color: #e76b00;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.12em;
  }

  strong {
    max-width: 94%;
    margin-top: 11px;
    color: #11182d;
    font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif;
    font-size: clamp(1.55rem, 3vw, 2.15rem);
    font-weight: 600;
    line-height: 1.08;
  }

  .summary {
    max-width: 620px;
    margin-top: 12px;
    color: #53657b;
    font-size: 0.92rem;
    line-height: 1.6;
  }

  .arrow {
    position: absolute;
    top: 24px;
    right: 24px;
    color: #e76b00;
    font-size: 1.2rem;
  }
`;

export const SegmentReading = styled.section`
  padding: clamp(56px, 8vw, 92px) 0;
  background: #fff;

  .segment-lead {
    max-width: 850px;
    margin: 0 auto 58px;
    padding: 0 0 0 24px;
    border-left: 3px solid #f58220;
  }

  .segment-lead h2 {
    margin: 0;
    color: #123d61;
    font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif;
    font-size: clamp(1.35rem, 2.4vw, 1.9rem);
    line-height: 1.18;
  }

  .segment-lead p,
  .segment-block p {
    color: #4b5c70;
    font-size: 1rem;
    line-height: 1.78;
  }

  .segment-block {
    padding: 34px 0 38px;
    border-top: 1px solid #d8e3ef;
    scroll-margin-top: 110px;
  }

  .segment-block h2 {
    max-width: 850px;
    margin: 0;
    color: #11182d;
    font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif;
    font-size: clamp(1.8rem, 4vw, 3rem);
    font-weight: 600;
    line-height: 1.04;
  }

  .segment-block ul {
    max-width: 920px;
    margin: 20px 0;
    padding-left: 1.3rem;
    color: #4b5c70;
  }

  .segment-block li {
    padding: 5px 0 5px 5px;
    line-height: 1.65;
  }

  .segment-block li::marker {
    color: #f58220;
  }

  @media (max-width: 640px) {
    .segment-lead { margin-bottom: 38px; padding-left: 16px; }
    .segment-block { padding: 27px 0 30px; }
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid #cbd5e1;
  border-left: 1px solid #cbd5e1;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductGroupSection = styled.section`
  min-width: 0;
  padding: 22px 24px 25px;
  border-right: 1px solid #cbd5e1;
  border-bottom: 1px solid #cbd5e1;
  background: #fff;
  scroll-margin-top: 110px;

  h2 {
    margin: 0 0 14px;
    color: #123d61;
    font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif;
    font-size: clamp(1.35rem, 2.5vw, 1.8rem);
    font-weight: 600;
    line-height: 1.1;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li + li { border-top: 1px solid #edf1f5; }

  a,
  .plain-item {
    min-height: 44px;
    padding: 10px 0;
    display: flex;
    align-items: center;
    color: #475569;
    font-size: 0.9rem;
    line-height: 1.45;
    text-decoration: none;
  }

  a::after {
    content: '↗';
    margin-left: auto;
    padding-left: 12px;
    color: #e76b00;
  }

  a:hover { color: #123d61; }
  a:focus-visible { outline: 3px solid #f58220; outline-offset: 2px; }
`;
