import { useState } from 'react';
import { DraftingCompass, Factory, HardHat, Truck, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionIntro } from '../../../components/brand/SectionIntro';
import { segmentsContent } from '@/content/segmentsContent';
import { Container } from '../../siteStyles';
import { SolutionLink, SolutionSpotlight, SolutionsCopy, SolutionsGrid, SolutionsLayout, SolutionsSection as SolutionsBand } from '../homeStyles';

const solutionIcons = [Factory, Wrench, HardHat, DraftingCompass, Factory, Truck] as const;

export function SolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSolution = segmentsContent[activeIndex];

  return (
    <SolutionsBand aria-label="Áreas de atuação">
      <Container>
        <SolutionsLayout>
          <SolutionsCopy data-reveal>
            <SectionIntro
              eyebrow="Onde o trabalho encontra o desafio"
              title="Soluções para diferentes momentos da indústria."
              body="A Vulcano reúne engenharia, fabricação e serviços para acompanhar necessidades que mudam de projeto para projeto."
            />
            <SolutionSpotlight as="aside" aria-label="Área em destaque">
              <span>Em destaque</span>
              <strong>{activeSolution.title}</strong>
              <p>{activeSolution.homeSummary}</p>
            </SolutionSpotlight>
          </SolutionsCopy>
          <SolutionsGrid data-reveal>
            {segmentsContent.map((solution, index) => {
              const Icon = solutionIcons[index];
              return (
                <SolutionLink
                  as={Link}
                  to={`/segmentos/${solution.slug}`}
                  key={solution.slug}
                  aria-label={`${solution.title}: ${solution.homeSummary}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                >
                  <Icon aria-hidden="true" strokeWidth={1.5} />
                  <strong>{solution.title}</strong>
                </SolutionLink>
              );
            })}
          </SolutionsGrid>
        </SolutionsLayout>
      </Container>
    </SolutionsBand>
  );
}
