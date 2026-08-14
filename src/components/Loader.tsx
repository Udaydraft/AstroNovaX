import { useEffect, useState } from "react";
import { LogoGlowMark } from "@/components/LogoGlowMark";
import { SITE_NAME, SITE_TAGLINE } from "@/data/site";

const MIN_DISPLAY_MS = 2600;
const FADE_MS = 700;
export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [fading, setFading] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    const a = setTimeout(() => setFading(true), 1900);
    const b = setTimeout(() => setHidden(true), 2600);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-offwhite transition-opacity duration-700 ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      role="status"
      aria-label={`Loading ${SITE_NAME}`}
    >
      <div className={`relative flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48 ${reducedMotion ? "" : "animate-float"}`}>
        <LogoGlowMark animated={!reducedMotion} gradientId="loaderGlow" className="h-full w-full" />
      </div>
      <p className="mt-2 font-display text-lg tracking-[0.4em] text-navy uppercase">{SITE_NAME}</p>
      <p className="mt-3 text-[0.65rem] uppercase tracking-[0.3em] text-navy-soft">{SITE_TAGLINE}</p>
    </div>
  );
}
