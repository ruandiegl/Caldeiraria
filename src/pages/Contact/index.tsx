import { useState } from 'react';
import styled from 'styled-components';
import { Container, Eyebrow, Hero, Section, SectionTitle } from '../siteStyles';

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.86fr;
  gap: 28px;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

const Form = styled.form`
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;

  label {
    display: grid;
    gap: 8px;
    color: #11182d;
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .full {
    grid-column: 1 / -1;
  }

  input,
  select,
  textarea {
    min-height: 50px;
    padding: 12px 14px;
    border: 1px solid #e2e8f0;
    border-radius: 7px;
    color: #223044;
    background: #f8fafc;
    outline: none;
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }

  button {
    min-height: 52px;
    border: 0;
    border-radius: 7px;
    color: #fff;
    background: #fb7900;
    font-weight: 900;
    text-transform: uppercase;
    cursor: pointer;
  }

  p {
    margin: 0;
    color: #063e66;
    font-weight: 800;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    padding: 22px;
  }
`;

const MapPanel = styled.aside`
  min-height: 420px;
  padding: 30px;
  color: #fff;
  background:
    linear-gradient(rgba(17, 24, 45, 0.78), rgba(17, 24, 45, 0.78)),
    url("https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80") center / cover;
  border-radius: 8px;

  h3 {
    margin: 0 0 16px;
    font-family: Montserrat, Inter, sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  p {
    color: rgba(255, 255, 255, 0.82);
    line-height: 1.7;
  }
`;

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Hero $image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2200&q=82">
        <Container><Eyebrow>Contato</Eyebrow><h1>Vamos dimensionar a solucao industrial do seu projeto.</h1><p className="copy">Informe o escopo, a localizacao e o servico desejado para a equipe tecnica avaliar o melhor encaminhamento.</p></Container>
      </Hero>
      <Section $muted>
        <Container>
          <SectionTitle><Eyebrow>Orcamento</Eyebrow><h2>Dados iniciais para analise tecnica.</h2></SectionTitle>
          <ContactGrid>
            <Form onSubmit={(event) => { event.preventDefault(); setSent(true); event.currentTarget.reset(); }}>
              <label>Nome<input required /></label>
              <label>Empresa<input required /></label>
              <label>Telefone<input required /></label>
              <label>Email<input type="email" required /></label>
              <label>Cidade<input /></label>
              <label>Servico desejado<select><option>Caldeiraria industrial</option><option>Sistemas de tubulacao</option><option>Soldagem especial</option><option>Offshore services</option><option>Projeto sob medida</option></select></label>
              <label className="full">Mensagem<textarea required /></label>
              <button className="full" type="submit">Solicitar orcamento</button>
              {sent && <p className="full">Solicitacao registrada. Nossa equipe comercial retornara com os proximos passos.</p>}
            </Form>
            <MapPanel>
              <Eyebrow>Atendimento comercial</Eyebrow>
              <h3>Brasil e America Latina</h3>
              <p>Base industrial preparada para contratos nacionais, obras em campo e atendimento offshore. O mapa integrado pode entrar aqui com o endereco final da unidade principal.</p>
            </MapPanel>
          </ContactGrid>
        </Container>
      </Section>
    </>
  );
}
