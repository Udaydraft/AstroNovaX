import Eyebrow from "./Eyebrow";
import { ICON_MAP } from "./icons";
import { PILLARS } from "@/data/content";

export default function Approach() {
  return (
    <section id="approach" className="py-24 px-4 sm:px-6 bg-mesh">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>How we build</Eyebrow>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl max-w-2xl">
          The technology underneath every solution.
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p) => {
            const Icon = ICON_MAP[p.icon];
            return (
              <div key={p.name} className="glass card-hover rounded-2xl p-6">
                <Icon className="w-8 h-8 mb-4" style={{ color: "var(--purple-2)" }} />
                <h3 className="font-display font-semibold text-lg">{p.name}</h3>
                <p className="mt-2 text-sm" style={{ color: "var(--ink-soft)" }}>
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
