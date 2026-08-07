import { AnxMark } from "./AnxMark";

/**
 * Backward-compatible wrapper around AnxMark for call sites that pass a
 * pixel `size` (Navbar, Hero, Footer) instead of Tailwind sizing classes.
 */
export default function Mark({ size = 34, gradientId = "anxMark", className = "" }) {
  return (
    <AnxMark
      gradientId={gradientId}
      className={className}
      style={{ width: size, height: Math.round(size * 0.6) }}
    />
  );
}
