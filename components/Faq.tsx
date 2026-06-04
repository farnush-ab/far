"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

const faqs = [
  {
    q: "آیا قطعات نوراکو دارای گارانتی هستند؟",
    a: "بله، تمام محصولات نوراکو با ضمانت اصالت و گارانتی تعویض ۷ روزه عرضه می‌شوند. در صورت بروز هر مشکل، تیم پشتیبانی در سریع‌ترین زمان رسیدگی می‌کند.",
  },
  {
    q: "چگونه می‌توانم سفارش خود را پیگیری کنم؟",
    a: "پس از ثبت سفارش، کد رهگیری به صورت پیامک ارسال می‌شود. می‌توانید با ورود به حساب کاربری خود، وضعیت لحظه‌ای سفارش را مشاهده کنید.",
  },
  {
    q: "ارسال به سراسر ایران چقدر طول می‌کشد؟",
    a: "در تهران ارسال در همان روز کاری و در سایر شهرها بین ۲۴ تا ۴۸ ساعت کاری انجام می‌شود. ارسال‌های اکسپرس نیز در دسترس است.",
  },
  {
    q: "آیا برای کارگاه‌های بزرگ تخفیف عمده ارائه می‌شود؟",
    a: "بله، نوراکو پنل ویژه‌ی نمایندگان و کارگاه‌های صنعتی با شرایط قیمتی ویژه دارد. برای ثبت‌نام با واحد فروش تماس بگیرید.",
  },
  {
    q: "اگر قطعه‌ای که می‌خواهم در سایت موجود نباشد چه کنم؟",
    a: "می‌توانید از طریق فرم «درخواست قطعه» نام و مشخصات قطعه را برای ما ارسال کنید. کارشناسان ما در کمتر از ۲۴ ساعت پاسخگو خواهند بود.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="پرسش‌های متداول"
          title="پاسخ به سؤالات رایج"
          description="هرچه باید درباره‌ی خرید، ارسال و خدمات نوراکو بدانید."
          align="center"
        />
        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`overflow-hidden rounded-2xl border transition-all duration-500 ${
                  isOpen
                    ? "border-ink-900 bg-white shadow-glow"
                    : "border-ink-300/60 bg-white/60"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right"
                >
                  <span className="text-base font-bold text-ink-900">
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-colors ${
                      isOpen ? "bg-ink-900 text-ink-100" : "bg-ink-100 text-ink-900"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-6 text-sm leading-8 text-ink-900/75">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
