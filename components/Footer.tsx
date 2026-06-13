"use client";
import Logo from "./Logo";

const cols = [
  { title: "محصولات", items: ["سوزن و قیچی", "ماسوره و قرقره", "موتور و کلاچ", "چرخ‌دنده", "بردها"] },
  { title: "برندها", items: ["PIN", "STRONG H", "ORGAN", "GROZ-BECKERT", "JUKI"] },
  { title: "نوراکو", items: ["درباره ما", "وبلاگ", "همکاری", "نمایندگی", "تماس"] },
];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-line bg-cream-50 px-6 pt-24 pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-8 max-w-xs text-sm leading-7 text-ink-900/65">
              نوراکو · مرجع تخصصی قطعات چرخ‌های خیاطی صنعتی در ایران.
            </p>
            <div className="mt-10 space-y-3 text-sm text-ink-900/70">
              <div>تهران، خیابان جمهوری، پاساژ علاءالدین، طبقه ۲</div>
              <div>hello@nooraco.ir</div>
              <div>۰۲۱ — ۰۰۰ ۰۰ ۰۰۰</div>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <div className="kicker">{c.title}</div>
              <ul className="mt-6 space-y-3 text-sm">
                {c.items.map((it) => (
                  <li key={it}>
                    <a href="#" className="hover-line text-ink-900/80">
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <div className="kicker">دنبال کنید</div>
            <ul className="mt-6 space-y-3 text-sm">
              {["اینستاگرام", "تلگرام", "لینکدین", "خبرنامه"].map((s) => (
                <li key={s}>
                  <a href="#" className="hover-line text-ink-900/80">{s}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* big wordmark */}
        <div className="mt-24 select-none overflow-hidden">
          <div
            className="text-center text-[20vw] leading-none text-ink-900/12 tracking-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
          >
            NOORACO
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-ink-900/55 md:flex-row">
          <div>© {new Date().getFullYear()} Nooraco · کلیه حقوق محفوظ است</div>
          <div className="flex gap-6">
            <a href="#" className="hover-line">حریم خصوصی</a>
            <a href="#" className="hover-line">شرایط</a>
            <a href="#" className="hover-line">نقشه سایت</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
