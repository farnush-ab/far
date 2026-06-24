"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";
import { CalendarDays, Users, Clock, Check } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { images } from "@/lib/images";

const timeSlots = [
  { value: "morning", label: "صبح · ۱۰ تا ۱۲" },
  { value: "noon", label: "ظهر · ۱۲ تا ۱۴" },
  { value: "afternoon", label: "بعدازظهر · ۱۴ تا ۱۷" },
  { value: "evening", label: "عصر · ۱۷ تا ۲۰" },
];

const roles = [
  { value: "interior-designer", label: "طراح داخلی" },
  { value: "architect", label: "معمار" },
  { value: "client", label: "کارفرما / مشتری" },
  { value: "other", label: "سایر" },
];

const partySizes = [
  { value: "2", label: "۲ نفر" },
  { value: "3-4", label: "۳ تا ۴ نفر" },
  { value: "5-6", label: "۵ تا ۶ نفر" },
  { value: "7+", label: "۷ نفر یا بیشتر" },
];

export default function MeetingTableSection() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder — backend (Resend / API route) wires up in a later step
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <section
      id="table"
      className="relative bg-cream-100 py-28 md:py-40"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        {/* Section header */}
        <Reveal className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker mb-4">THE DESIGN TABLE · BY APPOINTMENT</p>
            <h2 className="display-fa text-balance text-4xl md:text-6xl">
              میز ملاقات،
              <br />
              <span className="text-sage-600">برای معماران و طراحان.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-[1.95] text-walnut-700">
            در شوروم پالادیوم، میز بزرگ ما برای جلسات حرفه‌ای آماده است.
            معماران و طراحان داخلی می‌توانند کارفرمایان خود را اینجا
            ملاقات کنند و در کنار نمونه‌های واقعی تصمیم بگیرند.
          </p>
        </Reveal>

        {/* Content + form */}
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Editorial image + benefits */}
          <Reveal className="md:col-span-6">
            <div className="relative aspect-[5/6] overflow-hidden bg-cream-200">
              <Image
                src={images.showroom.table}
                alt="میز ملاقات دیزاین استیشن"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-8 space-y-5">
              <Benefit
                title="رزرو رایگان"
                desc="بدون هزینه برای معماران و طراحان داخلی همراه با کارفرمایانشان."
              />
              <Benefit
                title="دسترسی به متریال‌ها"
                desc="نمونه‌های واقعی شیرآلات، سرامیک و روشنایی روی میز در دسترس شماست."
              />
              <Benefit
                title="مشاوره تیم دیزاین استیشن"
                desc="در صورت تمایل، تیم ما در جلسه حضور دارد تا به انتخاب برندها کمک کند."
              />
            </div>
          </Reveal>

          {/* Booking form */}
          <Reveal delay={0.15} className="md:col-span-6">
            <div className="border border-line bg-cream-50 p-8 md:p-10">
              <div className="mb-8 flex items-center justify-between border-b border-line pb-5">
                <p className="kicker">RESERVE THE TABLE</p>
                <span className="kicker text-walnut-700">FORM · 01</span>
              </div>

              {submitted ? (
                <SuccessState onReset={() => setSubmitted(false)} />
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <Field label="نام و نام خانوادگی" required>
                    <input
                      type="text"
                      required
                      name="name"
                      className="ds-input"
                      placeholder="مثلاً: سارا محمدی"
                    />
                  </Field>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="شماره تماس" required>
                      <input
                        type="tel"
                        required
                        name="phone"
                        className="ds-input"
                        dir="ltr"
                        placeholder="0912 123 4567"
                      />
                    </Field>
                    <Field label="ایمیل">
                      <input
                        type="email"
                        name="email"
                        className="ds-input"
                        dir="ltr"
                        placeholder="you@studio.com"
                      />
                    </Field>
                  </div>

                  <Field label="حرفه" required>
                    <Select name="role" options={roles} />
                  </Field>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="تاریخ" required icon={<CalendarDays size={14} />}>
                      <input
                        type="date"
                        required
                        name="date"
                        className="ds-input"
                        dir="ltr"
                      />
                    </Field>
                    <Field label="بازه زمانی" required icon={<Clock size={14} />}>
                      <Select name="slot" options={timeSlots} />
                    </Field>
                  </div>

                  <Field label="تعداد افراد" required icon={<Users size={14} />}>
                    <Select name="party" options={partySizes} />
                  </Field>

                  <Field label="درباره پروژه (اختیاری)">
                    <textarea
                      name="notes"
                      rows={3}
                      className="ds-input resize-none"
                      placeholder="ویلای مسکونی، بازسازی حمام، هتل بوتیک، ..."
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-primary btn-fa btn-lg mt-6 w-full justify-center disabled:opacity-50"
                  >
                    {submitting ? "در حال ارسال..." : "ثبت درخواست رزرو"}
                  </button>

                  <p className="kicker pt-2 text-center text-walnut-700">
                    پاسخ ظرف ۲۴ ساعت · تماس از طرف تیم دیزاین استیشن
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Local styles for inputs */}
      <style jsx global>{`
        .ds-input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid rgba(58, 46, 36, 0.18);
          padding: 10px 0;
          font-family: var(--font-fa);
          font-size: 15px;
          color: var(--walnut-800);
          outline: none;
          transition: border-color 0.4s;
        }
        .ds-input::placeholder {
          color: rgba(58, 46, 36, 0.35);
        }
        .ds-input:focus {
          border-bottom-color: var(--walnut-800);
        }
      `}</style>
    </section>
  );
}

function Benefit({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4 border-b border-line pb-5">
      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-walnut-800 text-walnut-800">
        <Check size={11} strokeWidth={2.5} />
      </span>
      <div>
        <p className="text-base font-medium text-walnut-800">{title}</p>
        <p className="mt-1 text-sm leading-[1.9] text-walnut-700">{desc}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  icon,
  children,
}: {
  label: string;
  required?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="kicker mb-1 flex items-center gap-2 text-walnut-700">
        {icon}
        {label}
        {required && <span className="text-sage-600">*</span>}
      </span>
      {children}
    </label>
  );
}

function Select({
  name,
  options,
}: {
  name: string;
  options: { value: string; label: string }[];
}) {
  return (
    <select required name={name} className="ds-input" defaultValue="">
      <option value="" disabled>
        انتخاب کنید
      </option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="py-12 text-center">
      <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-walnut-800">
        <Check size={22} strokeWidth={1.6} />
      </div>
      <h3 className="display-fa text-2xl">درخواست شما ثبت شد.</h3>
      <p className="mt-4 text-sm leading-[2] text-walnut-700">
        تیم دیزاین استیشن ظرف ۲۴ ساعت با شما تماس می‌گیرد
        تا جزئیات رزرو میز را نهایی کند.
      </p>
      <button onClick={onReset} className="btn btn-outline btn-fa mt-8">
        رزرو دیگری
      </button>
    </div>
  );
}
