"use client";

import { Reveal } from "./ui/Reveal";
import { ShieldCheck, Package, MessagesSquare, Handshake } from "lucide-react";

const points = [
  {
    icon: <Handshake size={20} strokeWidth={1.4} />,
    title: "نمایندگی رسمی و انحصاری",
    desc: "تنها مرجع رسمی برندهایی چون Gessi و Dornbracht در ایران، مستقیماً از طریق انتیتی ما در دبی.",
  },
  {
    icon: <ShieldCheck size={20} strokeWidth={1.4} />,
    title: "اصالت تضمین‌شده",
    desc: "همه‌ی محصولات با گارانتی برند، شناسه‌ی اصالت و شناسنامه‌ی واردات ارائه می‌شوند.",
  },
  {
    icon: <Package size={20} strokeWidth={1.4} />,
    title: "تأمین مستقیم از اروپا",
    desc: "زنجیره‌ی تأمین کوتاه، بدون واسطه — از کارخانه‌ی برند تا شوروم پالادیوم.",
  },
  {
    icon: <MessagesSquare size={20} strokeWidth={1.4} />,
    title: "تیم مشاوره‌ی تخصصی",
    desc: "همراهی معماران و طراحان داخلی از انتخاب اولیه تا نصب نهایی، در محل پروژه.",
  },
];

export default function WhyDesignStation() {
  return (
    <section className="relative bg-cream-100 py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <Reveal className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker mb-4">WHY DESIGN STATION · 04 PRINCIPLES</p>
            <h2 className="display-fa text-balance text-3xl md:text-5xl">
              چرا دیزاین استیشن؟
            </h2>
          </div>
          <p className="max-w-md text-base leading-[1.95] text-walnut-700">
            ما واسطه نیستیم؛ مرجع‌ایم. هر مجموعه‌ای که در شوروم می‌بینید
            با شناسنامه، گارانتی و پشتیبانی مستقیم برند به دست شما می‌رسد.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-12 gap-y-14 border-t border-line pt-16 md:grid-cols-4 md:gap-y-0">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-walnut-800 text-walnut-800">
                    {p.icon}
                  </span>
                  <span className="kicker text-walnut-700">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="display-fa text-xl text-walnut-800 md:text-2xl">
                  {p.title}
                </h3>
                <p className="text-sm leading-[1.95] text-walnut-700">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
