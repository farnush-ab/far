"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function Vision() {
  return (
    <section id="vision" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader
              index="۰۵ / فلسفه"
              eyebrow="philosophy"
              title="هر سوزن، گامی به سوی دقت"
              description="در نوراکو باور داریم کیفیتِ کوچک‌ترین قطعه می‌تواند تجربه‌ی یک کارگاه را متحول کند. ما تأمین قطعات اصل را با دانش فنی پایدار پیوند می‌زنیم."
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-9 grid gap-px bg-line border border-line sm:grid-cols-2"
            >
              {[
                { t: "مأموریت", d: "تأمین قطعات اصل با دسترسی آسان و حمایت فنی پایدار." },
                { t: "ارزش‌ها", d: "صداقت، دقت، تخصص و شراکت بلندمدت با مشتری." },
              ].map((b, i) => (
                <div key={i} className="bg-cream-50 p-5">
                  <div className="kicker">0{i + 1}</div>
                  <div className="display mt-2 text-lg text-ink-900">{b.t}</div>
                  <p className="mt-2 text-xs text-ink-900/70 leading-6">{b.d}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-square w-full bg-cream-100">
              <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full">
                {/* fine concentric circles */}
                {[120, 100, 80, 60, 40, 20].map((r) => (
                  <circle
                    key={r}
                    cx="150"
                    cy="150"
                    r={r}
                    stroke="#102b42"
                    strokeOpacity="0.15"
                    fill="none"
                  />
                ))}
                {/* spinning fine line */}
                <motion.line
                  x1="150"
                  y1="30"
                  x2="150"
                  y2="270"
                  stroke="#102b42"
                  strokeOpacity="0.3"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "150px 150px" }}
                />
                <motion.line
                  x1="30"
                  y1="150"
                  x2="270"
                  y2="150"
                  stroke="#102b42"
                  strokeOpacity="0.18"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "150px 150px" }}
                />
                {/* center dot */}
                <circle cx="150" cy="150" r="3" fill="#102b42" />
              </svg>
              <div className="absolute bottom-4 right-4 text-right">
                <div className="display text-xl text-ink-900">۱۳۹۳</div>
                <div className="kicker mt-1">since</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
