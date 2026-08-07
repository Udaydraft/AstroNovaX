"use client";

import { useState } from "react";
import logo from "../public/logo.png";
import Mark from "./Mark";
  
// TODO: replace with your real WhatsApp number (country code + digits, no + or spaces)
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
// TODO: replace with your real email address
const EMAIL = process.env.NEXT_PUBLIC_EMAIL;

export default function Footer() {
  const [msg, setMsg] = useState("Hi AstraNovaX, I'd like to know more about your AI solutions.");

  const sendWhatsApp = (e) => {
    e.preventDefault();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer id="contact" className="px-4 sm:px-6 pb-10">
      <div className="max-w-6xl mx-auto glass rounded-[2rem] p-8 sm:p-12">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo.src} alt="logo" className="w-12 h-8"  /> 
              <span className="font-display font-semibold text-lg">
                <span style={{ color: "var(--ink)" }}>AstraNova</span>
                <span className="brand-text">X</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm" style={{ color: "var(--ink-soft)" }}>
              Applied AI and machine-learning systems for agriculture, fishery, healthcare, and poultry.
              Innovating beyond limits.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 focus-ring rounded w-fit" style={{ color: "var(--ink)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--purple-2)" strokeWidth="2">
                  <path d="M4 4h16v16H4z" />
                  <path d="M4 6l8 7 8-7" />
                </svg>
                {EMAIL}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 focus-ring rounded w-fit"
                style={{ color: "var(--ink)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--orange-1)" strokeWidth="2">
                  <path d="M21 11.5a8.5 8.5 0 01-12.36 7.6L4 20l1-4.5A8.5 8.5 0 1121 11.5z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Send a WhatsApp message</h3>
            <form onSubmit={sendWhatsApp} className="space-y-3">
              <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                rows={3}
                className="w-full rounded-xl px-4 py-3 text-sm glass focus-ring resize-none"
                style={{ color: "var(--ink)" }}
                placeholder="Tell us what you're working on..."
              />
              <div className="flex flex-wrap gap-3">
                <button type="submit" className="btn-primary rounded-full px-5 py-2.5 text-sm font-semibold focus-ring">
                  Send via WhatsApp
                </button>
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent("Hello AstraNovaX")}&body=${encodeURIComponent(msg)}`}
                  className="btn-ghost rounded-full px-5 py-2.5 text-sm font-semibold focus-ring"
                >
                  Send via email
                </a>
              </div>
            </form>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--surface-border)" }}
        >
          <p className="text-xs" style={{ color: "var(--ink-soft)" }}>
            © {new Date().getFullYear()} AstraNovaX. All rights reserved.
          </p>
          <p className="font-mono-brand text-xs tracking-[0.2em] uppercase" style={{ color: "var(--ink-soft)" }}>
            Innovating Beyond Limits
          </p>
        </div>
      </div>
    </footer>
  );
}
