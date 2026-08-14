import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/data/site";
import Button from "@/components/ui/Button";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "border-navy/10 bg-surface/90 shadow-card backdrop-blur-md dark:border-white/10 dark:bg-surface/90"
            : "border-surface/40 bg-surface/60 backdrop-blur-sm dark:border-white/10 dark:bg-surface/60"
        }`}
      >
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="focus-ring flex items-center gap-2.5 rounded-full font-display text-lg font-bold text-navy dark:text-white"
        >
          <img src="/images/astranovax-logo.png" alt={SITE_NAME} className="h-8 w-8 object-contain" />
          {SITE_NAME}
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="focus-ring rounded text-sm font-medium text-navy-soft transition-colors hover:text-navy dark:text-ink-soft dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full bg-surface text-navy shadow-card dark:bg-surface/80 dark:text-white dark:border dark:border-white/10"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Button href="#contact" variant="primary" className="hidden sm:inline-flex">
            Get Started
          </Button>

          {/* Mobile Hamburger Button */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-navy dark:text-white md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-navy/10 bg-surface/95 p-5 shadow-soft backdrop-blur-xl dark:border-white/15 dark:bg-surface/95 md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  className="focus-ring flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-navy transition-colors hover:bg-navy/5 dark:text-white dark:hover:bg-white/10"
                >
                  <span>{l.label}</span>
                </a>
              ))}
              <div className="mt-2 pt-2 border-t border-navy/5 dark:border-white/10">
                <Button
                  href="#contact"
                  variant="primary"
                  className="w-full justify-center py-3 text-center"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, "#contact")}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
