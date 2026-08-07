import Eyebrow from "./Eyebrow";
import Mark from "./Mark";
import logo from "../public/logo.png"

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-24 px-4 sm:px-6 overflow-hidden bg-mesh">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <Eyebrow>Applied AI &amp; Machine Learning</Eyebrow>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Intelligence for the <span className="brand-text">field</span>, the{" "}
            <span className="brand-text">water</span>, the <span className="brand-text">ward</span>, and the{" "}
            <span className="brand-text">flock</span>.
          </h1>
          <p className="mt-6 text-lg max-w-xl" style={{ color: "var(--ink-soft)" }}>
            AstraNovaX designs AI and ML systems for agriculture, fishery, healthcare, and poultry — models trained
            on real operational data, delivered as tools your team already knows how to use.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#solutions" className="btn-primary rounded-full px-6 py-3 font-semibold text-sm focus-ring">
              Explore solutions
            </a>
            <a href="#contact" className="btn-ghost rounded-full px-6 py-3 font-semibold text-sm focus-ring">
              Talk to us on WhatsApp
            </a>
          </div>
          <p className="mt-8 font-mono-brand text-xs tracking-[0.2em] uppercase" style={{ color: "var(--ink-soft)" }}>
            ****** Innovating Beyond Limits ******
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <div
            className="absolute w-72 h-72 rounded-full blur-3xl opacity-40 animate-drift"
            style={{ background: "var(--grad-brand)" }}
          ></div>
          <div className="relative glass rounded-[2rem] p-10 sm:p-14 animate-float">
            <img src={logo.src} alt="logo" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
