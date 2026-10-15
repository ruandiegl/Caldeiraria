import { useState } from 'react';
import { DraftingCompass, Factory, HardHat, Ship, Truck, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionIntro } from '../../../components/brand/SectionIntro';
import { homeContent } from '../../../content/homeContent';
import { Container } from '../../siteStyles';
import { SolutionLink, SolutionSpotlight, SolutionsCopy, SolutionsGrid, SolutionsLayout, SolutionsSection as SolutionsBand } from '../homeStyles';

const solutionIcons = [Factory, Wrench, HardHat, DraftingCompass, Ship, Truck] as const;

export function SolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSolution = homeContent.solutions[activeIndex];

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
              <p>{activeSolution.detail}</p>
            </SolutionSpotlight>
          </SolutionsCopy>
          <SolutionsGrid data-reveal>
            {homeContent.solutions.map((solution, index) => {
              const Icon = solutionIcons[index];
              return (
                <SolutionLink
                  as={Link}
                  to={solution.href}
                  key={solution.title}
                  data-tone={solution.tone}
                  aria-label={`${solution.title}: ${solution.detail}`}
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
