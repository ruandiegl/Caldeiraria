import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  HEADER_GLASS_START_PX,
  REVEAL_SELECTOR,
  setupHeaderMotion,
  setupScrollReveals,
} from './siteMotion';

type TriggerConfig = {
  start?: number | string;
  onEnter?: () => void;
  onLeaveBack?: () => void;
  once?: boolean;
  interval?: number;
  batchMax?: number;
  onEnterBatch?: (elements: HTMLElement[]) => void;
};

const mocks = vi.hoisted(() => ({
  batch: vi.fn(),
  create: vi.fn(),
  killTweensOf: vi.fn(),
  set: vi.fn(),
  to: vi.fn(),
  toArray: vi.fn(),
}));

vi.mock('./gsap', () => ({
  gsap: {
    killTweensOf: mocks.killTweensOf,
    set: mocks.set,
    to: mocks.to,
    utils: {
      toArray: mocks.toArray,
    },
  },
  ScrollTrigger: {
    batch: mocks.batch,
    create: mocks.create,
  },
}));

describe('movimento global do site', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubGlobal('CSS', { supports: vi.fn(() => true) });
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 });
    mocks.toArray.mockImplementation((selector: string, root: HTMLElement) =>
      Array.from(root.querySelectorAll<HTMLElement>(selector)),
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('troca entre branco sólido e liquid glass ao cruzar o limiar', () => {
    const kill = vi.fn();
    mocks.create.mockReturnValue({ kill });
    const header = document.createElement('header');

    const cleanup = setupHeaderMotion(header, false);

    const config = mocks.create.mock.calls[0][0] as TriggerConfig;
    expect(HEADER_GLASS_START_PX).toBe(24);
    expect(config.start).toBe(24);

    config.onEnter?.();
    const glassVars = mocks.to.mock.calls.at(-1)?.[1] as Record<string, unknown>;
    expect(mocks.to).toHaveBeenLastCalledWith(
      header,
      expect.objectContaining({
        backdropFilter: 'blur(18px) saturate(150%)',
        backgroundColor: 'rgba(255, 255, 255, 0.74)',
        duration: 0.35,
        ease: 'power2.out',
        overwrite: 'auto',
      }),
    );
    expect(glassVars).not.toHaveProperty('WebkitBackdropFilter');

    config.onLeaveBack?.();
    expect(mocks.to).toHaveBeenLastCalledWith(
      header,
      expect.objectContaining({
        backdropFilter: 'blur(0px) saturate(100%)',
        backgroundColor: '#ffffff',
        boxShadow: '0 0 0 rgba(17, 24, 45, 0)',
      }),
    );

    cleanup();
    expect(kill).toHaveBeenCalledOnce();
    expect(mocks.killTweensOf).toHaveBeenCalledWith(header);
  });

  it('usa superfície quase opaca quando backdrop-filter não é suportado', () => {
    vi.stubGlobal('CSS', { supports: vi.fn(() => false) });
    mocks.create.mockReturnValue({ kill: vi.fn() });
    const header = document.createElement('header');

    setupHeaderMotion(header, false);
    const config = mocks.create.mock.calls[0][0] as TriggerConfig;
    config.onEnter?.();

    const glassVars = mocks.to.mock.calls.at(-1)?.[1] as Record<string, unknown>;
    expect(glassVars.backgroundColor).toBe('rgba(255, 255, 255, 0.94)');
    expect(glassVars).not.toHaveProperty('backdropFilter');
    expect(glassVars).not.toHaveProperty('WebkitBackdropFilter');
  });

  it('delega ao GSAP o prefixo quando somente -webkit-backdrop-filter é suportado', () => {
    const supports = vi.fn((property: string) => property === '-webkit-backdrop-filter');
    vi.stubGlobal('CSS', { supports });
    mocks.create.mockReturnValue({ kill: vi.fn() });
    const header = document.createElement('header');

    setupHeaderMotion(header, false);
    const config = mocks.create.mock.calls[0][0] as TriggerConfig;
    config.onEnter?.();

    const glassVars = mocks.to.mock.calls.at(-1)?.[1] as Record<string, unknown>;
    expect(supports).toHaveBeenCalledWith('backdrop-filter', 'blur(1px)');
    expect(supports).toHaveBeenCalledWith('-webkit-backdrop-filter', 'blur(1px)');
    expect(glassVars.backdropFilter).toBe('blur(18px) saturate(150%)');
    expect(glassVars).not.toHaveProperty('WebkitBackdropFilter');
  });

  it('respeita o scroll inicial e remove a duração com movimento reduzido', () => {
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 48 });
    mocks.create.mockReturnValue({ kill: vi.fn() });
    const header = document.createElement('header');

    setupHeaderMotion(header, true);

    expect(mocks.set).toHaveBeenCalledWith(
      header,
      expect.objectContaining({
        backdropFilter: 'blur(18px) saturate(150%)',
        backgroundColor: 'rgba(255, 255, 255, 0.74)',
      }),
    );

    const config = mocks.create.mock.calls[0][0] as TriggerConfig;
    config.onLeaveBack?.();
    expect(mocks.to).toHaveBeenLastCalledWith(
      header,
      expect.objectContaining({
        backgroundColor: '#ffffff',
        duration: 0,
      }),
    );
  });

  it('revela somente elementos do root em lote e limpa os recursos locais', () => {
    const root = document.createElement('div');
    root.innerHTML = '<article data-reveal></article><section class="reveal"></section>';
    const outside = document.createElement('div');
    outside.className = 'reveal';
    document.body.append(root, outside);

    const triggers = [{ kill: vi.fn() }, { kill: vi.fn() }];
    mocks.batch.mockReturnValue(triggers);

    const cleanup = setupScrollReveals(root, false);
    const items = Array.from(root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));

    expect(mocks.toArray).toHaveBeenCalledWith(REVEAL_SELECTOR, root);
    expect(mocks.set).toHaveBeenCalledWith(
      items,
      expect.objectContaining({ autoAlpha: 0, willChange: 'transform, opacity', y: 24 }),
    );
    expect(mocks.batch.mock.calls[0][0]).toEqual(items);

    const config = mocks.batch.mock.calls[0][1] as TriggerConfig & {
      onEnter: (elements: HTMLElement[]) => void;
    };
    expect(config).toEqual(
      expect.objectContaining({ batchMax: 4, interval: 0.08, once: true, start: 'top 84%' }),
    );

    config.onEnter(items);
    expect(mocks.to).toHaveBeenLastCalledWith(
      items,
      expect.objectContaining({
        autoAlpha: 1,
        clearProps: 'willChange',
        duration: 0.65,
        ease: 'power2.out',
        overwrite: 'auto',
        stagger: 0.08,
        y: 0,
      }),
    );

    cleanup();
    expect(triggers[0].kill).toHaveBeenCalledOnce();
    expect(triggers[1].kill).toHaveBeenCalledOnce();
    expect(mocks.killTweensOf).toHaveBeenCalledWith(items);
    expect(outside).not.toBe(items[0]);
  });

  it('mantém o conteúdo visível e não cria triggers com movimento reduzido', () => {
    const root = document.createElement('div');
    root.innerHTML = '<article data-reveal></article><section class="reveal"></section>';
    const items = Array.from(root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));

    setupScrollReveals(root, true);

    expect(mocks.batch).not.toHaveBeenCalled();
    expect(mocks.set).toHaveBeenCalledWith(items, {
      clearProps: 'opacity,visibility,transform,willChange',
    });
  });
});
