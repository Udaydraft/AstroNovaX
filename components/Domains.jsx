import Eyebrow from "./Eyebrow";
import { ICON_MAP } from "./icons";
import { DOMAINS } from "@/data/content";

export default function Domains() {
  return (
    <section id="solutions" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>Where we work</Eyebrow>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl max-w-2xl">
          Three core domains, one modelling discipline.
        </h2>
        <p className="mt-4 max-w-2xl" style={{ color: "var(--ink-soft)" }}>
          Each sector gets models trained on its own conditions — not a repackaged general-purpose product.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {DOMAINS.map((d) => {
            const Icon = ICON_MAP[d.icon];
            return (
              <div key={d.name} className="glass card-hover rounded-3xl p-8">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: "var(--grad-brand)" }}
                >
                  <Icon className="w-6 h-6" style={{ color: "#fff" }} />
                </div>
                <span className="font-mono-brand text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink-soft)" }}>
                  {d.tag}
                </span>
                <h3 className="font-display font-semibold text-2xl mt-1">{d.name}</h3>
                <p className="mt-3 text-sm" style={{ color: "var(--ink-soft)" }}>
                  {d.desc}
                </p>
                <ul className="mt-5 space-y-2">
                  {d.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--orange-1)" }}></span>
                      <span style={{ color: "var(--ink)" }}>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
