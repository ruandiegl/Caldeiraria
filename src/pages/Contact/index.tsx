import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { contactContent } from '@/content/contactContent';
import { editorialResources } from '@/content/editorialResources';
import { Container, Eyebrow, Section, SectionTitle } from '../siteStyles';

const ContactHero = styled.section.attrs({ className: 'reveal' })`
  padding: 144px 0 82px;
  color: #fff;
  background:
    radial-gradient(circle at 84% 12%, rgba(255, 132, 36, 0.18), transparent 28rem),
    linear-gradient(125deg, #11182d, #123b59);

  h1 {
    max-width: 820px;
    margin: 0;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: clamp(2.3rem, 5vw, 4.5rem);
    line-height: 1.04;
    text-transform: uppercase;
  }

  .contact-intro {
    max-width: 700px;
    margin: 22px 0 0;
    color: rgba(255, 255, 255, 0.82);
    font-size: 1rem;
    line-height: 1.75;
  }

  @media (max-width: 720px) {
    padding: 118px 0 62px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled.article`
  min-height: 250px;
  padding: clamp(22px, 4vw, 34px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #fff;
  border: 1px solid #d8e3ef;
  border-top: 3px solid #fb7900;
  box-shadow: 0 14px 40px rgba(17, 24, 45, 0.06);

  h3 {
    margin: 0;
    color: #11182d;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: clamp(1.2rem, 2vw, 1.6rem);
    line-height: 1.2;
  }

  p {
    margin: 13px 0 0;
    color: #475569;
    line-height: 1.65;
  }

  .question {
    margin-bottom: 4px;
    color: #063e66;
    font-weight: 800;
  }

  .contact-action {
    min-height: 44px;
    margin-top: auto;
    padding: 12px 0 0;
    display: inline-flex;
    align-items: center;
    color: #063e66;
    font-size: 0.9rem;
    font-weight: 900;
    overflow-wrap: anywhere;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
  }

  .contact-action:focus-visible {
    outline: 3px solid #fb7900;
    outline-offset: 4px;
  }
`;

const ContactResource = styled.aside`
  margin-top: 24px;
  padding: clamp(22px, 4vw, 34px);
  color: #fff;
  background: #11182d;

  h2 {
    margin: 0;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: clamp(1.35rem, 3vw, 2rem);
  }

  p {
    max-width: 760px;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.7;
  }

  a {
    min-height: 44px;
    padding: 0 16px;
    display: inline-flex;
    align-items: center;
    color: #11182d;
    background: #fb7900;
    border-radius: 6px;
    font-size: 0.82rem;
    font-weight: 900;
    text-decoration: none;
  }

  a:focus-visible {
    outline: 3px solid #11182d;
    outline-offset: 3px;
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

type ContactProps = {
  whistleblowingUrl?: string | null;
};

export default function Contact({ whistleblowingUrl = editorialResources.whistleblowingUrl }: ContactProps = {}) {
  const activeWhistleblowingUrl = safeHttpUrl(whistleblowingUrl);

  return (
    <>
      <ContactHero>
        <Container>
          <Eyebrow>{contactContent.eyebrow}</Eyebrow>
          <h1>{contactContent.title}</h1>
          <p className="contact-intro">{contactContent.introduction}</p>
        </Container>
      </ContactHero>

      <Section $muted>
        <Container>
          <SectionTitle>
            <Eyebrow>Fale com a equipe certa</Eyebrow>
            <h2>Escolha o assunto para encaminhar sua mensagem.</h2>
          </SectionTitle>

          <ContactGrid>
            {contactContent.departments.map((department) => (
              <ContactCard
                key={department.id}
                id={department.id === 'sales' ? 'vendas' : 'compras'}
                data-origin-refs={department.originRefs.map(({ paragraph }) => paragraph).join(',')}
              >
                {department.question && <p className="question">{department.question}</p>}
                <h3>{department.title}</h3>
                <p>{department.description}</p>
                <a className="contact-action" href={`mailto:${department.email}`}>
                  {department.email}
                </a>
              </ContactCard>
            ))}
          </ContactGrid>

          <ContactCard data-origin-refs={contactContent.careersLink.originRefs.map(({ paragraph }) => paragraph).join(',')}>
            <h3>{contactContent.careersLink.label}</h3>
            <p>{contactContent.careersLink.description}</p>
            <Link className="contact-action" to={contactContent.careersLink.href}>
              Conheça as oportunidades
            </Link>
          </ContactCard>

          {activeWhistleblowingUrl && (
            <ContactResource>
              <Eyebrow>Canal independente</Eyebrow>
              <h2>{contactContent.pendingWhistleblowing.title}</h2>
              <p>{contactContent.pendingWhistleblowing.copy}</p>
              <a href={activeWhistleblowingUrl} target="_blank" rel="noopener noreferrer">
                {contactContent.pendingWhistleblowing.actionLabel}
              </a>
            </ContactResource>
          )}
        </Container>
      </Section>
    </>
  );
}
