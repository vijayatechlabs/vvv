const STARS: Array<{
  top: string; left: string; size: number;
  cls: string; delay: string;
}> = [
  { top: '15%', left: '10%', size: 3, cls: 'star-slow', delay: '0s' },
  { top: '8%',  left: '45%', size: 2, cls: 'star-med',  delay: '2s' },
  { top: '25%', left: '80%', size: 4, cls: 'star-fast', delay: '1s' },
  { top: '40%', left: '15%', size: 2, cls: 'star-med',  delay: '4s' },
  { top: '55%', left: '8%',  size: 3, cls: 'star-slow', delay: '3s' },
  { top: '35%', left: '60%', size: 2, cls: 'star-fast', delay: '5s' },
  { top: '65%', left: '30%', size: 4, cls: 'star-slow', delay: '1.5s' },
  { top: '80%', left: '15%', size: 2, cls: 'star-med',  delay: '6s' },
  { top: '75%', left: '85%', size: 3, cls: 'star-fast', delay: '0.5s' },
  { top: '85%', left: '65%', size: 2, cls: 'star-med',  delay: '3.5s' },
  { top: '12%', left: '75%', size: 3, cls: 'star-slow', delay: '7s' },
  { top: '45%', left: '88%', size: 2, cls: 'star-fast', delay: '2.5s' },
  { top: '90%', left: '40%', size: 3, cls: 'star-slow', delay: '4.5s' },
  { top: '50%', left: '95%', size: 2, cls: 'star-med',  delay: '1s' },
  { top: '28%', left: '35%', size: 4, cls: 'star-fast', delay: '8s' },
];

function AshokaChakra() {
  const spokes = Array.from({ length: 24 }, (_, i) => {
    const angle = (i * 360) / 24;
    const rad = (angle * Math.PI) / 180;
    const x1 = 8 + 5 * Math.cos(rad);
    const y1 = 8 + 5 * Math.sin(rad);
    const x2 = 8 + 7.5 * Math.cos(rad);
    const y2 = 8 + 7.5 * Math.sin(rad);
    return { x1, y1, x2, y2, key: i };
  });

  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="#C9A84C" strokeWidth="0.75" fill="none" />
      <circle cx="8" cy="8" r="1.2" fill="#C9A84C" />
      {spokes.map(({ x1, y1, x2, y2, key }) => (
        <line key={key} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C9A84C" strokeWidth="0.6" />
      ))}
    </svg>
  );
}

export default function Hero() {
  const scrollToCompanies = () => {
    const el = document.getElementById('companies');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center universe-bg premium-grain overflow-hidden">
      {/* The Stars */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {STARS.map((star, i) => (
          <span
            key={i}
            className={`star-base ${star.cls}`}
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060B1A]/40 to-[#0A1530] pointer-events-none" aria-hidden="true" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.05)] shadow-[0_0_15px_rgba(201,168,76,0.1)]">
          <span className="text-gold text-xs font-sans font-medium tracking-[0.2em] uppercase">
            Pioneering Indian Ventures &middot; Est. 2021
          </span>
        </div>

        <h1
          className="font-serif text-[44px] sm:text-[56px] lg:text-[72px] leading-[1.05] text-cream mb-8"
          style={{
            background: 'linear-gradient(to bottom, #F8F6F1 30%, #D4AF37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Architecting the Future of <br className="hidden sm:block" /> Indian Enterprise
        </h1>

        <p className="font-sans text-lg sm:text-xl text-muted max-w-3xl mx-auto mb-12 leading-relaxed opacity-90">
          We partner with visionary founders to architect, launch, and scale category-defining brands across AI, Fintech, and Commerce—built in India, engineered for the global stage.
        </p>

        <div className="mb-12 flex items-center justify-center">
          <a
            href="/VVV-StartUp-India-certificate.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-4 py-2.5 bg-[#122348] border border-[rgba(201,168,76,0.3)] rounded-lg hover:border-[rgba(201,168,76,0.6)] transition-colors duration-200"
            title="View Recognition Certificate"
          >
            <AshokaChakra />
            <span className="font-sans text-xs text-cream/80 tracking-wide">
              View Startup Recognition Certificate
            </span>
            <span className="font-sans text-[10px] text-gold/50 group-hover:text-gold transition-colors">
              &rarr;
            </span>
          </a>
        </div>

        <button
          onClick={scrollToCompanies}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-sans font-semibold text-sm rounded-lg hover:bg-gold-light transition-colors duration-200 shadow-lg shadow-[rgba(201,168,76,0.2)]"
        >
          Explore Our Brands
          <span className="text-base">&darr;</span>
        </button>

        <div className="mt-24 pt-12 border-t border-[rgba(201,168,76,0.1)]">
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold/60 mb-10 font-medium">
            Systems Built For
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
            {[
              { name: 'Swooo', bold: 'pos' },
              { name: 'Zuid', bold: 'Energies' },
              { name: 'Needy', bold: 'Loans' },
              { name: 'Airport', bold: 'EV' },
              { name: 'Waiter', bold: 'Mate' },
              { name: 'BuyMy', bold: 'Car' },
              { name: 'Pabbly', bold: 'Connect' },
            ].map((brand) => (
              <div
                key={brand.name + brand.bold}
                className="group cursor-default select-none transition-all duration-300 hover:scale-105"
              >
                <span className="font-sans text-lg sm:text-xl text-cream/70 tracking-tight group-hover:text-gold transition-colors duration-300">
                  <span className="font-light">{brand.name}</span>
                  <span className="font-bold">{brand.bold}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
          {[
            '10 active brands across 4 sectors',
            'DPIIT Recognised • Valid through April 19, 2031',
            'Built in India, serving global clients',
          ].map((proof) => (
            <div
              key={proof}
              className="rounded-lg border border-[rgba(201,168,76,0.18)] bg-[rgba(18,35,72,0.55)] px-4 py-3 text-xs tracking-wide text-cream/85 backdrop-blur-sm"
            >
              {proof}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-0.5 h-8 bg-gradient-to-b from-gold/40 to-transparent mx-auto" />
      </div>
    </section>
  );
}

