import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import { describe, expect, it, vi } from 'vitest';
import { SiteLayout } from './index';
import { Header, Nav } from './styles';

function mockViewport(width = 390) {
  const originalWidth = window.innerWidth;
  Object.defineProperty(window, 'innerWidth', { configurable: true, value: width });
  const matchMedia = vi.spyOn(window, 'matchMedia').mockImplementation((query) => ({
    matches: query === '(max-width: 1279px)' && width <= 1279,
    media: query,
    onchange: null,
    addListener: vi.fn(), removeListener: vi.fn(),
    addEventListener: vi.fn(), removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
  return () => {
    matchMedia.mockRestore();
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: originalWidth });
  };
}

describe('rodapé do site', () => {
  it('não publica destinos sociais e telefones fictícios', () => {
    render(
      <MemoryRouter>
        <SiteLayout>
          <p>Conteúdo de teste</p>
        </SiteLayout>
      </MemoryRouter>,
    );

    expect(screen.queryByRole('link', { name: /Instagram|LinkedIn|WhatsApp/i })).not.toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /solicitar orçamento/i }).length).toBeGreaterThan(0);
  });
});

describe('estrutura de movimento do layout', () => {
  it('move o foco para o título da nova rota selecionada no menu', async () => {
    render(
      <MemoryRouter initialEntries={['/empresa']}>
        <SiteLayout>
          <Routes>
            <Route path="/empresa" element={<h1>Empresa</h1>} />
            <Route path="/empresa/historia" element={<h1>Nossa História</h1>} />
          </Routes>
        </SiteLayout>
      </MemoryRouter>,
    );

    const header = within(screen.getByRole('banner'));
    fireEvent.click(header.getByRole('button', { name: 'Expandir seções de Empresa' }));
    fireEvent.click(header.getByRole('link', { name: 'História' }));
    expect(screen.getByRole('heading', { name: 'Nossa História' })).toHaveFocus();
  });

  it('não usa rolagem suave quando a pessoa reduz movimento', () => {
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    const matchMedia = vi.spyOn(window, 'matchMedia').mockImplementation((query) => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: vi.fn(), removeListener: vi.fn(),
      addEventListener: vi.fn(), removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
    try {
      render(<MemoryRouter><SiteLayout><h1>Empresa</h1></SiteLayout></MemoryRouter>);
      expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'auto' });
    } finally {
      scrollTo.mockRestore();
      matchMedia.mockRestore();
    }
  });

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

  it('controla o menu com aria-expanded e o fecha com Escape devolvendo o foco', async () => {
    const restoreViewport = mockViewport();
    const user = userEvent.setup();
    try {
      render(
        <MemoryRouter>
          <SiteLayout>
            <p>Conteúdo de teste</p>
          </SiteLayout>
        </MemoryRouter>,
      );

      const openButton = screen.getByRole('button', { name: 'Menu' });
      expect(openButton).toHaveAttribute('aria-expanded', 'false');
      expect(openButton).toHaveAttribute('aria-controls', 'primary-navigation');
      await user.click(openButton);
      expect(openButton).toHaveAttribute('aria-expanded', 'true');
      await user.keyboard('{Escape}');
      expect(openButton).toHaveAttribute('aria-expanded', 'false');
      expect(openButton).toHaveFocus();
    } finally {
      restoreViewport();
    }
  });
});

