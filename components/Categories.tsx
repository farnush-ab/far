"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Cog, Scissors, Wrench, Zap, Cpu, Disc3 } from "lucide-react";
import SectionHeader from "./SectionHeader";

const cats = [
  {
    title: "سوزن و قیچی",
    desc: "از ظریف‌ترین سوزن‌ها تا قیچی‌های صنعتی PIN",
    Icon: Scissors,
    count: 540,
  },
  {
    title: "ماسوره و قرقره",
    desc: "ماسوره‌های آلیاژی و قرقره‌های دقیق",
    Icon: Disc3,
    count: 280,
  },
  {
    title: "موتور و کلاچ",
    desc: "سرومتورهای کم‌مصرف و کلاچ‌های پرتاب",
    Icon: Zap,
    count: 124,
  },
  {
    title: "چرخ‌دنده",
    desc: "چرخ‌دنده‌های STRONG H و قطعات داخلی",
    Icon: Cog,
    count: 612,
  },
  {
    title: "ابزار سرویس",
    desc: "آچار، روغن‌دان و ابزار تخصصی نگهداری",
    Icon: Wrench,
    count: 89,
  },
  {
    title: "برد و الکترونیک",
    desc: "بردهای کنترل و سنسورهای صنعتی",
    Icon: Cpu,
    count: 67,
  },
];

export default function Categories() {
  return (
    <section id="categories" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="دسته‌بندی محصولات"
            title="هر قطعه‌ای که نیاز دارید، اینجاست"
            description="بیش از ۶۰۰۰ کد کالا در شش دسته‌ی اصلی، آماده‌ی ارسال در سراسر ایران."
          />
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-sm text-ink-800 hover:text-ink-900"
          >
            مشاهده همه دسته‌ها
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cats.map((c, i) => (
            <motion.a
              key={c.title}
              href="#"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-ink-300/50 bg-gradient-to-br from-white via-ink-100 to-ink-300/50 p-7 lift"
            >
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-ink-700/15 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-900 text-ink-100 shadow-glow transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110">
                  <c.Icon className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-ink-800 backdrop-blur">
                  {c.count.toLocaleString("fa-IR")} کد کالا
                </span>
              </div>
              <h3 className="display relative mt-10 text-2xl text-ink-900">
                {c.title}
              </h3>
              <p className="relative mt-2 text-sm leading-7 text-ink-900/70">
                {c.desc}
              </p>
              <div className="relative mt-8 flex items-center gap-2 text-sm text-ink-800">
                <span className="border-b border-dashed border-ink-800/50">
                  مشاهده محصولات
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
