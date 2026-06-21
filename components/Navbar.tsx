"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "خانه", href: "#home" },
  { label: "دسته‌بندی‌ها", href: "#categories" },
  { label: "برندها", href: "#brands" },
  { label: "شوروم", href: "#showroom" },
  { label: "پروژه‌ها", href: "#projects" },
  { label: "ارتباط", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream-100/85 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#home" className="display text-xl tracking-tight md:text-2xl">
          Design Station
        </a>

        <nav className="hidden gap-9 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover-line text-sm text-walnut-800"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="kicker hidden border border-walnut-800 px-4 py-2 transition hover:bg-walnut-800 hover:text-cream-100 md:inline-block"
        >
          BOOK A VISIT
        </a>

        <button
          aria-label="منو"
          className="text-walnut-800 md:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 bg-cream-100 transition-opacity duration-500 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="display text-xl">Design Station</span>
          <button aria-label="بستن" onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>
        <nav className="flex flex-col gap-6 px-6 pt-12">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="display-fa text-3xl"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="kicker mt-8 inline-block border border-walnut-800 px-4 py-3 text-center"
          >
            BOOK A VISIT
          </a>
        </nav>
      </div>
    </header>
  );
}
