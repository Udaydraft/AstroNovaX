import { motion } from "framer-motion";
import { Target, Droplets, Sprout, Recycle, Leaf, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import Button from "@/components/ui/Button";
import BgVideo from "@/components/BgVideo";
import { AGRICULTURE_VIDEO_SRC } from "@/data/site";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FEATURES = [
  {
    icon: Sprout,
    title: "Yield & Crop Stress Prediction",
    badge: "Crop AI",
    desc: "Early spectral detection of pest infestations, fungal outbreaks, and drought stress before visual symptoms appear.",
  },
  {
    icon: Droplets,
    title: "Smart Irrigation Scheduling",
    badge: "Water Analytics",
    desc: "Dynamic watering recommendations combining real-time soil moisture sensors and hyperlocal weather models.",
  },
  {
    icon: Target,
    title: "Soil-Nutrient & Moisture Mapping",
    badge: "Precision Agronomy",
    desc: "High-resolution soil nutrient mapping that optimizes variable-rate fertilizer application across field zones.",
  },
  {
    icon: Recycle,
    title: "Sustainable Farm Automation",
    badge: "Sustainability",
    desc: "Resource reduction models that minimize chemical runoff, optimize energy usage, and increase yield sustainability.",
  },
];

export default function Agriculture() {
  const { fadeUp, stagger, viewport } = useScrollAnimation();

  return (
    <section id="agriculture" className="relative overflow-hidden py-16 sm:py-24">
      <BgVideo src={AGRICULTURE_VIDEO_SRC} />
      {/* scrim overlay */}
      <div className="absolute inset-0 -z-10 bg-mint/50 sm:bg-gradient-to-r sm:from-mint/80 sm:via-mint/70 sm:to-mint/40 dark:bg-navy/85 dark:sm:bg-gradient-to-r dark:sm:from-navy/95 dark:sm:via-navy/90 dark:sm:to-navy/70" />

      <div className="container relative flex flex-col gap-10">
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            align="center"
            label="Smart Agriculture"
            heading="Field & Crop Intelligence for Sustainable Farming"
            description="Transforming multispectral aerial imaging, satellite data, and soil telemetry into actionable insights so growers protect crops and optimize harvest yields."
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
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-navy/10 bg-surface/85 p-5 shadow-card backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-soft dark:border-white/15 dark:bg-surface/60"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-leaf/20 text-leaf shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <span className="rounded-full bg-navy/5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-navy-soft dark:bg-white/10 dark:text-white/80">
                      {f.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-navy dark:text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-navy-soft dark:text-ink-soft">
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
                <span>Precision Agronomy</span>
              </div>
              <h3 className="font-display text-xl font-bold leading-tight sm:text-2xl text-white">
                Bridging Remote Sensing & Machine Learning in the Field
              </h3>
              <p className="text-xs leading-relaxed text-white/85 sm:text-sm">
                AstraNovaX algorithms process soil and atmospheric data streams alongside drone multispectral imaging to give growers real-time operational clarity.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-4">
              <Button href="#contact" variant="primary" icon={<Leaf size={15} />}>
                Agriculture AI Solutions
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
