"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const posts = [
  {
    title: "ورود سری جدید سوزن‌های تیتانیومی PIN",
    excerpt: "سری جدید با پوشش تیتانیومی و عمر دو برابری، هم‌اکنون موجود است.",
    date: "۱۸ خرداد ۱۴۰۵",
    cat: "محصول",
  },
  {
    title: "راهنمای جامع راه‌اندازی سردوز ۵ نخ",
    excerpt: "گام به گام، نخ‌اندازی، تنظیم تنشن و تست دوخت اولیه.",
    date: "۱۰ خرداد ۱۴۰۵",
    cat: "آموزش",
  },
  {
    title: "نوراکو در نمایشگاه نساجی تهران",
    excerpt: "ما را در غرفه F12 سالن ۳۸ ملاقات کنید.",
    date: "۱ خرداد ۱۴۰۵",
    cat: "رویداد",
  },
];

export default function News() {
  return (
    <section id="news" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader
              index="۰۷ / مجله"
              eyebrow="journal"
              title="آخرین یادداشت‌ها"
            />
          </div>
          <a
            href="#"
            className="hover-line text-xs uppercase tracking-widest2 lg:col-span-5 lg:text-left"
          >
            مشاهده وبلاگ →
          </a>
        </div>

        <div className="mt-20 border-t border-line">
          {posts.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group grid grid-cols-12 items-baseline gap-6 border-b border-line py-10"
            >
              <div className="col-span-3 sm:col-span-2 kicker text-ink-900/50">{p.date}</div>
              <div className="col-span-9 sm:col-span-2 kicker text-ink-900/50">{p.cat}</div>
              <h3 className="col-span-12 sm:col-span-7 display text-2xl text-ink-900 transition-colors group-hover:text-ink-800 sm:text-3xl">
                {p.title}
                <span className="mr-3 inline-block transition-transform group-hover:-translate-x-1">→</span>
              </h3>
              <p className="col-span-12 sm:col-span-12 sm:col-start-3 text-sm leading-7 text-ink-900/60 lg:col-span-7 lg:col-start-5">
                {p.excerpt}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
