import { Link } from 'react-router-dom';
import { SectionIntro } from '../../../components/brand/SectionIntro';
import { homeContent } from '../../../content/homeContent';
import { Container } from '../../siteStyles';
import { IntroGrid, IntroSection, LegacyMedia, TextLink } from '../homeStyles';

export function LegacySection() {
  return (
    <IntroSection>
      <Container>
        <IntroGrid>
          <LegacyMedia media={homeContent.media[1]} data-reveal />
          <div data-reveal>
            <SectionIntro
              eyebrow={homeContent.history.eyebrow}
              title={homeContent.history.title}
              body={homeContent.history.body}
            />
            <TextLink as={Link} to={homeContent.history.link.href}>
              {homeContent.history.link.label}
            </TextLink>
          </div>
        </IntroGrid>
      </Container>
    </IntroSection>
  );
}
