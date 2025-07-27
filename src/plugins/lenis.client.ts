// src/plugins/lenis.ts
import Lenis from '@studio-freight/lenis';

export function useLenis() {
  const lenis = new Lenis({
    duration: 3.2,
    easing: (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    lerp: 0.05,
    smoothWheel: true,
    infinite: false,
  });

  // function raf(time: number) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);

  return { lenis };
}
