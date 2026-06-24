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

  // Subtle mouse parallax on the video
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
      className="relative h-[92svh] min-h-[600px] w-full overflow-hidden bg-walnut-900"
    >
      {/* Video / image layer */}
      <motion.div
        style={{ x: vidX, y: vidY }}
        className="absolute inset-0 scale-[1.06]"
      >
        <video
          className="h-full w-full object-cover"
          src={images.hero.video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        />
      </motion.div>

      {/* Gradient veil — softer than before, warmer feel */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-walnut-900/45 via-walnut-900/15 to-walnut-900/80" />

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col justify-end px-6 pb-20 pt-32 md:px-12 md:pb-24 md:pt-36">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="kicker mb-5 text-cream-100/80">
            خوش آمدید · WELCOME
          </p>
          <h1 className="display-fa text-balance text-[44px] leading-[1.12] text-cream-100 md:text-[84px] lg:text-[104px]">
            <Line delay={0.45}>خانه را</Line>
            <Line delay={0.6}>
              <em className="not-italic text-cream-100">احساس کنید</em>
              <span className="text-sage-300">.</span>
            </Line>
          </h1>
        </motion.div>

        {/* Sub + CTAs */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95 }}
          className="mt-8 flex flex-col gap-8 md:mt-12 md:flex-row md:items-end md:justify-between md:gap-12"
        >
          <p className="max-w-lg text-base leading-[1.95] text-cream-100/90 md:text-[18px]">
            هر متریال، هر بافت، هر نور — انتخاب‌شده با ذوق برای خانه‌ای
            که شایسته‌ی شماست. در پالادیوم میزبان شما هستیم.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <MagneticButton
              href="#categories"
              className="btn btn-outline-cream btn-fa btn-lg"
            >
              <span>گردش در مجموعه‌ها</span>
              <ArrowUpLeft size={16} className="btn-arrow" />
            </MagneticButton>
            <MagneticButton
              href="#table"
              strength={0.2}
              className="btn btn-fa text-cream-100/90 hover:text-cream-100"
            >
              <span className="hover-line">رزرو میز ملاقات</span>
            </MagneticButton>
          </div>
        </motion.div>

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
