import { Link } from 'react-router-dom';
import { Container, Section } from '../siteStyles';
import { segmentsContent } from '@/content/segmentsContent';
import { SegmentIndexLink, SegmentIndexList, SegmentIntro } from './styles';

export default function Segments() {
  return (
    <>
      <SegmentIntro>
        <Container>
          <p className="eyebrow">Onde o trabalho encontra o desafio</p>
          <h1>Segmentos</h1>
          <p className="copy">Soluções de engenharia, fabricação e serviços para diferentes momentos da indústria.</p>
        </Container>
      </SegmentIntro>
      <Section aria-label="Segmentos de atuação">
        <Container>
          <SegmentIndexList>
            {segmentsContent.map((segment, index) => (
              <SegmentIndexLink as={Link} to={`/segmentos/${segment.slug}`} key={segment.slug}>
                <span className="index">0{index + 1}</span>
                <strong>{segment.title}</strong>
                <span className="summary">{segment.homeSummary}</span>
                <span className="arrow" aria-hidden="true">↗</span>
              </SegmentIndexLink>
            ))}
          </SegmentIndexList>
        </Container>
      </Section>
    </>
  );
}
