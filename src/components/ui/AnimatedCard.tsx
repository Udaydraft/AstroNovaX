import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Props = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function AnimatedCard({ children, className = "", hover = true }: Props) {
  const { fadeUp } = useScrollAnimation();

  return (
    <motion.div
      variants={fadeUp}
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
