import '@testing-library/jest-dom/vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { AppRoutes } from '@/routes/routes';

function open(path: string) {
  render(<MemoryRouter initialEntries={[path]}><AppRoutes /></MemoryRouter>);
}

describe('rotas institucionais', () => {
  it('faz de /empresa um índice com cinco destinos', () => {
    open('/empresa');
    expect(screen.getByRole('heading', { level: 1, name: /empresa/i })).toBeInTheDocument();
    for (const path of [
      '/empresa/historia', '/empresa/estrutura', '/empresa/qualidade',
      '/empresa/esg', '/empresa/acoes-sociais',
    ]) {
      expect(screen.getByRole('main').querySelector(`a[href="${path}"]`)).toBeInTheDocument();
    }
  });

  it.each([
    ['/empresa/historia', /nossa história/i],
    ['/empresa/estrutura', /estrutura industrial/i],
    ['/empresa/qualidade', /qualidade/i],
    ['/empresa/esg', /esg/i],
    ['/empresa/acoes-sociais', /ações sociais/i],
  ])('abre diretamente %s com navegação de retorno', (path, heading) => {
    open(path);
    expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument();
    const subnav = screen.getByRole('navigation', { name: /seções da empresa/i });
    expect(subnav).toBeInTheDocument();
    expect(within(subnav).getByRole('link', { name: /visão geral da empresa/i })).toHaveAttribute('href', '/empresa');
  });

  it('mantém a página técnica de instalações', () => {
    open('/instalacoes');
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('mantém a página técnica de certificações', () => {
    open('/certificacoes');
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('leva um caminho desconhecido de Empresa de volta ao índice', async () => {
    open('/empresa/assunto-inexistente');
    await waitFor(() => expect(screen.getByRole('heading', { level: 1, name: /empresa/i })).toBeInTheDocument());
  });
});
