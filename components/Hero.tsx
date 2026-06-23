"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpLeft } from "lucide-react";
import { images } from "@/lib/images";
import { MagneticButton } from "./ui/MagneticButton";

export default function Hero() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);

  // Subtle mouse parallax on the video — drifts a few percent with cursor
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 50, damping: 18 });
  const sy = useSpring(my, { stiffness: 50, damping: 18 });
  const vidX = useTransform(sx, [0, 1], ["-2%", "2%"]);
  const vidY = useTransform(sy, [0, 1], ["-1.5%", "1.5%"]);

  function onMove(e: React.MouseEvent) {
    if (reduce || !wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <section
      id="home"
      ref={wrapRef}
      onMouseMove={onMove}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-walnut-900"
    >
      {/* Video layer (poster fallback shows if video stalls or codec fails) */}
      <motion.div
        style={{ x: vidX, y: vidY }}
        className="absolute inset-0 scale-[1.06]"
      >
        <video
          className="h-full w-full object-cover"
          src={images.hero.video}
          poster={images.hero.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        />
      </motion.div>

      {/* Gradient veil — top + bottom darken for text legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-walnut-900/55 via-walnut-900/20 to-walnut-900/85" />

      {/* Top meta strip */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 pt-24 text-cream-100/85 md:px-10 md:pt-28"
      >
        <p className="kicker text-cream-100/80">EST. 2026 · TEHRAN · DUBAI</p>
        <p className="kicker hidden text-cream-100/80 md:block">CHAPTER 01 — COLLECTIONS</p>
        <p className="kicker text-cream-100/80">FA · IR</p>
      </motion.div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex h-[calc(100svh-180px)] min-h-[460px] max-w-7xl flex-col justify-between px-6 pb-24 pt-16 md:px-10 md:pb-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
        >
          <h1 className="display-fa text-balance text-[44px] leading-[1.1] text-cream-100 md:text-[88px] lg:text-[112px]">
            <Line delay={0.55}>جایی برای</Line>
            <Line delay={0.75}>
              <em className="not-italic text-cream-200">دیزاین.</em>
            </Line>
          </h1>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.05 }}
          className="grid gap-6 md:grid-cols-12 md:items-end md:gap-10"
        >
          <p className="md:col-span-7 max-w-xl text-base leading-[1.95] text-cream-100/90 md:text-[17px]">
            نمایندگی انحصاری برندهای معتبر شیرآلات، سرامیک و روشنایی در ایران —
            از پالادیوم تهران تا انتیتی دبی.
          </p>

          <div className="flex flex-col gap-3 md:col-span-5 md:items-end">
            <MagneticButton
              href="#categories"
              className="kicker group inline-flex w-fit items-center gap-3 border border-cream-100 px-5 py-3 text-cream-100 transition hover:bg-cream-100 hover:text-walnut-800"
            >
              <span>EXPLORE COLLECTIONS</span>
              <ArrowUpLeft size={14} />
            </MagneticButton>
            <MagneticButton
              href="#table"
              strength={0.2}
              className="kicker text-cream-100/85 hover-line"
            >
              <span>BOOK THE TABLE →</span>
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* Cursor hint */}
      {!reduce && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1.2 }}
          className="pointer-events-none absolute bottom-28 right-6 z-10 hidden text-cream-100/70 md:right-10 md:block"
        >
          <p className="kicker">↘ MOVE CURSOR</p>
        </motion.div>
      )}

      {/* Metrics + brand ticker strip below the video */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="grid grid-cols-3 gap-6 border-t border-cream-100/20 py-4 text-cream-100 md:grid-cols-4"
          >
            <Stat n="03" label="دسته‌بندی" />
            <Stat n="12+" label="برند انحصاری" />
            <Stat n="01" label="شوروم پالادیوم" />
            <Stat n="UAE" label="انتیتی دبی" className="hidden md:flex" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Line({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={reduce ? false : { y: "110%" }}
        animate={reduce ? undefined : { y: "0%" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Stat({
  n,
  label,
  className = "",
}: {
  n: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`flex items-baseline gap-3 ${className}`}>
      <span className="display text-xl text-cream-100 md:text-2xl">{n}</span>
      <span className="text-sm text-cream-100/75">{label}</span>
    </div>
  );
}
