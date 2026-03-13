import { Shield } from 'lucide-react';

const PARTICLES: Array<{
  top: string; left: string; size: number;
  cls: string; dur: string; delay: string;
}> = [
  { top: '8%',  left: '7%',  size: 3, cls: 'particle-a', dur: '16s', delay: '0s' },
  { top: '15%', left: '23%', size: 2, cls: 'particle-b', dur: '20s', delay: '2s' },
  { top: '22%', left: '82%', size: 4, cls: 'particle-c', dur: '24s', delay: '1s' },
  { top: '35%', left: '91%', size: 2, cls: 'particle-a', dur: '18s', delay: '4s' },
  { top: '48%', left: '5%',  size: 3, cls: 'particle-b', dur: '22s', delay: '3s' },
  { top: '55%', left: '68%', size: 2, cls: 'particle-c', dur: '15s', delay: '5s' },
  { top: '65%', left: '40%', size: 4, cls: 'particle-a', dur: '19s', delay: '1.5s' },
  { top: '72%', left: '14%', size: 2, cls: 'particle-b', dur: '25s', delay: '6s' },
  { top: '78%', left: '78%', size: 3, cls: 'particle-c', dur: '17s', delay: '0.5s' },
  { top: '85%', left: '55%', size: 2, cls: 'particle-a', dur: '21s', delay: '3.5s' },
  { top: '12%', left: '52%', size: 3, cls: 'particle-b', dur: '23s', delay: '7s' },
  { top: '42%', left: '35%', size: 2, cls: 'particle-c', dur: '16s', delay: '2.5s' },
  { top: '90%', left: '30%', size: 3, cls: 'particle-a', dur: '20s', delay: '4.5s' },
  { top: '60%', left: '95%', size: 2, cls: 'particle-b', dur: '14s', delay: '1s' },
  { top: '28%', left: '62%', size: 4, cls: 'particle-c', dur: '26s', delay: '8s' },
  { top: '5%',  left: '45%', size: 2, cls: 'particle-a', dur: '18s', delay: '6.5s' },
  { top: '95%', left: '72%', size: 3, cls: 'particle-b', dur: '22s', delay: '3s' },
  { top: '50%', left: '50%', size: 2, cls: 'particle-c', dur: '20s', delay: '9s' },
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
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="7" stroke="#C9A84C" strokeWidth="0.75" fill="none" />
      <circle cx="8" cy="8" r="1.2" fill="#C9A84C" />
      {spokes.map(({ x1, y1, x2, y2, key }) => (
        <line
          key={key}
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#C9A84C"
          strokeWidth="0.6"
        />
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
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B3E] via-[#0D1B3E]/90 to-[#0D1B3E]" />

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className={`absolute rounded-full bg-[#C9A84C] ${p.cls}`}
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              ['--dur' as string]: p.dur,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

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
          Explore Our Companies
          <span className="text-base">&darr;</span>
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-0.5 h-8 bg-gradient-to-b from-gold/40 to-transparent mx-auto" />
      </div>
    </section>
  );
}
