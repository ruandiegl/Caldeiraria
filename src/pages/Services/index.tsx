import { Link } from 'react-router-dom';
import { services } from '../../content/siteData';
import { CardGrid, Container, Eyebrow, Hero, Section, SectionTitle, ServiceCard } from '../siteStyles';

export default function Services() {
  return (
    <>
      <Hero $image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=82">
        <Container><Eyebrow>Produtos e serviços</Eyebrow><h1>Soluções sob medida para fabricação, montagem e manutenção industrial.</h1><p className="copy">Cada linha combina engenharia, caldeiraria, soldagem e controle documental para atender obras industriais complexas.</p></Container>
      </Hero>
      <Section $muted>
        <Container>
          <SectionTitle><Eyebrow>Portfólio técnico</Eyebrow><h2>Da chapa ao campo, do tubo ao offshore.</h2></SectionTitle>
          <CardGrid $columns={4}>
            {services.map((service) => (
              <ServiceCard as={Link} to={`/servicos/${service.slug}`} key={service.slug}>
                <img src={service.image} alt="" />
                <div><span>{service.eyebrow}</span><strong>{service.title}</strong></div>
              </ServiceCard>
            ))}
          </CardGrid>
        </Container>
      </Section>
    </>
  );
}
