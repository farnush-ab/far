"use client";
import { motion } from "framer-motion";

export default function Logo({
  className = "",
  withWordmark = true,
  light = false,
}: {
  className?: string;
  withWordmark?: boolean;
  light?: boolean;
}) {
  const fill = light ? "#ebebee" : "#102b42";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.svg
        viewBox="0 0 64 64"
        className="h-9 w-9"
        initial={{ rotate: -8, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Nooraco"
      >
        {/* sewing machine silhouette inspired by brand guideline */}
        <g fill={fill}>
          <rect x="14" y="6" width="3" height="6" rx="1" />
          <rect x="47" y="6" width="3" height="6" rx="1" />
          <path d="M10 14 H54 V20 H44 C44 28 38 32 30 32 V40 C30 46 26 52 18 52 H10 Z" />
          <circle cx="46" cy="48" r="3" />
        </g>
        {/* animated stitch line */}
        <motion.line
          x1="6" y1="58" x2="58" y2="58"
          stroke={fill}
          strokeWidth="1.6"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      </motion.svg>
      {withWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className="display text-xl tracking-[0.18em]"
            style={{ color: fill }}
          >
            nooraco
          </span>
          <span
            className="text-[10px] tracking-[0.4em] opacity-70"
            style={{ color: fill }}
          >
            SEWING&nbsp;PARTS
          </span>
        </div>
      )}
    </div>
  );
}
