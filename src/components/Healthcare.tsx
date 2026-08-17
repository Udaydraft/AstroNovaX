import { motion } from "framer-motion";
import { Activity, BarChart3, Lightbulb, HeartHandshake, Stethoscope, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import Button from "@/components/ui/Button";
import BgVideo from "@/components/BgVideo";
import { HEALTHCARE_VIDEO_SRC } from "@/data/site";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FEATURES = [
  {
    icon: Activity,
    title: "Health & Diagnostic Screening",
    badge: "Clinical AI",
    desc: "AI-assisted diagnostic-image screening and pattern detection for faster clinical decision support.",
  },
  {
    icon: BarChart3,
    title: "Patient Risk Stratification",
    badge: "Predictive",
    desc: "Machine learning models that aggregate patient telemetry to forecast risk factors and readmission rates.",
  },
  {
    icon: Lightbulb,
    title: "Capacity & Resource Planning",
    badge: "Operations",
    desc: "Predictive capacity analytics for hospital bed management, triage workflow, and staff scheduling.",
  },
  {
    icon: HeartHandshake,
    title: "Connected Care Telemetry",
    badge: "Patient-First",
    desc: "Real-time vitals monitoring and early warning alerts connecting home care to clinical command centers.",
  },
];

export default function Healthcare() {
  const { fadeUp, stagger, viewport } = useScrollAnimation();

  return (
    <section id="healthcare" className="relative overflow-hidden py-16 sm:py-24">
      <BgVideo src={HEALTHCARE_VIDEO_SRC} />
      {/* scrim overlay */}
      <div className="absolute inset-0 -z-10 bg-offwhite/80 sm:bg-gradient-to-l sm:from-offwhite/95 sm:via-offwhite/85 sm:to-offwhite/50 dark:bg-navy/85 dark:sm:bg-gradient-to-l dark:sm:from-navy/95 dark:sm:via-navy/90 dark:sm:to-navy/70" />

      <div className="container relative flex flex-col gap-10">
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            align="center"
            label="Healthcare"
            heading="Clinical Intelligence & Technology with Purpose"
            description="Combining clinical expertise, patient data pipelines, and intelligent machine learning to support better decision-making and healthier human outcomes."
            headingClassName="text-navy"
            descClassName="text-black"
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/15 text-cyan shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <span className="rounded-full bg-navy/5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      {f.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-navy dark:text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black">
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
                <span>Interpretable Healthcare AI</span>
              </div>
              <h3 className="font-display text-xl font-bold leading-tight sm:text-2xl text-white">
                Empowering Medical Staff with Reliable Clinical Insights
              </h3>
              <p className="text-sm leading-relaxed text-white/85">
                Our healthcare algorithms operate on operational and clinical telemetry, delivering early disease warnings, automated risk assessments, and streamlined patient workflows.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-4">
              <Button href="#contact" variant="primary" icon={<Stethoscope size={15} />}>
                Healthcare AI Solutions
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
