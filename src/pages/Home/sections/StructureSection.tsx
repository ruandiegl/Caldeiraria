import { MetricStatement } from '../../../components/brand/MetricStatement';
import { SectionIntro } from '../../../components/brand/SectionIntro';
import { homeContent } from '../../../content/homeContent';
import { Container } from '../../siteStyles';
import { MetricGrid, MetricsHeader, MetricsSection } from '../homeStyles';

export function StructureSection() {
  return (
    <MetricsSection>
      <Container>
        <MetricsHeader data-reveal>
          <SectionIntro
            eyebrow="Uma estrutura feita para acontecer"
            title="Escala só faz sentido quando ajuda o trabalho a fluir."
            body="Unidades vizinhas, área coberta e equipamentos dão suporte às pessoas que transformam projeto em entrega."
            light
          />
          <p>Dados informados no conteúdo corporativo fornecido pela empresa.</p>
        </MetricsHeader>
        <MetricGrid data-reveal>
          {homeContent.metrics.map((metric) => (
            <MetricStatement key={metric.value} metric={metric} />
          ))}
        </MetricGrid>
      </Container>
    </MetricsSection>
  );
}
