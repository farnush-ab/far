"use client";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SectionHeader from "./SectionHeader";

const types = [
  {
    name: "راسته دوز",
    desc: "چرخ‌های تک‌سوزن صنعتی برای دوخت مستقیم، با قابلیت سرعت بالا و دقت میلی‌متری.",
    color: "from-ink-700 to-ink-900",
    speed: "۵۵۰۰",
    illus: "straight",
  },
  {
    name: "سردوز",
    desc: "اورلاک‌های ۳، ۴ و ۵ نخ برای پرداخت لبه و دوخت کشسان روی منسوجات سبک و سنگین.",
    color: "from-ink-500 to-ink-800",
    speed: "۷۰۰۰",
    illus: "overlock",
  },
  {
    name: "میاندوز",
    desc: "چرخ‌های کاوراستیچ (Coverstitch) برای دوخت تزئینی و حاشیه‌ای روی پارچه‌های کشی.",
    color: "from-ink-300 to-ink-700",
    speed: "۶۲۰۰",
    illus: "cover",
  },
];

function MachineIllustration({ kind }: { kind: string }) {
  return (
    <svg viewBox="0 0 240 160" className="h-32 w-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`g-${kind}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#ebebee" stopOpacity="0.9" />
          <stop offset="1" stopColor="#aebcc5" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {kind === "straight" && (
        <g fill="url(#g-straight)">
          <rect x="20" y="100" width="200" height="34" rx="8" />
          <path d="M40 100 V60 C40 45 55 38 75 38 H180 C195 38 200 50 200 65 V92 H120 V100 Z" />
          <rect x="175" y="60" width="22" height="44" rx="5" fill="#0a1d31" />
          <circle cx="55" cy="80" r="14" fill="#0a1d31" />
        </g>
      )}
      {kind === "overlock" && (
        <g fill="url(#g-overlock)">
          <rect x="15" y="100" width="210" height="34" rx="8" />
          <path d="M35 100 V70 C35 50 50 40 70 40 H170 C185 40 195 55 195 70 V100 Z" />
          <circle cx="60" cy="80" r="10" fill="#0a1d31" />
          <circle cx="100" cy="60" r="6" fill="#0a1d31" />
          <circle cx="140" cy="60" r="6" fill="#0a1d31" />
          <circle cx="170" cy="60" r="6" fill="#0a1d31" />
          <rect x="175" y="92" width="14" height="20" rx="3" fill="#0a1d31" />
        </g>
      )}
      {kind === "cover" && (
        <g fill="url(#g-cover)">
          <rect x="18" y="100" width="204" height="34" rx="8" />
          <path d="M38 100 V58 C38 45 50 38 68 38 H180 C195 38 198 50 198 60 V100 Z" />
          <rect x="165" y="55" width="28" height="55" rx="5" fill="#0a1d31" />
          <rect x="170" y="100" width="3" height="14" fill="#aebcc5" />
          <rect x="178" y="100" width="3" height="14" fill="#aebcc5" />
          <rect x="186" y="100" width="3" height="14" fill="#aebcc5" />
        </g>
      )}
    </svg>
  );
}

export default function MachineTypes() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="بر اساس نوع چرخ"
          title="با نوع چرخ صنعتی خود انتخاب کنید"
          description="فهرستی هدفمند از قطعات مناسب چرخ‌های راسته‌دوز، سردوز و میاندوز."
        />

        <div className="mt-14 flex flex-col gap-6">
          {types.map((t, i) => (
            <motion.a
              href="#"
              key={t.name}
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative flex flex-col-reverse items-stretch overflow-hidden rounded-3xl bg-gradient-to-br ${t.color} text-ink-100 shadow-glow lift md:flex-row`}
            >
              {/* details */}
              <div className="relative flex-1 p-8 md:p-12">
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-ink-100/70">
                  <span className="h-2 w-2 rounded-full bg-ink-100/70" />
                  Industrial Machine · 0{i + 1}
                </div>
                <h3 className="display mt-4 text-4xl md:text-5xl">{t.name}</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-ink-100/80">
                  {t.desc}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <div className="rounded-2xl bg-white/10 px-4 py-2 backdrop-blur">
                    <div className="text-[11px] opacity-70">حداکثر سرعت</div>
                    <div className="display text-lg">{t.speed} SPM</div>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-ink-100 px-5 py-2 text-xs text-ink-900 transition-transform group-hover:-translate-x-1">
                    مشاهده محصولات
                    <ArrowLeft className="h-3.5 w-3.5" />
                  </span>
                </div>

                {/* big watermark number */}
                <div className="pointer-events-none absolute -left-4 bottom-2 text-[140px] font-black leading-none tracking-tight text-white/5 md:text-[200px]">
                  0{i + 1}
                </div>
              </div>

              {/* illustration */}
              <div className="relative flex flex-1 items-center justify-center bg-white/5 p-10">
                <motion.div
                  whileHover={{ scale: 1.06, rotate: -2 }}
                  transition={{ type: "spring", damping: 14 }}
                >
                  <MachineIllustration kind={t.illus} />
                </motion.div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_60%)]" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
