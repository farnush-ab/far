"use client";

import { Mail, MapPin, CalendarDays } from "lucide-react";
import { Reveal } from "./ui/Reveal";

export default function ContactBand() {
  return (
    <section id="contact" className="bg-walnut-800 py-24 text-cream-100 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="max-w-3xl">
          <p className="kicker mb-6 text-cream-100/70">GET IN TOUCH</p>
          <h2 className="display-fa text-balance text-4xl text-cream-100 md:text-6xl">
            بیایید با هم طراحی کنیم.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-[2] text-cream-100/80 md:text-lg">
            برای مشاوره، بازدید از شوروم، یا دریافت کاتالوگ برندها،
            از طریق یکی از راه‌های زیر در ارتباط باشید.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 border-t border-cream-100/15 pt-12 md:grid-cols-3 md:gap-6">
          <Reveal delay={0.05}>
            <Item
              icon={<Mail size={18} />}
              label="EMAIL"
              value="hello@designstation.ir"
              href="mailto:hello@designstation.ir"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <Item
              icon={<CalendarDays size={18} />}
              label="BOOK A VISIT"
              value="رزرو بازدید شوروم"
              href="#"
            />
          </Reveal>
          <Reveal delay={0.25}>
            <Item
              icon={<MapPin size={18} />}
              label="VISIT US"
              value="پالادیوم، تهران"
              href="#"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Item({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-start justify-between gap-6 border-b border-cream-100/15 pb-6 transition hover:border-cream-100"
    >
      <div className="space-y-3">
        <p className="kicker text-cream-100/60">{label}</p>
        <p className="display-fa text-xl text-cream-100 md:text-2xl">{value}</p>
      </div>
      <span className="mt-1 text-cream-100/60 transition group-hover:text-cream-100">
        {icon}
      </span>
    </a>
  );
}
