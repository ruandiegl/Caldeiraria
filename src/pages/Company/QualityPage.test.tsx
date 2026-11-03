import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import QualityPage from './QualityPage';

describe('Qualidade institucional', () => {
  it('distingue a certificação vigente das normas em transição e preserva a prosa', () => {
    const { container } = render(<MemoryRouter><QualityPage /></MemoryRouter>);
    expect(screen.getByRole('heading', { level: 1, name: /qualidade/i })).toBeInTheDocument();
    expect(screen.getByText(/ISO 9001:2015 vigente/i)).toBeInTheDocument();
    expect(screen.getByText(/ISO 14001 e ISO 45001 em transição/i)).toBeInTheDocument();
    expect(screen.getByText(/a busca pela perfeição técnica caminha lado a lado/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /certificações técnicas/i })).toHaveAttribute('href', '/certificacoes');
    expect(document.body).not.toHaveTextContent('(link para o cert ISO9001)');
    expect(container.querySelector('#certificacoes')).toBeInTheDocument();
  });
});
