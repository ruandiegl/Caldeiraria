import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Home from './index';

function renderHome() {
  render(<MemoryRouter><Home /></MemoryRouter>);
}

describe('Home humanizada', () => {
  it('apresenta a história, o trabalho e os convites principais em uma página visual', () => {
    renderHome();

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 1, name: /gente que transforma engenharia em realidade/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /por dentro do trabalho/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /o futuro também é construído/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /seu próximo desafio começa/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /fale com a vulcano/i })).toHaveAttribute('href', '/contato');
  });

  it('resume os temas institucionais e leva à leitura completa nas rotas próprias', () => {
    renderHome();

    expect(screen.getByRole('heading', { name: /50 anos de seriedade, técnica e inovação/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /o que nos move/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /escala só faz sentido/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /segurança, precisão e respeito à vida/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /responsabilidade em cada decisão/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /conheça nossa trajetória/i })).toHaveAttribute('href', '/empresa/historia');
    expect(screen.getByRole('link', { name: /conheça a história completa/i })).toHaveAttribute('href', '/empresa/historia');
    expect(screen.getByRole('link', { name: /conheça nossa estrutura/i })).toHaveAttribute('href', '/empresa/estrutura');
    expect(screen.getByRole('link', { name: /conheça nossos compromissos/i })).toHaveAttribute('href', '/empresa/qualidade');
    expect(screen.getByRole('link', { name: /conheça nossa agenda esg/i })).toHaveAttribute('href', '/empresa/esg');
  });

  it('mostra sínteses e dados aprovados sem reproduzir o inventário e os parágrafos integrais', () => {
    renderHome();

    expect(screen.getByRole('figure', { name: '3 unidades vizinhas' })).toBeInTheDocument();
    expect(screen.getByRole('figure', { name: '34.500 m² de área total' })).toBeInTheDocument();
    expect(screen.getByRole('figure', { name: '17.000 m² de área coberta' })).toBeInTheDocument();
    expect(screen.getByText('ISO 9001:2015')).toBeInTheDocument();
    expect(screen.getByText('ISO 14001 · ISO 45001')).toBeInTheDocument();
    expect(screen.queryByText(/Empilhadeiras de 2,5 a 4 toneladas/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Ao unir engenharia de alta complexidade com os critérios ESG mais rigorosos do país/i)).not.toBeInTheDocument();
    expect(screen.queryByText('+200k')).not.toBeInTheDocument();
    expect(screen.queryByText('LATAM')).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /^Segmentos$/i })).not.toBeInTheDocument();
  });
});
