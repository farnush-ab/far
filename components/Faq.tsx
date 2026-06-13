"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

const faqs = [
  {
    q: "آیا قطعات نوراکو دارای گارانتی هستند؟",
    a: "بله، تمام محصولات با ضمانت اصالت و گارانتی تعویض ۷ روزه عرضه می‌شوند.",
  },
  {
    q: "چگونه می‌توانم سفارش را پیگیری کنم؟",
    a: "پس از ثبت سفارش، کد رهگیری پیامک می‌شود و در حساب کاربری قابل مشاهده است.",
  },
  {
    q: "ارسال به سراسر ایران چقدر طول می‌کشد؟",
    a: "تهران همان روز، سایر شهرها بین ۲۴ تا ۴۸ ساعت کاری.",
  },
  {
    q: "آیا تخفیف عمده برای کارگاه‌ها ارائه می‌شود؟",
    a: "بله، پنل ویژه نمایندگان و کارگاه‌های صنعتی با شرایط ویژه.",
  },
  {
    q: "اگر قطعه‌ی موردنظر موجود نباشد؟",
    a: "از فرم «درخواست قطعه» مشخصات را ارسال کنید؛ در کمتر از ۲۴ ساعت پاسخگوییم.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          index="۰۸ / پرسش"
          eyebrow="faq"
          title="پاسخ به سؤالات رایج"
          align="center"
        />
        <div className="mt-20 border-t border-line">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="border-b border-line"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-7 text-right transition-colors hover:text-ink-800"
                >
                  <span className="flex items-baseline gap-6">
                    <span className="kicker shrink-0 text-ink-900/40">0{i + 1}</span>
                    <span className="text-base text-ink-900">{f.q}</span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-ink-900/70"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pr-14 text-sm leading-8 text-ink-900/65">
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
