"use client";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const v = useMotionValue(0);
  const rounded = useTransform(v, (latest) => Math.round(latest).toLocaleString("fa-IR"));

  useEffect(() => {
    if (inView) animate(v, to, { duration: 2.4, ease: [0.22, 1, 0.36, 1] });
  }, [inView, to, v]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{rounded}</motion.span>
      <span className="ml-0.5">{suffix}</span>
    </span>
  );
}

const data = [
  { value: 12, suffix: "+", label: "سال سابقه" },
  { value: 6000, suffix: "+", label: "کد کالا" },
  { value: 32, suffix: "", label: "استان" },
  { value: 99, suffix: "٪", label: "رضایت" },
];

export default function Stats() {
  return (
    <section className="border-y border-line px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-16 md:grid-cols-4">
          {data.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
            >
              <div className="kicker">0{i + 1}</div>
              <div className="rule mt-3" />
              <div className="display mt-6 text-5xl text-ink-900 md:text-6xl">
                <Counter to={d.value} suffix={d.suffix} />
              </div>
              <div className="mt-3 text-sm text-ink-900/60">{d.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
