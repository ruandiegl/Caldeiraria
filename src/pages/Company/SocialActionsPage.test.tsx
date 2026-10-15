import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import SocialActionsPage from './SocialActionsPage';

describe('Ações Sociais', () => {
  it('mostra a mensagem do cliente e sinaliza mídia ainda não aprovada', () => {
    render(<MemoryRouter><SocialActionsPage /></MemoryRouter>);
    expect(screen.getByRole('heading', { level: 1, name: /ações sociais/i })).toBeInTheDocument();
    expect(screen.getByText(/responsabilidade vai muito além dos limites dos nossos parques industriais/i)).toBeInTheDocument();
    expect(screen.getByText(/transformar o protagonismo industrial em desenvolvimento humano/i)).toBeInTheDocument();
    expect(screen.getByText(/fotos.*aguardando aprovação/i)).toBeInTheDocument();
    expect(document.body).not.toHaveTextContent('(fotos para ações sociais');
  });
});
