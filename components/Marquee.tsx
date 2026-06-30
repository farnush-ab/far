"use client";
import { motion } from "framer-motion";

const items = [
  "PIN",
  "STRONG H",
  "ORGAN",
  "GROZ-BECKERT",
  "JUKI",
  "BROTHER",
  "SIRUBA",
  "PEGASUS",
];

export default function Marquee() {
  return (
    <section className="border-y border-line py-5">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center gap-6">
          <span className="kicker shrink-0 text-ink-900/50">trusted brands</span>
          <div className="rule flex-1" />
        </div>
        <div className="marquee-mask mt-3 overflow-hidden">
          <motion.div
            className="flex w-max gap-20 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            {[...items, ...items].map((b, i) => (
              <span
                key={i}
                className="text-xs tracking-[0.32em] uppercase text-ink-900/30 transition-colors hover:text-ink-900"
                style={{ fontWeight: 400 }}
              >
                {b}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
