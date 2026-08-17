import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { SOLUTIONS } from "@/data/solutions";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Solutions() {
  const { stagger, viewport } = useScrollAnimation();

  return (
    <section id="solutions" className="py-16 sm:py-24">
      <div className="container flex flex-col gap-10">
        <SectionHeading label="What We Do" heading="Our Areas of Impact" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="grid gap-5 sm:grid-cols-2"
        >
          {SOLUTIONS.map((s) => {
            const Icon = s.icon;
            return (
              <AnimatedCard
                key={s.title}
                className="group relative overflow-hidden rounded-3xl border border-navy/10 bg-surface/90 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-surface/50 sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface shadow-sm transition-transform duration-300 group-hover:scale-105 dark:bg-white/10">
                    <Icon className="h-5 w-5 text-navy dark:text-white" strokeWidth={1.75} />
                  </div>
                  <span className="font-display text-2xl font-bold text-navy/15 dark:text-white/20">
                    {s.number}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-bold text-navy dark:text-white">
                  {s.title}
                </h3>
                <span
                  className="font-mono-brand text-[11px] uppercase tracking-[0.2em]"
                  style={{ color: "var(--ink-soft)" }}
                >
                  {s.tag}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-navy-soft dark:text-ink-soft">
                  {s.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <span
                        className="mt-1 h-1.5 w-1.5 rounded-full shrink-0 bg-amber-500"
                        style={{ backgroundColor: "var(--accent-2, #F59E0B)" }}
                      ></span>
                      <span style={{ color: "var(--ink)" }}>{p}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
