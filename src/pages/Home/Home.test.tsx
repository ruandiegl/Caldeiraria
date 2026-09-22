import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Home from './index';

describe('Home humanizada', () => {
  it('apresenta a tese humana da Vulcano e a narrativa do trabalho real', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { level: 1, name: /gente que transforma engenharia em realidade/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /por dentro do trabalho/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /conheça nossa trajetória/i })).toBeInTheDocument();
  });

  it('exibe apenas os dados estruturais aprovados para esta etapa', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(screen.getByText('3 unidades')).toBeInTheDocument();
    expect(screen.getByText('34.500 m²')).toBeInTheDocument();
    expect(screen.queryByText('+200k')).not.toBeInTheDocument();
    expect(screen.queryByText('LATAM')).not.toBeInTheDocument();
  });

  it('oferece revelação progressiva em cada seção narrativa após o hero', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const sectionTitles = [
      /50 anos de seriedade/i,
      /por dentro do trabalho: a capacidade/i,
      /escala só faz sentido/i,
      /soluções para diferentes momentos/i,
      /segurança, precisão e respeito à vida/i,
      /o futuro também é construído/i,
      /seu próximo desafio começa/i,
    ];

    for (const title of sectionTitles) {
      const section = screen.getByRole('heading', { name: title }).closest('section');
      expect(section, `Seção semântica ausente para ${title}`).not.toBeNull();
      expect(section?.querySelector('[data-reveal]'), `Movimento ausente para ${title}`).not.toBeNull();
    }
  });
});
