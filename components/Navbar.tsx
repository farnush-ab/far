"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "محصولات", href: "#categories" },
  { label: "برندها", href: "#brands" },
  { label: "اخبار", href: "#news" },
  { label: "درباره", href: "#vision" },
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
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-cream-50/85 backdrop-blur-md border-b border-line" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Logo />
          <ul className="hidden items-center gap-9 lg:flex">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="hover-line text-sm text-ink-900/85 transition-colors hover:text-ink-900"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5">
            <a
              href="#categories"
              className="hover-line hidden text-xs uppercase tracking-widest2 text-ink-900 md:inline-block"
            >
              فروشگاه →
            </a>
            <button
              onClick={() => setOpen(true)}
              className="flex h-9 w-9 items-center justify-center text-ink-900 lg:hidden"
              aria-label="منو"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink-900/20 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
              className="absolute inset-y-0 right-0 flex w-80 max-w-[85%] flex-col gap-8 bg-cream-50 px-7 py-7"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button onClick={() => setOpen(false)} className="p-2" aria-label="بستن">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {links.map((l, i) => (
                  <li key={l.label}>
                    <a
                      onClick={() => setOpen(false)}
                      href={l.href}
                      className="block border-b border-line py-4 text-base text-ink-900 hover:text-ink-800"
                    >
                      <span className="ml-3 text-xs text-ink-900/40">0{i + 1}</span>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#categories"
                onClick={() => setOpen(false)}
                className="mt-auto inline-block border-b border-ink-900 pb-1 text-sm uppercase tracking-widest2 text-ink-900"
              >
                ورود به فروشگاه
              </a>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
