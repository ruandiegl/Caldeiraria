import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Contact from './index';

describe('Contato', () => {
  it('direciona Vendas e Compras por e-mail, carreira pela rota real e não confirma envio fictício', () => {
    const { container } = render(<MemoryRouter><Contact /></MemoryRouter>);

    expect(screen.getByRole('heading', { level: 1, name: 'Fale com o Grupo Vulcano' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'comercial@vulcano.ind.br' })).toHaveAttribute('href', 'mailto:comercial@vulcano.ind.br');
    expect(screen.getByRole('link', { name: 'compras@vulcano.ind.br' })).toHaveAttribute('href', 'mailto:compras@vulcano.ind.br');
    expect(screen.getByRole('link', { name: 'Conheça as oportunidades' })).toHaveAttribute('href', '/pessoas/carreira');
    expect(container.querySelector('form')).not.toBeInTheDocument();
    expect(screen.queryByText(/solicitação registrada/i)).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /denúncia|registrar um relato/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/XXXX/)).not.toBeInTheDocument();
  });

  it('exibe a ouvidoria somente quando há destino externo real', () => {
    render(<MemoryRouter><Contact whistleblowingUrl="https://canal.example.org/relato" /></MemoryRouter>);

    const reportLink = screen.getByRole('link', { name: 'Registrar um relato' });
    expect(reportLink).toHaveAttribute('href', 'https://canal.example.org/relato');
    expect(reportLink).toHaveAttribute('target', '_blank');
    expect(reportLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('ignora destinos de ouvidoria que não usam HTTP ou HTTPS', () => {
    render(<MemoryRouter><Contact whistleblowingUrl="javascript:alert(1)" /></MemoryRouter>);

    expect(screen.queryByRole('link', { name: 'Registrar um relato' })).not.toBeInTheDocument();
  });
});
