"use client";
import { motion } from "framer-motion";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "right",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "right" | "center" | "left";
  light?: boolean;
}) {
  const alignClass =
    align === "center"
      ? "items-center text-center"
      : align === "left"
      ? "items-start text-left"
      : "items-end text-right";

  const textColor = light ? "text-ink-100" : "text-ink-900";
  const subColor = light ? "text-ink-100/70" : "text-ink-900/65";

  return (
    <div className={`flex flex-col ${alignClass} gap-3`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${
            light
              ? "border-ink-100/30 text-ink-100/80"
              : "border-ink-900/15 text-ink-800"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`display text-4xl sm:text-5xl lg:text-6xl text-balance ${textColor}`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className={`max-w-2xl text-base leading-8 text-balance ${subColor}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
