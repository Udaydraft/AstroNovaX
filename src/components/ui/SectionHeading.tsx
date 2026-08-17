import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Props = {
  label?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  headingClassName?: string;
  descClassName?: string;
};

export default function SectionHeading({
  label,
  heading,
  description,
  align = "left",
  tone = "dark",
  className = "",
  headingClassName,
  descClassName,
}: Props) {
  const { fadeUp, viewport } = useScrollAnimation();
  const alignCls = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const headingColor = headingClassName || (tone === "dark" ? "text-navy dark:text-white" : "text-white");
  const descColor = descClassName || (tone === "dark" ? "text-navy-soft dark:text-white/80" : "text-white");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      className={`flex flex-col gap-4 max-w-2xl ${alignCls} ${className}`}
    >
      {label && (
        <span className="inline-flex w-fit items-center rounded-full bg-cyan/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
          {label}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight ${headingColor}`}>
        {heading}
      </h2>
      {description && <p className={`text-base sm:text-lg leading-relaxed ${descColor}`}>{description}</p>}
    </motion.div>
  );
}
