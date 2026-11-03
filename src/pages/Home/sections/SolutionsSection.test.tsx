import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { segmentsContent } from '@/content/segmentsContent';
import { SolutionsSection } from './SolutionsSection';

describe('áreas de atuação da Home', () => {
  it('usa fundo claro institucional e título escuro para leitura', () => {
    render(<MemoryRouter><SolutionsSection /></MemoryRouter>);
    const section = screen.getByRole('region', { name: 'Áreas de atuação' });
    const heading = within(section).getByRole('heading', { name: 'Soluções para diferentes momentos da indústria.' });

    expect(getComputedStyle(section).backgroundColor).toBe('rgb(244, 247, 251)');
    expect(getComputedStyle(heading).color).toBe('rgb(17, 24, 45)');
  });

  it('apresenta seis áreas navegáveis com ícones e destinos corretos', () => {
    render(<MemoryRouter><SolutionsSection /></MemoryRouter>);

    const section = screen.getByRole('region', { name: 'Áreas de atuação' });
    expect(within(section).getByRole('heading', { name: 'Soluções para diferentes momentos da indústria.' })).toBeInTheDocument();

    const links = within(section).getAllByRole('link');
    expect(links).toHaveLength(6);
    for (const segment of segmentsContent) {
      const link = links.find((candidate) => candidate.getAttribute('href') === `/segmentos/${segment.slug}`)!;
      expect(link).toHaveAttribute('href', `/segmentos/${segment.slug}`);
      expect(link.querySelector('svg[aria-hidden="true"]')).toBeInTheDocument();
    }
  });

  it('mantém a colmeia sem espaçamento entre as células', () => {
    render(<MemoryRouter><SolutionsSection /></MemoryRouter>);

    const section = screen.getByRole('region', { name: 'Áreas de atuação' });
    const grid = within(section).getAllByRole('link').find((link) => link.getAttribute('href') === '/segmentos/siderurgia')?.parentElement;
    expect(grid).not.toBeNull();
    expect(getComputedStyle(grid!).gap).toBe('0px');
  });

  it('destaca o resumo da área quando seu ícone recebe hover ou foco', async () => {
    const user = userEvent.setup();
    render(<MemoryRouter><SolutionsSection /></MemoryRouter>);

    const section = screen.getByRole('region', { name: 'Áreas de atuação' });
    const spotlight = within(section).getByRole('complementary', { name: 'Área em destaque' });
    await user.hover(within(section).getByRole('link', { name: /Caldeiraria/i }));
    expect(within(spotlight).getByText(segmentsContent[1].homeSummary)).toBeInTheDocument();

    fireEvent.focus(within(section).getByRole('link', { name: /Projetos e Equipamentos Sob Encomenda/i }));
    expect(within(spotlight).getByText(segmentsContent[3].homeSummary)).toBeInTheDocument();

    await user.hover(within(section).getByRole('link', { name: /Serviços Industriais/i }));
    expect(within(spotlight).getByText(segmentsContent[2].homeSummary)).toBeInTheDocument();

    fireEvent.focus(within(section).getByRole('link', { name: /Máquinas para Construção/i }));
    expect(within(spotlight).getByText(segmentsContent[5].homeSummary)).toBeInTheDocument();
  });
});
