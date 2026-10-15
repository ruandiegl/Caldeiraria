import styled from 'styled-components';

export const Chapter = styled.section`
  width: min(1062px, calc(100% - 40px));
  margin: 0 auto;
  padding: clamp(76px, 9vw, 124px) 0;
  display: grid;
  grid-template-columns: minmax(180px, 0.43fr) minmax(0, 1fr);
  gap: clamp(32px, 6vw, 96px);
  border-top: 1px solid var(--border);

  @media (max-width: 760px) {
    width: calc(100% - 28px);
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
    padding: 72px 0;
  }
`;

export const ChapterHeading = styled.div`
  align-self: start;
  padding: 20px 0 0 20px;
  border-left: 3px solid var(--primary);

  @media (max-width: 760px) {
    padding-top: 10px;
  }
`;

export const ChapterTitle = styled.h2`
  margin: 0;
  color: var(--card-foreground);
  font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif;
  font-size: clamp(2.35rem, 4.4vw, 4.5rem);
  font-weight: 600;
  line-height: 0.98;
  letter-spacing: -0.035em;
`;

export const ChapterBody = styled.div`
  min-width: 0;
  max-width: 700px;
  color: var(--foreground);

  > :first-child { margin-top: 0; }
`;

export const ChapterLabel = styled.p`
  margin: 0 0 18px;
  color: var(--secondary);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const EditorialSubheading = styled.h3`
  scroll-margin-top: 112px;
  margin: 44px 0 18px;
  color: var(--card-foreground);
  font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif;
  font-size: clamp(1.65rem, 2.7vw, 2.45rem);
  font-weight: 600;
  line-height: 1.12;
`;

export const EditorialText = styled.p`
  margin: 0 0 20px;
  color: var(--foreground);
  font-size: clamp(1rem, 1.4vw, 1.08rem);
  line-height: 1.78;
  overflow-wrap: anywhere;
`;

export const EditorialItemList = styled.ul`
  margin: 10px 0 30px;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--border);

  li {
    padding: 14px 0;
    border-bottom: 1px solid var(--border);
    color: var(--foreground);
    font-size: clamp(0.98rem, 1.3vw, 1.05rem);
    line-height: 1.6;
    overflow-wrap: anywhere;
  }
`;
