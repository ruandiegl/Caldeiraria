import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import EsgPage from './EsgPage';

describe('ESG institucional', () => {
  it('publica os três pilares e uma só conclusão, sem links fictícios', () => {
    render(<MemoryRouter><EsgPage /></MemoryRouter>);
    expect(screen.getByRole('heading', { level: 1, name: /esg/i })).toBeInTheDocument();
    for (const pillar of [/ambiental.*ecoeficiência/i, /social.*segurança/i, /governança.*integridade/i]) {
      expect(screen.getByRole('heading', { name: pillar })).toBeInTheDocument();
    }
    expect(screen.getAllByText(/ao unir engenharia de alta complexidade com os critérios ESG/i)).toHaveLength(1);
    expect(document.body).not.toHaveTextContent('[Link para canal de denuncia');
  });
});
