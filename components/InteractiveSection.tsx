"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import { ArrowUpLeft } from "lucide-react";
import { images } from "@/lib/images";

/**
 * "Step inside" — an interactive editorial tile that primes visitors
 * for the showroom story below. Hover the image to follow the cursor
 * with a custom "VIEW" indicator and trigger a soft parallax tilt.
 */
export default function InteractiveSection() {
  const reduce = useReducedMotion();
  const imgRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Cursor-follow
  const cx = useMotionValue(0);
  const cy = useMotionValue(0);
  const scx = useSpring(cx, { stiffness: 350, damping: 26, mass: 0.4 });
  const scy = useSpring(cy, { stiffness: 350, damping: 26, mass: 0.4 });

  // Subtle tilt
  const tx = useMotionValue(0.5);
  const ty = useMotionValue(0.5);
  const stx = useSpring(tx, { stiffness: 60, damping: 18 });
  const sty = useSpring(ty, { stiffness: 60, damping: 18 });
  const rotateX = useTransform(sty, [0, 1], ["3deg", "-3deg"]);
  const rotateY = useTransform(stx, [0, 1], ["-3deg", "3deg"]);

  function onMove(e: React.MouseEvent) {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cx.set(x);
    cy.set(y);
    if (!reduce) {
      tx.set(x / rect.width);
      ty.set(y / rect.height);
    }
  }

  return (
    <section className="relative bg-cream-50 py-20 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <div className="grid grid-cols-12 items-center gap-12 md:gap-20">
          {/* Copy side */}
          <div className="col-span-12 md:col-span-5">
            <p className="kicker mb-4">AN INVITATION · STEP INSIDE</p>
            <h2 className="display-fa text-balance text-4xl leading-[1.2] md:text-6xl">
              قدم بگذارید به
              <br />
              <span className="text-sage-600">شوروم ما.</span>
            </h2>
            <p className="mt-6 text-base leading-[1.95] text-walnut-700 md:text-[18px]">
              در پالادیوم میزبان شما هستیم. در فضایی آرام، با چای یا قهوه،
              گزینه‌های پروژه‌ی شما را با هم بررسی می‌کنیم.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#showroom" className="btn btn-primary btn-fa btn-lg">
                <ArrowUpLeft size={16} className="btn-arrow" />
                <span>گردش در شوروم</span>
              </a>
              <a
                href="#table"
                className="btn btn-fa text-walnut-700 hover:text-walnut-800"
              >
                <span className="hover-line">رزرو میز ملاقات</span>
              </a>
            </div>
          </div>

          {/* Interactive image */}
          <div className="col-span-12 md:col-span-7" style={{ perspective: "1000px" }}>
            <motion.div
              ref={imgRef}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onMouseMove={onMove}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="group relative aspect-square overflow-hidden bg-cream-200"
            >
              <Image
                src={images.experience}
                alt="تجربه‌ی شوروم دیزاین استیشن"
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-walnut-900/30 via-transparent to-transparent" />

              {/* Cursor-follow VIEW chip */}
              <AnimatePresence>
                {hovered && !reduce && (
                  <motion.span
                    style={{ x: scx, y: scy }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.3 }}
                    className="kicker pointer-events-none absolute -ms-12 -mt-12 inline-flex h-24 w-24 items-center justify-center rounded-full bg-cream-100 text-walnut-800 shadow-lg"
                  >
                    VIEW · 360
                  </motion.span>
                )}
              </AnimatePresence>

              <div className="absolute bottom-5 right-5 hidden md:block">
                <p className="kicker text-cream-100/90">
                  HOVER TO EXPLORE
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
