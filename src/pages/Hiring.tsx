import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getActiveRoles } from '../data/careers';
import JobCard from '../components/JobCard';
import { GeneralRequirements, HiringMetaBar } from '../components/HiringDetails';

export default function Hiring() {
  useEffect(() => {
    document.title = "Careers — ViswaVardhan Vyapara";
  }, []);

  const activeRoles = getActiveRoles();

  return (
    <main className="min-h-screen bg-[#0D1B3E] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="font-sans text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-4 block">
            We're Hiring
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-cream mb-6 leading-tight max-w-2xl">
            Work Across Our Family of Companies
          </h1>
          <p className="font-sans text-muted text-base max-w-2xl leading-relaxed">
            We are a DPIIT-recognised startup backed by 14+ years of IT expertise. Join us to work on real-world AI, automation, BPO operations, and digital products — across brands that matter.
          </p>
        </div>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.25)]">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="font-sans text-xs font-semibold text-gold uppercase tracking-wider">
              {activeRoles.length} open positions
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {activeRoles.map((role) => (
            <JobCard key={role.slug} role={role} />
          ))}
        </div>

        <div className="mb-14">
          <GeneralRequirements />
        </div>

        <div className="mb-10">
          <HiringMetaBar />
        </div>

        <div className="text-center pt-6">
          <p className="font-sans text-sm text-muted mb-4">
            Questions about a role? Reach out directly.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold hover:text-gold-light transition-colors group"
          >
            Contact us
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  );
}