import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { facilities } from '../../content/siteData';
import Facilities from './index';

describe('Instalações técnicas', () => {
  it('identifica a fotografia de demonstração da capa', () => {
    render(<MemoryRouter><Facilities /></MemoryRouter>);
    expect(screen.getByText(/imagem de demonstração.*unsplash/i)).toBeVisible();
  });

  it('descreve as três unidades e áreas documentadas no Word', () => {
    expect(facilities.map(({ title, area }) => ({ title, area }))).toEqual([
      { title: 'Refratários e insumos siderúrgicos', area: '16.000 m²' },
      { title: 'Caldeiraria pesada', area: '15.000 m²' },
      { title: 'Caldeiraria leve', area: '3.500 m²' },
    ]);
  });

  it('mostra três unidades sem a afirmação de quatro e liga à estrutura institucional', () => {
    render(
      <MemoryRouter>
        <Facilities />
      </MemoryRouter>,
    );

    expect(screen.getAllByRole('article')).toHaveLength(3);
    expect(screen.getByText('16.000 m²')).toBeInTheDocument();
    expect(screen.getByText('15.000 m²')).toBeInTheDocument();
    expect(screen.getByText('3.500 m²')).toBeInTheDocument();
    expect(screen.queryByText(/quatro unidades/i)).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /estrutura da empresa/i })).toHaveAttribute('href', '/empresa/estrutura');
  });
});
