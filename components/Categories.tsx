"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const cats = [
  { title: "سوزن و قیچی", count: 540, kind: "needle" },
  { title: "ماسوره و قرقره", count: 280, kind: "bobbin" },
  { title: "موتور و کلاچ", count: 124, kind: "motor" },
  { title: "چرخ‌دنده", count: 612, kind: "gear" },
  { title: "ابزار سرویس", count: 89, kind: "tool" },
  { title: "برد و الکترونیک", count: 67, kind: "board" },
];

function Icon({ kind }: { kind: string }) {
  const s = { stroke: "#102b42", strokeWidth: 1.2, fill: "none", strokeLinecap: "round" as const };
  return (
    <svg viewBox="0 0 60 60" className="h-10 w-10">
      {kind === "needle" && (
        <g {...s}>
          <line x1="30" y1="8" x2="30" y2="52" />
          <circle cx="30" cy="16" r="2.5" />
          <path d="M30 52 l4 -6 M30 52 l-4 -6" />
        </g>
      )}
      {kind === "bobbin" && (
        <g {...s}>
          <ellipse cx="30" cy="16" rx="14" ry="3" />
          <ellipse cx="30" cy="44" rx="14" ry="3" />
          <line x1="16" y1="16" x2="16" y2="44" />
          <line x1="44" y1="16" x2="44" y2="44" />
        </g>
      )}
      {kind === "motor" && (
        <g {...s}>
          <rect x="10" y="22" width="34" height="20" rx="2" />
          <circle cx="50" cy="32" r="6" />
          <line x1="44" y1="22" x2="44" y2="42" />
        </g>
      )}
      {kind === "gear" && (
        <g {...s}>
          <circle cx="30" cy="30" r="12" />
          <circle cx="30" cy="30" r="4" />
          {Array.from({ length: 8 }).map((_, k) => {
            const a = (k * Math.PI * 2) / 8;
            const x1 = 30 + Math.cos(a) * 14;
            const y1 = 30 + Math.sin(a) * 14;
            const x2 = 30 + Math.cos(a) * 19;
            const y2 = 30 + Math.sin(a) * 19;
            return <line key={k} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </g>
      )}
      {kind === "tool" && (
        <g {...s}>
          <path d="M14 46 L34 26 M22 18 a8 8 0 1 0 11 11 L40 36" />
        </g>
      )}
      {kind === "board" && (
        <g {...s}>
          <rect x="10" y="14" width="40" height="32" />
          <circle cx="20" cy="24" r="2" />
          <circle cx="40" cy="24" r="2" />
          <line x1="20" y1="34" x2="40" y2="34" />
          <line x1="20" y1="40" x2="40" y2="40" />
        </g>
      )}
    </svg>
  );
}

export default function Categories() {
  return (
    <section id="categories" className="relative px-6 pt-20 pb-14">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader
              index="۰۱ / مجموعه"
              eyebrow="categories"
              title="مجموعه کامل"
              description="بیش از ۶ گروه اصلی، هر کدام منتخبی از قطعات اصل برندهای جهانی."
            />
          </div>
          <a
            href="#"
            className="hover-line text-xs uppercase tracking-widest2 lg:col-span-5 lg:text-left"
          >
            مشاهده همه ۲۴ دسته‌بندی →
          </a>
        </div>

        <div className="mt-10 border-t border-line">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {cats.map((c, i) => (
              <motion.a
                key={c.title}
                href="#"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className="group flex items-center gap-5 border-b border-line p-5 transition-colors hover:bg-cream-100 sm:[&:nth-child(2n)]:border-r-0 sm:border-l border-line lg:[&:nth-child(2n)]:border-l lg:[&:nth-child(3n)]:border-l-0"
                style={{ borderLeftColor: "var(--line)" as string }}
              >
                <div className="shrink-0 [&_svg]:h-7 [&_svg]:w-7">
                  <Icon kind={c.kind} />
                </div>
                <div className="flex flex-1 items-baseline justify-between">
                  <div>
                    <div className="kicker">0{i + 1}</div>
                    <h3 className="mt-1.5 text-sm text-ink-900">{c.title}</h3>
                  </div>
                  <span className="text-xs text-ink-900/50">
                    {c.count.toLocaleString("fa-IR")} کالا
                  </span>
                </div>
                <span className="ml-2 text-ink-900/40 transition-all group-hover:-translate-x-1 group-hover:text-ink-900">
                  →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
