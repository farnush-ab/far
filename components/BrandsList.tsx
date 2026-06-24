"use client";

import { Reveal } from "./ui/Reveal";
import { ArrowUpLeft } from "lucide-react";

const brands = [
  { name: "Gessi",          country: "ایتالیا",  category: "شیرآلات", since: "۱۹۹۲" },
  { name: "Dornbracht",     country: "آلمان",   category: "شیرآلات", since: "۱۹۵۰" },
  { name: "Antonio Lupi",   country: "ایتالیا",  category: "حمام",   since: "۱۹۵۰" },
  { name: "Fantini",        country: "ایتالیا",  category: "شیرآلات", since: "۱۹۴۷" },
  { name: "Florim",         country: "ایتالیا",  category: "سرامیک", since: "۱۹۶۲" },
  { name: "Bisazza",        country: "ایتالیا",  category: "موزائیک", since: "۱۹۵۶" },
  { name: "Mutina",         country: "ایتالیا",  category: "سرامیک", since: "۲۰۰۵" },
  { name: "Atlas Concorde", country: "ایتالیا",  category: "سرامیک", since: "۱۹۶۹" },
  { name: "Flos",           country: "ایتالیا",  category: "روشنایی", since: "۱۹۶۲" },
  { name: "Artemide",       country: "ایتالیا",  category: "روشنایی", since: "۱۹۶۰" },
  { name: "Foscarini",      country: "ایتالیا",  category: "روشنایی", since: "۱۹۸۱" },
  { name: "Vibia",          country: "اسپانیا",  category: "روشنایی", since: "۱۹۸۷" },
];

export default function BrandsList() {
  return (
    <section id="brands" className="relative bg-cream-100 py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {/* Header */}
        <Reveal className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker mb-4">REPRESENTED BRANDS · {brands.length.toString().padStart(2, "0")}</p>
            <h2 className="display-fa text-balance text-3xl md:text-5xl">
              برندهای ما،
              <br />
              <span className="text-sage-600">یک به یک.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-[1.95] text-walnut-700">
            معتبرترین خانه‌های دیزاین اروپا، تنها از طریق دیزاین استیشن
            در ایران در دسترس هستند. هر کدام با شناسنامه، گارانتی و
            پشتیبانی مستقیم برند.
          </p>
        </Reveal>

        {/* The list */}
        <ul className="border-t border-line">
          {brands.map((b, i) => (
            <li key={b.name}>
              <a
                href="#"
                className="group grid grid-cols-12 items-baseline gap-4 border-b border-line py-6 transition-colors duration-500 hover:bg-cream-50 md:gap-6 md:py-8"
              >
                <span className="kicker col-span-2 text-walnut-700 md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="display col-span-10 text-3xl tracking-tight text-walnut-800 transition-colors duration-500 group-hover:text-sage-600 md:col-span-5 md:text-5xl">
                  {b.name}
                </span>

                <span className="kicker col-span-9 text-walnut-700 md:col-span-5">
                  {b.country}
                  <span className="mx-3 text-walnut-700/40">·</span>
                  {b.category}
                  <span className="mx-3 text-walnut-700/40">·</span>
                  {b.since}
                </span>

                <span className="col-span-3 flex justify-end text-walnut-700 transition-all duration-500 group-hover:text-sage-600 md:col-span-1">
                  <ArrowUpLeft
                    size={18}
                    className="transition-transform duration-500 group-hover:-translate-x-1 group-hover:translate-y-1"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
