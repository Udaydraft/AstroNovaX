import { useEffect, useState } from "react";
import { SITE_NAME, SITE_TAGLINE } from "@/data/site";

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [fading, setFading] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    // Optimized timing for mobile Core Web Vitals (FCP & LCP)
    const a = setTimeout(() => setFading(true), 900);
    const b = setTimeout(() => setHidden(true), 1400);

    // Instant dismiss on user interaction
    const handleInteract = () => {
      setFading(true);
      setTimeout(() => setHidden(true), 300);
    };

    window.addEventListener("touchstart", handleInteract, { passive: true, once: true });
    window.addEventListener("scroll", handleInteract, { passive: true, once: true });

    return () => {
      clearTimeout(a);
      clearTimeout(b);
      window.removeEventListener("touchstart", handleInteract);
      window.removeEventListener("scroll", handleInteract);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col mt-1 items-center justify-center bg-offwhite transition-opacity duration-500 ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      role="status"
      aria-label={`Loading ${SITE_NAME}`}
    >
      <div
        className={`relative flex h-36 w-36 items-center justify-center sm:h-48 sm:w-48 ${
          reducedMotion ? "" : "animate-float"
        }`}
      >
        <video
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          className="h-full w-full object-contain"
        >
          <source src="/videos/loader.webm" type="video/webm" />
        </video>
      </div>
      <p className="mt-1 font-display text-lg tracking-[0.4em] text-navy uppercase">
        {SITE_NAME}
      </p>
      <p className="mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-navy-soft">
        {SITE_TAGLINE}
      </p>
    </div>
  );
}
