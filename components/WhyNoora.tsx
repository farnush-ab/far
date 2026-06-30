"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const features = [
  { num: "۰۱", title: "کیفیت و اصالت", desc: "تأمین مستقیم از کارخانه‌های معتبر جهانی." },
  { num: "۰۲", title: "پشتیبانی تخصصی", desc: "تیم فنی نوراکو در ساعات کاری پاسخگوی شماست." },
  { num: "۰۳", title: "ارسال سریع", desc: "همان روز در تهران، کمتر از ۴۸ ساعت در ایران." },
  { num: "۰۴", title: "خدمات پس از فروش", desc: "گارانتی تعویض و خدمات پس از فروش روی همه قطعات." },
];

export default function WhyNoora() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          index="۰۶ / مزایا"
          eyebrow="why us"
          title="چهار اصلِ ما"
        />
        <div className="mt-12 border-t border-line">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="grid grid-cols-12 items-baseline gap-5 border-b border-line py-5"
            >
              <div className="col-span-2 sm:col-span-1 kicker text-ink-900/50">{f.num}</div>
              <h3 className="col-span-10 sm:col-span-4 display text-base text-ink-900 sm:text-lg">
                {f.title}
              </h3>
              <p className="col-span-12 text-xs leading-6 text-ink-900/65 sm:col-span-7">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
