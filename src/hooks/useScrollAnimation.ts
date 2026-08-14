import { useReducedMotion, type Variants } from "framer-motion";

/**
 * Returns a small set of Framer Motion variants for the common
 * fade-up / stagger patterns used across the site. When the user has
 * requested reduced motion, movement is stripped out but the fade still
 * happens so content doesn't just pop in with zero transition at all.
 */
export function useScrollAnimation() {
  const reduced = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0.2 : 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stagger: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduced ? 0 : 0.12, delayChildren: reduced ? 0 : 0.08 },
    },
  };

  const viewport = { once: true, margin: "-80px" };

  return { fadeUp, stagger, viewport, reduced };
}
