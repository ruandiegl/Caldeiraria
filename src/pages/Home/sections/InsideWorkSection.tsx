import { SectionIntro } from '../../../components/brand/SectionIntro';
import { EditorialMedia } from '../../../components/brand/EditorialMedia';
import { homeContent } from '../../../content/homeContent';
import { Container } from '../../siteStyles';
import { WorkGrid, WorkIntro, WorkNote, WorkSection as WorkBand } from '../homeStyles';

export function InsideWorkSection() {
  return (
    <WorkBand>
      <Container>
        <WorkIntro data-reveal>
          <SectionIntro
            eyebrow={homeContent.work.eyebrow}
            title={homeContent.work.title}
          />
          <WorkNote>{homeContent.work.intro}</WorkNote>
        </WorkIntro>
        <WorkGrid>
          {homeContent.work.moments.map((moment) => (
            <EditorialMedia key={moment.title} media={homeContent.media[moment.mediaIndex]} data-reveal />
          ))}
        </WorkGrid>
      </Container>
    </WorkBand>
  );
}
