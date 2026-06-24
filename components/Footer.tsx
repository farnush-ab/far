const cols = [
  {
    heading: "COLLECTIONS",
    items: ["شیرآلات", "سرامیک و کاشی", "روشنایی"],
  },
  {
    heading: "STUDIO",
    items: ["درباره ما", "برندها", "پروژه‌ها", "مجله"],
  },
  {
    heading: "CONTACT",
    items: ["پالادیوم تهران", "دبی · امارات", "hello@designstation.ir"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-cream-100 pt-20 pb-10">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <p className="display text-3xl">Design Station</p>
            <p className="mt-6 max-w-xs text-sm leading-[2] text-walnut-700">
              نمایندگی انحصاری برندهای معتبر شیرآلات، سرامیک و روشنایی در ایران.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.heading} className="md:col-span-2">
              <p className="kicker mb-5">{col.heading}</p>
              <ul className="space-y-3 text-sm text-walnut-800">
                {col.items.map((it) => (
                  <li key={it}>
                    <a href="#" className="hover-line">
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <p className="kicker mb-5">FOLLOW</p>
            <ul className="space-y-3 text-sm text-walnut-800">
              <li><a href="#" className="hover-line">Instagram</a></li>
              <li><a href="#" className="hover-line">Pinterest</a></li>
              <li><a href="#" className="hover-line">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-xs text-walnut-700 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Design Station. تمام حقوق محفوظ است.</span>
          <span className="kicker">FA · RTL</span>
        </div>
      </div>
    </footer>
  );
}
