"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const brands = [
  {
    name: "PIN",
    tagline: "قیچی و قطعات دستی",
    desc: "خط تخصصی سوزن، قیچی و ابزار برشی — ساخت آلمان و ژاپن.",
    items: ["سوزن DBx1", "قیچی ۱۰ اینچ", "ابزار دستی"],
  },
  {
    name: "STRONG H",
    tagline: "قطعات داخلی چرخ‌های صنعتی",
    desc: "چرخ‌دنده‌ها، یاتاقان‌ها و قطعات داخلی برای انواع چرخ‌های صنعتی پرکار.",
    items: ["چرخ‌دنده اصلی", "بلبرینگ", "محور دوخت"],
  },
];

export default function Brands() {
  return (
    <section id="brands" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="۰۳ / برندها"
          eyebrow="house brands"
          title="دو خط، یک تعهد"
          description="دو برند اختصاصی نوراکو برای دو نیاز متفاوت در صنعت دوخت."
        />

        <div className="mt-20 grid gap-px bg-line md:grid-cols-2">
          {brands.map((b, i) => (
            <motion.a
              href="#"
              key={b.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group bg-cream-50 p-10 md:p-14"
            >
              <div className="flex items-center justify-between">
                <span className="kicker">brand · 0{i + 1}</span>
                <span className="text-ink-900/40 transition-transform group-hover:-translate-x-1">→</span>
              </div>

              <h3 className="display mt-10 text-6xl tracking-tight text-ink-900 md:text-7xl">
                {b.name}
              </h3>
              <div className="mt-3 text-sm text-ink-900/60">{b.tagline}</div>

              <div className="rule mt-10" />

              <p className="mt-6 max-w-md text-sm leading-7 text-ink-900/70">{b.desc}</p>

              <ul className="mt-8 space-y-3">
                {b.items.map((it, k) => (
                  <li key={k} className="flex items-baseline gap-4 text-sm text-ink-900/80">
                    <span className="kicker">0{k + 1}</span>
                    {it}
                  </li>
                ))}
              </ul>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
