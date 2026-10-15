import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
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
    for (const name of ['Siderurgia', 'Caldeiraria', 'Serviços industriais', 'Projetos especiais', 'Linha Amarela']) {
      const link = within(section).getByRole('link', { name: new RegExp(name, 'i') });
      expect(link).toHaveAttribute('href', '/servicos');
      expect(link.querySelector('svg[aria-hidden="true"]')).toBeInTheDocument();
    }
    const offshore = within(section).getByRole('link', { name: /Offshore/i });
    expect(offshore).toHaveAttribute('href', '/servicos/offshore');
    expect(offshore.querySelector('svg[aria-hidden="true"]')).toBeInTheDocument();
  });

  it('mantém a colmeia sem espaçamento entre as células', () => {
    render(<MemoryRouter><SolutionsSection /></MemoryRouter>);

    const section = screen.getByRole('region', { name: 'Áreas de atuação' });
    const grid = within(section).getByRole('link', { name: /Siderurgia/i }).parentElement;
    expect(grid).not.toBeNull();
    expect(getComputedStyle(grid!).gap).toBe('0px');
  });

  it('destaca o resumo da área quando seu ícone recebe hover ou foco', async () => {
    const user = userEvent.setup();
    render(<MemoryRouter><SolutionsSection /></MemoryRouter>);

    const section = screen.getByRole('region', { name: 'Áreas de atuação' });
    const spotlight = within(section).getByRole('complementary', { name: 'Área em destaque' });
    await user.hover(within(section).getByRole('link', { name: /Caldeiraria/i }));
    expect(within(spotlight).getByText('Peças, estruturas e conjuntos feitos sob medida.')).toBeInTheDocument();

    fireEvent.focus(within(section).getByRole('link', { name: /Projetos especiais/i }));
    expect(within(spotlight).getByText('Engenharia aplicada aos requisitos de cada desafio.')).toBeInTheDocument();

    await user.hover(within(section).getByRole('link', { name: /Offshore/i }));
    expect(within(spotlight).getByText('Fabricação, montagem e manutenção para operações no mar.')).toBeInTheDocument();

    fireEvent.focus(within(section).getByRole('link', { name: /Linha Amarela/i }));
    expect(within(spotlight).getByText('Componentes e soluções para máquinas de construção e implementos.')).toBeInTheDocument();
  });
});
