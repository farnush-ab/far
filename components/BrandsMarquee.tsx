const brands = [
  "Gessi",
  "Dornbracht",
  "Antonio Lupi",
  "Fantini",
  "Florim",
  "Bisazza",
  "Mutina",
  "Atlas Concorde",
  "Flos",
  "Artemide",
  "Foscarini",
  "Vibia",
];

export default function BrandsMarquee() {
  // Duplicate for seamless loop
  const row = [...brands, ...brands];

  return (
    <section id="brands" className="border-y border-line bg-cream-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <p className="kicker">REPRESENTED BRANDS · UAE → IRAN</p>
          <a href="#" className="hover-line kicker hidden text-walnut-700 md:inline-block">
            VIEW ALL
          </a>
        </div>
      </div>

      <div className="marquee-mask relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 px-10">
          {row.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="display whitespace-nowrap text-4xl text-walnut-800/70 md:text-6xl"
            >
              {brand}
              <span className="mx-8 text-sage-500/40">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
