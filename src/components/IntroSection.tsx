import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PARTICLES = [
  { top: "18%", left: "8%", size: 10, delay: 0, color: "bg-cyan/40" },
  { top: "70%", left: "14%", size: 6, delay: 0.6, color: "bg-leaf/50" },
  { top: "30%", left: "92%", size: 8, delay: 0.3, color: "bg-cyan/30" },
  { top: "80%", left: "88%", size: 5, delay: 0.9, color: "bg-leaf/40" },
  { top: "8%", left: "60%", size: 5, delay: 1.2, color: "bg-cyan/30" },
];

export default function IntroSection() {
  const { reduced } = useScrollAnimation();

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {!reduced &&
        PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            className={`pointer-events-none absolute rounded-full ${p.color}`}
            style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
            animate={{ y: [0, -16, 0], opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}

      <div className="container flex flex-col items-center gap-6 text-center">
        <SectionHeading
          align="center"
          label="One Connected Ecosystem"
          heading="Science doesn't work in silos."
          description="Healthcare, Animal Science, Agriculture and AI are deeply interconnected — a healthier animal population strengthens agriculture, sound agriculture supports public health, and intelligent data ties every layer together. We build technology that reflects that connection instead of treating each field in isolation."
          className="mx-auto"
        />
      </div>
    </section>
  );
}
