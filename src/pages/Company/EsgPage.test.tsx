import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { institutionalContent } from '@/content/institutionalContent';
import EsgPage from './EsgPage';

describe('ESG institucional', () => {
  it('apresenta os três pilares e retém a afirmação de canal ativo enquanto não há URL', () => {
    render(<MemoryRouter><EsgPage /></MemoryRouter>);
    expect(screen.getByRole('heading', { level: 1, name: 'ESG' })).toBeInTheDocument();
    expect(screen.getByText(/Ecoeficiência e Descarbonização/i)).toBeInTheDocument();
    expect(screen.getByText(/Segurança, Saúde e Direitos Humanos/i)).toBeInTheDocument();
    expect(screen.getByText(/Integridade, Ética e Compliance/i)).toBeInTheDocument();
    expect(screen.queryByText(/canais de denúncia ativos/i)).not.toBeInTheDocument();
    expect(institutionalContent.esg.pendingParagraphs?.[0].originRefs).toEqual([
      { documentId: 'word-18-10', paragraph: 88 },
      { documentId: 'word-18-10', paragraph: 197 },
    ]);
  });
});
