import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { HumanHero } from './HumanHero';

describe('hero da Home', () => {
  it('mantém o título e o conteúdo sem faixas decorativas', () => {
    const { container } = render(<MemoryRouter><HumanHero /></MemoryRouter>);
    const section = container.querySelector('section');

    expect(section?.querySelectorAll('[data-hero-tape]')).toHaveLength(0);
    expect(section).not.toHaveTextContent('METALÚRGICA VULCANO');
    expect(screen.getByRole('heading', { level: 1, name: 'Gente que transforma engenharia em realidade' })).toBeInTheDocument();
  });
});
