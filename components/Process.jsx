import Eyebrow from "./Eyebrow";
import { PROCESS } from "@/data/content";

export default function Process() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>Engagement</Eyebrow>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl max-w-2xl">
          A four-step path from data to decision.
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS.map((s, i) => (
            <div key={s.n} className="relative glass rounded-2xl p-6">
              <span className="font-display font-semibold text-3xl brand-text">{s.n}</span>
              <h3 className="font-display font-semibold text-lg mt-3">{s.t}</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--ink-soft)" }}>
                {s.d}
              </p>
              {i < PROCESS.length - 1 && (
                <span
                  className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px"
                  style={{ background: "var(--surface-border)" }}
                ></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
