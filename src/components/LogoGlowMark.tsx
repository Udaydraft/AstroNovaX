type Props = {
  className?: string;
  style?: React.CSSProperties;
  animated?: boolean;
  gradientId?: string;
};

/**
 * 3D-glow ANX mark — recreates the glowing/depth logo video: a glossy
 * extruded logo, a soft blurred drop shadow, diagonal light trails that
 * sweep across the surface on a loop, and twinkling sparkles. Ported from
 * the AstraNovaX Next.js site's LogoGlowMark component.
 */
export function LogoGlowMark({ className, style, animated = true, gradientId = "glow-mark" }: Props) {
  const on = animated;
  const g = (name: string) => `${gradientId}-${name}`;

  return (
    <svg viewBox="-20 -20 240 240" className={className} style={style} aria-hidden="true">
      <defs>
        <linearGradient id={g("fill")} x1="20" y1="200" x2="200" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4C0E8F" />
          <stop offset="45%" stopColor="#8B2FD1" />
          <stop offset="75%" stopColor="#C026D3" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>

        <linearGradient id={g("sheen")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="35%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        <linearGradient id={g("shine")} x1="-0.35" y1="1" x2="0.15" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="46%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="54%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          {on && (
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              values="-1 0; 2 0; 2 0"
              keyTimes="0; 0.55; 1"
              dur="2.6s"
              repeatCount="indefinite"
            />
          )}
        </linearGradient>

        <filter id={g("blurShadow")} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <filter id={g("blurGlow")} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      <g
        transform="translate(7,10)"
        stroke="#1E0F3A"
        strokeOpacity="0.45"
        strokeWidth="16"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#${g("blurShadow")})`}
      >
        <path d="M35 150 C55 150 70 130 85 100 C100 70 115 40 135 40" />
        <path d="M95 55 C110 80 125 120 150 130 C165 136 175 132 178 118" />
        <path d="M155 95 L178 118 L178 95" />
      </g>

      <g
        stroke={`url(#${g("fill")})`}
        strokeWidth="22"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
        filter={`url(#${g("blurGlow")})`}
      >
        <path d="M35 150 C55 150 70 130 85 100 C100 70 115 40 135 40" />
        <path d="M95 55 C110 80 125 120 150 130 C165 136 175 132 178 118" />
        <path d="M155 95 L178 118 L178 95" />
      </g>

      <g stroke={`url(#${g("fill")})`} strokeWidth="15" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M35 150 C55 150 70 130 85 100 C100 70 115 40 135 40" />
        <path d="M95 55 C110 80 125 120 150 130 C165 136 175 132 178 118" />
        <path d="M155 95 L178 118 L178 95" />
      </g>

      <g stroke={`url(#${g("sheen")})`} strokeWidth="15" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M35 150 C55 150 70 130 85 100 C100 70 115 40 135 40" />
        <path d="M95 55 C110 80 125 120 150 130 C165 136 175 132 178 118" />
      </g>

      <g
        stroke={`url(#${g("shine")})`}
        strokeWidth="16"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ mixBlendMode: "screen" }}
      >
        <path d="M35 150 C55 150 70 130 85 100 C100 70 115 40 135 40" />
        <path d="M95 55 C110 80 125 120 150 130 C165 136 175 132 178 118" />
        <path d="M155 95 L178 118 L178 95" />
      </g>

      <Sparkle x={196} y={132} delay="0s" animated={on} />
      <Sparkle x={28} y={118} delay="0.9s" scale={0.7} animated={on} />
      <Sparkle x={118} y={20} delay="1.6s" scale={0.55} animated={on} />
    </svg>
  );
}

function Sparkle({
  x,
  y,
  delay = "0s",
  scale = 1,
  animated,
}: {
  x: number;
  y: number;
  delay?: string;
  scale?: number;
  animated: boolean;
}) {
  const s = 7 * scale;
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d={`M0 ${-s} L${s * 0.28} ${-s * 0.28} L${s} 0 L${s * 0.28} ${s * 0.28} L0 ${s} L${-s * 0.28} ${s * 0.28} L${-s} 0 L${-s * 0.28} ${-s * 0.28} Z`}
        fill="#ffffff"
        opacity="0"
      >
        {animated && (
          <animate
            attributeName="opacity"
            values="0;0;1;0;0"
            keyTimes="0;0.15;0.35;0.55;1"
            dur="2.4s"
            begin={delay}
            repeatCount="indefinite"
          />
        )}
      </path>
    </g>
  );
}

export default LogoGlowMark;
