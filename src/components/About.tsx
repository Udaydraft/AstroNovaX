import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_NAME } from "@/data/site";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const { fadeUp, viewport } = useScrollAnimation();

  return (
    <section id="about" className="bg-mint/40 py-24 sm:py-32">
      <div className="container flex flex-col items-center gap-8 text-center">
        <SectionHeading
          align="center"
          label="About"
          heading="Where Science Meets Possibility"
          className="mx-auto"
        />
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="max-w-2xl text-lg leading-relaxed text-navy-soft"
        >
          {SITE_NAME} exists because the hardest problems in healthcare, animal
          science and agriculture rarely stay inside one field. We build the
          intelligent layer that connects them — practical tools grounded in
          real data, built for the people who use them every day.
        </motion.p>
      </div>
    </section>
  );
}
