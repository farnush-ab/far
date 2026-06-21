"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpLeft } from "lucide-react";
import { images } from "@/lib/images";

const lines = ["جایی برای", "دیزاین."];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden bg-cream-100 pt-28 md:pt-32"
    >
      {/* Top meta strip */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.1 }}
        className="mx-auto flex max-w-7xl items-center justify-between border-b border-line px-6 pb-4 text-walnut-700 md:px-10"
      >
        <p className="kicker">EST. 2026 · TEHRAN · DUBAI</p>
        <p className="kicker hidden md:block">CHAPTER 01 — COLLECTIONS</p>
        <p className="kicker">FA · IR</p>
      </motion.div>

      {/* Main composition */}
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-y-12 px-6 pt-16 md:gap-x-10 md:px-10 md:pt-20">
        {/* Left: typographic block */}
        <div className="col-span-12 md:col-span-7 md:pt-6">
          <h1 className="display-fa text-balance text-[64px] leading-[1.05] md:text-[120px] lg:text-[148px]">
            {lines.map((line, i) => (
              <motion.span
                key={line}
                className="block"
                initial={reduce ? false : { y: "110%", opacity: 0 }}
                animate={reduce ? undefined : { y: "0%", opacity: 1 }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.25 + i * 0.18,
                }}
              >
                {i === 1 ? <em className="not-italic text-sage-600">{line}</em> : line}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85 }}
            className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12 md:gap-10"
          >
            <p className="md:col-span-7 max-w-lg text-base leading-[2] text-walnut-700 md:text-lg">
              نمایندگی انحصاری برندهای معتبر شیرآلات، سرامیک و روشنایی در ایران —
              از پالادیوم تهران تا انتیتی دبی.
            </p>

            <div className="flex flex-col gap-3 md:col-span-5 md:items-end">
              <a
                href="#categories"
                className="kicker group inline-flex items-center justify-between gap-3 self-start border border-walnut-800 px-5 py-3 transition hover:bg-walnut-800 hover:text-cream-100 md:self-end"
              >
                <span>EXPLORE COLLECTIONS</span>
                <ArrowUpLeft size={14} className="transition-transform group-hover:-translate-x-1 group-hover:translate-y-1" />
              </a>
              <a
                href="#table"
                className="kicker self-start text-walnut-700 hover-line md:self-end"
              >
                BOOK THE TABLE →
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: portrait image */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 1.04 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="col-span-12 md:col-span-5"
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-cream-200">
            <Image
              src={images.hero.main}
              alt="فضای داخلی شوروم دیزاین استیشن"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="kicker">PALLADIUM SHOWROOM · TEHRAN</p>
            <span className="kicker text-walnut-700">01</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom metrics strip */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.1 }}
        className="mx-auto mt-20 max-w-7xl border-t border-line px-6 md:mt-28 md:px-10"
      >
        <div className="grid grid-cols-3 gap-6 py-6 md:grid-cols-4">
          <Stat n="03" label="دسته‌بندی" />
          <Stat n="12+" label="برند انحصاری" />
          <Stat n="01" label="شوروم پالادیوم" />
          <Stat n="UAE" label="انتیتی دبی" className="hidden md:block" />
        </div>
      </motion.div>
    </section>
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
      <span className="display text-2xl text-walnut-800 md:text-3xl">{n}</span>
      <span className="text-sm text-walnut-700">{label}</span>
    </div>
  );
}
