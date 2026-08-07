/**
 * "ANX" linked monogram derived from the AstraNovaX logo mark:
 * an A/N ribbon peak that flows into an X tail.
 *
 * Props:
 *  - className: sizing/layout classes (e.g. "h-24 w-36")
 *  - animated: when true, the stroke draws itself in on mount
 *  - gradientId: unique id for the gradient def — pass a different value
 *    each time the mark appears more than once on the same page so the
 *    <defs> don't collide
 *  - ...rest: forwarded to the <svg> (style, width, height, etc.)
 */
export function AnxMark({ className, animated = false, gradientId = "anx-grad", ...rest }) {
  const dash = animated ? { strokeDasharray: 640, className: "animate-draw" } : {};

  return (
    <svg viewBox="0 0 200 120" fill="none" className={className} aria-hidden="true" {...rest}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="120" x2="200" y2="0">
          <stop offset="0%" stopColor="var(--violet-deep)" />
          <stop offset="45%" stopColor="var(--primary)" />
          <stop offset="75%" stopColor="var(--magenta)" />
          <stop offset="100%" stopColor="var(--amber)" />
        </linearGradient>
      </defs>
      <g
        stroke={`url(#${gradientId})`}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={dash.strokeDasharray}
        className={dash.className}
      >
        {/* A — left ribbon rising to the peak */}
        <path d="M18 104 C 40 60, 62 26, 84 14" />
        {/* N — peak descending, then the linked upstroke */}
        <path d="M84 14 C 104 34, 116 68, 126 100" />
        <path d="M52 70 H 104" strokeWidth="7" />
        {/* X — tail crossing out of the N */}
        <path d="M126 100 C 146 84, 162 66, 182 40" />
        <path d="M148 44 C 158 58, 168 70, 182 82" strokeWidth="7" />
      </g>
    </svg>
  );
}

export default AnxMark;
