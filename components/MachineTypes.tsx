"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const types = [
  {
    name: "راسته دوز",
    en: "Straight Stitch",
    desc: "چرخ‌های تک‌سوزن صنعتی برای دوخت مستقیم با سرعت بالا و دقت میلی‌متری.",
    speed: "۵۵۰۰",
  },
  {
    name: "سردوز",
    en: "Overlock",
    desc: "اورلاک‌های ۳، ۴ و ۵ نخ برای پرداخت لبه و دوخت کشسان روی پارچه‌های متنوع.",
    speed: "۷۰۰۰",
  },
  {
    name: "میاندوز",
    en: "Coverstitch",
    desc: "چرخ‌های کاوراستیچ برای دوخت تزئینی و حاشیه‌ای روی پارچه‌های کشی.",
    speed: "۶۲۰۰",
  },
];

export default function MachineTypes() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="۰۲ / دسته‌بندی"
          eyebrow="by machine"
          title="بر اساس نوع چرخ"
          description="انتخاب مستقیم قطعات سازگار با نوع چرخ صنعتی شما."
        />

        <div className="mt-20 border-t border-ink-900/15">
          {types.map((t, i) => (
            <motion.a
              key={t.name}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group grid grid-cols-12 items-center gap-6 border-b border-ink-900/15 py-10"
            >
              <div className="col-span-1 kicker text-ink-900/50">0{i + 1}</div>
              <div className="col-span-11 sm:col-span-4 lg:col-span-3">
                <h3 className="display text-3xl text-ink-900 sm:text-4xl">{t.name}</h3>
                <div className="kicker mt-2">{t.en}</div>
              </div>
              <p className="col-span-12 text-sm leading-7 text-ink-900/70 sm:col-span-5 lg:col-span-5">
                {t.desc}
              </p>
              <div className="col-span-6 sm:col-span-2 lg:col-span-2">
                <div className="kicker">حداکثر سرعت</div>
                <div className="mt-1 text-lg text-ink-900">
                  {t.speed} <span className="text-xs text-ink-900/50">spm</span>
                </div>
              </div>
              <div className="col-span-6 text-left sm:col-span-12 lg:col-span-1">
                <span className="inline-flex items-center text-ink-900/60 transition-all group-hover:text-ink-900 group-hover:-translate-x-1">
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
