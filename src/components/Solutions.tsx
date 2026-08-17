import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import Button from "@/components/ui/Button";
import { SOLUTIONS } from "@/data/solutions";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Solutions() {
  const { stagger, viewport } = useScrollAnimation();

  const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

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
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-navy/10 bg-surface/90 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-surface/50 sm:p-7"
              >
                <div>
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
                </div>

                <div className="mt-6 pt-4 border-t border-navy/5 dark:border-white/10">
                  <Button
                    href={s.href}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleCardClick(e, s.href)}
                    variant="secondary"
                    icon={<ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />}
                    className="!py-2 !px-4 text-xs font-bold uppercase tracking-wider"
                  >
                    Learn More
                  </Button>
                </div>
              </AnimatedCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
