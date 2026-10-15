import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { MetricStatement } from '../../../components/brand/MetricStatement';
import { SectionIntro } from '../../../components/brand/SectionIntro';
import { homeContent } from '../../../content/homeContent';
import { gsap, ScrollTrigger, useGSAP } from '../../../motion/gsap';
import { Container } from '../../siteStyles';
import { LightTextLink, MetricGrid, MetricsHeader, MetricsSection } from '../homeStyles';

const formatNumber = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 0 });

export function StructureSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const grid = gridRef.current;
    if (!grid || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const metrics = Array.from(grid.querySelectorAll<HTMLElement>('figure strong'))
      .map((element) => {
        const finalText = element.textContent?.trim() ?? '';
        const parts = /^(\d[\d.]*)(.*)$/.exec(finalText);
        if (!parts) return null;

        const target = Number(parts[1].replaceAll('.', ''));
        if (!Number.isFinite(target)) return null;

        return { element, finalText, target, suffix: parts[2] };
      })
      .filter((metric): metric is NonNullable<typeof metric> => metric !== null);

    if (metrics.length === 0) return;

    const tweens: gsap.core.Tween[] = [];
    const triggers = metrics.map(({ element, finalText, target, suffix }, index) =>
      ScrollTrigger.create({
        trigger: element.closest('figure') ?? element,
        start: 'top 84%',
        once: true,
        onEnter: () => {
          const counter = { value: 0 };
          element.textContent = `0${suffix}`;
          tweens.push(gsap.to(counter, {
            value: target,
            duration: 1.5,
            delay: index * 0.1,
            ease: 'power2.out',
            onUpdate: () => {
              element.textContent = `${formatNumber.format(Math.round(counter.value))}${suffix}`;
            },
            onComplete: () => {
              element.textContent = finalText;
            },
          }));
        },
      }),
    );

    return () => {
      triggers.forEach((trigger) => trigger.kill());
      tweens.forEach((tween) => tween.kill());
      metrics.forEach(({ element, finalText }) => { element.textContent = finalText; });
    };
  }, { scope: gridRef });

  return (
    <MetricsSection>
      <Container>
        <MetricsHeader data-reveal>
          <div>
            <SectionIntro
              eyebrow="Uma estrutura feita para acontecer"
              title="Escala só faz sentido quando ajuda o trabalho a fluir."
              body="Unidades vizinhas, área coberta e equipamentos dão suporte às pessoas que transformam projeto em entrega."
              light
            />
            <LightTextLink as={Link} to="/empresa/estrutura">Conheça nossa estrutura</LightTextLink>
          </div>
          <p>Dados informados no conteúdo corporativo fornecido pela empresa.</p>
        </MetricsHeader>
        <MetricGrid ref={gridRef} data-reveal>
          {homeContent.metrics.map((metric) => (
            <MetricStatement key={metric.value} metric={metric} />
          ))}
        </MetricGrid>
      </Container>
    </MetricsSection>
  );
}
