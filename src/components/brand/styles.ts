import styled from 'styled-components';

export const Intro = styled.div<{ $light: boolean }>`
  max-width: 760px;
  color: ${({ $light }) => ($light ? '#fff' : '#223044')};
`;

export const IntroLabel = styled.p<{ $light: boolean }>`
  margin: 0;
  color: ${({ $light }) => ($light ? '#ffb26e' : '#a84d00')};
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

export const IntroHeading = styled.h2<{ $light: boolean }>`
  max-width: 730px;
  margin: 0;
  color: ${({ $light }) => ($light ? '#fff' : '#11182d')};
  font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif;
  font-size: clamp(2.15rem, 5.6vw, 5rem);
  font-weight: 600;
  line-height: 0.94;
  letter-spacing: -0.035em;
`;

export const IntroBody = styled.p<{ $light: boolean }>`
  max-width: 640px;
  margin: 22px 0 0;
  color: ${({ $light }) => ($light ? 'rgba(255, 255, 255, 0.78)' : '#475569')};
  font-size: 1.02rem;
  line-height: 1.7;
`;

export const MediaFrame = styled.div`
  position: relative;
  min-height: 340px;
  overflow: hidden;
  background: #102a43;
  border-radius: 0.5rem;

  img {
    width: 100%;
    height: 100%;
    min-height: 340px;
    display: block;
    object-fit: cover;
  }
`;

export const MediaPreviewBadge = styled.span`
  position: absolute;
  right: 14px;
  bottom: 14px;
  padding: 7px 10px;
  color: #fff;
  background: rgba(17, 24, 45, 0.78);
  border-left: 3px solid #fb7900;
  font-size: 0.66rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  backdrop-filter: blur(10px);
`;

export const MediaPending = styled.div`
  min-height: 340px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 12px;
  color: #fff;
  background:
    linear-gradient(135deg, rgba(6, 62, 102, 0.84), rgba(17, 24, 45, 0.96)),
    repeating-linear-gradient(120deg, rgba(255, 255, 255, 0.1) 0 1px, transparent 1px 28px);

  strong {
    max-width: 340px;
    font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif;
    font-size: clamp(1.8rem, 4vw, 3.6rem);
    font-weight: 600;
    line-height: 0.94;
  }
`;

export const MediaStatus = styled.span`
  color: #ffb26e;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const MediaCaption = styled.figcaption`
  margin-top: 12px;
  color: #475569;
  font-size: 0.82rem;
  line-height: 1.5;
`;

export const MetricFigure = styled.figure`
  min-height: 196px;
  margin: 0;
  padding: 24px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 4px solid #fb7900;
  background: #fff;
`;

export const MetricValue = styled.strong`
  color: #11182d;
  font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif;
  font-variant-numeric: tabular-nums;
  font-size: clamp(2.3rem, 4vw, 4.1rem);
  font-weight: 600;
  line-height: 0.9;
  letter-spacing: -0.035em;
`;

export const MetricLabel = styled.span`
  margin-top: 18px;
  color: #063e66;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  text-transform: uppercase;
`;

export const MetricContext = styled.figcaption`
  margin-top: 9px;
  color: #64748b;
  font-size: 0.8rem;
  line-height: 1.45;
`;

export const CtaGroup = styled.div<{ $dark: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  a {
    text-decoration: none;
  }

  ${({ $dark }) => $dark && `
    a:last-child {
      color: #fff;
      background: rgba(255, 255, 255, 0.12);
      border-color: rgba(255, 255, 255, 0.42);
    }
  `}
`;
