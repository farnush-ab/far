"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";

export default function Vision() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);

  return (
    <section id="vision" ref={ref} className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="چشم‌انداز ما"
              title="هر سوزن، یک گام به سوی صنعت دوختِ دقیق‌تر"
              description="در نوراکو باور داریم که کیفیت یک قطعه‌ی کوچک می‌تواند تجربه‌ی یک کارگاه را متحول کند. ما در تلاشیم تا با تأمین قطعات اصل و ارائه‌ی دانش فنی، صنعتگران ایرانی را به سطح جهانی برسانیم."
            />

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                {
                  t: "مأموریت",
                  d: "تأمین قطعات اصل با تسهیل دسترسی و حمایت فنی پایدار.",
                },
                {
                  t: "ارزش‌ها",
                  d: "صداقت، دقت، تخصص و شراکت بلندمدت با مشتری.",
                },
              ].map((b, i) => (
                <motion.div
                  key={b.t}
                  initial={{ y: 24, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-ink-300/60 bg-white/70 p-5 backdrop-blur"
                >
                  <div className="display text-lg text-ink-900">{b.t}</div>
                  <p className="mt-1 text-sm text-ink-900/70 leading-7">{b.d}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <motion.div
              style={{ y, rotate }}
              className="relative aspect-square rounded-[36px] glass shadow-glow"
            >
              {/* spinning machine wheel */}
              <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full">
                <defs>
                  <radialGradient id="vw" cx="50%" cy="50%" r="50%">
                    <stop offset="0" stopColor="#3a6a8a" />
                    <stop offset="1" stopColor="#0a1d31" />
                  </radialGradient>
                </defs>
                <circle cx="150" cy="150" r="120" fill="url(#vw)" />
                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "150px 150px" }}
                  fill="#ebebee"
                  opacity="0.9"
                >
                  {Array.from({ length: 14 }).map((_, k) => {
                    const a = (k * 360) / 14;
                    return (
                      <rect
                        key={k}
                        x="148"
                        y="40"
                        width="4"
                        height="28"
                        rx="2"
                        transform={`rotate(${a} 150 150)`}
                      />
                    );
                  })}
                </motion.g>
                <circle cx="150" cy="150" r="58" fill="#ebebee" />
                <circle cx="150" cy="150" r="14" fill="#102b42" />
                {/* dashed orbit */}
                <motion.circle
                  cx="150" cy="150" r="138"
                  fill="none"
                  stroke="#17476b"
                  strokeWidth="1"
                  strokeDasharray="3 6"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "150px 150px" }}
                />
              </svg>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-ink-900 px-5 py-4 text-ink-100 shadow-glow">
                <div className="display text-2xl">۲۰۲۶</div>
                <div className="text-xs opacity-70">از ۱۴۰۰ با شما</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
