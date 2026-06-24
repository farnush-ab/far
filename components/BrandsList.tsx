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
    <section id="brands" className="relative bg-cream-100 py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        {/* Header */}
        <Reveal className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
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
        <ul className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-20 md:gap-x-20 md:gap-y-28">
          {brands.map((b, i) => (
            <Reveal key={b.name} delay={i * 0.08} as="li">
              <a
                href="#"
                className="group block border-t border-line pt-10"
              >
                <p className="kicker mb-6 text-walnut-700">
                  {String(i + 1).padStart(2, "0")} · {b.country}
                </p>
                <p className="display text-5xl tracking-tight text-walnut-800 transition-colors duration-500 group-hover:text-sage-600 md:text-7xl">
                  {b.name}
                </p>
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.4} className="mt-20 flex justify-center md:mt-28">
          <a href="#" className="btn btn-fa text-walnut-700 hover-line">
            مشاهده‌ی همه‌ی برندها
          </a>
        </Reveal>
      </div>
    </section>
  );
}
