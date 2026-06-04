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
  "TYPICAL",
];

export default function Marquee() {
  return (
    <section className="relative py-10">
      <div className="marquee-mask overflow-hidden">
        <motion.div
          className="flex w-max gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          {[...items, ...items].map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-6 text-2xl font-bold tracking-[0.2em] text-ink-900/30 transition-colors hover:text-ink-900"
            >
              <span>{b}</span>
              <span className="inline-block h-2 w-2 rounded-full bg-ink-300" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
