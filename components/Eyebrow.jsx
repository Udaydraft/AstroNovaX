export default function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="divider-swoosh"></span>
      <span className="font-mono-brand text-xs tracking-[0.25em] uppercase" style={{ color: "var(--ink-soft)" }}>
        {children}
      </span>
    </div>
  );
}
