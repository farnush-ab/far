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
    <section id="brands" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          index="۰۳ / برندها"
          eyebrow="house brands"
          title="دو خط، یک تعهد"
          description="دو برند اختصاصی نوراکو برای دو نیاز متفاوت در صنعت دوخت."
        />

        <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
          {brands.map((b, i) => (
            <motion.a
              href="#"
              key={b.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group bg-cream-50 p-6 md:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="kicker">brand · 0{i + 1}</span>
                <span className="text-ink-900/40 transition-transform group-hover:-translate-x-1">→</span>
              </div>

              <h3 className="display mt-6 text-3xl tracking-tight text-ink-900 md:text-4xl">
                {b.name}
              </h3>
              <div className="mt-2 text-xs text-ink-900/60">{b.tagline}</div>

              <div className="rule mt-6" />

              <p className="mt-4 max-w-md text-xs leading-6 text-ink-900/70">{b.desc}</p>

              <ul className="mt-5 space-y-2">
                {b.items.map((it, k) => (
                  <li key={k} className="flex items-baseline gap-3 text-xs text-ink-900/80">
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
