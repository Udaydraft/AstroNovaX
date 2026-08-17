import { motion } from "framer-motion";
import { PlaneTakeoff, Cpu, Database, BrainCircuit, Radar, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import Button from "@/components/ui/Button";
import BgVideo from "@/components/BgVideo";
import { AI_DRONE_VIDEO_SRC } from "@/data/site";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SERVICES = [
  {
    icon: BrainCircuit,
    title: "AI Model Development",
    description:
      "Custom neural networks and deep learning models built from your proprietary operational and field data.",
    badge: "Custom ML",
  },
  {
    icon: Database,
    title: "Data Engineering & Pipelines",
    description:
      "Automated, scalable data pipelines that ingest, process, and structure complex multi-source telemetry in real time.",
    badge: "Big Data",
  },
  {
    icon: Cpu,
    title: "Machine Learning Solutions",
    description:
      "Predictive analytics, pattern recognition, and decision-support engines integrated directly into existing workflows.",
    badge: "Predictive AI",
  },
  {
    icon: Radar,
    title: "Drone & Satellite Imaging",
    description:
      "Multispectral aerial imaging analysis, crop & land health mapping, spatial telemetry, and remote sensing intelligence.",
    badge: "Aerial Vision",
  },
];

export default function AIDroneSection() {
  const { fadeUp, stagger, viewport } = useScrollAnimation();

  return (
    <section
      id="ai-drone"
      className="relative overflow-hidden py-16 sm:py-24"
    >
      <BgVideo src={AI_DRONE_VIDEO_SRC} />
      {/* Dark scrim overlay for high contrast and readability across both light & dark themes */}
      <div className="absolute inset-0 -z-10 bg-navy/70 sm:bg-gradient-to-r sm:from-navy/90 sm:via-navy/80 sm:to-navy/55" />

      <div className="container relative flex flex-col gap-10">
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            align="center"
            tone="light"
            label="Specialized Capabilities"
            heading="AI Data Intelligence & Drone Services"
            description="Combining cutting-edge artificial intelligence, custom machine learning pipelines, and advanced drone & satellite imaging analysis for actionable operational decisions on astronavax.org."
            className="mx-auto max-w-3xl"
          />
        </div>

        {/* Compact Feature Cards Grid with White Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <AnimatedCard
                key={s.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-navy/60 p-5 shadow-card backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-soft"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/20 text-cyan shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white dark:text-black">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-navy">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {s.description}
                  </p>
                </div>
              </AnimatedCard>
            );
          })}
        </motion.div>

        {/* Highlight Banner Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="relative overflow-hidden rounded-2xl border border-cyan/25 bg-gradient-to-r from-navy via-navy/95 to-purple-950 p-6 text-white shadow-soft sm:p-8"
        >
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 -z-10 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-2.5">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan/20 px-3 py-0.5 text-[11px] font-bold uppercase tracking-widest text-cyan">
                <Sparkles size={13} />
                <span>Next-Gen Remote Sensing & AI</span>
              </div>
              <h3 className="font-display text-xl font-bold leading-tight sm:text-2xl text-white">
                Empowering Healthcare, Agriculture & Animal Science with Aerial & Spatial AI
              </h3>
              <p className="text-sm leading-relaxed text-white/85 dark:text-black">
                At <strong className="text-white dark:text-black">AstraNovaX (astronovax.org)</strong>, we integrate drone multispectral telemetry, autonomous satellite mapping, and enterprise AI model engineering to deliver high-precision intelligence directly to your command dashboards.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-4">
              <Button
                href="#contact"
                variant="primary"
                icon={<PlaneTakeoff size={15} />}
              >
                Request AI & Drone Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
