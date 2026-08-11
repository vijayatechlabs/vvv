import { ExternalLink, Linkedin, Github, Facebook, Youtube, Instagram, type LucideIcon } from 'lucide-react';
import { type ReactNode } from 'react';
import { sectors, CompanyStatus, type CompanySocials } from '../data/companies';
import CompanyLogo from '../components/CompanyLogo';

function XIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function BlueskyIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 568 501" fill="currentColor" aria-hidden="true">
      <path d="M123.121 33.664C188.241 82.553 258.281 181.68 284 234.873c25.719-53.192 95.759-152.32 160.879-201.209C491.866-1.611 568-28.906 568 57.947c0 17.346-9.945 145.713-15.778 166.555-20.275 72.453-94.155 90.933-159.875 79.748C507.222 323.8 536.444 388.56 473.333 453.32c-120.16 123.3-175.76-30.93-189.333-106.27-13.573 75.34-69.173 229.57-189.333 106.27-63.111-64.76-33.889-129.52 80.986-149.07C110.153 315.435 36.273 296.955 15.998 224.502 10.165 203.66 0 75.293 0 57.947 0-28.906 76.134-1.611 123.121 33.664Z" />
    </svg>
  );
}

function TelegramIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .54-1.42.53-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.98-1.73 6.64-2.87 7.97-3.43 3.8-1.58 4.59-1.85 5.1-1.86.11 0 .36.03.52.16.14.11.18.26.2.37.01.07.03.22.01.38z" />
    </svg>
  );
}

/** Display order matches portfolio_brands.md standardized sequence. */
const SOCIAL_NETWORKS: {
  key: keyof CompanySocials;
  label: string;
  icon: LucideIcon | ((props: { size?: number }) => ReactNode);
}[] = [
  { key: 'x', label: 'X (Twitter)', icon: XIcon },
  { key: 'linkedin', label: 'LinkedIn', icon: Linkedin },
  { key: 'github', label: 'GitHub', icon: Github },
  { key: 'facebook', label: 'Facebook', icon: Facebook },
  { key: 'youtube', label: 'YouTube', icon: Youtube },
  { key: 'telegram', label: 'Telegram', icon: TelegramIcon },
  { key: 'instagram', label: 'Instagram', icon: Instagram },
  { key: 'bluesky', label: 'Bluesky', icon: BlueskyIcon },
];

function SocialLinks({
  companyName,
  socials,
}: {
  companyName: string;
  socials: CompanySocials;
}) {
  const links = SOCIAL_NETWORKS.flatMap(({ key, label, icon: Icon }) => {
    const href = socials[key];
    if (!href) return [];
    return [
      {
        key,
        label,
        href,
        Icon,
      },
    ];
  });

  if (links.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-1 text-muted/70" role="list">
      {links.map(({ key, label, href, Icon }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          role="listitem"
          className="p-1.5 rounded text-cream/50 hover:text-gold hover:bg-gold/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/60 transition-colors flex-shrink-0"
          aria-label={`${companyName} on ${label}`}
          title={label}
        >
          <Icon size={13} />
        </a>
      ))}
    </div>
  );
}

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
          <h2 className="font-serif text-4xl sm:text-5xl text-cream mb-4">Our Brands</h2>
          <p className="font-sans text-muted text-lg max-w-xl mx-auto">
            We build, incubate and grow companies that solve real problems.
          </p>
        </div>

        <div className="space-y-20">
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
                  <article
                    key={company.name}
                    className="company-card gold-top-border bg-[linear-gradient(180deg,rgba(18,35,72,0.95),rgba(12,24,52,0.95))] border border-[rgba(201,168,76,0.15)] rounded-xl p-6 flex flex-col shadow-[0_12px_32px_rgba(3,8,22,0.35)]"
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
                      <p className="font-sans text-sm text-muted leading-relaxed mb-5">
                        {company.tagline}
                      </p>
                      <p className="font-sans text-[11px] text-cream/55 uppercase tracking-[0.16em]">
                        Operating Company
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[rgba(201,168,76,0.1)] space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <StatusBadge status={company.status} />
                        {company.status !== 'Coming Soon' ? (
                          <a
                            href={
                              company.domain.startsWith('http')
                                ? company.domain
                                : `https://${company.domain}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="visit-link font-sans text-xs text-gold hover:text-gold-light flex-shrink-0"
                          >
                            Visit
                            <ExternalLink size={11} />
                          </a>
                        ) : null}
                      </div>

                      {company.socials ? (
                        <SocialLinks companyName={company.name} socials={company.socials} />
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
