import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { AppRoutes } from '@/routes/routes';
import { segmentsContent } from '@/content/segmentsContent';

describe('índice de Segmentos', () => {
  it('apresenta os seis segmentos com links para seus slugs canônicos', () => {
    render(<MemoryRouter initialEntries={['/segmentos']}><AppRoutes /></MemoryRouter>);
    expect(screen.getByRole('heading', { level: 1, name: /segmentos/i })).toBeInTheDocument();
    for (const segment of segmentsContent) {
      const link = screen.getAllByRole('link').find((candidate) => candidate.getAttribute('href') === `/segmentos/${segment.slug}`);
      expect(link).toHaveTextContent(segment.title);
      expect(screen.getByText(segment.homeSummary)).toBeVisible();
    }
  });
});
