"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpLeft } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { images } from "@/lib/images";

export default function ShowroomTeaser() {
  const reduce = useReducedMotion();
  const mainRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <section id="showroom" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        {/* Header */}
        <Reveal className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker mb-4">THE SHOWROOM · PALLADIUM, TEHRAN</p>
            <h2 className="display-fa text-balance text-4xl md:text-6xl">
              شوروم ما،
              <br />
              <span className="text-sage-600">در قلب پالادیوم.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-[1.95] text-walnut-700">
            فضایی نمایشگاهی با نورپردازی حرفه‌ای و چیدمان معمارانه. تمام
            برندهای ما در یک مکان، قابل لمس، قابل مقایسه، در کنار تیم
            مشاوره‌ی ما.
          </p>
        </Reveal>

        {/* Editorial layout */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {/* Large main image with scroll-driven parallax */}
          <Reveal className="col-span-12 md:col-span-8">
            <div
              ref={mainRef}
              className="relative aspect-[4/3] overflow-hidden bg-cream-200"
            >
              <motion.div
                style={reduce ? undefined : { y: parallaxY }}
                className="absolute inset-x-0 -top-[7%] -bottom-[7%]"
              >
                <Image
                  src={images.showroom.space}
                  alt="فضای داخلی شوروم دیزاین استیشن، پالادیوم تهران"
                  fill
                  sizes="(min-width: 768px) 66vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
            <p className="kicker mt-4 text-walnut-700">PLATE 01 · MAIN HALL</p>
          </Reveal>

          {/* Side detail */}
          <Reveal delay={0.1} className="col-span-12 md:col-span-4">
            <div className="relative aspect-[3/4] overflow-hidden bg-cream-200 md:aspect-[4/5]">
              <Image
                src={images.showroom.detail}
                alt="جزئیات شیرآلات در شوروم"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="kicker mt-4 text-walnut-700">PLATE 02 · DETAIL</p>
          </Reveal>
        </div>

        {/* Story + dual location strip */}
        <Reveal delay={0.15} className="mt-16 grid grid-cols-12 gap-10 border-t border-line pt-12">
          <div className="col-span-12 md:col-span-7">
            <p className="text-base leading-[1.95] text-walnut-800 md:text-lg md:leading-[2]">
              در شوروم پالادیوم می‌توانید مجموعه‌های{" "}
              <em className="display not-italic text-walnut-800">Gessi</em>،{" "}
              <em className="display not-italic text-walnut-800">Dornbracht</em>،{" "}
              <em className="display not-italic text-walnut-800">Florim</em> و{" "}
              <em className="display not-italic text-walnut-800">Flos</em> را
              از نزدیک ببینید، بافت‌ها را لمس کنید و در کنار تیم ما
              گزینه‌های پروژه‌تان را بررسی کنید.
            </p>

            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
              <a href="#table" className="btn btn-primary btn-fa btn-lg">
                <ArrowUpLeft size={16} className="btn-arrow" />
                <span>رزرو میز دیزاین</span>
              </a>
              <a href="#contact" className="btn btn-outline btn-fa btn-lg">
                <span>بازدید از شوروم</span>
              </a>
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:col-span-5 md:gap-8">
            <Location
              kicker="TEHRAN"
              name="پالادیوم"
              line1="مرکز خرید پالادیوم"
              line2="تهران، ایران"
              note="شنبه تا چهارشنبه · ۱۰ تا ۲۰"
            />
            <Location
              kicker="DUBAI"
              name="Design Station FZE"
              line1="Holding & Export Entity"
              line2="Dubai, UAE"
              note="By appointment"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Location({
  kicker,
  name,
  line1,
  line2,
  note,
}: {
  kicker: string;
  name: string;
  line1: string;
  line2: string;
  note: string;
}) {
  return (
    <div className="flex flex-col gap-3 border-t border-walnut-800 pt-5">
      <p className="kicker">{kicker}</p>
      <p className="display-fa text-2xl">{name}</p>
      <p className="text-sm leading-[2] text-walnut-700">
        {line1}
        <br />
        {line2}
      </p>
      <p className="kicker mt-2 text-walnut-700">{note}</p>
    </div>
  );
}
