"use client";
import { motion } from "framer-motion";
import { Award, HeadphonesIcon, ShieldCheck, Truck } from "lucide-react";
import SectionHeader from "./SectionHeader";

const features = [
  {
    Icon: Award,
    title: "کیفیت و اصالت",
    desc: "هر قطعه با ضمانت اصالت برند. تأمین مستقیم از کارخانه‌های معتبر جهانی.",
  },
  {
    Icon: HeadphonesIcon,
    title: "پشتیبانی تخصصی",
    desc: "تیم فنی نوراکو در تمام ساعات کاری پاسخگوی سؤالات تخصصی شماست.",
  },
  {
    Icon: Truck,
    title: "ارسال سریع",
    desc: "ارسال در همان روز در تهران و کمتر از ۴۸ ساعت در سراسر ایران.",
  },
  {
    Icon: ShieldCheck,
    title: "خدمات پس از فروش",
    desc: "گارانتی تعویض و خدمات پس از فروش روی همه‌ی کدهای کالا.",
  },
];

export default function WhyNoora() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="چرا نوراکو؟"
          title="چهار دلیل برای انتخاب ما"
          description="نوراکو فقط یک فروشگاه نیست؛ یک شریک حرفه‌ای برای صنعت دوخت شماست."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink-900 to-ink-800 p-7 text-ink-100 lift"
            >
              <div className="orb -right-10 -top-10 h-40 w-40 bg-ink-700/40" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                <f.Icon className="h-6 w-6" />
              </div>
              <h3 className="display relative mt-8 text-xl">{f.title}</h3>
              <p className="relative mt-2 text-sm leading-7 opacity-80">
                {f.desc}
              </p>
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink-100/30 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
