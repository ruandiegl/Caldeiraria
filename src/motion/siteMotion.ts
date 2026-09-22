import { gsap, ScrollTrigger } from './gsap';

export const HEADER_GLASS_START_PX = 24;
export const REVEAL_SELECTOR = '[data-reveal], .reveal';

const HEADER_CLEAR_PROPS = [
  'backgroundColor',
  'backdropFilter',
  'borderColor',
  'boxShadow',
].join(',');

const REVEAL_CLEAR_PROPS = 'opacity,visibility,transform,willChange';

const headerSolidState = {
  backgroundColor: '#ffffff',
  backdropFilter: 'blur(0px) saturate(100%)',
  borderColor: 'rgba(255, 255, 255, 0)',
  boxShadow: '0 0 0 rgba(17, 24, 45, 0)',
};

const headerGlassState = {
  backgroundColor: 'rgba(255, 255, 255, 0.74)',
  backdropFilter: 'blur(18px) saturate(150%)',
  borderColor: 'rgba(255, 255, 255, 0.62)',
  boxShadow: '0 14px 42px rgba(17, 24, 45, 0.12)',
};

const headerFallbackGlassState = {
  backgroundColor: 'rgba(255, 255, 255, 0.94)',
  borderColor: 'rgba(216, 227, 239, 0.9)',
  boxShadow: '0 14px 42px rgba(17, 24, 45, 0.12)',
};

function supportsBackdropFilter() {
  if (typeof CSS === 'undefined' || typeof CSS.supports !== 'function') {
    return false;
  }

  return (
    CSS.supports('backdrop-filter', 'blur(1px)') ||
    CSS.supports('-webkit-backdrop-filter', 'blur(1px)')
  );
}

export function setupHeaderMotion(header: HTMLElement, reducedMotion: boolean): () => void {
  const glassState = supportsBackdropFilter() ? headerGlassState : headerFallbackGlassState;
  const duration = reducedMotion ? 0 : 0.35;

  const setHeaderState = (glass: boolean, immediate = false) => {
    const state = glass ? glassState : headerSolidState;

    if (immediate) {
      gsap.set(header, state);
      return;
    }

    gsap.to(header, {
      ...state,
      duration,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  setHeaderState(window.scrollY >= HEADER_GLASS_START_PX, true);

  const trigger = ScrollTrigger.create({
    id: 'site-header-glass',
    start: HEADER_GLASS_START_PX,
    onEnter: () => setHeaderState(true),
    onLeaveBack: () => setHeaderState(false),
  });

  return () => {
    trigger.kill();
    gsap.killTweensOf(header);
    gsap.set(header, { clearProps: HEADER_CLEAR_PROPS });
  };
}

export function setupScrollReveals(root: HTMLElement, reducedMotion: boolean): () => void {
  const items = gsap.utils.toArray<HTMLElement>(REVEAL_SELECTOR, root);

  if (items.length === 0) {
    return () => undefined;
  }

  if (reducedMotion) {
    gsap.set(items, { clearProps: REVEAL_CLEAR_PROPS });
    return () => undefined;
  }

  gsap.set(items, {
    autoAlpha: 0,
    y: 24,
    willChange: 'transform, opacity',
  });

  const triggers = ScrollTrigger.batch(items, {
    start: 'top 84%',
    once: true,
    interval: 0.08,
    batchMax: 4,
    onEnter: (batch) => {
      gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power2.out',
        overwrite: 'auto',
        clearProps: 'willChange',
      });
    },
  });

  return () => {
    triggers.forEach((trigger) => trigger.kill());
    gsap.killTweensOf(items);
    gsap.set(items, { clearProps: REVEAL_CLEAR_PROPS });
  };
}
