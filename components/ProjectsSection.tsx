"use client";

import Image from "next/image";
import { Reveal } from "./ui/Reveal";
import { images } from "@/lib/images";

const projects = [
  {
    title: "ویلایی در لواسان",
    en: "PRIVATE RESIDENCE · LAVASAN",
    category: "شیرآلات · سرامیک",
    image: images.projects.lavasan,
  },
  {
    title: "بوتیک هتل کاشان",
    en: "BOUTIQUE HOTEL · KASHAN",
    category: "روشنایی",
    image: images.projects.kashan,
  },
  {
    title: "پنت‌هاوس زعفرانیه",
    en: "PENTHOUSE · ZAFARANIYEH",
    category: "شیرآلات · روشنایی",
    image: images.projects.zafaraniyeh,
  },
  {
    title: "دفتر معماری نیاوران",
    en: "ARCHITECTURE STUDIO · NIAVARAN",
    category: "سرامیک · روشنایی",
    image: images.projects.niavaran,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-cream-50 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker mb-4">SELECTED WORK · 2024–2026</p>
            <h2 className="display-fa text-balance text-4xl md:text-5xl lg:text-6xl">
              پروژه‌هایی که با ما متولد شدند.
            </h2>
          </div>
          <a href="#" className="hover-line kicker self-start text-walnut-700 md:self-end">
            ALL PROJECTS
          </a>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-20">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.1} className={i % 2 === 1 ? "md:mt-24" : ""}>
              <a href="#" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-cream-200">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="kicker mb-2">{p.en}</p>
                    <h3 className="display-fa text-2xl md:text-3xl">{p.title}</h3>
                  </div>
                  <span className="kicker mt-1 text-walnut-700">{p.category}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
