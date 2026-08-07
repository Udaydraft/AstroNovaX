"use client";

import { useEffect, useState } from "react";
import { LogoGlowMark } from "./LogoGlowMark";

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
      className={`fixed inset-0 z-100 flex flex-col items-center justify-center bg-background transition-opacity duration-700 ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      role="status"
      aria-label="Loading AstraNovaX"
    >
      <div className={`relative flex h-48 w-48 items-center justify-center ${reducedMotion ? "" : "animate-float"}`}>
        <LogoGlowMark animated={!reducedMotion} gradientId="loaderGlow" className="h-full w-full" />
      </div>
      <p className="mt-2 font-display text-lg tracking-[0.42em] text-gradient uppercase">
        AstraNovaX
      </p>
      <p className="mt-3 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
        Innovating beyond limits
      </p>
    </div>
  );
}
