import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { productGroups } from '@/content/productsContent';
import { segmentsContent } from '@/content/segmentsContent';
import { AppRoutes } from '@/routes/routes';

describe('catálogo de Produtos', () => {
  it('renderiza os 14 grupos e mantém cada ligação interna em uma âncora existente', () => {
    render(<MemoryRouter initialEntries={['/produtos']}><AppRoutes /></MemoryRouter>);
    expect(screen.getByRole('heading', { level: 1, name: /produtos/i })).toBeInTheDocument();

    for (const group of productGroups) {
      expect(screen.getByRole('heading', { name: group.title })).toBeInTheDocument();
    }

    for (const item of productGroups.flatMap(({ items }) => items)) {
      if (!item.href) {
        expect(screen.getByText(item.label)).toBeInTheDocument();
        continue;
      }
      const link = screen.getByRole('link', { name: item.label });
      expect(link).toHaveAttribute('href', item.href);
      const [path, hash] = item.href.split('#');
      const slug = path.split('/').at(-1);
      const segment = segmentsContent.find((candidate) => candidate.slug === slug);
      const anchorExists = segment?.blocks.some(({ id, paragraphs }) =>
        id === hash || paragraphs.some(({ anchorId }) => anchorId === hash),
      );
      expect(anchorExists, item.href).toBe(true);
      expect(hash).not.toBe('');
    }
  });
});
