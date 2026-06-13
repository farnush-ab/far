"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3"
        >
          <span className="block h-px w-10 bg-ink-900/40" />
          <span className="kicker">nooraco · since 2014 · sewing parts</span>
        </motion.div>

        {/* main heading */}
        <h1 className="display mt-10 text-[14vw] leading-[0.95] text-ink-900 sm:text-[12vw] lg:text-[160px]">
          {"نوراکو".split("").map((c, i) => (
            <motion.span
              key={i}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.2 + i * 0.08,
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {c}
            </motion.span>
          ))}
        </h1>

        {/* meta strip */}
        <div className="mt-14 grid items-end gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="lg:col-span-7"
          >
            <p className="max-w-xl text-pretty text-lg leading-9 text-ink-900/75">
              قطعات اصل برای چرخ‌های خیاطی صنعتی.
              <br />
              ساده، دقیق، و قابل اعتماد —
              <br />
              همراه صنعتگران ایرانی از سال ۱۳۹۳.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
              <a
                href="#categories"
                className="hover-line text-sm uppercase tracking-widest2 text-ink-900"
              >
                مشاهده مجموعه →
              </a>
              <a
                href="#vision"
                className="hover-line text-sm uppercase tracking-widest2 text-ink-900/60"
              >
                درباره برند
              </a>
            </div>
          </motion.div>

          {/* right meta */}
          <motion.dl
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="grid grid-cols-3 gap-8 lg:col-span-5"
          >
            {[
              ["۱۲", "سال"],
              ["۶۰۰۰", "کد"],
              ["۳۲", "استان"],
            ].map(([n, l], i) => (
              <div key={i} className="border-r border-line pr-4 first:border-0">
                <div className="display text-3xl text-ink-900">{n}</div>
                <div className="mt-2 kicker">{l}</div>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* large editorial image area with subtle SVG */}
        <motion.figure
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.1 }}
          className="mt-24 grid grid-cols-12 gap-6"
        >
          <div className="col-span-12 md:col-span-8">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-cream-100">
              <svg
                viewBox="0 0 800 450"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
              >
                {/* subtle horizon */}
                <line x1="0" y1="320" x2="800" y2="320" stroke="#102b42" strokeOpacity="0.12" />
                {/* sewing machine silhouette */}
                <g transform="translate(220,80)" fill="#102b42">
                  <rect x="20" y="200" width="360" height="60" rx="4" />
                  <path d="M40 200 V90 C40 60 70 50 105 50 H340 C365 50 380 70 380 95 V160 H210 V200 Z" />
                  <rect x="350" y="80" width="34" height="120" rx="4" fill="#0a1d31" />
                  <circle cx="75" cy="130" r="22" fill="#0a1d31" />
                  <circle cx="75" cy="130" r="10" fill="#aebcc5" />
                </g>
                {/* fine animated stitch */}
                <motion.line
                  x1="40" y1="380" x2="760" y2="380"
                  stroke="#102b42"
                  strokeWidth="1"
                  strokeDasharray="2 8"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.5, ease: "easeOut", delay: 1.3 }}
                />
              </svg>
            </div>
          </div>

          <div className="col-span-12 flex flex-col justify-end md:col-span-4">
            <div className="rule" />
            <div className="py-4 flex items-baseline justify-between">
              <span className="kicker">collection 01</span>
              <span className="kicker">۲۰۲۶</span>
            </div>
            <div className="rule" />
            <h3 className="display mt-5 text-2xl text-ink-900">
              خط جدید سوزن‌های تیتانیومی
            </h3>
            <p className="mt-3 text-sm leading-7 text-ink-900/65">
              عمری دو برابر، با خطایی نزدیک به صفر. برای کارگاه‌های پرکار صنعتی.
            </p>
            <a href="#" className="hover-line mt-6 text-xs uppercase tracking-widest2 text-ink-900">
              مشاهده مجموعه →
            </a>
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
