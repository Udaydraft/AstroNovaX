import { Mail } from "lucide-react";
import { NAV_LINKS, SITE_NAME, SITE_TAGLINE } from "@/data/site";
import { SOLUTIONS } from "@/data/solutions";
import { WhatsAppIcon, XIcon, LinkedInIcon } from "@/components/ContactWidget";

export default function Footer() {
  return (
    <footer className="border-t border-navy/5 bg-surface py-14">
      <div className="container grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <a
            href="#top"
            className="flex w-fit items-center rounded-full"
          >
            <img
              src="/images/astranovax-full-logo.png"
              alt={SITE_NAME}
              className="h-11 sm:h-11 w-auto object-contain dark:brightness-110"
            />
          </a>
          <p className="max-w-xs text-sm text-navy-soft">
            Intelligent technology across healthcare, animal science,
            agriculture and AI data & Drone.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-muted">
            Navigate
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="focus-ring rounded text-sm text-navy-soft hover:text-navy"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-muted">
            Solutions
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {SOLUTIONS.map((s) => (
              <li key={s.title}>
                <a
                  href="#solutions"
                  className="focus-ring rounded text-sm text-navy-soft hover:text-navy"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-muted">
            Contact Us
          </p>
          <div className="mt-4 flex flex-col gap-2.5">
            <a
              href={`mailto:${import.meta.env.VITE_EMAIL}`}
              className="focus-ring flex w-fit items-center gap-2 text-sm text-navy-soft hover:text-navy"
            >
              <Mail size={16} className="text-navy-muted" />
              <span>
                {import.meta.env.VITE_EMAIL || "astranovax@gmail.com"}
              </span>
            </a>

            <a
              href={`https://wa.me/${import.meta.env.VITE_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex w-fit items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <WhatsAppIcon className="h-4 w-4 fill-current text-emerald-600 dark:text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>

            <div className="mt-2 flex items-center gap-2.5">
              <a
                href={`https://wa.me/${import.meta.env.VITE_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all"
              >
                <WhatsAppIcon className="h-4 w-4 fill-current" />
              </a>

              <a
                href={`mailto:${import.meta.env.VITE_EMAIL || "astranovax@gmail.com"}`}
                aria-label="Email Us"
                title="Email Us"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full bg-cyan/10 text-navy hover:bg-cyan hover:text-navy transition-all"
              >
                <Mail size={16} />
              </a>

              <a
                href="https://x.com/astranovax"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                title="X (Twitter)"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full bg-navy/5 text-navy-soft hover:bg-black hover:text-white transition-all dark:bg-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black"
              >
                <XIcon className="h-4 w-4 fill-current" />
              </a>

              <a
                href="https://linkedin.com/company/astranovax"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all"
              >
                <LinkedInIcon className="h-4 w-4 fill-current" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-10 flex flex-col items-center gap-2 border-t border-navy/5 pt-6 sm:flex-row sm:justify-between">
        <p className="text-xs text-navy-muted">
          © 2026 {SITE_NAME}. All rights reserved.
        </p>
        <p className="font-display text-[0.65rem] uppercase tracking-[0.3em] text-navy-muted">
          {SITE_TAGLINE}
        </p>
      </div>
    </footer>
  );
}
