import '@testing-library/jest-dom/vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { StructureSection } from './StructureSection';

type Counter = { value: number };
type CounterTween = {
  value: number;
  onUpdate: () => void;
  onComplete: () => void;
};

const motion = vi.hoisted(() => ({
  create: vi.fn(),
  to: vi.fn(),
}));

vi.mock('../../../motion/gsap', async () => {
  const { useLayoutEffect } = await import('react');

  return {
    gsap: { to: motion.to },
    ScrollTrigger: { create: motion.create },
    useGSAP: (callback: () => void | (() => void)) => useLayoutEffect(callback, []),
  };
});

function renderMetrics() {
  render(<MemoryRouter><StructureSection /></MemoryRouter>);
  const section = screen.getByText('Escala só faz sentido quando ajuda o trabalho a fluir.').closest('section');
  const figures = within(section!).getAllByRole('figure');
  return figures.map((figure) => figure.querySelector('strong')!);
}

describe('contagem dos dados de estrutura', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: false })));
    motion.create.mockReturnValue({ kill: vi.fn() });
    motion.to.mockReturnValue({ kill: vi.fn() });
  });

  afterEach(() => vi.unstubAllGlobals());

  it('conta ao entrar na tela e termina com os quatro valores exatos', () => {
    const values = renderMetrics();
    expect(values.map((value) => value.textContent)).toEqual([
      '50 anos', '3 unidades', '34.500 m²', '17.000 m²',
    ]);

    const triggers = motion.create.mock.calls.map(([config]) => config as { onEnter: () => void });
    expect(triggers).toHaveLength(4);
    triggers[0].onEnter();
    expect(values.map((value) => value.textContent)).toEqual([
      '0 anos', '3 unidades', '34.500 m²', '17.000 m²',
    ]);
    triggers.slice(1).forEach((trigger) => trigger.onEnter());
    expect(values.map((value) => value.textContent)).toEqual([
      '0 anos', '0 unidades', '0 m²', '0 m²',
    ]);

    const year = motion.to.mock.calls[0] as [Counter, CounterTween];
    year[0].value = 25;
    year[1].onUpdate();
    expect(values[0]).toHaveTextContent('25 anos');

    const totalArea = motion.to.mock.calls[2] as [Counter, CounterTween];
    totalArea[0].value = 17250;
    totalArea[1].onUpdate();
    expect(values[2]).toHaveTextContent('17.250 m²');

    for (const [index, target] of [50, 3, 34500, 17000].entries()) {
      const [counter, tween] = motion.to.mock.calls[index] as [Counter, CounterTween];
      expect(tween.value).toBe(target);
      counter.value = target;
      tween.onUpdate();
      tween.onComplete();
    }
    expect(values.map((value) => value.textContent)).toEqual([
      '50 anos', '3 unidades', '34.500 m²', '17.000 m²',
    ]);
  });

  it('mostra os valores finais imediatamente com movimento reduzido', () => {
    vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: true })));
    const values = renderMetrics();

    expect(motion.create).not.toHaveBeenCalled();
    expect(values.map((value) => value.textContent)).toEqual([
      '50 anos', '3 unidades', '34.500 m²', '17.000 m²',
    ]);
  });
});
