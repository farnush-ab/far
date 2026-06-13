"use client";

export default function Logo({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const fill = light ? "#fbfaf7" : "#102b42";
  return (
    <a href="#" className={`flex items-center gap-3 ${className}`} aria-label="Nooraco">
      <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden>
        <g fill={fill}>
          <rect x="14" y="6" width="3" height="6" rx="1" />
          <rect x="47" y="6" width="3" height="6" rx="1" />
          <path d="M10 14 H54 V20 H44 C44 28 38 32 30 32 V40 C30 46 26 52 18 52 H10 Z" />
        </g>
      </svg>
      <span
        className="text-base tracking-[0.32em] uppercase"
        style={{ color: fill, fontWeight: 400 }}
      >
        nooraco
      </span>
    </a>
  );
}
