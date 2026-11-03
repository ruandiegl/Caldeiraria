import { Link, Navigate, useParams } from 'react-router-dom';
import { Container } from '../siteStyles';
import { getSegment } from '@/content/segmentsContent';
import { SegmentIntro, SegmentReading as SegmentReadingStyle } from './styles';
import { SegmentReading } from './SegmentReading';

export function SegmentDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const segment = slug ? getSegment(slug) : undefined;
  if (!segment) return <Navigate to="/segmentos" replace />;

  return (
    <>
      <SegmentIntro>
        <Container>
          <p className="eyebrow"><Link to="/segmentos">Todos os segmentos</Link></p>
          <h1>{segment.title}</h1>
          <p className="copy">{segment.homeSummary}</p>
        </Container>
      </SegmentIntro>
      <SegmentReadingStyle>
        <Container>
          <SegmentReading introduction={segment.introduction} blocks={segment.blocks} />
        </Container>
      </SegmentReadingStyle>
    </>
  );
}
