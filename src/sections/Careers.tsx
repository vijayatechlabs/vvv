import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getFeaturedRoles } from '../data/careers';
import JobCard from '../components/JobCard';

export default function Careers() {
  const featuredRoles = getFeaturedRoles();

  return (
    <section id="careers" className="py-24 lg:py-32 bg-[#0D1B3E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="font-sans text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-4 block">
              Join Us
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-cream mb-6 leading-tight max-w-2xl">
              Work Across Our Family of Companies
            </h2>
            <p className="font-sans text-muted text-base max-w-2xl leading-relaxed">
              We are actively hiring across technology, BPO, marketing, and operations. Explore open roles and apply today.
            </p>
          </div>
          <Link
            to="/hiring"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[rgba(201,168,76,0.35)] text-gold font-sans text-xs font-semibold tracking-wide uppercase hover:border-[rgba(201,168,76,0.6)] hover:bg-[rgba(201,168,76,0.08)] transition-colors flex-shrink-0"
          >
            View all positions
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {featuredRoles.map((role) => (
            <JobCard key={role.slug} role={role} />
          ))}
        </div>
      </div>
    </section>
  );
}