import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { WhatsAppIcon, XIcon, LinkedInIcon } from "@/components/ContactWidget";

const PARTICLES = [
  { top: "20%", left: "12%" },
  { top: "70%", left: "20%" },
  { top: "30%", left: "85%" },
  { top: "75%", left: "80%" },
];

export default function CTA() {
  const { fadeUp, viewport, reduced } = useScrollAnimation();

  return (
    <section id="contact" className="relative overflow-hidden bg-grad-sky py-24 sm:py-32">
      {!reduced &&
        PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            className="pointer-events-none absolute h-2 w-2 rounded-full bg-cyan/40"
            style={{ top: p.top, left: p.left }}
            animate={{ y: [0, -14, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          />
        ))}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
        className="container relative flex flex-col items-center gap-6 text-center"
      >
        <h2 className="max-w-2xl text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
          Let's Build a Smarter Future Together.
        </h2>
        <p className="max-w-xl text-lg text-navy-soft">
          Explore how intelligent technology can transform science, agriculture and healthcare. Reach out via your preferred channel.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`https://wa.me/${import.meta.env.VITE_WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-soft transition-all hover:bg-[#20ba5a] hover:shadow-card"
          >
            <WhatsAppIcon className="h-5 w-5 fill-current" />
            <span>Chat</span>
          </a>

          <a
            href={`mailto:${import.meta.env.VITE_EMAIL}`}
            className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white shadow-soft transition-all hover:bg-navy-soft hover:shadow-card dark:bg-white dark:text-purple-800"
          >
            <Mail className="h-5 w-5" />
            <span>Mail Us</span>
          </a>
          </div>
      </motion.div>
    </section>
  );
}
