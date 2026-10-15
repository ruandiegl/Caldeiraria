import { Link } from 'react-router-dom';
import { SectionIntro } from '../../../components/brand/SectionIntro';
import { homeContent } from '../../../content/homeContent';
import { Container } from '../../siteStyles';
import {
  EsgBand,
  EsgGrid,
  EsgPillars,
  IdentityBand,
  IdentityGrid,
  IdentityStatement,
  IdentityValues,
  TeaserEyebrow,
  TextLink,
} from '../homeStyles';

export function IdentitySection() {
  const { identity } = homeContent;

  return (
    <IdentityBand>
      <Container>
        <IdentityGrid>
          <IdentityStatement data-reveal>
            <TeaserEyebrow>{identity.eyebrow}</TeaserEyebrow>
            <h2>{identity.title}</h2>
            <p>{identity.body}</p>
          </IdentityStatement>
          <div data-reveal>
            <IdentityValues>
              {identity.values.map((value) => (
                <article key={value.title}>
                  <strong>{value.title}</strong>
                  <span>{value.detail}</span>
                </article>
              ))}
            </IdentityValues>
            <TextLink as={Link} to={identity.link.href}>{identity.link.label}</TextLink>
          </div>
        </IdentityGrid>
      </Container>
    </IdentityBand>
  );
}

export function EsgSection() {
  const { esg } = homeContent;

  return (
    <EsgBand>
      <Container>
        <EsgGrid>
          <div data-reveal>
            <SectionIntro eyebrow={esg.eyebrow} title={esg.title} body={esg.body} />
            <TextLink as={Link} to={esg.link.href}>{esg.link.label}</TextLink>
          </div>
          <EsgPillars data-reveal>
            {esg.pillars.map((pillar) => (
              <article key={pillar.title}>
                <strong>{pillar.title}</strong>
                <span>{pillar.detail}</span>
              </article>
            ))}
          </EsgPillars>
        </EsgGrid>
      </Container>
    </EsgBand>
  );
}
