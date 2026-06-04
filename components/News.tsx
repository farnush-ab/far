"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import SectionHeader from "./SectionHeader";

const posts = [
  {
    title: "ورود سری جدید سوزن‌های PIN با کیفیت دوبرابر",
    excerpt:
      "سری جدید سوزن‌های PIN با پوشش تیتانیومی و عمر دوبرابری، هم‌اکنون در نوراکو موجود است.",
    date: "۱۸ خرداد ۱۴۰۵",
    cat: "محصول جدید",
  },
  {
    title: "راهنمای جامع راه‌اندازی چرخ سردوز ۵ نخ",
    excerpt:
      "گام‌به‌گام، نخ‌اندازی، تنظیم تنشن و تست دوخت اولیه روی چرخ‌های سردوز ۵ نخ صنعتی.",
    date: "۱۰ خرداد ۱۴۰۵",
    cat: "آموزش",
  },
  {
    title: "نوراکو در نمایشگاه بین‌المللی نساجی تهران",
    excerpt:
      "ما را در غرفه F12 سالن ۳۸ ملاقات کنید و از تخفیف‌های ویژه نمایشگاه بهره‌مند شوید.",
    date: "۱ خرداد ۱۴۰۵",
    cat: "رویداد",
  },
];

export default function News() {
  return (
    <section id="news" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="اخبار و مقالات"
            title="تازه‌های دنیای دوخت صنعتی"
            description="از معرفی محصولات جدید تا راهنمای فنی و گزارش رویدادها."
          />
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-sm text-ink-800 hover:text-ink-900"
          >
            مشاهده وبلاگ
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-ink-300/50 bg-white lift"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* SVG illustration as image substitute */}
                <svg
                  viewBox="0 0 400 250"
                  className="h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <defs>
                    <linearGradient id={`bg-${i}`} x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor={["#17476b","#3a6a8a","#102b42"][i]} />
                      <stop offset="1" stopColor={["#0a1d31","#17476b","#3a6a8a"][i]} />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="250" fill={`url(#bg-${i})`} />
                  {/* pattern */}
                  <g opacity="0.15" fill="#ebebee">
                    {Array.from({ length: 24 }).map((_, k) => (
                      <circle
                        key={k}
                        cx={20 + (k % 6) * 65}
                        cy={30 + Math.floor(k / 6) * 55}
                        r="2"
                      />
                    ))}
                  </g>
                  {/* sewing machine */}
                  <g transform="translate(110,70)" fill="#ebebee" opacity="0.95">
                    <rect x="0" y="80" width="180" height="30" rx="6" />
                    <path d="M15 80 V40 C15 25 28 18 45 18 H150 C165 18 170 30 170 42 V72 H90 V80 Z" />
                    <rect x="148" y="38" width="22" height="40" rx="5" fill="#0a1d31" />
                    <circle cx="35" cy="56" r="11" fill="#0a1d31" />
                  </g>
                </svg>
                <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs text-ink-900 backdrop-blur">
                  {p.cat}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-ink-900/60">
                  <Calendar className="h-3.5 w-3.5" />
                  {p.date}
                </div>
                <h3 className="display mt-3 text-xl text-ink-900 group-hover:text-ink-800">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-ink-900/70">
                  {p.excerpt}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm text-ink-800">
                  <span className="border-b border-dashed border-ink-800/50">
                    مطالعه مقاله
                  </span>
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
