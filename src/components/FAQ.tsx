import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export interface FAQItem {
  question: string;
  answer: string;
  badge?: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What is AstraNovaX (astranovax.in)?",
    badge: "Company Overview",
    answer:
      "AstraNovaX (astranovax.in) is an applied AI and Machine Learning enterprise focused on AI model development, data engineering pipelines, drone & satellite imaging analysis, healthcare clinical intelligence, livestock telemetry, and smart agriculture.",
  },
  {
    question: "Is AstraNovaX associated with Astra Nova School?",
    badge: "Entity Clarity",
    answer:
      "No. AstraNovaX (https://www.astranovax.in/) is an applied AI, Data Engineering, and Drone Remote Sensing technology enterprise. It has no affiliation or relationship with Astra Nova School (the online K-12 school) or other educational institutions.",
  },
  {
    question: "What services does AstraNovaX provide?",
    badge: "Solutions",
    answer:
      "AstraNovaX offers 4 primary solution pillars: 1. Healthcare AI (Clinical intelligence & risk stratification), 2. Animal Science (Livestock & herd intelligence), 3. Smart Agriculture (Field & crop analytics), and 4. AI & Drone Services (AI Model Development, Data Engineering Pipelines, ML Solutions, and Drone & Satellite Imaging Analysis).",
  },
  {
    question: "How does AstraNovaX utilize drone and satellite imaging?",
    badge: "Drone & Remote Sensing",
    answer:
      "AstraNovaX processes multispectral, thermal, and spatial aerial telemetry to map soil nutrient variations, identify early crop stress, monitor livestock welfare, and provide real-time spatial analytics for operational decision-making.",
  },
  {
    question: "How can I contact AstraNovaX for a project consultation?",
    badge: "Consulting",
    answer:
      "You can reach out directly through the contact section on https://www.astranovax.in/#contact via email, WhatsApp, or connect with our team on LinkedIn and X (@astranovax).",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { fadeUp, stagger, viewport } = useScrollAnimation();

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="relative overflow-hidden py-20 sm:py-28">
      <div className="container relative flex flex-col gap-12">
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            align="center"
            label="Frequently Asked Questions"
            heading="Everything You Need to Know About AstraNovaX"
            description="Explore key insights into our applied AI models, drone & satellite data pipelines, and cross-industry intelligence systems."
            className="mx-auto max-w-3xl"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="mx-auto flex w-full max-w-4xl flex-col gap-4"
        >
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.question}
                variants={fadeUp}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-cyan/40 bg-surface/95 shadow-soft dark:border-cyan/40 dark:bg-surface/90"
                    : "border-navy/10 bg-surface/70 shadow-sm hover:border-navy/20 dark:border-white/10 dark:bg-surface/50"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6 focus-ring"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-200 ${
                        isOpen
                          ? "bg-cyan text-navy"
                          : "bg-navy/5 text-navy-soft dark:bg-white/10 dark:text-white"
                      }`}
                    >
                      <HelpCircle size={18} />
                    </div>
                    <div className="flex flex-col gap-1">
                      {faq.badge && (
                        <span className="w-fit rounded-full bg-cyan/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan">
                          {faq.badge}
                        </span>
                      )}
                      <h3 className="font-display text-base font-bold text-navy dark:text-white sm:text-lg">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-cyan/20 text-cyan"
                        : "text-navy-soft dark:text-white/70"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <div className="border-t border-navy/5 px-5 pb-6 pt-4 text-sm leading-relaxed text-navy-soft dark:border-white/10 dark:text-white/85 sm:px-6 sm:text-base">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom helper prompt */}
        <div className="flex items-center justify-center gap-2 text-center text-xs text-navy-muted">
          <Sparkles size={14} className="text-cyan" />
          <span>Have specialized enterprise AI or drone requirements? Reach out in our contact section.</span>
        </div>
      </div>
    </section>
  );
}
