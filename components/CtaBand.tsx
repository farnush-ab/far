"use client";
import { motion } from "framer-motion";

export default function CtaBand() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="grid items-end gap-8 border-t border-line pt-10 md:grid-cols-2"
        >
          <h3 className="display text-2xl text-ink-900 sm:text-3xl text-balance">
            دنبال قطعه‌ی خاصی هستید؟
            <br />
            با ما صحبت کنید.
          </h3>
          <div className="flex flex-col gap-4 md:items-end">
            <a
              href="tel:+982100000000"
              className="display text-xl text-ink-900 hover-line sm:text-2xl"
            >
              ۰۲۱ — ۰۰۰ ۰۰ ۰۰۰
            </a>
            <a
              href="#"
              className="hover-line text-[11px] uppercase tracking-widest2 text-ink-900/70"
            >
              ارسال درخواست قطعه →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
