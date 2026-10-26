interface AwarenessRibbonProps {
  className?: string;
}

export function AwarenessRibbon({ className = '' }: AwarenessRibbonProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Pink breast cancer awareness ribbon"
      role="img"
    >
      <defs>
        <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8A0B0" />
          <stop offset="50%" stopColor="#D97B8E" />
          <stop offset="100%" stopColor="#C98991" />
        </linearGradient>
        <linearGradient id="ribbonShine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F0C4D0" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#F5DDE4" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#F0C4D0" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Left loop of ribbon */}
      <path
        d="M30 50 L14 12 C12 6, 18 2, 24 6 C30 10, 30 20, 30 30 L30 50"
        stroke="url(#ribbonGrad)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right loop of ribbon */}
      <path
        d="M30 50 L46 12 C48 6, 42 2, 36 6 C30 10, 30 20, 30 30 L30 50"
        stroke="url(#ribbonGrad)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Tail ends */}
      <path
        d="M26 48 L22 72"
        stroke="url(#ribbonGrad)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M34 48 L38 72"
        stroke="url(#ribbonGrad)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Subtle highlight on left loop */}
      <path
        d="M30 48 L16 14 C15 9, 19 6, 23 9"
        stroke="url(#ribbonShine)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Subtle highlight on right loop */}
      <path
        d="M30 48 L44 14 C45 9, 41 6, 37 9"
        stroke="url(#ribbonShine)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
