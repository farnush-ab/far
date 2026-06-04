"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Phone } from "lucide-react";

export default function CtaBand() {
  return (
    <section className="relative px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-10 text-ink-100 md:p-16"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(235,235,238,0.06) 0 2px, transparent 2px 14px)",
            }}
          />
          <div className="orb -right-10 -top-10 h-72 w-72 bg-ink-700/60" />
          <div className="orb -left-10 bottom-0 h-72 w-72 bg-ink-300/30" />

          <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink-100/30 px-3 py-1 text-xs">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                هم‌اکنون در دسترس
              </span>
              <h3 className="display mt-4 text-3xl md:text-5xl text-balance">
                دنبال قطعه‌ی خاصی هستید؟
                <br />
                مشاوران ما در خدمت شما هستند.
              </h3>
              <p className="mt-3 max-w-lg text-sm text-ink-100/70 leading-7">
                با تماس بگیرید یا فرم درخواست قطعه را پر کنید. در کمتر از ۲۴ ساعت
                با شما تماس می‌گیریم.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+982100000000"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-ink-100 px-6 py-4 text-ink-900 btn-shine"
              >
                <Phone className="h-4 w-4" />
                ۰۲۱ - ۰۰۰ ۰۰ ۰۰۰
              </a>
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-ink-100/30 px-6 py-4 text-ink-100 transition hover:bg-white/10"
              >
                درخواست قطعه
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
