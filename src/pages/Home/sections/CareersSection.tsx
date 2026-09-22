import { CallToAction } from '../../../components/brand/CallToAction';
import { SectionIntro } from '../../../components/brand/SectionIntro';
import { homeContent } from '../../../content/homeContent';
import { Container } from '../../siteStyles';
import { CareersGrid, CareersNote, CareersSection as CareersBand } from '../homeStyles';

export function CareersSection() {
  return (
    <CareersBand>
      <Container>
        <CareersGrid>
          <div data-reveal>
            <SectionIntro
              eyebrow={homeContent.careers.eyebrow}
              title={homeContent.careers.title}
              body={homeContent.careers.body}
            />
            <CallToAction primary={homeContent.careers.link} />
          </div>
          <CareersNote data-reveal>
            Pessoas de operação, engenharia, qualidade, manutenção e gestão fazem parte da mesma construção.
          </CareersNote>
        </CareersGrid>
      </Container>
    </CareersBand>
  );
}
