"use client";

import Image from "next/image";
import { ArrowUpLeft } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const SHOWROOM_IMG =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop";

export default function ShowroomTeaser() {
  return (
    <section id="showroom" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden bg-cream-200 md:aspect-[5/6]">
              <Image
                src={SHOWROOM_IMG}
                alt="شوروم دیزاین استیشن، پالادیوم تهران"
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col justify-between md:col-span-5">
            <div>
              <p className="kicker mb-4">SHOWROOM · TEHRAN</p>
              <h2 className="display-fa text-balance text-4xl md:text-5xl lg:text-6xl">
                از پالادیوم تا دبی.
              </h2>
              <p className="mt-8 text-base leading-[2] text-walnut-700 md:text-lg">
                شوروم اصلی ما در مرکز خرید پالادیوم تهران، فضایی است برای لمس
                مجموعه‌های انتخابی، گفتگو با تیم طراحی، و دیدن نمونه‌های واقعی
                از برندهایی که تنها ما در ایران نمایندگی می‌کنیم.
              </p>
              <p className="mt-4 text-base leading-[2] text-walnut-700 md:text-lg">
                انتیتی ما در دبی، پلی است میان برندهای اروپایی و بازار ایران؛
                جایی که نمایندگی‌ها نگهداری و صادرات مجدد انجام می‌شود.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <div className="rule" />
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="kicker mb-2">TEHRAN</p>
                  <p className="leading-[1.9] text-walnut-800">
                    مرکز خرید پالادیوم
                    <br />
                    تهران، ایران
                  </p>
                </div>
                <div>
                  <p className="kicker mb-2">DUBAI</p>
                  <p className="leading-[1.9] text-walnut-800">
                    Design Station FZE
                    <br />
                    Dubai, UAE
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="kicker inline-flex items-center gap-3 border border-walnut-800 px-5 py-3 transition hover:bg-walnut-800 hover:text-cream-100"
              >
                <ArrowUpLeft size={14} />
                <span>BOOK A VISIT</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
