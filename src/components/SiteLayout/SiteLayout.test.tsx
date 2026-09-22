import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { SiteLayout } from './index';

describe('rodapé do site', () => {
  it('apresenta Instagram, LinkedIn e WhatsApp com ícones acessíveis', () => {
    render(
      <MemoryRouter>
        <SiteLayout>
          <p>Conteúdo de teste</p>
        </SiteLayout>
      </MemoryRouter>,
    );

    for (const name of ['Instagram', 'LinkedIn', 'WhatsApp']) {
      const link = screen.getByRole('link', { name });
      expect(link.querySelector('svg')).toBeInTheDocument();
    }

    expect(screen.queryByRole('link', { name: 'YouTube' })).not.toBeInTheDocument();
  });
});

describe('estrutura de movimento do layout', () => {
  it('expõe os alvos do cabeçalho e da rota para animação escopada', () => {
    render(
      <MemoryRouter>
        <SiteLayout>
          <p>Conteúdo de teste</p>
        </SiteLayout>
      </MemoryRouter>,
    );

    expect(screen.getByRole('banner')).toHaveAttribute('data-site-header');
    expect(screen.getByTestId('route-motion-scope')).toBeInTheDocument();
  });

  it('mantém o controle acessível do menu após a integração de movimento', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <SiteLayout>
          <p>Conteúdo de teste</p>
        </SiteLayout>
      </MemoryRouter>,
    );

    const openButton = screen.getByLabelText('Abrir menu');
    await user.click(openButton);
    const closeButton = screen.getByLabelText('Fechar menu');
    await user.click(closeButton);

    expect(screen.getByLabelText('Abrir menu')).toBeInTheDocument();
  });
});
