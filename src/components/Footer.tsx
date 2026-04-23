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
    <footer className="bg-[#0D1B3E] border-t border-[rgba(201,168,76,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/VVV-logo.png"
                alt="ViswaVardhan Vyapara Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="font-sans font-semibold text-cream text-sm leading-tight">
                ViswaVardhan Vyapara
              </span>
            </div>
            <p className="font-sans text-muted text-sm leading-relaxed mb-6">
              Building India's Next Generation of Companies
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/viswavardhanvyapara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {brandsByGroup.map((group) => (
            <div key={group.label}>
              <h4 className="font-sans text-xs font-semibold text-gold uppercase tracking-widest mb-5">
                {group.label}
              </h4>
              <ul className="space-y-3">
                {group.brands.map((brand) => (
                  <li key={brand.name}>
                    {brand.url ? (
                      <a
                        href={brand.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-sm text-muted hover:text-cream transition-colors"
                      >
                        {brand.name}
                      </a>
                    ) : (
                      <span className="font-sans text-sm text-muted/50">{brand.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[rgba(201,168,76,0.15)] pt-8">
          <div className="flex flex-wrap gap-6 mb-6">
            <Link
              to="/privacy"
              className="font-sans text-sm text-muted hover:text-cream transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="font-sans text-sm text-muted hover:text-cream transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/refund"
              className="font-sans text-sm text-muted hover:text-cream transition-colors"
            >
              Cancellations & Refund Policy
            </Link>
          </div>

          <div className="space-y-1">
            <p className="font-sans text-xs text-muted/70">
              &copy; 2026 ViswaVardhan Vyapara (OPC) Private Limited &middot; All Rights Reserved
            </p>
            <p className="font-sans text-xs text-muted/70">
              CIN: U72900AP2021OPC118054 &middot; DPIIT: DIPP210560 &middot; GSTIN: 37AAICV0512B1ZT
            </p>
            <p className="font-sans text-xs text-muted/70">
              Registered: #28, MIES Villas, NH-44, Ananthapuramu – 515002, Andhra Pradesh, India
            </p>
            <p className="font-sans text-xs text-muted/70">
              ViswaVardhan Vyapara (OPC) Private Limited is recognised by DPIIT StartUp India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
