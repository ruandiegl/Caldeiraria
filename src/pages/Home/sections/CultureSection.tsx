import { Link } from 'react-router-dom';
import { SectionIntro } from '../../../components/brand/SectionIntro';
import { homeContent } from '../../../content/homeContent';
import { Container } from '../../siteStyles';
import { Credential, CredentialList, CultureGrid, CultureSection as CultureBand, LightTextLink } from '../homeStyles';

export function CultureSection() {
  return (
    <CultureBand>
      <Container>
        <CultureGrid>
          <div data-reveal>
            <SectionIntro
              eyebrow={homeContent.culture.eyebrow}
              title={homeContent.culture.title}
              body={homeContent.culture.body}
              light
            />
            <LightTextLink as={Link} to={homeContent.culture.link.href}>
              {homeContent.culture.link.label}
            </LightTextLink>
          </div>
          <CredentialList aria-label="Compromissos de qualidade e futuro" data-reveal>
            <Credential>
              <strong>{homeContent.culture.currentCertification.label}</strong>
              <span>{homeContent.culture.currentCertification.items.join(' · ')}</span>
            </Credential>
            <Credential>
              <strong>{homeContent.culture.futureCertifications.label}</strong>
              <span>{homeContent.culture.futureCertifications.items.join(' · ')}</span>
            </Credential>
          </CredentialList>
        </CultureGrid>
      </Container>
    </CultureBand>
  );
}