describe('menu Empresa no cabeçalho', () => {
  function renderLayout() {
    render(
      <MemoryRouter>
        <SiteLayout>
          <p>Conteúdo de teste</p>
        </SiteLayout>
      </MemoryRouter>,
    );

    return within(screen.getByRole('banner'));
  }

  it('mantém Empresa como link e oferece História e Estrutura no expansor', () => {
    const header = renderLayout();
    expect(header.getByRole('link', { name: 'Empresa' })).toHaveAttribute('href', '/empresa');
    expect(header.getByRole('button', { name: 'Expandir seções de Empresa' })).toHaveAttribute('aria-controls', 'company-sections');
    fireEvent.click(header.getByRole('button', { name: 'Expandir seções de Empresa' }));
    const submenu = within(header.getByRole('group', { name: 'Seções da empresa' }));

    for (const [name, href] of [
      ['Visão geral da empresa', '/empresa'],
      ['História', '/empresa/historia'],
      ['Estrutura', '/empresa/estrutura'],
    ]) {
      expect(submenu.getByRole('link', { name })).toHaveAttribute('href', href);
    }
  });

  it('destaca Trabalhe Conosco como a ação principal do cabeçalho', () => {
    const header = renderLayout();
    expect(header.getByRole('link', { name: 'Trabalhe Conosco' })).toHaveAttribute('class', 'nav-careers');
  });

  it('expande o submenu com botão e teclado para percorrer seus links', async () => {
    const user = userEvent.setup();
    const header = renderLayout();
    const toggle = header.getByRole('button', { name: 'Expandir seções de Empresa' });

    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    toggle.focus();
    await user.keyboard('{Enter}');
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await user.tab();
    expect(header.getByRole('link', { name: 'Visão geral da empresa' })).toHaveFocus();
    await user.tab();
    expect(header.getByRole('link', { name: 'História' })).toHaveFocus();
  });

  it('fecha o menu após selecionar uma rota e marca o destino atual', async () => {
    const restoreViewport = mockViewport();
    const user = userEvent.setup();
    try {
      const header = renderLayout();
      const menuButton = header.getByRole('button', { name: 'Menu' });
      await user.click(menuButton);
      expect(menuButton).toHaveAttribute('aria-expanded', 'true');
      await user.click(header.getByRole('link', { name: 'Ações Sociais' }));
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
      expect(header.getByRole('link', { name: 'Ações Sociais', hidden: true })).toHaveAttribute('aria-current', 'page');
    } finally {
      restoreViewport();
    }
  });

  it('remove os links da navegação fechada da sequência de foco em telas compactas', () => {
    const restoreViewport = mockViewport();
    try {
      const header = renderLayout();
      const navigation = header.getByLabelText('Navegação principal');
      expect(navigation).toHaveAttribute('inert');
      expect(header.getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-expanded', 'false');
    } finally {
      restoreViewport();
    }
  });

  it('usa o menu compacto até 1279 px e libera a navegação completa em 1280 px', async () => {
    const restoreCompactViewport = mockViewport(1279);
    const compact = render(<MemoryRouter><SiteLayout><h1>Home</h1></SiteLayout></MemoryRouter>);
    try {
      await waitFor(() => expect(screen.getByRole('button', { name: 'Menu' })).toBeVisible());
      expect(compact.container.querySelector('#primary-navigation')).toHaveAttribute('inert');
    } finally {
      compact.unmount();
      restoreCompactViewport();
    }

    const restoreFullViewport = mockViewport(1280);
    try {
      render(<MemoryRouter><SiteLayout><h1>Home</h1></SiteLayout></MemoryRouter>);
      await waitFor(() => expect(document.querySelector('button[aria-label="Menu"]')).not.toBeVisible());
      expect(screen.getByRole('navigation', { name: 'Navegação principal' })).not.toHaveAttribute('inert');
    } finally {
      restoreFullViewport();
    }
  });
});

describe('alinhamento do cabeçalho desktop', () => {
  it('distribui a navegação por toda a faixa central do cabeçalho', () => {
    const sheet = new ServerStyleSheet();
    renderToString(sheet.collectStyles(
      <Header $open={false}>
        <Nav $open={false}>
          <ul className="primary-list"><li><a href="/">Home</a></li></ul>
        </Nav>
      </Header>,
    ));

    const styles = sheet.getStyleTags();
    sheet.seal();
    expect(styles).toMatch(/ul\.primary-list\{[^}]*justify-content:space-between/);
  });
});
