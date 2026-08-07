"use client";

import { useState } from "react";
import Eyebrow from "./Eyebrow";
import { FAQS } from "@/data/content";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 bg-mesh">
      <div className="max-w-3xl mx-auto">
        <Eyebrow>Answers</Eyebrow>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl">Frequently asked questions.</h2>

        <div className="mt-10 space-y-4">
          {FAQS.map((f, i) => (
            <div key={f.q} className="glass rounded-2xl overflow-hidden">
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus-ring"
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                aria-expanded={openIdx === i}
              >
                <span className="font-display font-semibold">{f.q}</span>
                <span className="shrink-0 font-mono-brand text-lg" style={{ color: "var(--purple-2)" }}>
                  {openIdx === i ? "–" : "+"}
                </span>
              </button>
              {openIdx === i && (
                <div className="px-6 pb-5 text-sm" style={{ color: "var(--ink-soft)" }}>
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
