import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { getRoleBySlug } from '../data/careers';
import TypeBadge from '../components/TypeBadge';
import ApplicationForm from '../components/ApplicationForm';
import { GeneralRequirements, HiringMetaBar } from '../components/HiringDetails';

export default function JobDetail() {
  const { slug } = useParams<{ slug: string }>();
  const role = slug ? getRoleBySlug(slug) : undefined;

  useEffect(() => {
    document.title = role
      ? `${role.title} — Careers — ViswaVardhan Vyapara`
      : 'Role Not Found — ViswaVardhan Vyapara';
  }, [role]);

  if (!role) {
    return (
      <main className="min-h-screen bg-[#0D1B3E] pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl text-cream mb-4">Role not found</h1>
          <p className="font-sans text-muted text-sm mb-8">
            This position may have been filled or removed.
          </p>
          <Link
            to="/hiring"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold hover:text-gold-light transition-colors"
          >
            <ArrowLeft size={14} />
            View all open positions
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0D1B3E] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/hiring"
          className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-muted hover:text-gold transition-colors mb-8 uppercase tracking-wider"
        >
          <ArrowLeft size={14} />
          All positions
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            <div className="mb-8 pb-8 border-b border-[rgba(201,168,76,0.15)]">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <TypeBadge type={role.type} />
                <span className="font-sans text-xs text-muted uppercase tracking-wider">
                  Anantapuramu · On-site
                </span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl text-cream mb-4 leading-tight">
                {role.title}
              </h1>
              <p className="font-sans text-muted text-base leading-relaxed whitespace-pre-line">
                {role.fullDescription}
              </p>
            </div>

            <div className="space-y-10 mb-12">
              <div>
                <h2 className="font-sans font-semibold text-cream text-lg mb-4">Responsibilities</h2>
                <ul className="space-y-3">
                  {role.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                      <span className="font-sans text-sm text-muted leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-sans font-semibold text-cream text-lg mb-4">Requirements</h2>
                <ul className="space-y-3">
                  {role.requirements.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                      <span className="font-sans text-sm text-muted leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <GeneralRequirements role={role} />
            </div>

            <HiringMetaBar role={role} />
          </div>

          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              <h2 className="font-sans text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-5">
                Apply for this role
              </h2>

              {role.applyMethod === 'testlify' && role.applyLink ? (
                <div className="bg-[#122348] border border-[rgba(201,168,76,0.15)] rounded-lg p-8">
                  <p className="font-sans text-sm text-muted leading-relaxed mb-6">
                    This role uses our online assessment on Testlify. Complete the test to move forward in the hiring process.
                  </p>
                  <a
                    href={role.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-gold text-navy font-sans font-semibold text-sm rounded-lg hover:bg-gold-light transition-colors duration-200"
                  >
                    Apply on Testlify
                    <ArrowUpRight size={16} />
                  </a>
                  <p className="font-sans text-[11px] text-muted/80 leading-relaxed mt-4">
                    Opens in a new tab. Allow 30–45 minutes to complete the assessment.
                  </p>
                </div>
              ) : (
                <ApplicationForm roleTitle={role.title} />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}