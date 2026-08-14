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

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "border-navy/10 bg-surface/90 shadow-card backdrop-blur-md"
            : "border-surface/40 bg-surface/60 backdrop-blur-sm"
        }`}
      >
        <a href="#top" className="focus-ring flex items-center gap-2.5 rounded-full font-display text-lg font-bold text-navy">
          <img src="/images/astranovax-logo.png" alt={SITE_NAME} className="h-8 w-8 object-contain" />
          {SITE_NAME}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="focus-ring rounded text-sm font-medium text-navy-soft transition-colors hover:text-navy"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full bg-surface text-navy shadow-card"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Button href="#contact" variant="primary" className="hidden sm:inline-flex">
            Get Started
          </Button>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-navy md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-navy/10 bg-surface/95 p-4 shadow-card backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring rounded-xl px-3 py-2.5 text-sm font-medium text-navy-soft hover:bg-navy/5 hover:text-navy"
                >
                  {l.label}
                </a>
              ))}
              <Button href="#contact" variant="primary" className="mt-2 justify-center">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
