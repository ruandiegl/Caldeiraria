import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { institutionalContent } from '@/content/institutionalContent';
import HistoryPage from './HistoryPage';

describe('página História', () => {
  it('identifica a fotografia de demonstração da capa', () => {
    render(<MemoryRouter><HistoryPage /></MemoryRouter>);
    expect(screen.getByText(/imagem de demonstração.*unsplash/i)).toBeVisible();
  });

  it('mostra carrossel e texto completo de história e identidade, sem catálogo comercial', () => {
    render(<MemoryRouter><HistoryPage /></MemoryRouter>);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('region', { name: /linha do tempo de marcos históricos/i })).toBeInTheDocument();
    for (const source of [9, 10, 13, 15, 18, 20]) {
      const text = institutionalContent.history.paragraphs.find((p) => p.originRefs.some((ref) => ref.documentId === 'word-18-10' && ref.paragraph === source))!.text;
      expect(screen.getByText(text)).toBeInTheDocument();
    }
    for (const source of [22, 24, 26, 27, 28, 29, 30]) {
      const text = institutionalContent.identity.paragraphs.find((p) => p.originRefs.some((ref) => ref.documentId === 'word-18-10' && ref.paragraph === source))!.text;
      expect(screen.getByText(text)).toBeInTheDocument();
    }
    expect(screen.queryByRole('heading', { name: /segmentos de atuação|catálogo técnico/i })).not.toBeInTheDocument();
  });

  it('liga o primeiro slide a um capítulo existente', () => {
    const { container } = render(<MemoryRouter><HistoryPage /></MemoryRouter>);
    const jump = screen.getByRole('link', { name: /ler capítulo completo/i });
    expect(jump).toHaveAttribute('href', '/empresa/historia#origem');
    expect(container.querySelector('#origem')).toBeInTheDocument();
    expect(container.querySelector('#expansao')).toBeInTheDocument();
    expect(container.querySelector('#futuro')).toBeInTheDocument();
  });
});
