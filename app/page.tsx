export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-10 md:px-12 md:py-16">
        {/* Top bar */}
        <header className="flex items-center justify-between">
          <span className="display text-2xl tracking-tight md:text-3xl">
            Design Station
          </span>
          <span className="kicker">PALLADIUM · TEHRAN</span>
        </header>

        {/* Hero placeholder */}
        <div className="grid gap-10 py-20 md:grid-cols-12 md:gap-16 md:py-32">
          <div className="md:col-span-8">
            <p className="eyebrow mb-6">به‌زودی</p>
            <h1 className="display-fa text-balance text-4xl leading-[1.08] md:text-7xl lg:text-[88px]">
              جایی برای دیزاین.
              <br />
              <span className="text-sage-600">
                نمایندگی انحصاری برندهای لاکچری.
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-walnut-700 md:text-lg">
              دیزاین استیشن، نماینده انحصاری برندهای معتبر شیرآلات،
              سرامیک و روشنایی در ایران. شوروم پالادیوم تهران.
            </p>
          </div>

          {/* Palette proof */}
          <div className="md:col-span-4">
            <p className="kicker mb-4">پالت برند</p>
            <div className="space-y-3">
              <Swatch hex="#F5F0E6" name="Cream" />
              <Swatch hex="#9A9B78" name="Sage" />
              <Swatch hex="#3A2E24" name="Walnut" />
            </div>
          </div>
        </div>

        {/* Footer line */}
        <footer className="flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-sm text-walnut-700 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Design Station</span>
          <span className="kicker">FA · RTL · v0.1</span>
        </footer>
      </section>
    </main>
  );
}

function Swatch({ hex, name }: { hex: string; name: string }) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="h-12 w-12 rounded-sm border border-line"
        style={{ background: hex }}
      />
      <div className="flex flex-1 items-baseline justify-between border-b border-line pb-2">
        <span className="text-sm">{name}</span>
        <span className="kicker">{hex}</span>
      </div>
    </div>
  );
}
