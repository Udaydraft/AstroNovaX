import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import BgVideo from "@/components/BgVideo";
import Button from "@/components/ui/Button";
import { HERO_CAROUSEL_VIDEO_SRC } from "@/data/site";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Hero() {
  const { fadeUp, stagger } = useScrollAnimation();

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-24 pt-40 sm:pb-32 sm:pt-48"
    >
      <div className="py-0">
        <BgVideo src={HERO_CAROUSEL_VIDEO_SRC} eager />
      </div>
      {/* scrim: translucent on mobile to let video show through, gradient on desktop */}
      <div className="absolute inset-0 -z-10 bg-offwhite/30 sm:bg-gradient-to-r sm:from-offwhite sm:via-offwhite/85 sm:to-offwhite/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-offwhite via-transparent to-offwhite/30" />

      <div className="container relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex max-w-xl flex-col gap-7 rounded-3xl bg-surface/85 p-6 shadow-card backdrop-blur-md border border-navy/10 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-none sm:border-none"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-4"
          >
            <Eyebrow>Applied AI &amp; Machine Learning</Eyebrow>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-navy">
              Intelligence for <span className="brand-text">healthcare</span>,{" "}
              <span className="brand-text">animal science</span>, and{" "}
              <span className="brand-text">agriculture</span>.
            </h1>
            <p
              className="mt-4 mb-2 text-lg max-w-xl [word-spacing:0.4em] text-black dark:text-navy-soft"
            >
              AstraNovaX designs AI and ML systems for healthcare, animal
              science, and agriculture — models trained on real operational
              data, delivered as tools your team already knows how to use.
            </p>
            <p
              className="font-mono-brand text-xs tracking-[0.2em] uppercase"
              style={{ color: "var(--ink-soft)" }}
            >
              ****** Innovating Beyond Limits ******
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Button
              href="#solutions"
              variant="primary"
              icon={<ArrowRight size={16} />}
            >
              Explore Our Solutions
            </Button>
            <Button href="#about" variant="ghost">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
