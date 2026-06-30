"use client";
import { motion } from "framer-motion";

export default function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  align = "right",
  light = false,
}: {
  index?: string;
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
      : "items-start text-right";

  const textColor = light ? "text-cream-50" : "text-ink-900";
  const subColor = light ? "text-cream-50/70" : "text-ink-900/65";
  const ruleColor = light ? "bg-cream-50/40" : "bg-ink-900/40";

  return (
    <div className={`flex flex-col ${alignClass} gap-3`}>
      {(eyebrow || index) && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          {index && (
            <span className={`kicker ${light ? "text-cream-50/70" : ""}`}>{index}</span>
          )}
          {eyebrow && (
            <>
              <span className={`block h-px w-8 ${ruleColor}`} />
              <span className={`kicker ${light ? "text-cream-50/70" : ""}`}>{eyebrow}</span>
            </>
          )}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`display text-2xl sm:text-3xl lg:text-4xl text-balance ${textColor}`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className={`mt-1 max-w-md text-sm leading-7 text-balance ${subColor}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
