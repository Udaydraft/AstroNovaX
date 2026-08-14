import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Props = {
  src: string;
  overlayClassName?: string;
};

export default function BackgroundVideo({ src, overlayClassName = "bg-navy/80" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // Trigger viewport inView with a margin so it starts/pauses comfortably
  const inView = useInView(containerRef, { margin: "-10% 0px -10% 0px" });
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (inView) {
      el.play().catch(() => {
        // Autoplay may be blocked by browser policy before user interaction — ignore
      });
    } else {
      el.pause();
    }
  }, [inView]);

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
      {/* Overlay to ensure text readability */}
      <div className={`absolute inset-0 z-10 transition-colors duration-300 ${overlayClassName}`} />
      
      {!errored ? (
        <video
          ref={ref}
          src={src}
          className="h-full w-full object-cover"
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setErrored(true)}
        />
      ) : (
        // fallback gradient if video fails to load
        <div className="h-full w-full bg-gradient-to-br from-navy via-navy-soft to-skyblue-deep" />
      )}
    </div>
  );
}
