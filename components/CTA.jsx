export default function CTA() {
  return (
    <section className="px-4 sm:px-6 pb-24">
      <div className="max-w-6xl mx-auto glass-strong rounded-[2rem] px-8 py-16 text-center relative overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-30"
          style={{ background: "var(--grad-brand)" }}
        ></div>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl max-w-xl mx-auto relative">
          Have a field, a pond, a ward, or a flock generating data?
        </h2>
        <p className="mt-4 max-w-lg mx-auto relative" style={{ color: "var(--ink-soft)" }}>
          Let&apos;s find out what it can tell you.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 relative">
          <a href="#contact" className="btn-primary rounded-full px-6 py-3 font-semibold text-sm focus-ring">
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  );
}
