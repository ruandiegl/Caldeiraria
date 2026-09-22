import type { RefObject } from 'react';
import { gsap, useGSAP } from '../../motion/gsap';
import { setupHeaderMotion, setupScrollReveals } from '../../motion/siteMotion';

interface SiteMotionRefs {
  headerRef: RefObject<HTMLElement | null>;
  routeRef: RefObject<HTMLDivElement | null>;
  pathname: string;
}

const motionPreferences = {
  motionOK: '(prefers-reduced-motion: no-preference)',
  reduceMotion: '(prefers-reduced-motion: reduce)',
};

export function useSiteMotion({ headerRef, routeRef, pathname }: SiteMotionRefs): void {
  useGSAP(
    () => {
      const header = headerRef.current;

      if (!header) {
        return;
      }

      const media = gsap.matchMedia();
      media.add(motionPreferences, (context) =>
        setupHeaderMotion(header, Boolean(context.conditions?.reduceMotion)),
      );

      return () => media.revert();
    },
    { scope: headerRef },
  );

  useGSAP(
    () => {
      const route = routeRef.current;

      if (!route) {
        return;
      }

      const media = gsap.matchMedia();
      media.add(motionPreferences, (context) =>
        setupScrollReveals(route, Boolean(context.conditions?.reduceMotion)),
      );

      return () => media.revert();
    },
    {
      scope: routeRef,
      dependencies: [pathname],
      revertOnUpdate: true,
    },
  );
}
