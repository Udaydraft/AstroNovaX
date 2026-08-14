import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { LOGO_WATERMARK_SRC } from "@/data/site";

const MARQUEE_ITEMS = [
  "ANIMAL SCIENCE INTEGRATION",
  "PRECISION AGRICULTURE",
  "INTELLIGENT HEALTHCARE TECH",
  "ADVANCED AI & ANALYTICS",
  "SUSTAINABLE ECOSYSTEMS",
  "PREDICTIVE BIO-DATA",
  "INNOVATING BEYOND LIMITS",
];

export default function MarqueeBanner() {
  return (
    <div className="relative z-20 w-full overflow-hidden border-y border-navy/10 bg-navy py-4 text-white shadow-soft dark:border-white/10 dark:bg-surface">
      {/* Edge gradient fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy to-transparent dark:from-surface" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy to-transparent dark:from-surface" />

      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {MARQUEE_ITEMS.concat(MARQUEE_ITEMS, MARQUEE_ITEMS, MARQUEE_ITEMS).map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-8 px-6 font-display text-xs font-bold tracking-[0.25em] text-white/90 sm:text-sm">
              <span className="flex items-center gap-3 transition-colors hover:text-cyan">
                <img src={LOGO_WATERMARK_SRC} alt="" className="h-5 w-5 object-contain opacity-90" />
                <span>{item}</span>
              </span>
              <Sparkles size={14} className="text-cyan animate-pulse" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
