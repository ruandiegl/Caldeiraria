import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import StructurePage from './StructurePage';

describe('Estrutura institucional', () => {
  it('expõe três unidades, áreas e inventário técnico completos', () => {
    render(<MemoryRouter><StructurePage /></MemoryRouter>);
    expect(screen.getByRole('heading', { level: 1, name: /estrutura industrial/i })).toBeInTheDocument();
    for (const fact of [
      '34.500 m²', '17.000 m²', '11 pontes rolantes', '16.000 m²',
      '15.000 m²', '3.500 m²', '35 unidades', '2000 psi',
    ]) {
      expect(screen.getAllByText(new RegExp(fact, 'i')).length).toBeGreaterThan(0);
    }
    expect(screen.getByRole('link', { name: /instalações técnicas/i })).toHaveAttribute('href', '/instalacoes');
  });
});
