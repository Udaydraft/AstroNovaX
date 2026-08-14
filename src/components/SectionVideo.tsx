import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type Props = {
  src: string;
  className?: string;
  label: string;
};

/**
 * A domain-section video that only decodes/plays while it's actually in the
 * viewport (and pauses again once it scrolls out). This keeps us to "only
 * one video really playing at a time" in practice without hiding the videos
 * from sections other than the hero.
 */
export default function SectionVideo({ src, className = "", label }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapperRef, { margin: "-10% 0px -10% 0px" });
  const [errored, setErrored] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (inView) {
      el.play().catch(() => {
        /* autoplay can be blocked before user interaction — ignore */
      });
    } else {
      el.pause();
    }
  }, [inView]);

  return (
    <div ref={wrapperRef} className={`relative overflow-hidden rounded-4xl shadow-card ${className}`}>
      {!errored ? (
        <motion.video
          ref={ref}
          className="h-full w-full object-cover"
          muted
          loop
          playsInline
          preload="none"
          onError={() => setErrored(true)}
          aria-label={label}
          animate={reduced ? undefined : { y: [0, -6, 0] }}
          transition={reduced ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <source src={src} type="video/mp4" />
        </motion.video>
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-skyblue via-white to-mint">
          <div className="h-20 w-20 rounded-full bg-grad-accent opacity-50 blur-xl" />
        </div>
      )}
    </div>
  );
}
