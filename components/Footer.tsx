"use client";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Logo from "./Logo";

const cols = [
  {
    title: "محصولات",
    items: ["سوزن و قیچی", "ماسوره و قرقره", "موتور و کلاچ", "چرخ‌دنده", "بردها"],
  },
  {
    title: "برندها",
    items: ["PIN", "STRONG H", "ORGAN", "GROZ-BECKERT", "JUKI"],
  },
  {
    title: "نوراکو",
    items: ["درباره ما", "وبلاگ", "همکاری", "نمایندگی", "تماس با ما"],
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="relative mt-20 bg-ink-900 px-6 pt-16 pb-8 text-ink-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-100/40 to-transparent"
      />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo light />
            <p className="mt-6 max-w-xs text-sm leading-7 opacity-75">
              نوراکو، مرجع تخصصی قطعات چرخ‌های خیاطی صنعتی در ایران. کیفیت،
              اصالت و پشتیبانی، تعهد ما به شماست.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: MessageCircle, href: "#" },
                { Icon: Mail, href: "#" },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -3, scale: 1.05 }}
                  href={href}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-ink-100/15 bg-white/5 transition hover:bg-white/10"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <div className="display text-sm uppercase tracking-widest opacity-70">
                {c.title}
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {c.items.map((it) => (
                  <li key={it}>
                    <a
                      href="#"
                      className="inline-block transition hover:translate-x-[-2px] hover:text-white"
                    >
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <div className="display text-sm uppercase tracking-widest opacity-70">
              ارتباط
            </div>
            <ul className="mt-5 space-y-4 text-sm opacity-90">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                تهران، خیابان جمهوری، پاساژ علاءالدین، طبقه ۲
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                ۰۲۱ - ۰۰۰ ۰۰ ۰۰۰
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                hello@nooraco.ir
              </li>
            </ul>
          </div>
        </div>

        {/* big wordmark */}
        <div className="relative mt-16 overflow-hidden">
          <div className="display select-none whitespace-nowrap text-center text-[18vw] font-black leading-none tracking-tighter text-white/5">
            NOORACO
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-ink-100/10 pt-6 text-xs opacity-70 md:flex-row">
          <div>© {new Date().getFullYear()} Nooraco · کلیه حقوق محفوظ است</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">حریم خصوصی</a>
            <a href="#" className="hover:text-white">شرایط استفاده</a>
            <a href="#" className="hover:text-white">نقشه سایت</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
