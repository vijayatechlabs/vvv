import { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

const stats = [
  { value: '10', label: 'Brands & Counting' },
  { value: '14+', label: 'Years of IT Expertise' },
  { value: '250+', label: 'Global Clients Served' },
];

function CertificateModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-[#122348] border border-[rgba(201,168,76,0.3)] rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-[rgba(201,168,76,0.15)]">
          <span className="font-sans text-xs font-semibold text-gold uppercase tracking-widest">
            DPIIT Certificate of Recognition &middot; DIPP210560
          </span>
          <div className="flex items-center gap-3">
            <a
              href="/VVV-StartUp-India-certificate.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-gold transition-colors"
              aria-label="Open in new tab"
            >
              <ExternalLink size={14} />
            </a>
            <button
              onClick={onClose}
              className="text-muted hover:text-cream transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>
        <img
          src="/VVV-StartUp-India-certificate.jpg"
          alt="DPIIT Certificate of Recognition — ViswaVardhan Vyapara"
          className="w-full h-auto block"
        />
      </div>
    </div>
  );
}

export default function About() {
  const [showCert, setShowCert] = useState(false);

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#0D1B3E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="font-sans text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-5 block">
              Who We Are
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-cream mb-8 leading-tight">
              A company builder rooted in India.
            </h2>
            <p className="font-sans text-base text-muted leading-[1.8] mb-8">
              ViswaVardhan Vyapara (OPC) Private Limited is a DPIIT StartUp India recognised company. Founded in 2021 and headquartered in Ananthapuramu, Andhra Pradesh, we build and incubate companies that solve real-world problems across AI & Automation, Financial Services, Real Estate, and Commerce. We operate as a parent company to 10 brands — each independently serving its market.
            </p>

            <button
              onClick={() => setShowCert(true)}
              className="group inline-flex items-center gap-3 p-3 bg-[#122348] border border-[rgba(201,168,76,0.25)] rounded-lg hover:border-[rgba(201,168,76,0.5)] transition-colors duration-200"
            >
              <img
                src="/VVV-StartUp-India-certificate.jpg"
                alt="DPIIT Certificate thumbnail"
                className="w-14 h-10 object-cover rounded flex-shrink-0"
              />
              <div className="text-left">
                <p className="font-sans text-xs font-semibold text-cream mb-0.5">
                  Certificate of Recognition
                </p>
                <p className="font-sans text-[11px] text-muted">
                  DPIIT &middot; DIPP210560 &middot; Valid upto 19-04-2031
                </p>
              </div>
              <span className="font-sans text-[11px] text-gold/50 group-hover:text-gold transition-colors ml-1 flex-shrink-0">
                View &rarr;
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="gold-left-border bg-[#122348] border border-[rgba(201,168,76,0.15)] px-6 py-5 rounded-lg flex items-center gap-6"
              >
                <span className="font-serif text-4xl text-gold font-bold leading-none flex-shrink-0 w-20">
                  {stat.value}
                </span>
                <span className="font-sans text-sm text-muted leading-relaxed">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showCert && <CertificateModal onClose={() => setShowCert(false)} />}
    </section>
  );
}
