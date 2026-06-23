"use client";

import Image from "next/image";
import { ArrowUpLeft } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { images } from "@/lib/images";

const meta = [
  { k: "ORIGIN", v: "ایتالیا · Vercelli" },
  { k: "SINCE", v: "۱۹۹۲" },
  { k: "CATEGORY", v: "شیرآلات و تجهیزات حمام" },
  { k: "STATUS", v: "نمایندگی انحصاری" },
];

export default function FeaturedBrand() {
  return (
    <section className="relative bg-cream-100 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mb-16 flex items-end justify-between gap-6 md:mb-20">
          <p className="kicker">FEATURED BRAND · IN FOCUS</p>
          <p className="kicker text-walnut-700">01 / 12</p>
        </Reveal>

        <div className="grid grid-cols-12 gap-8 md:gap-14">
          {/* Wordmark + meta */}
          <Reveal className="col-span-12 md:col-span-7">
            <h2 className="display text-[80px] leading-none tracking-[-0.04em] text-walnut-800 md:text-[140px] lg:text-[180px]">
              Gessi<span className="text-sage-500">.</span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-[1.95] text-walnut-700 md:text-lg">
              برندی که در دل شمال ایتالیا متولد شد و نام خود را به‌عنوان معیار
              لوکس در دنیای شیرآلات تثبیت کرد. مجموعه‌های Gessi، از مینیمالیست
              تا تکستچرال، در شوروم پالادیوم به نمایش گذاشته شده‌اند —
              لمس‌کردنی، آزمودنی، انتخاب‌کردنی.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-6 md:max-w-xl md:grid-cols-4">
              {meta.map((m) => (
                <div key={m.k}>
                  <p className="kicker mb-2 text-walnut-700">{m.k}</p>
                  <p className="text-sm text-walnut-800">{m.v}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#" className="btn btn-outline btn-lg">
                <span>EXPLORE GESSI</span>
                <ArrowUpLeft size={16} className="btn-arrow" />
              </a>
              <a href="#brands" className="btn btn-fa text-walnut-700 hover-line">
                همه برندها
              </a>
            </div>
          </Reveal>

          {/* Editorial image */}
          <Reveal delay={0.15} className="col-span-12 md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden bg-cream-200">
              <Image
                src={images.categories.faucets}
                alt="مجموعه شیرآلات Gessi"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="kicker mt-4 text-walnut-700">PLATE · GESSI COLLECTION</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
