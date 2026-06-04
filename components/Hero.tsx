"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, Play, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 80, damping: 18 });
  const sy = useSpring(my, { stiffness: 80, damping: 18 });

  const tx = useTransform(sx, (v) => `${(v - 0.5) * -30}px`);
  const ty = useTransform(sy, (v) => `${(v - 0.5) * -30}px`);
  const tx2 = useTransform(sx, (v) => `${(v - 0.5) * 24}px`);
  const ty2 = useTransform(sy, (v) => `${(v - 0.5) * 24}px`);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width);
      my.set((e.clientY - r.top) / r.height);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden pt-32"
    >
      {/* gradient orbs */}
      <motion.div
        style={{ x: tx, y: ty }}
        className="orb left-[-10%] top-[5%] h-[460px] w-[460px] bg-ink-800"
      />
      <motion.div
        style={{ x: tx2, y: ty2 }}
        className="orb right-[-5%] top-[20%] h-[520px] w-[520px] bg-ink-700"
      />
      <motion.div
        style={{ x: tx, y: ty2 }}
        className="orb left-[30%] bottom-[-20%] h-[420px] w-[420px] bg-ink-300"
      />

      {/* grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(#102b42 1px, transparent 1px), linear-gradient(90deg, #102b42 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 pb-16 lg:grid-cols-12">
        {/* left text */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-ink-300/60 bg-white/60 px-4 py-1.5 text-xs text-ink-800 backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" />
            تخصصی‌ترین مرجع قطعات چرخ خیاطی صنعتی در ایران
          </motion.div>

          <h1 className="display mt-6 text-6xl text-ink-900 sm:text-7xl lg:text-[120px]">
            {"نوراکو".split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ y: 80, opacity: 0, filter: "blur(12px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{
                  delay: 0.1 + i * 0.07,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {c}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-9 text-ink-900/80"
          >
            از سوزن تا موتور — هر چه برای راه‌اندازی، نگهداری و ارتقای چرخ‌های
            صنعتی خود نیاز دارید، اینجاست. اصالت، دقت، و پشتیبانی حرفه‌ای؛
            تعهدِ نوراکو به صنعتگران دوخت.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#categories"
              className="group relative inline-flex items-center gap-3 rounded-2xl bg-ink-900 px-6 py-4 text-ink-100 transition hover:bg-ink-800 btn-shine"
            >
              <span>کاوش در محصولات</span>
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </a>
            <a
              href="#vision"
              className="group inline-flex items-center gap-3 rounded-2xl border border-ink-900/15 bg-white/70 px-5 py-4 text-ink-900 backdrop-blur transition hover:bg-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-900 text-ink-100 transition group-hover:scale-110">
                <Play className="h-3.5 w-3.5 -translate-x-px" fill="currentColor" />
              </span>
              <span>تماشای داستان برند</span>
            </a>
          </motion.div>

          {/* badges */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.5 }}
            className="mt-12 grid max-w-xl grid-cols-3 gap-6 text-sm"
          >
            {[
              ["+۱۲", "سال تجربه"],
              ["+۵۰۰۰", "قطعه فعال"],
              ["+۳۰۰", "کارگاه همراه"],
            ].map(([n, t], i) => (
              <motion.li
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="border-r border-ink-300/60 pr-4"
              >
                <div className="display text-3xl text-ink-800">{n}</div>
                <div className="text-ink-900/70">{t}</div>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* right machine card */}
        <div className="relative lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateZ: -3 }}
            animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative aspect-[4/5] w-full"
          >
            {/* stacked glass card */}
            <div className="absolute inset-0 -translate-x-6 translate-y-6 rounded-[36px] bg-ink-300/40" />
            <div className="absolute inset-0 -translate-x-3 translate-y-3 rounded-[36px] bg-ink-100/80" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full overflow-hidden rounded-[36px] glass shadow-glow"
            >
              {/* SVG sewing machine illustration */}
              <svg
                viewBox="0 0 400 500"
                className="absolute inset-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="machine" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#17476b" />
                    <stop offset="1" stopColor="#102b42" />
                  </linearGradient>
                  <linearGradient id="metal" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#aebcc5" />
                    <stop offset="1" stopColor="#6f8fa3" />
                  </linearGradient>
                </defs>
                {/* base */}
                <rect x="40" y="320" width="320" height="80" rx="14" fill="url(#machine)" />
                {/* arm */}
                <path
                  d="M70 320 V200 C70 170 95 160 130 160 H300 C320 160 330 175 330 195 V250 C330 280 310 290 280 290 H180 V320 Z"
                  fill="url(#machine)"
                />
                {/* head detail */}
                <rect x="290" y="170" width="38" height="120" rx="12" fill="#0a1d31" />
                {/* needle bar */}
                <rect x="304" y="280" width="10" height="50" rx="3" fill="url(#metal)" />
                {/* hand wheel */}
                <circle cx="100" cy="240" r="34" fill="#0a1d31" />
                <circle cx="100" cy="240" r="22" fill="url(#metal)" />
                {/* spool */}
                <rect x="180" y="120" width="12" height="50" rx="2" fill="#ebebee" />
                <ellipse cx="186" cy="120" rx="20" ry="6" fill="#3a6a8a" />
                {/* stitch line animated */}
                <motion.path
                  d="M60 410 H340"
                  stroke="#17476b"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  fill="none"
                />
                {/* fabric */}
                <motion.path
                  d="M50 430 Q200 380 350 430 L350 470 L50 470 Z"
                  fill="#ebebee"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity }}
                />
              </svg>

              {/* floating tag */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-6 top-6 rounded-2xl bg-white/90 px-4 py-3 text-xs shadow-glow backdrop-blur"
              >
                <div className="text-ink-900/60">برند منتخب امروز</div>
                <div className="display text-lg text-ink-900">PIN · سوزن</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-6 left-6 rounded-2xl glass-dark px-4 py-3 text-xs text-ink-100"
              >
                <div className="opacity-80">دقت دوخت</div>
                <div className="display text-lg">۹۹٫۹٪</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-ink-900/60"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="h-10 w-[2px] overflow-hidden bg-ink-300">
            <motion.div
              className="h-1/2 w-full bg-ink-900"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          اسکرول کنید
        </div>
      </motion.div>
    </section>
  );
}
