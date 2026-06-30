"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-2.5"
        >
          <span className="block h-px w-7 bg-ink-900/40" />
          <span className="kicker">nooraco · since 2014 · sewing parts</span>
        </motion.div>

        <h1 className="display mt-6 text-5xl leading-[1.02] text-ink-900 sm:text-6xl lg:text-7xl">
          {"نوراکو".split("").map((c, i) => (
            <motion.span
              key={i}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.15 + i * 0.06,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {c}
            </motion.span>
          ))}
        </h1>

        <div className="mt-10 grid items-end gap-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="lg:col-span-7"
          >
            <p className="max-w-md text-sm leading-7 text-ink-900/75">
              قطعات اصل برای چرخ‌های خیاطی صنعتی. ساده، دقیق و قابل اعتماد —
              همراه صنعتگران ایرانی از سال ۱۳۹۳.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
              <a
                href="#categories"
                className="hover-line text-[11px] uppercase tracking-widest2 text-ink-900"
              >
                مشاهده مجموعه →
              </a>
              <a
                href="#vision"
                className="hover-line text-[11px] uppercase tracking-widest2 text-ink-900/60"
              >
                درباره برند
              </a>
            </div>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="grid grid-cols-3 gap-6 lg:col-span-5"
          >
            {[
              ["۱۲", "سال"],
              ["۶۰۰۰", "کد"],
              ["۳۲", "استان"],
            ].map(([n, l], i) => (
              <div key={i} className="border-r border-line pr-3 first:border-0">
                <div className="display text-xl text-ink-900">{n}</div>
                <div className="mt-1.5 kicker">{l}</div>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.figure
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.9 }}
          className="mt-14 grid grid-cols-12 gap-4"
        >
          <div className="col-span-12 md:col-span-8">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-cream-100">
              <svg
                viewBox="0 0 800 450"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
              >
                <line x1="0" y1="320" x2="800" y2="320" stroke="#102b42" strokeOpacity="0.12" />
                <g transform="translate(220,80)" fill="#102b42">
                  <rect x="20" y="200" width="360" height="60" rx="4" />
                  <path d="M40 200 V90 C40 60 70 50 105 50 H340 C365 50 380 70 380 95 V160 H210 V200 Z" />
                  <rect x="350" y="80" width="34" height="120" rx="4" fill="#0a1d31" />
                  <circle cx="75" cy="130" r="22" fill="#0a1d31" />
                  <circle cx="75" cy="130" r="10" fill="#aebcc5" />
                </g>
                <motion.line
                  x1="40" y1="380" x2="760" y2="380"
                  stroke="#102b42"
                  strokeWidth="1"
                  strokeDasharray="2 8"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.2, ease: "easeOut", delay: 1.1 }}
                />
              </svg>
            </div>
          </div>

          <div className="col-span-12 flex flex-col justify-end md:col-span-4">
            <div className="rule" />
            <div className="py-3 flex items-baseline justify-between">
              <span className="kicker">collection 01</span>
              <span className="kicker">۲۰۲۶</span>
            </div>
            <div className="rule" />
            <h3 className="display mt-4 text-base text-ink-900">
              خط جدید سوزن‌های تیتانیومی
            </h3>
            <p className="mt-2 text-xs leading-6 text-ink-900/65">
              عمری دو برابر، با خطایی نزدیک به صفر.
            </p>
            <a href="#" className="hover-line mt-4 text-[11px] uppercase tracking-widest2 text-ink-900">
              مشاهده →
            </a>
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
