"use client";

import Image from "next/image";
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

// Brand ticker — interactive marquee at the bottom of the hero
const brands = [
  "Gessi", "Dornbracht", "Antonio Lupi", "Fantini",
  "Florim", "Bisazza", "Mutina", "Atlas Concorde",
  "Flos", "Artemide", "Foscarini", "Vibia",
];

export default function Hero() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);

  // Mouse parallax — image drifts gently with cursor
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const imgX = useTransform(sx, [0, 1], ["-2.5%", "2.5%"]);
  const imgY = useTransform(sy, [0, 1], ["-2%", "2%"]);
  const imgScale = useTransform(sx, [0, 0.5, 1], [1.04, 1.02, 1.04]);

  function onMouseMove(e: React.MouseEvent) {
    if (reduce || !wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-cream-100 pt-24 md:pt-28"
    >
      {/* Top meta strip */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.1 }}
        className="mx-auto flex max-w-7xl items-center justify-between border-b border-line px-6 pb-3 text-walnut-700 md:px-10"
      >
        <p className="kicker">EST. 2026 · TEHRAN · DUBAI</p>
        <p className="kicker hidden md:block">CHAPTER 01 — COLLECTIONS</p>
        <p className="kicker">FA · IR</p>
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 pt-10 md:px-10 md:pt-14">
        {/* Headline */}
        <h1 className="display-fa text-balance text-[44px] leading-[1.05] md:text-[80px] lg:text-[96px]">
          <Line delay={0.2}>جایی برای</Line>
          <Line delay={0.38}>
            <em className="not-italic text-sage-600">دیزاین.</em>
          </Line>
        </h1>

        {/* Wide cinematic image — natural panorama, with mouse parallax */}
        <motion.div
          ref={wrapRef}
          onMouseMove={onMouseMove}
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-10 aspect-[1600/443] w-full overflow-hidden bg-cream-200 md:mt-14"
        >
          <motion.div
            style={{ x: imgX, y: imgY, scale: imgScale }}
            className="absolute inset-0"
          >
            <Image
              src={images.hero.main}
              alt="شوروم دیزاین استیشن، پالادیوم"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>

          {/* Floating corner labels */}
          <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-5 md:p-7">
            <span className="kicker bg-cream-100/80 px-3 py-1 text-walnut-800 backdrop-blur">
              PALLADIUM · 01
            </span>
            <span className="kicker bg-cream-100/80 px-3 py-1 text-walnut-800 backdrop-blur">
              2026
            </span>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-7">
            <span className="kicker bg-walnut-800 px-3 py-1 text-cream-100">
              SHOWROOM IN MOTION
            </span>
            <span className="kicker hidden bg-cream-100/80 px-3 py-1 text-walnut-800 backdrop-blur md:inline-block">
              ↘ MOVE CURSOR
            </span>
          </div>
        </motion.div>

        {/* Sub + CTAs */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 grid gap-6 md:grid-cols-12 md:gap-10"
        >
          <p className="md:col-span-7 max-w-xl text-base leading-[1.95] text-walnut-700 md:text-[17px]">
            نمایندگی انحصاری برندهای معتبر شیرآلات، سرامیک و روشنایی در ایران —
            از پالادیوم تهران تا انتیتی دبی.
          </p>

          <div className="flex flex-col gap-3 md:col-span-5 md:items-end">
            <MagneticButton
              href="#categories"
              className="kicker group inline-flex w-fit items-center gap-3 border border-walnut-800 px-5 py-3 transition hover:bg-walnut-800 hover:text-cream-100"
            >
              <span>EXPLORE COLLECTIONS</span>
              <ArrowUpLeft size={14} />
            </MagneticButton>
            <MagneticButton
              href="#table"
              strength={0.2}
              className="kicker text-walnut-700 hover-line"
            >
              <span>BOOK THE TABLE →</span>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Metrics strip */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-14 grid grid-cols-3 gap-6 border-t border-line py-5 md:grid-cols-4"
        >
          <Stat n="03" label="دسته‌بندی" />
          <Stat n="12+" label="برند انحصاری" />
          <Stat n="01" label="شوروم پالادیوم" />
          <Stat n="UAE" label="انتیتی دبی" className="hidden md:flex" />
        </motion.div>
      </div>

      {/* Interactive brand ticker */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 1.4, delay: 1.4 }}
        className="marquee-mask mt-2 overflow-hidden border-t border-line py-4"
      >
        <div className="flex w-max animate-marquee gap-12 px-6">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="display whitespace-nowrap text-xl text-walnut-800/70 md:text-2xl"
            >
              {b}
              <span className="ms-12 text-sage-500/60">·</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Line({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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
      <span className="display text-xl text-walnut-800 md:text-2xl">{n}</span>
      <span className="text-sm text-walnut-700">{label}</span>
    </div>
  );
}
