"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2400&auto=format&fit=crop";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src={HERO_IMAGE}
        alt="فضای داخلی لوکس"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Warm gradient veil — pulls toward cream/walnut */}
      <div className="absolute inset-0 bg-gradient-to-b from-walnut-900/40 via-walnut-900/20 to-cream-100" />
      <div className="absolute inset-0 bg-gradient-to-l from-walnut-900/30 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-between px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="kicker mb-6 text-cream-100/80">
            EST. TEHRAN · PALLADIUM
          </p>
          <h1 className="display-fa max-w-4xl text-balance text-4xl text-cream-100 md:text-6xl lg:text-7xl">
            جایی برای دیزاین.
          </h1>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-base leading-[2] text-cream-100/90 md:text-lg">
            نماینده انحصاری برندهای معتبر شیرآلات، سرامیک و روشنایی در ایران.
            از پالادیوم تهران تا انتیتی دبی.
          </p>
          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="#categories"
              className="kicker inline-flex items-center gap-3 self-start border border-cream-100 px-5 py-3 text-cream-100 transition hover:bg-cream-100 hover:text-walnut-800 md:self-end"
            >
              <span>EXPLORE THE COLLECTIONS</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
