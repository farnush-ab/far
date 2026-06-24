"use client";

import { Reveal } from "./ui/Reveal";

const brands = [
  { name: "Gessi",      country: "ایتالیا" },
  { name: "Dornbracht", country: "آلمان" },
  { name: "Florim",     country: "ایتالیا" },
  { name: "Flos",       country: "ایتالیا" },
];

export default function BrandsList() {
  return (
    <section id="brands" className="relative bg-cream-100 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        {/* Header */}
        <Reveal className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker mb-4">REPRESENTED BRANDS</p>
            <h2 className="display-fa text-balance text-3xl md:text-5xl">
              برندهای ما،
              <br />
              <span className="text-sage-600">یک به یک.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-[1.95] text-walnut-700">
            معتبرترین خانه‌های دیزاین اروپا، تنها از طریق دیزاین استیشن
            در ایران در دسترس هستند.
          </p>
        </Reveal>

        {/* 2x2 editorial grid */}
        <ul className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 md:gap-x-16 md:gap-y-20">
          {brands.map((b, i) => (
            <Reveal key={b.name} delay={i * 0.08} as="li">
              <a
                href="#"
                className="group relative block overflow-hidden border-t border-line pt-7"
              >
                {/* Sage rule that draws across on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px origin-right scale-x-0 bg-sage-500 transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100"
                />

                <div className="flex items-baseline justify-between gap-4">
                  <p className="kicker text-walnut-700 transition-colors duration-500 group-hover:text-sage-600">
                    {String(i + 1).padStart(2, "0")} · {b.country}
                  </p>
                  <span
                    aria-hidden
                    className="kicker text-transparent transition-colors duration-500 group-hover:text-sage-600"
                  >
                    ↖
                  </span>
                </div>

                <div className="mt-4 overflow-hidden">
                  <p className="display text-4xl tracking-tight text-walnut-800 transition-transform duration-[800ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-x-2 md:text-6xl">
                    {b.name}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.4} className="mt-14 flex justify-center md:mt-20">
          <a href="#" className="btn btn-fa text-walnut-700 hover-line">
            مشاهده‌ی همه‌ی برندها
          </a>
        </Reveal>
      </div>
    </section>
  );
}
