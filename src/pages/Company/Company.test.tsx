import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Company from './index';

describe('índice Empresa', () => {
  it('identifica a fotografia de demonstração da capa', () => {
    render(<MemoryRouter><Company /></MemoryRouter>);
    expect(screen.getByText(/imagem de demonstração.*unsplash/i)).toBeVisible();
  });

  it('oferece as cinco telas temáticas sem repetir a leitura integral', () => {
    const { container } = render(<MemoryRouter><Company /></MemoryRouter>);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 1, name: 'Empresa' })).toBeInTheDocument();
    for (const path of [
      '/empresa/historia', '/empresa/estrutura', '/empresa/qualidade',
      '/empresa/esg', '/empresa/acoes-sociais',
    ]) {
      expect(container.querySelector(`a[href="${path}"]`)).toBeInTheDocument();
    }
    expect(container.querySelectorAll('[data-reveal]').length).toBeGreaterThan(0);
    expect(screen.queryByRole('region', { name: /linha do tempo/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /catálogo técnico/i })).not.toBeInTheDocument();
  });
});
