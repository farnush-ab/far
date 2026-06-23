"use client";

import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  strength?: number; // 0..1, default 0.3
  href?: string;
};

/**
 * A button (or anchor) that subtly drifts toward the cursor when hovered.
 * Use on hero / showroom CTAs for an editorial, interactive feel.
 */
export function MagneticButton({ children, className, strength = 0.3, href }: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const inner = (
    <motion.span style={{ x: sx, y: sy }} className="inline-flex items-center gap-3">
      {children}
    </motion.span>
  );

  const sharedProps = {
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    className,
  };

  if (href) {
    return (
      <a ref={ref as React.RefObject<HTMLAnchorElement>} href={href} {...sharedProps}>
        {inner}
      </a>
    );
  }
  return (
    <button ref={ref as React.RefObject<HTMLButtonElement>} type="button" {...sharedProps}>
      {inner}
    </button>
  );
}
