const STARS: Array<{
  top: string; left: string; size: number;
  cls: string; delay: string;
}> = [
    { top: '15%', left: '10%', size: 3, cls: 'star-slow', delay: '0s' },
    { top: '8%', left: '45%', size: 2, cls: 'star-med', delay: '2s' },
    { top: '25%', left: '80%', size: 4, cls: 'star-fast', delay: '1s' },
    { top: '40%', left: '15%', size: 2, cls: 'star-med', delay: '4s' },
    { top: '55%', left: '8%', size: 3, cls: 'star-slow', delay: '3s' },
    { top: '35%', left: '60%', size: 2, cls: 'star-fast', delay: '5s' },
    { top: '65%', left: '30%', size: 4, cls: 'star-slow', delay: '1.5s' },
    { top: '80%', left: '15%', size: 2, cls: 'star-med', delay: '6s' },
    { top: '75%', left: '85%', size: 3, cls: 'star-fast', delay: '0.5s' },
    { top: '85%', left: '65%', size: 2, cls: 'star-med', delay: '3.5s' },
    { top: '12%', left: '75%', size: 3, cls: 'star-slow', delay: '7s' },
    { top: '45%', left: '88%', size: 2, cls: 'star-fast', delay: '2.5s' },
    { top: '90%', left: '40%', size: 3, cls: 'star-slow', delay: '4.5s' },
    { top: '50%', left: '95%', size: 2, cls: 'star-med', delay: '1s' },
    { top: '28%', left: '35%', size: 4, cls: 'star-fast', delay: '8s' },
  ];

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

        <button
          onClick={scrollToCompanies}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-sans font-semibold text-sm rounded-lg hover:bg-gold-light transition-colors duration-200 shadow-lg shadow-[rgba(201,168,76,0.2)] mb-20"
        >
          Explore Our Brands
          <span className="text-base">&darr;</span>
        </button>

        <div className="pt-12 border-t border-[rgba(201,168,76,0.1)]">
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold/60 mb-10 font-medium">
            We have worked with
          </p>
          <div className="flex flex-nowrap justify-between items-center gap-4 opacity-60 hover:opacity-100 transition-opacity duration-500 overflow-x-auto pb-4 sm:pb-0 hide-scrollbar mb-12">
            {[
              { name: 'Swoo', bold: 'POS' },
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

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-[11px] tracking-[0.1em] text-cream/40 font-sans uppercase">
            <span>10 active brands across 4 sectors</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-gold/20" />
            <span>DPIIT Recognised Venture Studio</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-gold/20" />
            <span>Built in India &middot; Global Reach</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-0.5 h-8 bg-gradient-to-b from-gold/40 to-transparent mx-auto" />
      </div>
    </section>
  );
}
