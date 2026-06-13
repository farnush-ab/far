"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const products = [
  { name: "سوزن DBx1 بسته ۱۰۰ عددی", brand: "PIN", price: "۲۸۰٬۰۰۰", kind: "needle" },
  { name: "قیچی پارچه ۱۰ اینچ", brand: "PIN", price: "۱٬۴۵۰٬۰۰۰", kind: "scissor" },
  { name: "ماسوره فلزی استاندارد ۲۵ عددی", brand: "STRONG H", price: "۸۹۰٬۰۰۰", kind: "bobbin" },
  { name: "چرخ‌دنده اصلی راسته‌دوز", brand: "STRONG H", price: "۳٬۲۰۰٬۰۰۰", kind: "gear" },
];

function Mark({ kind }: { kind: string }) {
  const s = { stroke: "#102b42", strokeWidth: 1.2, fill: "none", strokeLinecap: "round" as const };
  return (
    <svg viewBox="0 0 100 100" className="h-24 w-24">
      {kind === "needle" && (
        <g {...s}>
          <line x1="50" y1="14" x2="50" y2="86" />
          <circle cx="50" cy="22" r="3" />
        </g>
      )}
      {kind === "scissor" && (
        <g {...s}>
          <circle cx="34" cy="72" r="10" />
          <circle cx="66" cy="72" r="10" />
          <line x1="42" y1="64" x2="78" y2="30" />
          <line x1="58" y1="64" x2="22" y2="30" />
        </g>
      )}
      {kind === "bobbin" && (
        <g {...s}>
          <ellipse cx="50" cy="28" rx="20" ry="4" />
          <ellipse cx="50" cy="72" rx="20" ry="4" />
          <line x1="30" y1="28" x2="30" y2="72" />
          <line x1="70" y1="28" x2="70" y2="72" />
        </g>
      )}
      {kind === "gear" && (
        <g {...s}>
          <circle cx="50" cy="50" r="20" />
          <circle cx="50" cy="50" r="6" />
          {Array.from({ length: 10 }).map((_, k) => {
            const a = (k * Math.PI * 2) / 10;
            const x1 = 50 + Math.cos(a) * 22;
            const y1 = 50 + Math.sin(a) * 22;
            const x2 = 50 + Math.cos(a) * 30;
            const y2 = 50 + Math.sin(a) * 30;
            return <line key={k} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </g>
      )}
    </svg>
  );
}

export default function BestSellers() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader
              index="۰۴ / منتخب"
              eyebrow="bestsellers"
              title="منتخب صنعتگران"
              description="پرفروش‌ترین قطعات نوراکو در سه ماه گذشته."
            />
          </div>
          <a href="#" className="hover-line text-xs uppercase tracking-widest2 lg:col-span-5 lg:text-left">
            مشاهده همه محصولات →
          </a>
        </div>

        <div className="mt-20 grid gap-px bg-line border border-line sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <motion.a
              key={p.name}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group flex flex-col bg-cream-50 p-8 transition-colors hover:bg-cream-100"
            >
              <div className="flex items-start justify-between">
                <span className="kicker">{p.brand}</span>
                <span className="text-xs text-ink-900/50">0{i + 1}</span>
              </div>
              <div className="flex flex-1 items-center justify-center py-10">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Mark kind={p.kind} />
                </motion.div>
              </div>
              <div className="rule" />
              <h3 className="mt-5 text-sm leading-6 text-ink-900">{p.name}</h3>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="text-base text-ink-900">{p.price}</span>
                <span className="text-xs text-ink-900/50">تومان</span>
              </div>
              <span className="mt-6 hover-line self-start text-xs uppercase tracking-widest2 text-ink-900/70">
                مشاهده →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
