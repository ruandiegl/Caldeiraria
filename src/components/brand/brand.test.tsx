import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { CallToAction } from './CallToAction';
import { EditorialMedia } from './EditorialMedia';

describe('primitives de marca', () => {
  it('expõe o estado editorial da imagem enquanto o asset real não foi aprovado', () => {
    render(
      <EditorialMedia
        media={{
          src: null,
          alt: 'Equipe trabalhando',
          caption: 'Imagem pendente',
          status: 'pending-asset',
        }}
      />,
    );

    expect(screen.getByRole('img')).toHaveAttribute('data-media-status', 'pending-asset');
  });

  it('mantém CTAs navegáveis quando compostos com links', () => {
    render(
      <MemoryRouter>
        <CallToAction
          primary={{ label: 'Conheça a empresa', href: '/empresa' }}
          secondary={{ label: 'Fale conosco', href: '/contato' }}
        />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: 'Conheça a empresa' })).toHaveAttribute('href', '/empresa');
    expect(screen.getByRole('link', { name: 'Fale conosco' })).toHaveAttribute('href', '/contato');
  });
});
