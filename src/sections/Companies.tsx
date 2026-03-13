import { ExternalLink } from 'lucide-react';
import { sectors, CompanyStatus } from '../data/companies';
import CompanyLogo from '../components/CompanyLogo';

function StatusBadge({ status }: { status: CompanyStatus }) {
  if (status === 'Live') {
    return (
      <span className="inline-flex items-center gap-1.5 font-sans text-xs text-emerald-400">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
        Live
      </span>
    );
  }
  if (status === 'Early Access') {
    return (
      <span className="inline-flex items-center gap-1.5 font-sans text-xs text-gold">
        <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
        Early Access
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 font-sans text-xs text-muted">
      <span className="w-1.5 h-1.5 rounded-full bg-muted/50 flex-shrink-0" />
      Coming Soon
    </span>
  );
}

export default function Companies() {
  return (
    <section id="companies" className="py-24 lg:py-32 bg-[#0A1530]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl text-cream mb-4">Our Companies</h2>
          <p className="font-sans text-muted text-lg max-w-xl mx-auto">
            We build, incubate and grow companies that solve real problems.
          </p>
        </div>

        <div className="space-y-16">
          {sectors.map((sector) => (
            <div key={sector.label}>
              <div className="flex items-center gap-4 mb-8">
                <span className="font-sans text-xs font-semibold text-gold uppercase tracking-[0.2em]">
                  {sector.label}
                </span>
                <div className="flex-1 h-px bg-[rgba(201,168,76,0.15)]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {sector.companies.map((company) => (
                  <div
                    key={company.name}
                    className="company-card gold-top-border bg-[#122348] border border-[rgba(201,168,76,0.15)] rounded-lg p-6 flex flex-col"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <CompanyLogo name={company.name} size={38} />
                        <div>
                          <h3 className="font-serif text-xl text-cream leading-snug">
                            {company.name}
                          </h3>
                          <p className="font-mono text-xs text-gold tracking-wide">
                            {company.domain}
                          </p>
                        </div>
                      </div>
                      <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                        {company.tagline}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[rgba(201,168,76,0.1)]">
                      <StatusBadge status={company.status} />
                      {company.status !== 'Coming Soon' ? (
                        <a
                          href={`https://${company.domain}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="visit-link font-sans text-xs text-gold hover:text-gold-light"
                        >
                          Visit
                          <ExternalLink size={11} />
                        </a>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
