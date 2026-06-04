"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "صفحه اصلی", href: "#" },
  { label: "محصولات", href: "#categories" },
  { label: "برندها", href: "#brands" },
  { label: "اخبار", href: "#news" },
  { label: "درباره ما", href: "#vision" },
  { label: "تماس", href: "#footer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-4 z-50 mx-auto flex justify-center px-4"
      >
        <nav
          className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled
              ? "glass shadow-glow"
              : "bg-white/40 backdrop-blur-md border border-white/40"
          }`}
        >
          <Logo />
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="group relative rounded-xl px-4 py-2 text-sm text-ink-900/80 transition-colors hover:text-ink-900"
                >
                  <span className="relative z-10">{l.label}</span>
                  <span className="absolute inset-0 -z-0 scale-90 rounded-xl bg-ink-100/0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-ink-100/70 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <button className="hidden h-10 w-10 items-center justify-center rounded-xl border border-ink-300/60 bg-white/60 text-ink-900 transition hover:bg-white md:flex">
              <Search className="h-4 w-4" />
            </button>
            <button className="hidden h-10 items-center gap-2 rounded-xl bg-ink-900 px-4 text-sm text-ink-100 transition hover:bg-ink-800 md:flex btn-shine">
              <ShoppingBag className="h-4 w-4" />
              <span>سفارش قطعه</span>
            </button>
            <button
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-300/60 bg-white/60 lg:hidden"
              aria-label="منو"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink-900/40 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 22, stiffness: 220 }}
              className="absolute inset-y-0 right-0 flex w-80 max-w-[85%] flex-col gap-6 bg-ink-100 p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 hover:bg-ink-300/40"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.li
                    key={l.label}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      onClick={() => setOpen(false)}
                      href={l.href}
                      className="block rounded-xl px-4 py-3 text-lg text-ink-900/90 hover:bg-white"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#categories"
                onClick={() => setOpen(false)}
                className="mt-auto flex items-center justify-center gap-2 rounded-xl bg-ink-900 px-5 py-3 text-ink-100"
              >
                <ShoppingBag className="h-4 w-4" />
                سفارش قطعه
              </a>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
