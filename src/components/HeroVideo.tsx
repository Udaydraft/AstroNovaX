import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HERO_VIDEO_SRC } from "@/data/site";

type Props = {
  src?: string;
  poster?: string;
  className?: string;
};

/**
 * Autoplaying, muted, looping hero video. If the file at `src` fails to
 * load (e.g. it hasn't been dropped into /public/videos yet), this falls
 * back to a soft gradient placeholder instead of a broken video box —
 * so the page never looks broken while the real asset is pending.
 */
export default function HeroVideo({ src = HERO_VIDEO_SRC, poster, className = "" }: Props) {
  const [errored, setErrored] = useState(false);
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={`relative overflow-hidden rounded-4xl shadow-soft ${className}`}
      animate={reduced ? undefined : { y: [0, -10, 0] }}
      transition={reduced ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {!errored ? (
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          onError={() => setErrored(true)}
          aria-label="Nexora hero animation"
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-skyblue via-white to-mint">
          <div className="h-24 w-24 rounded-full bg-grad-accent opacity-60 blur-2xl" />
        </div>
      )}
    </motion.div>
  );
}
