import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { getSegment, segmentsContent } from '@/content/segmentsContent';
import { SegmentDetailPage } from './SegmentDetailPage';

describe('detalhes de Segmentos', () => {
  it.each(segmentsContent.map(({ slug, title }) => [slug, title]))('renderiza o conteúdo completo de %s', (slug, title) => {
    const segment = getSegment(slug)!;
    const { container } = render(
      <MemoryRouter initialEntries={[`/segmentos/${slug}`]}>
        <Routes>
          <Route path="/segmentos" element={<h1>Índice de Segmentos</h1>} />
          <Route path="/segmentos/:slug" element={<SegmentDetailPage />} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { level: 1, name: title })).toBeInTheDocument();
    expect(screen.getByText(segment.introduction[0].text)).toBeInTheDocument();
    for (const block of segment.blocks) {
      expect(container.querySelector(`[id="${block.id}"]`)).toBeInTheDocument();
      for (const paragraph of block.paragraphs) {
        if (paragraph.anchorId) expect(container.querySelector(`[id="${paragraph.anchorId}"]`)).toBeInTheDocument();
      }
    }
    expect(screen.getByRole('link', { name: /todos os segmentos/i })).toHaveAttribute('href', '/segmentos');
  });

  it('redireciona um slug desconhecido para o índice', () => {
    render(
      <MemoryRouter initialEntries={['/segmentos/nao-existe']}>
        <Routes>
          <Route path="/segmentos" element={<h1>Índice de Segmentos</h1>} />
          <Route path="/segmentos/:slug" element={<SegmentDetailPage />} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Índice de Segmentos' })).toBeInTheDocument();
  });
});
