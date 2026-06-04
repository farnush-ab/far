"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 380, damping: 40 });
  const sy = useSpring(y, { stiffness: 380, damping: 40 });
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target as HTMLElement;
      const interactive = !!target.closest(
        "a, button, [role='button'], input, textarea, select, label"
      );
      setHover(interactive);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        style={{ x: sx, y: sy }}
        animate={{
          scale: hover ? 1.6 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink-900 mix-blend-difference md:block"
      />
      <motion.div
        style={{ x, y }}
        animate={{
          scale: hover ? 0.4 : 1,
          opacity: visible ? 0.4 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="pointer-events-none fixed left-0 top-0 z-[99] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink-900 md:block"
      />
    </>
  );
}
