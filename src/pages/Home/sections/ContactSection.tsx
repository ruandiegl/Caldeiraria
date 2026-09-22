import { CallToAction } from '../../../components/brand/CallToAction';
import { SectionIntro } from '../../../components/brand/SectionIntro';
import { homeContent } from '../../../content/homeContent';
import { Container } from '../../siteStyles';
import { ContactGrid, ContactSection as ContactBand } from '../homeStyles';

export function ContactCtaSection() {
  return (
    <ContactBand>
      <Container>
        <ContactGrid>
          <div data-reveal>
            <SectionIntro
              eyebrow={homeContent.contact.eyebrow}
              title={homeContent.contact.title}
              body={homeContent.contact.body}
              light
            />
          </div>
          <div data-reveal>
            <CallToAction primary={homeContent.contact.link} dark />
          </div>
        </ContactGrid>
      </Container>
    </ContactBand>
  );
}
