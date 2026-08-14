import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const NODES = [
  { x: 10, y: 30 },
  { x: 30, y: 10 },
  { x: 30, y: 50 },
  { x: 55, y: 30 },
  { x: 78, y: 12 },
  { x: 78, y: 48 },
  { x: 95, y: 30 },
];

const LINKS: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [3, 4],
  [3, 5],
  [4, 6],
  [5, 6],
];

const PARTICLE_LINKS: [number, number][] = [
  [0, 3],
  [3, 6],
  [1, 3],
];

export default function AISection() {
  const { fadeUp, viewport, reduced } = useScrollAnimation();

  return (
    <section className="bg-deep py-24 sm:py-32">
      <div className="container flex flex-col items-center gap-14">
        <SectionHeading
          align="center"
          tone="light"
          label="Intelligence Layer"
          heading="From Data to Intelligence"
          description="Signals from the field, the farm and the clinic flow into one connected model — turning raw data into decisions worth acting on."
          className="mx-auto"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="w-full max-w-3xl"
        >
          <svg viewBox="0 0 105 60" className="w-full">
            {LINKS.map(([a, b], i) => (
              <line
                key={i}
                x1={NODES[a].x}
                y1={NODES[a].y}
                x2={NODES[b].x}
                y2={NODES[b].y}
                stroke="#C79BEF"
                strokeOpacity="0.25"
                strokeWidth="0.3"
              />
            ))}

            {!reduced &&
              PARTICLE_LINKS.map(([a, b], i) => (
                <motion.circle
                  key={i}
                  r="0.9"
                  fill="#F59E0B"
                  animate={{ cx: [NODES[a].x, NODES[b].x, NODES[a].x], cy: [NODES[a].y, NODES[b].y, NODES[a].y] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
                />
              ))}

            {NODES.map((n, i) => (
              <motion.circle
                key={i}
                cx={n.x}
                cy={n.y}
                r="1.6"
                fill="#FDF8F0"
                animate={reduced ? undefined : { opacity: [0.6, 1, 0.6] }}
                transition={reduced ? undefined : { duration: 3, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
              />
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
