"use client";

import { useState } from "react";
import Mark from "./Mark";
import { useTheme } from "@/context/ThemeContext";
import Logo from "../public/logo.png";

const LINKS = [
  ["Solutions", "#solutions"],
  ["Approach", "#approach"],
  ["Process", "#process"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-4">
      <nav className="max-w-6xl mx-auto glass-strong rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 focus-ring rounded-lg">
          <img src={Logo.src} alt="logo" className="w-12 h-8"  />
          <span className="font-display font-semibold text-lg tracking-tight">
            <span style={{ color: "var(--ink)" }}>AstraNova</span>
            <span className="brand-text">X</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium focus-ring rounded" style={{ color: "var(--ink-soft)" }}>
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="glass w-9 h-9 rounded-full flex items-center justify-center focus-ring"
          >
            {theme === "dark" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>
          <a href="#contact" className="hidden sm:inline-flex btn-primary rounded-full px-4 py-2 text-sm font-semibold focus-ring">
            Talk to us
          </a>
          <button
            className="md:hidden glass w-9 h-9 rounded-full flex items-center justify-center focus-ring"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden max-w-6xl mx-auto glass-strong rounded-2xl mt-2 p-4 flex flex-col gap-3">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="text-sm font-medium" style={{ color: "var(--ink)" }}>
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
