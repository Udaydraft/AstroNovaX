import { useEffect, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_CAROUSEL_SLIDES } from "@/data/carousel";

const AUTO_MS = 3200;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const slides = HERO_CAROUSEL_SLIDES;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), AUTO_MS);
    return () => clearInterval(t);
  }, [paused, slides.length]);

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + slides.length) % slides.length);

  return (
    <div
      className="relative mx-auto w-full max-w-md select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="relative flex h-72 items-center justify-center sm:h-80"
        style={{ perspective: reduced ? undefined : 1200 }}
      >
        {slides.map((slide, i) => {
          let offset = i - index;
          const half = slides.length / 2;
          if (offset > half) offset -= slides.length;
          if (offset < -half) offset += slides.length;

          const visible = Math.abs(offset) <= 1;
          const x = reduced ? 0 : offset * 140;
          const scale = offset === 0 ? 1 : 0.78;
          const rotateY = reduced ? 0 : offset * -28;
          const zIndex = 10 - Math.abs(offset);
          const opacity = visible ? (offset === 0 ? 1 : 0.55) : 0;

          return (
            <motion.div
              key={slide.image}
              className="absolute h-64 w-56 overflow-hidden rounded-4xl border border-navy/10 shadow-soft sm:h-72 sm:w-64"
              style={{ zIndex }}
              animate={{ x, scale, rotateY, opacity }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={slide.image}
                alt={slide.label}
                className="h-full w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/70 to-transparent p-4">
                <AnimatePresence mode="wait">
                  {offset === 0 && (
                    <motion.p
                      key={slide.label}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="text-sm font-semibold text-white"
                    >
                      {slide.label}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-center gap-4">
        <button
          aria-label="Previous"
          onClick={() => go(-1)}
          className="focus-ring flex h-9 w-9 items-center justify-center rounded-full bg-surface text-navy shadow-card"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.image}
              aria-label={`Go to ${s.label}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-cyan" : "w-2 bg-navy/15"}`}
            />
          ))}
        </div>

        <button
          aria-label="Next"
          onClick={() => go(1)}
          className="focus-ring flex h-9 w-9 items-center justify-center rounded-full bg-surface text-navy shadow-card"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <p className="sr-only" aria-live="polite">
        {slides[index].label}
      </p>
    </div>
  );
}
