import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const brandsByGroup = [
  {
    label: 'AI & Technology',
    brands: [
      { name: 'VijayaTech Labs', url: 'https://vijayatech.in' },
      { name: 'atharva AI', url: 'https://atharva.app' },
      { name: 'Zira', url: 'https://heyzira.com' },
      { name: 'naam', url: 'https://naam.one' },
      { name: 'WP Setu', url: 'https://wpsetu.com' },
    ],
  },
  {
    label: 'Fintech, Real Estate & Commerce',
    brands: [
      { name: 'Shrika Finserv', url: 'https://shrika.in' },
      { name: 'Shrika Realty', url: 'https://shrikarealty.in' },
      { name: 'Santa', url: null },
      { name: 'PANI', url: null },
      { name: 'Revive Talent', url: 'https://revivetalent.com' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0D1B3E] border-t border-[rgba(201,168,76,0.15)] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 universe-bg opacity-50" />
      <div className="absolute inset-0 premium-grain opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/VVV-logo.png"
                alt="ViswaVardhan Vyapara Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="font-serif text-xl text-cream tracking-wide">
                ViswaVardhan Vyapara
              </span>
            </div>
            <p className="font-sans text-muted text-sm leading-relaxed mb-8 max-w-xs">
              Building India's Next Generation of Companies with deep-tech, fintech, and commerce expertise.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/viswavardhanvyapara"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-full border border-gold/20 bg-gold/5 text-muted hover:text-gold hover:border-gold/40 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="md:col-span-1 hidden md:block" />

          {brandsByGroup.map((group, idx) => (
            <div key={group.label} className={`md:col-span-${idx === 0 ? '3' : '4'}`}>
              <h4 className="font-sans text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-8">
                {group.label}
              </h4>
              <ul className="space-y-4">
                {group.brands.map((brand) => (
                  <li key={brand.name}>
                    {brand.url ? (
                      <a
                        href={brand.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-sm text-muted/80 hover:text-cream transition-colors flex items-center group"
                      >
                        <span className="w-0 h-px bg-gold/50 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300" />
                        {brand.name}
                      </a>
                    ) : (
                      <span className="font-sans text-sm text-muted/40 italic">{brand.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-[rgba(201,168,76,0.15)]">
          <div className="flex flex-col items-center text-center space-y-10">
            {/* Policy Links */}
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
              {['Privacy Policy', 'Terms & Conditions', 'Cancellations & Refund Policy'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().split(' ')[0]}`}
                  className="font-sans text-xs font-semibold text-muted/60 hover:text-gold tracking-widest uppercase transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Legal Info */}
            <div className="max-w-4xl w-full space-y-6">
              <div className="flex items-center justify-center gap-4 text-muted/20">
                <div className="h-px w-12 bg-current" />
                <p className="font-sans text-sm text-cream font-medium tracking-wide">
                  &copy; 2026 ViswaVardhan Vyapara (OPC) Private Limited
                </p>
                <div className="h-px w-12 bg-current" />
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-[10px] uppercase tracking-[0.15em] text-muted/50 font-semibold">
                <div className="px-3 py-1 rounded-full border border-gold/10 bg-gold/5">
                  CIN: U72900AP2021OPC118054
                </div>
                <div className="px-3 py-1 rounded-full border border-gold/10 bg-gold/5">
                  DPIIT: DIPP210560
                </div>
                <div className="px-3 py-1 rounded-full border border-gold/10 bg-gold/5">
                  GSTIN: 37AAICV0512B1ZT
                </div>
              </div>

              <p className="font-sans text-[11px] text-muted/40 leading-relaxed max-w-2xl mx-auto">
                Registered: #28, MIES Villas, NH-44, Ananthapuramu – 515002, Andhra Pradesh, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
