import { Link } from 'react-router-dom';
import type { SegmentContent } from '@/content/segmentsContent';
import { SegmentOverviewContainer, SegmentOverviewGrid, SegmentOverviewLink, SegmentOverviewSection } from '../homeStyles';

type SegmentOverviewProps = {
  segments: readonly SegmentContent[];
};

export function SegmentOverview({ segments }: SegmentOverviewProps) {
  return (
    <SegmentOverviewSection data-testid="segment-overview" aria-label="Segmentos de atuação">
      <SegmentOverviewContainer>
        <SegmentOverviewGrid>
          {segments.map((segment) => (
            <SegmentOverviewLink as={Link} to={`/segmentos/${segment.slug}`} key={segment.slug}>
              <h2>{segment.title}</h2>
              <p>{segment.homeSummary}</p>
            </SegmentOverviewLink>
          ))}
        </SegmentOverviewGrid>
      </SegmentOverviewContainer>
    </SegmentOverviewSection>
  );
}
