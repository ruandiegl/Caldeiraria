import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { companyContent } from '@/content/companyContent';
import { HistoryCarousel } from './HistoryCarousel';

describe('HistoryCarousel accessible component', () => {
  it('marca somente o slide inicial com aria-current="true"', () => {
    render(<HistoryCarousel slides={companyContent.slides} />);

    const markers = screen.getAllByRole('button', { name: /^marco de/i });
    expect(markers).toHaveLength(companyContent.slides.length);
    expect(markers[0]).toHaveAttribute('aria-current', 'true');
    expect(markers[1]).not.toHaveAttribute('aria-current');
  });

  it('avança e volta entre marcos sem ultrapassar os limites', () => {
    render(<HistoryCarousel slides={companyContent.slides} />);

    const prevButton = screen.getByRole('button', { name: /marco histórico anterior/i });
    const nextButton = screen.getByRole('button', { name: /próximo marco histórico/i });

    // No início, Anterior deve estar desabilitado
    expect(prevButton).toBeDisabled();
    expect(nextButton).toBeEnabled();

    // Avança para o segundo marco
    fireEvent.click(nextButton);
    expect(prevButton).toBeEnabled();
    expect(screen.getByText(companyContent.slides[1].title)).toBeInTheDocument();

    const markers = screen.getAllByRole('button', { name: /^marco de/i });
    expect(markers[1]).toHaveAttribute('aria-current', 'true');
    expect(markers[0]).not.toHaveAttribute('aria-current');

    // Volta para o primeiro marco
    fireEvent.click(prevButton);
    expect(prevButton).toBeDisabled();
    expect(screen.getByText(companyContent.slides[0].title)).toBeInTheDocument();
  });

  it('responde às teclas ArrowRight, ArrowLeft, Home e End', () => {
    const { container } = render(<HistoryCarousel slides={companyContent.slides} />);

    const wrapper = container.querySelector('[onkeydown]') || container.firstChild;
    expect(wrapper).not.toBeNull();

    // ArrowRight avança
    fireEvent.keyDown(wrapper!, { key: 'ArrowRight' });
    expect(screen.getByText(companyContent.slides[1].title)).toBeInTheDocument();

    // End vai para o último slide
    fireEvent.keyDown(wrapper!, { key: 'End' });
    const lastIndex = companyContent.slides.length - 1;
    expect(screen.getByText(companyContent.slides[lastIndex].title)).toBeInTheDocument();

    // Próximo botão deve estar desabilitado no fim
    const nextButton = screen.getByRole('button', { name: /próximo marco histórico/i });
    expect(nextButton).toBeDisabled();

    // ArrowLeft volta um
    fireEvent.keyDown(wrapper!, { key: 'ArrowLeft' });
    expect(screen.getByText(companyContent.slides[lastIndex - 1].title)).toBeInTheDocument();

    // Home volta para o primeiro
    fireEvent.keyDown(wrapper!, { key: 'Home' });
    expect(screen.getByText(companyContent.slides[0].title)).toBeInTheDocument();
  });

  it('seleciona marco diretamente pelo clique no botão da linha do tempo', () => {
    render(<HistoryCarousel slides={companyContent.slides} />);

    const markers = screen.getAllByRole('button', { name: /^marco de/i });
    fireEvent.click(markers[2]);

    expect(screen.getByText(companyContent.slides[2].title)).toBeInTheDocument();
    expect(markers[2]).toHaveAttribute('aria-current', 'true');
  });

  it('anuncia novo conteúdo com região aria-live polite', () => {
    const { container } = render(<HistoryCarousel slides={companyContent.slides} />);

    const liveRegion = container.querySelector('[aria-live="polite"]');
    expect(liveRegion).toBeInTheDocument();
    expect(liveRegion).toHaveTextContent(companyContent.slides[0].title);
  });

  it('suporta swipe horizontal sem travar rolagem vertical (touch-action: pan-y)', () => {
    render(<HistoryCarousel slides={companyContent.slides} />);

    const track = screen.getByLabelText(/linha do tempo de marcos históricos/i);
    expect(track).toBeInTheDocument();

    // Simula arrasto de 50px para a esquerda (próximo slide)
    fireEvent.pointerDown(track, { clientX: 200, pointerId: 1 });
    fireEvent.pointerUp(track, { clientX: 140, pointerId: 1 });

    expect(screen.getByText(companyContent.slides[1].title)).toBeInTheDocument();
  });

  it('oferece link para o capítulo completo do slide ativo', () => {
    render(<HistoryCarousel slides={companyContent.slides} />);

    const jumpLink = screen.getByRole('link', { name: /ler capítulo completo/i });
    expect(jumpLink).toHaveAttribute('href', '/empresa/historia#origem');

    // Ao avançar para o slide de modernização/unidades
    const nextButton = screen.getByRole('button', { name: /próximo marco histórico/i });
    fireEvent.click(nextButton); // vai pro 2012
    fireEvent.click(nextButton); // vai pro unidades
    expect(jumpLink).toHaveAttribute('href', '/empresa/estrutura#capacidades');
  });

  it('identifica a fotografia de demonstração sem atribuí-la à Vulcano', () => {
    render(<HistoryCarousel slides={companyContent.slides} />);
    expect(screen.getByText(/imagem de demonstração.*substituir por foto autorizada/i)).toBeInTheDocument();
  });
});
