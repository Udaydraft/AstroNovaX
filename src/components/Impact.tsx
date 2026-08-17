import { motion } from "framer-motion";
import { Sparkles, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const METRICS = [
  { n: "01", t: "Smarter Systems", d: "Technology that connects data across science, agriculture and health." },
  { n: "02", t: "Better Decisions", d: "Insights delivered early enough to actually change an outcome." },
  { n: "03", t: "Sustainable Future", d: "Approaches designed to protect resources, not just optimize output." },
];

const IMPACT_WORDS_1 = [
  "GLOBAL HEALTH SUSTAINABILITY",
  "+40% EARLY PREDICTION ACCURACY",
  "ZERO SILO SCIENTIFIC INTEGRATION",
  "85% CARBON FOOTPRINT REDUCTION",
  "CLIMATE-RESILIENT FARMING",
  "AI-POWERED DIAGNOSTICS",
];

const IMPACT_WORDS_2 = [
  "SMARTER AGRI-TECH YIELDS",
  "PREDICTIVE ANIMAL WELLNESS",
  "100% REPEATABLE DATA ACCURACY",
  "ECOSYSTEM INTELLIGENCE",
  "NEXT-GEN BIOTECH AUTOMATION",
  "FUTURE-PROOFED FOOD SYSTEMS",
];

export default function Impact() {
  const { fadeUp, stagger, viewport } = useScrollAnimation();

  return (
    <section id="impact" className="py-24 sm:py-32">
      <div className="container flex flex-col gap-16">
        <SectionHeading label="Why It Matters" heading="Technology That Moves Life Forward" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="grid gap-10 sm:grid-cols-3"
        >
          {METRICS.map((m) => (
            <motion.div key={m.n} variants={fadeUp} className="flex flex-col gap-3">
              <span
                className="font-display text-5xl font-extrabold text-transparent sm:text-6xl"
                style={{ WebkitTextStroke: "1.5px var(--ink-soft)" }}
              >
                {m.n}
              </span>
              <h3 className="font-display text-xl font-bold text-navy">{m.t}</h3>
              <p className="text-sm leading-relaxed text-navy-soft">{m.d}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Dual Marquee Impact Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="relative flex flex-col justify-center gap-4 overflow-hidden rounded-4xl bg-navy py-8 text-white shadow-card dark:bg-surface sm:py-10 border border-navy/10 dark:border-white/10"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy to-transparent dark:from-surface" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy to-transparent dark:from-surface" />

          {/* Marquee Track 1 (Leftwards) */}
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
              className="flex whitespace-nowrap"
            >
              {IMPACT_WORDS_1.concat(IMPACT_WORDS_1, IMPACT_WORDS_1).map((w, idx) => (
                <span key={idx} className="inline-flex items-center gap-6 px-6 font-display text-xs font-bold tracking-[0.25em] text-white/90 sm:text-sm">
                  <span className="flex items-center gap-2.5 hover:text-cyan transition-colors">
                    <TrendingUp size={14} className="text-cyan animate-pulse" />
                    {w}
                  </span>
                  <Sparkles size={14} className="text-cyan/60" />
                </span>
              ))}
            </motion.div>
          </div>

          {/* Marquee Track 2 (Rightwards) */}
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="flex whitespace-nowrap"
            >
              {IMPACT_WORDS_2.concat(IMPACT_WORDS_2, IMPACT_WORDS_2).map((w, idx) => (
                <span key={idx} className="inline-flex items-center gap-6 px-6 font-display text-xs font-bold tracking-[0.25em] text-white/70 sm:text-sm">
                  <span className="flex items-center gap-2.5 hover:text-cyan transition-colors">
                    <ShieldCheck size={14} className="text-leaf animate-pulse" />
                    {w}
                  </span>
                  <Zap size={14} className="text-amber-400/60" />
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
