import { Link, NavLink } from 'react-router-dom';
import { companyTopicPaths } from '@/content/institutionalContent';
import { Container } from '../siteStyles';
import { CompanySubnavBar } from './companyStyles';

const topics = [
  ['História', companyTopicPaths.history],
  ['Estrutura', companyTopicPaths.structure],
  ['Qualidade', companyTopicPaths.quality],
  ['ESG', companyTopicPaths.esg],
  ['Ações Sociais', companyTopicPaths['social-actions']],
] as const;

export function CompanySubnav() {
  return (
    <CompanySubnavBar aria-label="Seções da empresa">
      <Container>
        <Link to="/empresa" className="overview">Visão geral da empresa</Link>
        <div className="topic-links">
          {topics.map(([label, href]) => (
            <NavLink key={href} to={href} end>{label}</NavLink>
          ))}
        </div>
      </Container>
    </CompanySubnavBar>
  );
}
