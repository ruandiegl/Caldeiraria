import styled from 'styled-components';
import { certifications } from '../../content/siteData';
import { Container, Eyebrow, Hero } from '../siteStyles';

const certificationGroups = {
  seguranca: {
    title: 'Segurança operacional',
    text: 'Normas regulamentadoras para atividades fabris, montagem, altura, espaços confinados e rotinas de campo.',
  },
  offshore: {
    title: 'Operação offshore',
    text: 'Credenciais para acesso, permanência e atuação em ambientes marítimos e ativos de óleo e gás.',
  },
  soldagem: {
    title: 'Soldagem qualificada',
    text: 'Referências técnicas para procedimentos, inspetoria, execução e rastreabilidade de juntas soldadas.',
  },
  qualidade: {
    title: 'Qualidade e cadastro',
    text: 'Sistemas, registros e habilitações comerciais para contratos industriais de alta exigência.',
  },
};

const CertificationSection = styled.section.attrs({ className: 'reveal' })`
  padding: 78px 0 88px;
  color: #223044;
  background:
    linear-gradient(180deg, #f7fafc 0%, #ffffff 58%),
    #ffffff;
`;

const CertificationIntro = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(300px, 0.58fr);
  gap: 46px;
  align-items: end;
  margin-bottom: 42px;

  h2 {
    max-width: 820px;
    margin: 0;
    color: #11182d;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: clamp(1.85rem, 4vw, 3.7rem);
    line-height: 1.04;
    text-transform: uppercase;
  }

  p {
    margin: 0;
    color: #475569;
    line-height: 1.72;
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 22px;
  }
`;

const ComplianceMatrix = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 1px solid #d8e3ef;
  border-left: 1px solid #d8e3ef;
  background: #ffffff;
  box-shadow: 0 22px 58px rgba(17, 24, 45, 0.07);

  @media (max-width: 1040px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const ComplianceCard = styled.article`
  min-height: 318px;
  padding: 26px;
  border-right: 1px solid #d8e3ef;
  border-bottom: 1px solid #d8e3ef;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.9)),
    #ffffff;

  h3 {
    margin: 0;
    color: #063e66;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.18;
    text-transform: uppercase;
  }

  p {
    min-height: 88px;
    margin: 14px 0 22px;
    color: #475569;
    font-size: 0.88rem;
    line-height: 1.62;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    position: relative;
    padding: 9px 0 9px 18px;
    color: #102a43;
    border-top: 1px solid #e2e8f0;
    font-size: 0.76rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  li::before {
    content: "";
    position: absolute;
    top: 1.18em;
    left: 0;
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background: #fb7900;
  }

  @media (max-width: 620px) {
    min-height: auto;

    p {
      min-height: 0;
    }
  }
`;

const ComplianceStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  margin-top: 28px;
  background: #d8e3ef;
  border-radius: 8px;
  overflow: hidden;

  article {
    padding: 22px;
    background: #fff;
  }

  strong {
    display: block;
    color: #fb7900;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: 1.35rem;
    line-height: 1;
    text-transform: uppercase;
  }

  span {
    display: block;
    margin-top: 10px;
    color: #334155;
    font-size: 0.72rem;
    font-weight: 900;
    line-height: 1.45;
    text-transform: uppercase;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export default function Certifications() {
  return (
    <>
      <Hero $image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2200&q=82">
        <Container>
          <Eyebrow>Certificações</Eyebrow>
          <h1>Conformidade para fabricar, soldar, montar e operar em campo.</h1>
          <p className="copy">
            Credenciais organizadas por segurança, offshore, soldagem e qualidade para apoiar contratações industriais
            exigentes.
          </p>
        </Container>
      </Hero>

      <CertificationSection>
        <Container>
          <CertificationIntro>
            <div>
              <Eyebrow>Controle técnico</Eyebrow>
              <h2>Uma matriz de requisitos para contratos de alta responsabilidade.</h2>
            </div>
            <p>
              A leitura por disciplina facilita a avaliação de escopo, mobilização de equipes, documentação técnica e
              atendimento a normas aplicáveis antes da fabricação ou entrada em campo.
            </p>
          </CertificationIntro>

          <ComplianceMatrix>
            {Object.entries(certifications).map(([key, items]) => {
              const group = certificationGroups[key as keyof typeof certificationGroups];

              return (
                <ComplianceCard key={key}>
                  <h3>{group.title}</h3>
                  <p>{group.text}</p>
                  <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
                </ComplianceCard>
              );
            })}
          </ComplianceMatrix>

          <ComplianceStrip aria-label="Critérios de conformidade">
            <article><strong>Normas</strong><span>Requisitos técnicos mapeados por atividade e ambiente de execução</span></article>
            <article><strong>Equipe</strong><span>Qualificações aplicadas a fabricação, soldagem, montagem e campo</span></article>
            <article><strong>Registro</strong><span>Documentação organizada para rastreabilidade e auditoria contratual</span></article>
          </ComplianceStrip>
        </Container>
      </CertificationSection>
    </>
  );
}

