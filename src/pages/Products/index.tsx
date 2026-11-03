import { Link } from 'react-router-dom';
import { Container, Section } from '../siteStyles';
import { productGroups } from '@/content/productsContent';
import { ProductGrid, ProductGroupSection, SegmentIntro } from '../Segments/styles';

export default function Products() {
  return (
    <>
      <SegmentIntro>
        <Container>
          <p className="eyebrow">Portfólio técnico</p>
          <h1>Produtos</h1>
          <p className="copy">Conheça as famílias de produtos, componentes e soluções fornecidas pelas empresas do Grupo Vulcano.</p>
        </Container>
      </SegmentIntro>
      <Section aria-label="Grupos de produtos">
        <Container>
          <ProductGrid>
            {productGroups.map((group) => (
              <ProductGroupSection id={group.id} key={group.id}>
                <h2>{group.title}</h2>
                {group.items.length > 0 && (
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.id}>
                        {item.href
                          ? <Link to={item.href}>{item.label}</Link>
                          : <span className="plain-item">{item.label}</span>}
                      </li>
                    ))}
                  </ul>
                )}
              </ProductGroupSection>
            ))}
          </ProductGrid>
        </Container>
      </Section>
    </>
  );
}
