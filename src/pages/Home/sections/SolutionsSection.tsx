import { Link } from 'react-router-dom';
import { SectionIntro } from '../../../components/brand/SectionIntro';
import { homeContent } from '../../../content/homeContent';
import { Container } from '../../siteStyles';
import { SolutionLink, SolutionsGrid, SolutionsSection as SolutionsBand } from '../homeStyles';

export function SolutionsSection() {
  return (
    <SolutionsBand>
      <Container>
        <div data-reveal>
          <SectionIntro
            eyebrow="Onde o trabalho encontra o desafio"
            title="Soluções para diferentes momentos da indústria."
            body="A Vulcano reúne engenharia, fabricação e serviços para acompanhar necessidades que mudam de projeto para projeto."
          />
        </div>
        <SolutionsGrid data-reveal>
          {homeContent.solutions.map((solution) => (
            <SolutionLink as={Link} to={solution.href} key={solution.title}>
              <div>
                <strong>{solution.title}</strong>
                <span>{solution.detail}</span>
              </div>
            </SolutionLink>
          ))}
        </SolutionsGrid>
      </Container>
    </SolutionsBand>
  );
}
