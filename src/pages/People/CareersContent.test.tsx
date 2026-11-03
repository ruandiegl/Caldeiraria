import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import CareersContent from './CareersContent';
import People from './index';

describe('Trabalhe Conosco', () => {
  it('apresenta o conteúdo completo do Word na ordem editorial e sem simular candidatura', () => {
    const { container } = render(<MemoryRouter><CareersContent /></MemoryRouter>);

    expect(screen.getByRole('heading', { level: 1, name: 'Construa o futuro da engenharia conosco' })).toBeInTheDocument();
    expect(screen.getByText(/Barra Ligas e Vulcano Constructions/)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Por que fazer parte do nosso time?' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Nosso Compromisso Humano: O Vínculo com a Nossa Agenda ESG' })).toBeInTheDocument();
    expect(screen.getByText(/Se você compartilha do nosso propósito/)).toBeInTheDocument();
    expect(container.querySelector('form')).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /candidate-se|enviar currículo|candidatar/i })).not.toBeInTheDocument();
  });

  it('habilita candidatura apenas quando recebe uma URL de aplicação', () => {
    render(<MemoryRouter><CareersContent applicationUrl="https://vagas.example.org" /></MemoryRouter>);

    const applicationLink = screen.getByRole('link', { name: 'Acessar oportunidades' });
    expect(applicationLink).toHaveAttribute('href', 'https://vagas.example.org/');
    expect(applicationLink).toHaveAttribute('target', '_blank');
    expect(applicationLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('integra o conteúdo completo na rota pública de carreira', () => {
    render(
      <MemoryRouter initialEntries={['/pessoas/carreira']}>
        <Routes><Route path="/pessoas/:topic" element={<People />} /></Routes>
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { level: 1, name: 'Construa o futuro da engenharia conosco' })).toBeInTheDocument();
  });

  it('ignora destinos de candidatura que não usam HTTP ou HTTPS', () => {
    render(<MemoryRouter><CareersContent applicationUrl="javascript:alert(1)" /></MemoryRouter>);

    expect(screen.queryByRole('link', { name: 'Acessar oportunidades' })).not.toBeInTheDocument();
  });
});
