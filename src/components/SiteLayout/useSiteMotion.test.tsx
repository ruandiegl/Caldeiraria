import { StrictMode, useRef } from 'react';
import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useSiteMotion } from './useSiteMotion';

const mocks = vi.hoisted(() => ({
  headerCleanups: [] as Array<ReturnType<typeof vi.fn>>,
  matchMedia: vi.fn(),
  revealCleanups: [] as Array<ReturnType<typeof vi.fn>>,
  setupHeaderMotion: vi.fn(),
  setupScrollReveals: vi.fn(),
}));

vi.mock('../../motion/gsap', async () => {
  const { useLayoutEffect, useRef } = await import('react');

  return {
    gsap: { matchMedia: mocks.matchMedia },
    useGSAP: (
      callback: () => void | (() => void),
      options?: { dependencies?: ReadonlyArray<unknown> },
    ) => {
      const dependencyKey = options?.dependencies?.join('|') ?? '';
      const callbackRef = useRef(callback);
      callbackRef.current = callback;
      return useLayoutEffect(() => callbackRef.current(), [dependencyKey]);
    },
  };
});

vi.mock('../../motion/siteMotion', () => ({
  setupHeaderMotion: mocks.setupHeaderMotion,
  setupScrollReveals: mocks.setupScrollReveals,
}));

function MotionHarness({ pathname }: { pathname: string }) {
  const headerRef = useRef<HTMLElement>(null);
  const routeRef = useRef<HTMLDivElement>(null);

  useSiteMotion({ headerRef, routeRef, pathname });

  return (
    <>
      <header ref={headerRef} />
      <div ref={routeRef} />
    </>
  );
}

describe('ciclo de vida do movimento no layout', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mocks.headerCleanups.length = 0;
    mocks.revealCleanups.length = 0;

    mocks.setupHeaderMotion.mockImplementation(() => {
      const cleanup = vi.fn();
      mocks.headerCleanups.push(cleanup);
      return cleanup;
    });
    mocks.setupScrollReveals.mockImplementation(() => {
      const cleanup = vi.fn();
      mocks.revealCleanups.push(cleanup);
      return cleanup;
    });
    mocks.matchMedia.mockImplementation(() => {
      let cleanup: void | (() => void);

      return {
        add: vi.fn(
          (
            _queries: Record<string, string>,
            callback: (context: { conditions: Record<string, boolean> }) => void | (() => void),
          ) => {
            cleanup = callback({ conditions: { motionOK: true, reduceMotion: false } });
          },
        ),
        revert: vi.fn(() => cleanup?.()),
      };
    });
  });

  it('equilibra setup e cleanup em Strict Mode, troca de rota e unmount', () => {
    const { rerender, unmount } = render(
      <StrictMode>
        <MotionHarness pathname="/" />
      </StrictMode>,
    );
    const headersBeforeRouteChange = mocks.setupHeaderMotion.mock.calls.length;
    const revealsBeforeRouteChange = mocks.setupScrollReveals.mock.calls.length;

    rerender(
      <StrictMode>
        <MotionHarness pathname="/empresa" />
      </StrictMode>,
    );

    expect(mocks.setupHeaderMotion.mock.calls.length).toBe(headersBeforeRouteChange);
    expect(mocks.setupScrollReveals.mock.calls.length).toBeGreaterThan(revealsBeforeRouteChange);
    unmount();

    expect(mocks.headerCleanups).not.toHaveLength(0);
    expect(mocks.revealCleanups).not.toHaveLength(0);
    mocks.headerCleanups.forEach((cleanup) => expect(cleanup).toHaveBeenCalledOnce());
    mocks.revealCleanups.forEach((cleanup) => expect(cleanup).toHaveBeenCalledOnce());
  });
});
