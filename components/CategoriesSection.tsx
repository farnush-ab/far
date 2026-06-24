"use client";

import Image from "next/image";
import { Reveal } from "./ui/Reveal";
import { images } from "@/lib/images";

const categories = [
  {
    label: "شیرآلات",
    en: "FAUCETS · BATHROOM",
    description:
      "مجموعه‌ای از Gessi، Dornbracht، Antonio Lupi و Fantini برای فضاهای حمام.",
    image: images.categories.faucets,
    href: "#",
  },
  {
    label: "سرامیک و کاشی",
    en: "CERAMICS · SURFACES",
    description:
      "سرامیک‌های ایتالیایی از Florim، Mutina، Bisazza و Atlas Concorde، در بافت‌های مرمر، بتن و چوب.",
    image: images.categories.tiles,
    href: "#",
  },
  {
    label: "روشنایی",
    en: "LIGHTING · OBJECTS",
    description:
      "از پاندانت‌های Flos تا اشیاء تزئینی Artemide، Foscarini و Vibia — نور به‌عنوان متریال.",
    image: images.categories.lighting,
    href: "#",
  },
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <Reveal className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker mb-4">COLLECTIONS · 03</p>
            <h2 className="display-fa text-balance text-3xl md:text-4xl lg:text-5xl">
              سه دسته‌بندی، یک معیار.
            </h2>
          </div>
          <p className="max-w-md text-base leading-[1.95] text-walnut-700">
            از Gessi و Dornbracht در شیرآلات، تا Florim و Mutina در سرامیک،
            و Flos و Artemide در روشنایی — همگی در یک سقف.
          </p>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {categories.map((cat, i) => (
            <Reveal key={cat.label} delay={i * 0.1}>
              <a
                href={cat.href}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-cream-200">
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-walnut-900/40 via-transparent to-transparent" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="kicker mb-2">{cat.en}</p>
                    <h3 className="display-fa text-xl md:text-2xl">
                      {cat.label}
                    </h3>
                  </div>
                  <span className="kicker mt-1 shrink-0 text-walnut-700 transition group-hover:text-sage-600">
                    0{i + 1} / 03
                  </span>
                </div>
                <p className="mt-3 text-sm leading-[1.95] text-walnut-700">
                  {cat.description}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
