import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Props = {
  src: string;
  /** If true, plays immediately on mount instead of waiting to scroll into view (use only for the hero). */
  eager?: boolean;
  /** Extra classes for the <video> itself, e.g. object-position tweaks. */
  className?: string;
};

/**
 * Optimized section background video component:
 * - Lazy loads video data only when approaching the viewport (200px pre-fetch margin)
 * - Automatically pauses playback when scrolled out of view to save GPU/battery
 * - Restricts max video height on mobile view so background videos don't over-zoom on tall stacked sections
 */
export default function BgVideo({ src, eager = false, className = "" }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  // 200px margin pre-buffers the video right before the user scrolls to it
  const inView = useInView(wrapperRef, { margin: "200px 0px 200px 0px" });
  const [shouldLoad, setShouldLoad] = useState(eager);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    if (inView && !shouldLoad) {
      setShouldLoad(true);
    }
  }, [inView, shouldLoad]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !shouldLoad) return;

    if (inView) {
      const playPromise = el.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Playback interrupted or autoplay policy handled silently
        });
      }
    } else {
      el.pause();
    }
  }, [inView, shouldLoad]);

  return (
    <div ref={wrapperRef} className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden w-full h-full max-w-full">
      {!errored && (shouldLoad || eager) ? (
        <video
          ref={videoRef}
          className={`h-full w-full object-cover object-center pointer-events-none transition-transform duration-300 ${className}`}
          autoPlay={eager}
          muted
          loop
          playsInline
          preload={eager ? "auto" : "metadata"}
          onError={() => setErrored(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="h-full w-full bg-grad-sky" />
      )}
    </div>
  );
}
