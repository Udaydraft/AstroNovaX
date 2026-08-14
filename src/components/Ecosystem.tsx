import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { PawPrint, Sprout, HeartPulse, Leaf } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const NODES = [
  { label: "Animal Science", icon: PawPrint, x: 18, y: 22 },
  { label: "Agriculture", icon: Sprout, x: 82, y: 22 },
  { label: "Healthcare", icon: HeartPulse, x: 18, y: 78 },
  { label: "Sustainability", icon: Leaf, x: 82, y: 78 },
];

export default function Ecosystem() {
  const { fadeUp, viewport, reduced } = useScrollAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  const [rotation, setRotation] = useState(0);
  const angleRef = useRef(0);
  const velocityRef = useRef(0.2); // baseline slow idle rotation speed
  const isDraggingRef = useRef(false);
  const dragStartAngleRef = useRef(0);
  const dragStartRotationRef = useRef(0);
  const lastPointerAngleRef = useRef(0);

  // Smooth animation loop using requestAnimationFrame
  useEffect(() => {
    if (reduced) return;
    let animationFrameId: number;

    const loop = () => {
      if (!isDraggingRef.current) {
        angleRef.current = (angleRef.current + velocityRef.current) % 360;
        setRotation(angleRef.current);
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [reduced]);

  // Handle pointer down (drag start)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    isDraggingRef.current = true;
    const angleRad = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const angleDeg = (angleRad * 180) / Math.PI;
    dragStartAngleRef.current = angleDeg;
    dragStartRotationRef.current = angleRef.current;
    lastPointerAngleRef.current = angleDeg;

    if (e.target instanceof HTMLElement) {
      e.target.setPointerCapture?.(e.pointerId);
    }
  };

  // Handle pointer move (hover left/right rotation or active drag)
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angleRad = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const currentAngleDeg = (angleRad * 180) / Math.PI;

    if (isDraggingRef.current) {
      const delta = currentAngleDeg - dragStartAngleRef.current;
      const newRotation = dragStartRotationRef.current + delta;

      // Track rotational velocity for smooth inertia release
      velocityRef.current = (currentAngleDeg - lastPointerAngleRef.current) * 0.35;
      lastPointerAngleRef.current = currentAngleDeg;

      angleRef.current = newRotation;
      setRotation(newRotation);
    } else {
      // Relative X offset from center (-1 to +1)
      const relativeX = (e.clientX - centerX) / (rect.width / 2);

      if (relativeX > 0.15) {
        // Hovering right side -> rotate clockwise (right)
        velocityRef.current = Math.min(relativeX * 2.2, 3);
      } else if (relativeX < -0.15) {
        // Hovering left side -> rotate counter-clockwise (left)
        velocityRef.current = Math.max(relativeX * 2.2, -3);
      } else {
        velocityRef.current = 0.2; // default slow spin near center
      }
    }
  };

  // Handle pointer up (drag end)
  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  // Handle pointer leave
  const handlePointerLeave = () => {
    if (!isDraggingRef.current) {
      velocityRef.current = 0.2;
    }
  };

  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="container flex flex-col items-center gap-16">
        <SectionHeading
          align="center"
          label="How It Connects"
          heading="One Intelligent Ecosystem"
          className="mx-auto"
        />

        <motion.div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerLeave}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="relative mx-auto aspect-square w-full max-w-xl cursor-grab select-none active:cursor-grabbing touch-none"
        >
          {/* Interactive Rotating Ring System */}
          <div
            style={{ transform: `rotate(${rotation}deg)` }}
            className="absolute inset-0 transition-transform duration-75 ease-out"
          >
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none">
              {NODES.map((n) => (
                <line
                  key={n.label}
                  x1={50}
                  y1={50}
                  x2={n.x}
                  y2={n.y}
                  stroke="#8B2FD1"
                  strokeOpacity="0.35"
                  strokeWidth="0.4"
                  strokeDasharray="2 2"
                />
              ))}
            </svg>

            {NODES.map((n) => {
              const Icon = n.icon;
              return (
                <div
                  key={n.label}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                >
                  {/* Icons counter-rotate so they always stay perfectly upright */}
                  <div
                    style={{ transform: `rotate(${-rotation}deg)` }}
                    className="flex flex-col items-center gap-2 transition-transform duration-75 ease-out"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-navy/10 bg-surface shadow-card transition-all hover:scale-110 hover:border-cyan/40">
                      <Icon size={22} className="text-navy" strokeWidth={1.75} />
                    </div>
                    <span className="whitespace-nowrap rounded-full bg-surface px-3 py-1 text-xs font-semibold text-navy shadow-card">
                      {n.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Central Intelligence Hub */}
          <div className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-grad-accent text-center shadow-soft sm:h-28 sm:w-28">
            <span className="font-display text-[0.6rem] font-bold uppercase tracking-[0.15em] text-white sm:text-xs">
              Intelligence
            </span>
            {!reduced && (
              <motion.span
                className="absolute inset-0 -z-10 rounded-full bg-cyan/30 blur-xl"
                animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
