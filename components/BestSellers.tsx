"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Star } from "lucide-react";
import SectionHeader from "./SectionHeader";

const products = [
  {
    name: "سوزن DBx1 بسته ۱۰۰ عددی",
    brand: "PIN",
    price: "۲۸۰٬۰۰۰",
    old: "۳۲۰٬۰۰۰",
    rating: 4.9,
    badge: "پرفروش‌ترین",
  },
  {
    name: "قیچی صنعتی پارچه ۱۰ اینچ",
    brand: "PIN",
    price: "۱٬۴۵۰٬۰۰۰",
    old: null,
    rating: 4.8,
    badge: "جدید",
  },
  {
    name: "ماسوره فلزی استاندارد ۲۵ عددی",
    brand: "STRONG H",
    price: "۸۹۰٬۰۰۰",
    old: "۹۹۰٬۰۰۰",
    rating: 4.7,
    badge: "تخفیف",
  },
  {
    name: "چرخ‌دنده اصلی راسته‌دوز JUKI",
    brand: "STRONG H",
    price: "۳٬۲۰۰٬۰۰۰",
    old: null,
    rating: 5,
    badge: "اصل",
  },
];

function ProductSvg({ kind, i }: { kind: string; i: number }) {
  const palette = ["#17476b", "#3a6a8a", "#102b42", "#6f8fa3"];
  const bg = palette[i % palette.length];
  return (
    <svg viewBox="0 0 300 220" className="h-full w-full">
      <defs>
        <radialGradient id={`pg-${i}`} cx="50%" cy="40%" r="60%">
          <stop offset="0" stopColor="#ebebee" />
          <stop offset="1" stopColor={bg} stopOpacity="0.15" />
        </radialGradient>
      </defs>
      <rect width="300" height="220" fill={`url(#pg-${i})`} />
      {kind === "needle" && (
        <g stroke="#102b42" strokeWidth="3" strokeLinecap="round">
          <line x1="150" y1="40" x2="150" y2="180" />
          <circle cx="150" cy="55" r="6" fill="none" />
          <path d="M150 178 L156 170 M150 178 L144 170" />
        </g>
      )}
      {kind === "scissor" && (
        <g fill="none" stroke="#102b42" strokeWidth="6" strokeLinecap="round">
          <circle cx="100" cy="160" r="22" />
          <circle cx="200" cy="160" r="22" />
          <path d="M118 145 L220 60" />
          <path d="M182 145 L80 60" />
        </g>
      )}
      {kind === "bobbin" && (
        <g fill="#102b42">
          <ellipse cx="150" cy="70" rx="55" ry="10" />
          <rect x="120" y="70" width="60" height="80" />
          <ellipse cx="150" cy="150" rx="55" ry="10" />
          <rect x="125" y="80" width="50" height="60" fill="#3a6a8a" />
        </g>
      )}
      {kind === "gear" && (
        <g fill="#102b42">
          <circle cx="150" cy="110" r="55" />
          {Array.from({ length: 10 }).map((_, k) => {
            const a = (k * Math.PI * 2) / 10;
            const x = 150 + Math.cos(a) * 70;
            const y = 110 + Math.sin(a) * 70;
            return (
              <rect
                key={k}
                x={x - 6}
                y={y - 8}
                width="12"
                height="16"
                transform={`rotate(${(a * 180) / Math.PI + 90} ${x} ${y})`}
              />
            );
          })}
          <circle cx="150" cy="110" r="22" fill="#ebebee" />
        </g>
      )}
    </svg>
  );
}

const kinds = ["needle", "scissor", "bobbin", "gear"];

export default function BestSellers() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="پرفروش‌ترین محصولات"
            title="انتخاب صنعتگران ایران"
            description="پرفروش‌ترین قطعات نوراکو در سه ماه گذشته، با ضمانت اصالت و گارانتی پشتیبانی."
          />
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-sm text-ink-800 hover:text-ink-900"
          >
            همه محصولات
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-3xl border border-ink-300/60 bg-white lift"
            >
              <div className="relative aspect-square overflow-hidden bg-ink-50">
                <motion.div
                  whileHover={{ scale: 1.08, rotate: -3 }}
                  transition={{ type: "spring", damping: 12 }}
                  className="h-full w-full"
                >
                  <ProductSvg kind={kinds[i]} i={i} />
                </motion.div>
                <span className="absolute right-3 top-3 rounded-full bg-ink-900 px-3 py-1 text-[10px] text-ink-100">
                  {p.badge}
                </span>
                <button
                  aria-label="افزودن به علاقه‌مندی‌ها"
                  className="absolute left-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-ink-900 backdrop-blur transition hover:bg-ink-900 hover:text-ink-100"
                >
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="rounded-md bg-ink-100 px-2 py-1 text-ink-800">
                    {p.brand}
                  </span>
                  <span className="flex items-center gap-1 text-ink-900/70">
                    <Star className="h-3.5 w-3.5 fill-ink-800 text-ink-800" />
                    {p.rating.toLocaleString("fa-IR")}
                  </span>
                </div>
                <h3 className="mt-3 line-clamp-2 text-sm font-bold text-ink-900">
                  {p.name}
                </h3>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    {p.old && (
                      <div className="text-xs text-ink-900/40 line-through">
                        {p.old} تومان
                      </div>
                    )}
                    <div className="display text-lg text-ink-900">
                      {p.price}
                      <span className="mr-1 text-xs text-ink-900/60">تومان</span>
                    </div>
                  </div>
                  <button className="rounded-xl bg-ink-900 px-3 py-2 text-xs text-ink-100 transition hover:bg-ink-800">
                    افزودن
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
