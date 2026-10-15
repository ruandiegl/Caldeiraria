import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { SiteLayout } from './index';

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

    fireEvent.click(within(screen.getByRole('banner')).getByRole('link', { name: 'História' }));
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

  it('reúne a visão geral e as cinco rotas existentes em um submenu identificado', () => {
    const header = renderLayout();
    const submenu = within(header.getByRole('group', { name: 'Seções da empresa' }));

    expect(header.getByRole('link', { name: 'Empresa' })).toHaveAttribute('href', '/empresa');

    for (const [name, href] of [
      ['Visão geral da empresa', '/empresa'],
      ['História', '/empresa/historia'],
      ['Estrutura', '/empresa/estrutura'],
      ['Qualidade', '/empresa/qualidade'],
      ['ESG', '/empresa/esg'],
      ['Ações Sociais', '/empresa/acoes-sociais'],
    ]) {
      expect(submenu.getByRole('link', { name })).toHaveAttribute('href', href);
    }
  });

  it('abre o submenu com o mouse e o fecha ao sair', async () => {
    const user = userEvent.setup();
    const header = renderLayout();
    const empresa = header.getByRole('link', { name: 'Empresa' });

    expect(empresa).toHaveAttribute('aria-expanded', 'false');
    await user.hover(empresa);
    expect(empresa).toHaveAttribute('aria-expanded', 'true');
    await user.unhover(empresa);
    expect(empresa).toHaveAttribute('aria-expanded', 'false');
  });

  it('abre o submenu por teclado e permite percorrer seus links', async () => {
    const user = userEvent.setup();
    const header = renderLayout();
    const empresa = header.getByRole('link', { name: 'Empresa' });

    await user.tab();
    await user.tab();
    await user.tab();
    expect(empresa).toHaveFocus();
    expect(empresa).toHaveAttribute('aria-expanded', 'true');
    await user.tab();
    expect(header.getByRole('link', { name: 'Visão geral da empresa' })).toHaveFocus();
    await user.tab();
    expect(header.getByRole('link', { name: 'História' })).toHaveFocus();
  });

  it('inclui as seções no menu móvel e o fecha após selecionar uma rota', async () => {
    const user = userEvent.setup();
    const header = renderLayout();

    await user.click(header.getByLabelText('Abrir menu'));
    expect(header.getByLabelText('Fechar menu')).toBeInTheDocument();
    fireEvent.click(header.getByRole('link', { name: 'Ações Sociais' }));
    expect(header.getByLabelText('Abrir menu')).toBeInTheDocument();
  });
});
