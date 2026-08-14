import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Variant = "primary" | "secondary" | "ghost";

type Props = {
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: (e?: any) => void;
  type?: "button" | "submit";
};

const styles: Record<Variant, string> = {
  primary: "bg-grad-accent text-white hover:brightness-110 shadow-soft",
  secondary: "bg-surface text-navy border border-navy/10 hover:border-navy/25 shadow-card",
  ghost: "text-navy hover:bg-navy/5",
};

export default function Button({
  variant = "primary",
  icon,
  children,
  className = "",
  href,
  onClick,
  type = "button",
}: Props) {
  const cls = `focus-ring inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 ${styles[variant]} ${className}`;
  const motionProps = { whileHover: { y: -2 }, whileTap: { y: 0, scale: 0.98 } };

  if (href) {
    return (
      <motion.a href={href} onClick={onClick} className={cls} {...motionProps}>
        {children}
        {icon}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} className={cls} {...motionProps}>
      {children}
      {icon}
    </motion.button>
  );
}
