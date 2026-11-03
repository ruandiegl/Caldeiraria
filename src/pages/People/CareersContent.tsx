import styled from 'styled-components';
import { careersContent } from '@/content/careersContent';
import { editorialResources } from '@/content/editorialResources';
import { Container, Eyebrow } from '../siteStyles';

const CareerHero = styled.section.attrs({ className: 'reveal' })`
  padding: 144px 0 76px;
  color: #fff;
  background:
    radial-gradient(circle at 82% 14%, rgba(255, 132, 36, 0.2), transparent 28rem),
    linear-gradient(125deg, #11182d, #123b59);

  h1 {
    max-width: 900px;
    margin: 0;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: clamp(2.4rem, 5.5vw, 5rem);
    line-height: 1.02;
    text-transform: uppercase;
  }

  .career-introduction {
    max-width: 850px;
    margin-top: 25px;
  }

  .career-introduction p {
    margin: 0 0 12px;
    color: rgba(255, 255, 255, 0.84);
    line-height: 1.75;
  }

  @media (max-width: 720px) {
    padding: 118px 0 60px;
  }
`;

const CareerSection = styled.section<{ $muted?: boolean }>`
  padding: 78px 0;
  background: ${({ $muted }) => ($muted ? '#f4f7fb' : '#fff')};

  h2 {
    max-width: 860px;
    margin: 0;
    color: #11182d;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: clamp(1.75rem, 3.8vw, 3.25rem);
    line-height: 1.08;
    text-transform: uppercase;
  }

  .career-copy {
    max-width: 850px;
    color: #475569;
    line-height: 1.75;
  }

  @media (max-width: 720px) {
    padding: 58px 0;
  }
`;

const CareerGrid = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-top: 2px solid #fb7900;
  border-left: 1px solid #d8e3ef;

  article {
    min-height: 210px;
    padding: 24px;
    background: #fff;
    border-right: 1px solid #d8e3ef;
    border-bottom: 1px solid #d8e3ef;
  }

  h3 {
    margin: 0;
    color: #063e66;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.35;
  }

  p {
    margin: 14px 0 0;
    color: #475569;
    line-height: 1.7;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    article { min-height: 0; }
  }
`;

const CommitmentGrid = styled(CareerGrid)`
  article {
    background: rgba(255, 255, 255, 0.72);
  }
`;

const ApplicationCard = styled.aside`
  margin-top: 30px;
  padding: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  color: #fff;
  background: #11182d;

  p { margin: 0; line-height: 1.6; }

  a {
    min-height: 44px;
    padding: 0 16px;
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    color: #11182d;
    background: #fb7900;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 900;
    text-decoration: none;
  }

  a:focus-visible {
    outline: 3px solid #11182d;
    outline-offset: 3px;
  }

  @media (max-width: 640px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

function safeHttpUrl(value: string | null | undefined) {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.toString() : null;
  } catch {
    return null;
  }
}

type CareersContentProps = {
  applicationUrl?: string | null;
};

export default function CareersContent({ applicationUrl = editorialResources.careersApplicationUrl }: CareersContentProps = {}) {
  const safeApplicationUrl = safeHttpUrl(applicationUrl);

  return (
    <>
      <CareerHero>
        <Container>
          <Eyebrow>{careersContent.eyebrow}</Eyebrow>
          <h1>{careersContent.title}</h1>
          <div className="career-introduction">
            {careersContent.introduction.map(({ text, originRefs }) => (
              <p key={originRefs[0].paragraph} data-origin-refs={originRefs.map(({ paragraph }) => paragraph).join(',')}>
                {text}
              </p>
            ))}
          </div>
        </Container>
      </CareerHero>

      <CareerSection>
        <Container>
          <Eyebrow>Oportunidades</Eyebrow>
          <h2>{careersContent.whyJoinTitle}</h2>
          <CareerGrid>
            {careersContent.whyJoin.map(({ title, text, originRefs }) => (
              <article key={title} data-origin-refs={originRefs.map(({ paragraph }) => paragraph).join(',')}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </CareerGrid>
          {safeApplicationUrl && (
            <ApplicationCard data-origin-refs={careersContent.applicationOriginRefs.map(({ paragraph }) => paragraph).join(',')}>
              <p>Consulte as oportunidades e candidate-se pela plataforma oficial.</p>
              <a href={safeApplicationUrl} target="_blank" rel="noopener noreferrer">Acessar oportunidades</a>
            </ApplicationCard>
          )}
        </Container>
      </CareerSection>

      <CareerSection $muted>
        <Container>
          <Eyebrow>Agenda ESG</Eyebrow>
          <h2>{careersContent.commitmentTitle}</h2>
          <p className="career-copy">{careersContent.commitmentIntroduction}</p>
          <CommitmentGrid>
            {careersContent.commitment.map(({ title, text, originRefs }) => (
              <article key={title} data-origin-refs={originRefs.map(({ paragraph }) => paragraph).join(',')}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </CommitmentGrid>
          <p className="career-copy" data-origin-refs={careersContent.closingOriginRefs.map(({ paragraph }) => paragraph).join(',')}>
            {careersContent.closing}
          </p>
        </Container>
      </CareerSection>
    </>
  );
}
