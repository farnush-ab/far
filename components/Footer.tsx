"use client";
import Logo from "./Logo";

const cols = [
  { title: "محصولات", items: ["سوزن و قیچی", "ماسوره و قرقره", "موتور و کلاچ", "چرخ‌دنده", "بردها"] },
  { title: "برندها", items: ["PIN", "STRONG H", "ORGAN", "GROZ-BECKERT", "JUKI"] },
  { title: "نوراکو", items: ["درباره ما", "وبلاگ", "همکاری", "نمایندگی", "تماس"] },
];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-line bg-cream-50 px-6 pt-16 pb-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-xs leading-6 text-ink-900/65">
              نوراکو · مرجع تخصصی قطعات چرخ‌های خیاطی صنعتی در ایران.
            </p>
            <div className="mt-6 space-y-2 text-xs text-ink-900/70">
              <div>تهران، خیابان جمهوری، پاساژ علاءالدین، طبقه ۲</div>
              <div>hello@nooraco.ir</div>
              <div>۰۲۱ — ۰۰۰ ۰۰ ۰۰۰</div>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <div className="kicker">{c.title}</div>
              <ul className="mt-4 space-y-2 text-xs">
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
        <div className="mt-16 select-none overflow-hidden">
          <div
            className="text-center text-[11vw] leading-none text-ink-900/10 tracking-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
          >
            NOORACO
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-line pt-5 text-[11px] text-ink-900/55 md:flex-row">
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
