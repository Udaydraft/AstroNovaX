import { motion } from "framer-motion";
import { Activity, Wheat, Dna, ShieldCheck, PawPrint, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import Button from "@/components/ui/Button";
import BgVideo from "@/components/BgVideo";
import { ANIMAL_SCIENCE_VIDEO_SRC } from "@/data/site";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FEATURES = [
  {
    icon: Activity,
    title: "Health & Mortality Early Warning",
    badge: "Vital Monitoring",
    desc: "Non-invasive physiological and acoustic sensors flagging fever, respiratory distress, and illness early.",
  },
  {
    icon: Wheat,
    title: "Growth, Feed & Yield Optimization",
    badge: "Nutrition AI",
    desc: "Precision feeding models tuned to real-time growth curves, feed conversion ratios, and environmental factors.",
  },
  {
    icon: Dna,
    title: "Genetics & Breeding Insights",
    badge: "Genomics",
    desc: "Data-informed breeding recommendations, trait selection, and long-term population health analytics.",
  },
  {
    icon: ShieldCheck,
    title: "Environmental & Welfare Automation",
    badge: "Automation",
    desc: "Automated climate monitoring, ventilation management, and animal welfare compliance tracking.",
  },
];

export default function AnimalScience() {
  const { fadeUp, stagger, viewport } = useScrollAnimation();

  return (
    <section id="animal-science" className="relative overflow-hidden py-16 sm:py-24">
      <BgVideo src={ANIMAL_SCIENCE_VIDEO_SRC} />
      {/* scrim overlay keeping video visible while making white text pop */}
      <div className="absolute inset-0 -z-10 bg-navy/70 sm:bg-gradient-to-r sm:from-navy/90 sm:via-navy/80 sm:to-navy/50" />

      <div className="container relative flex flex-col gap-10">
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            align="center"
            tone="light"
            label="Animal Science"
            heading="Livestock & Herd Intelligence"
            description="From health monitoring and nutrition optimization to genetic selection and automated welfare management — intelligent technology for sustainable livestock systems."
            className="mx-auto max-w-3xl"
          />
        </div>

        {/* Compact Feature Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <AnimatedCard
                key={f.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-navy/60 p-5 shadow-card backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-soft"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/20 text-cyan shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan">
                      {f.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/80">
                    {f.desc}
                  </p>
                </div>
              </AnimatedCard>
            );
          })}
        </motion.div>

        {/* Compact Highlight Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="relative overflow-hidden rounded-2xl border border-cyan/25 bg-gradient-to-r from-navy via-purple-950 to-navy p-6 text-white shadow-soft sm:p-8"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-2.5">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan/20 px-3 py-0.5 text-[11px] font-bold uppercase tracking-widest text-cyan">
                <Sparkles size={13} />
                <span>Next-Gen Livestock Telemetry</span>
              </div>
              <h3 className="font-display text-xl font-bold leading-tight sm:text-2xl text-white">
                Protecting Herd Health and Maximizing Sustainable Yields
              </h3>
              <p className="text-xs leading-relaxed text-white/85 sm:text-sm">
                AstraNovaX transforms physical animal telemetry into predictive insights, preventing disease outbreaks and optimizing feed conversion efficiency.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-4">
              <Button href="#contact" variant="primary" icon={<PawPrint size={15} />}>
                Livestock Solutions
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
