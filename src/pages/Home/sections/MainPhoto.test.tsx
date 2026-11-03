import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { describe, expect, it } from 'vitest';
import { MainPhoto } from './MainPhoto';
import { HomePhotoSection } from '../homeStyles';

describe('foto principal da Home', () => {
  it('carrega com prioridade, tamanhos responsivos e proporção reservada', () => {
    const { container } = render(<MainPhoto />);
    const image = screen.getByRole('img', { name: /prensa hidráulica.*equipe usando EPIs/i });
    expect(image).toHaveAttribute('loading', 'eager');
    expect(image).toHaveAttribute('fetchpriority', 'high');
    expect(image).toHaveAttribute('srcset');
    expect(image.getAttribute('sizes')).toContain('1360px');
    expect(image.getAttribute('sizes')).toContain('calc(100vw - 40px)');
    expect(image).toHaveAttribute('width');
    expect(image).toHaveAttribute('height');
    expect(container.querySelector('[data-photo-frame]')).toHaveAttribute('data-photo-ratio', '3:1');
    expect(container.querySelector('[data-photo-frame]')).toHaveAttribute('data-mobile-photo-ratio', '16:7');
    expect(screen.queryByText(/imagem fictícia.*foto autorizada/i)).not.toBeInTheDocument();
  });

  it('mantém o espaço reservado e informa quando a imagem falha', () => {
    const { container } = render(<MainPhoto />);
    fireEvent.error(screen.getByRole('img', { name: /prensa hidráulica.*equipe usando EPIs/i }));
    expect(screen.getByRole('img', { name: /imagem principal indisponível/i })).toBeInTheDocument();
    expect(container.querySelector('[data-photo-frame]')).toBeInTheDocument();
  });

  it('alinha o topo da foto com a referência abaixo do cabeçalho', () => {
    const sheet = new ServerStyleSheet();
    renderToString(sheet.collectStyles(<HomePhotoSection />));
    const styles = sheet.getStyleTags();
    sheet.seal();

    expect(styles).toContain('padding:calc(68px + 24px) 0 0');
  });
});
