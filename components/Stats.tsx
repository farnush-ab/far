"use client";
import { animate, useInView, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const v = useMotionValue(0);
  const rounded = useTransform(v, (latest) =>
    Math.round(latest).toLocaleString("fa-IR")
  );

  useEffect(() => {
    if (inView) {
      animate(v, to, { duration: 2.2, ease: [0.22, 1, 0.36, 1] });
    }
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
  { value: 6000, suffix: "+", label: "کد کالا فعال" },
  { value: 32, suffix: "", label: "استان تحت پوشش" },
  { value: 99, suffix: "٪", label: "رضایت مشتری" },
];

export default function Stats() {
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[36px] bg-ink-900 p-8 text-ink-100 md:p-14">
          <div className="orb -left-10 -top-10 h-72 w-72 bg-ink-700/70" />
          <div className="orb -right-10 bottom-0 h-72 w-72 bg-ink-800/70" />
          <div
            aria-hidden
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(rgba(235,235,238,0.6) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          <div className="relative grid gap-10 md:grid-cols-4">
            {data.map((d, i) => (
              <motion.div
                key={i}
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="border-r border-ink-100/15 pr-6 last:border-0"
              >
                <div className="display text-5xl md:text-6xl">
                  <Counter to={d.value} suffix={d.suffix} />
                </div>
                <div className="mt-2 text-sm text-ink-100/70">{d.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
