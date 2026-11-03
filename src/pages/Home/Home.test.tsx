import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { segmentsContent } from '@/content/segmentsContent';
import Home from './index';

describe('Home no layout aprovado pelo cliente', () => {
  it('apresenta um título acessível, a foto antes da grade e os seis segmentos na ordem de origem', () => {
    const { container } = render(<MemoryRouter><Home /></MemoryRouter>);
    const mainPhoto = container.querySelector('[data-testid="home-main-photo"]');
    const overview = container.querySelector('[data-testid="segment-overview"]');
    const image = mainPhoto?.querySelector('img');

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 1, name: /metalúrgica vulcano/i })).toBeInTheDocument();
    expect(mainPhoto).toBeInTheDocument();
    expect(overview).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(Boolean(image!.compareDocumentPosition(overview!) & Node.DOCUMENT_POSITION_FOLLOWING)).toBe(true);

    const headings = screen.getAllByRole('heading', { level: 2 }).map(({ textContent }) => textContent);
    expect(headings).toEqual(segmentsContent.map(({ title }) => title));
    for (const segment of segmentsContent) {
      const link = screen.getAllByRole('link').find((candidate) => candidate.getAttribute('href') === `/segmentos/${segment.slug}`);
      expect(link).toBeInTheDocument();
      expect(screen.getByText(segment.homeSummary)).toBeVisible();
    }
  });

  it('não inclui os teasers, os indicadores antigos nem títulos editoriais fora do layout', () => {
    render(<MemoryRouter><Home /></MemoryRouter>);
    expect(screen.queryByText(/gente que transforma engenharia em realidade/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/por dentro do trabalho/i)).not.toBeInTheDocument();
    expect(screen.queryByText('+200k')).not.toBeInTheDocument();
    expect(screen.queryByText(/imagem aguardando seleção/i)).not.toBeInTheDocument();
  });
});
