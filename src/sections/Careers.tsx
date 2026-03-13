import { ArrowUpRight, MapPin, Clock, DollarSign } from 'lucide-react';
import { roles, EmploymentType } from '../data/careers';

function TypeBadge({ type }: { type: EmploymentType }) {
  if (type === 'Full-time') {
    return (
      <span className="inline-flex items-center px-2.5 py-1 rounded font-sans text-xs font-medium bg-[rgba(201,168,76,0.15)] text-gold border border-[rgba(201,168,76,0.3)]">
        Full-time
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded font-sans text-xs font-medium bg-[rgba(148,163,184,0.1)] text-muted border border-[rgba(148,163,184,0.2)]">
      Internship
    </span>
  );
}

export default function Careers() {
  return (
    <section id="careers" className="py-24 lg:py-32 bg-[#0D1B3E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="font-sans text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-4 block">
            Join Us
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-cream mb-6 leading-tight max-w-2xl">
            Work Across Our Family of Companies
          </h2>
          <p className="font-sans text-muted text-base max-w-2xl leading-relaxed">
            We are a DPIIT-recognised startup backed by 14+ years of IT expertise. Join us to work on real-world AI, automation, and digital products — across brands that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {roles.map((role) => (
            <div
              key={role.title}
              className="gold-left-border bg-[#122348] border border-[rgba(201,168,76,0.15)] rounded-lg p-6 hover:border-[rgba(201,168,76,0.3)] transition-colors duration-200"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-sans font-semibold text-cream text-base leading-snug">
                  {role.title}
                </h3>
              </div>
              <p className="font-sans text-sm text-muted leading-relaxed mb-5">
                {role.description}
              </p>
              <div className="flex items-center justify-between">
                <TypeBadge type={role.type} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 mb-10 px-6 py-5 bg-[#122348] rounded-lg border border-[rgba(201,168,76,0.15)]">
          <div className="flex items-center gap-2 text-sm text-muted font-sans">
            <MapPin size={14} className="text-gold flex-shrink-0" />
            Anantapuramu, Andhra Pradesh
          </div>
          <div className="flex items-center gap-2 text-sm text-muted font-sans">
            <Clock size={14} className="text-gold flex-shrink-0" />
            Duration: 6 months
          </div>
          <div className="flex items-center gap-2 text-sm text-muted font-sans">
            <DollarSign size={14} className="text-gold flex-shrink-0" />
            Stipend: Performance-based after 3 months
          </div>
        </div>
      </div>
    </section>
  );
}
