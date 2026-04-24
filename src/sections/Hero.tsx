import { Shield } from 'lucide-react';

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
    <section className="relative min-h-screen flex items-center justify-center universe-bg overflow-hidden">
      {/* Background Stars */}
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
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.05)]">
          <span className="text-gold text-xs font-sans font-medium tracking-wider uppercase">
            DPIIT Recognised Startup &middot; Est. 2021
          </span>
        </div>

        <h1
          className="font-serif text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.1] text-cream mb-6"
          style={{
            background: 'linear-gradient(135deg, #F8F6F1 60%, #C9A84C 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Building India's Next Generation of Companies
        </h1>

        <p className="font-sans text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          A DPIIT-recognised startup incubating bold brands across AI, Fintech, Real Estate, and Commerce — from India, for the world.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="/VVV-StartUp-India-certificate.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-4 py-2.5 bg-[#122348] border border-[rgba(201,168,76,0.3)] rounded-lg hover:border-[rgba(201,168,76,0.6)] transition-colors duration-200"
            title="View DPIIT Certificate of Recognition"
          >
            <AshokaChakra />
            <span className="font-sans text-xs text-cream/80 tracking-wide">
              DPIIT Recognised Startup India &middot; DIPP210560
            </span>
            <span className="font-sans text-[10px] text-gold/50 group-hover:text-gold transition-colors">
              &rarr;
            </span>
          </a>
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#122348] border border-[rgba(201,168,76,0.2)] rounded-lg">
            <Shield size={14} className="text-gold flex-shrink-0" />
            <span className="font-sans text-xs text-cream/80 tracking-wide">
              OPC Pvt Ltd &middot; CIN: U72900AP2021OPC118054
            </span>
          </div>
        </div>

        <button
          onClick={scrollToCompanies}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-sans font-semibold text-sm rounded-lg hover:bg-gold-light transition-colors duration-200 shadow-lg shadow-[rgba(201,168,76,0.2)]"
        >
          Explore Our Brands
          <span className="text-base">&darr;</span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-0.5 h-8 bg-gradient-to-b from-gold/40 to-transparent mx-auto" />
      </div>
    </section>
  );
}

