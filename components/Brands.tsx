"use client";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SectionHeader from "./SectionHeader";

const brands = [
  {
    name: "PIN",
    tagline: "قیچی و قطعات دستی و برشی",
    desc: "برند تخصصی سوزن، قیچی و ابزار دستی نوراکو. ساخت آلمان و ژاپن، دقت و ماندگاری بی‌رقیب.",
    accent: "bg-ink-100 text-ink-900",
  },
  {
    name: "STRONG H",
    tagline: "قطعات برای چرخ‌های صنعتی",
    desc: "خط تخصصی چرخ‌دنده‌ها، یاتاقان‌ها و قطعات داخلی برای انواع چرخ‌های صنعتی پرکار.",
    accent: "bg-ink-900 text-ink-100",
  },
];

export default function Brands() {
  return (
    <section id="brands" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="برندهای اختصاصی"
          title="دو برند، یک تعهد به کیفیت"
          description="نوراکو دو خط محصول اختصاصی برای دو نیاز متفاوت صنعت دوخت ارائه می‌دهد."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {brands.map((b, i) => (
            <motion.a
              href="#"
              key={b.name}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`group relative overflow-hidden rounded-[36px] p-10 md:p-14 lift ${b.accent}`}
            >
              <div className="orb -right-10 -top-10 h-72 w-72 bg-ink-700/30" />
              <div className="relative flex items-start justify-between">
                <div className="display text-6xl tracking-tight md:text-7xl">
                  {b.name}
                </div>
                <span className="rounded-full border border-current/30 px-3 py-1 text-xs opacity-70">
                  Nooraco Brand · 0{i + 1}
                </span>
              </div>
              <div className="relative mt-2 text-sm opacity-80">{b.tagline}</div>
              <p className="relative mt-8 max-w-md text-sm leading-7 opacity-90">
                {b.desc}
              </p>

              {/* product illustration */}
              <div className="relative mt-10 grid grid-cols-3 gap-3">
                {Array.from({ length: 3 }).map((_, k) => (
                  <motion.div
                    key={k}
                    whileHover={{ y: -8, rotate: -2 }}
                    transition={{ type: "spring", damping: 14 }}
                    className={`flex aspect-square items-center justify-center rounded-2xl ${
                      i === 0 ? "bg-white/70" : "bg-white/10"
                    } backdrop-blur`}
                  >
                    <svg viewBox="0 0 60 60" className="h-10 w-10">
                      {i === 0 ? (
                        <g
                          stroke="#102b42"
                          strokeWidth="3"
                          strokeLinecap="round"
                          fill="none"
                        >
                          {k === 0 && (
                            <>
                              <circle cx="20" cy="42" r="8" />
                              <circle cx="40" cy="42" r="8" />
                              <path d="M24 36 L48 14" />
                              <path d="M36 36 L12 14" />
                            </>
                          )}
                          {k === 1 && (
                            <>
                              <line x1="30" y1="10" x2="30" y2="50" />
                              <circle cx="30" cy="18" r="3" />
                            </>
                          )}
                          {k === 2 && (
                            <>
                              <rect x="14" y="20" width="32" height="20" />
                              <line x1="22" y1="20" x2="22" y2="40" />
                              <line x1="38" y1="20" x2="38" y2="40" />
                            </>
                          )}
                        </g>
                      ) : (
                        <g fill="#ebebee">
                          {k === 0 && (
                            <>
                              <circle cx="30" cy="30" r="18" />
                              <circle cx="30" cy="30" r="6" fill="#102b42" />
                              {Array.from({ length: 8 }).map((_, j) => {
                                const a = (j * Math.PI * 2) / 8;
                                return (
                                  <rect
                                    key={j}
                                    x={28}
                                    y={6}
                                    width="4"
                                    height="8"
                                    transform={`rotate(${(a * 180) / Math.PI} 30 30)`}
                                  />
                                );
                              })}
                            </>
                          )}
                          {k === 1 && (
                            <>
                              <ellipse cx="30" cy="18" rx="14" ry="3" />
                              <rect x="22" y="18" width="16" height="24" />
                              <ellipse cx="30" cy="42" rx="14" ry="3" />
                            </>
                          )}
                          {k === 2 && (
                            <>
                              <rect x="14" y="18" width="32" height="24" rx="3" />
                              <circle cx="22" cy="30" r="3" fill="#102b42" />
                              <circle cx="38" cy="30" r="3" fill="#102b42" />
                            </>
                          )}
                        </g>
                      )}
                    </svg>
                  </motion.div>
                ))}
              </div>

              <div className="relative mt-10 inline-flex items-center gap-2 text-sm">
                <span className="border-b border-dashed border-current/50">
                  محصولات این برند
                </span>
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
