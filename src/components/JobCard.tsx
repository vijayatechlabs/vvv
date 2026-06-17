import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Role } from '../data/careers';
import TypeBadge from './TypeBadge';

export default function JobCard({ role }: { role: Role }) {
  return (
    <Link
      to={`/hiring/${role.slug}`}
      className="gold-left-border bg-[#122348] border border-[rgba(201,168,76,0.15)] rounded-lg p-6 hover:border-[rgba(201,168,76,0.3)] transition-colors duration-200 flex flex-col group"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-sans font-semibold text-cream text-base leading-snug group-hover:text-gold transition-colors">
          {role.title}
        </h3>
      </div>
      <p className="font-sans text-sm text-muted leading-relaxed mb-8 flex-grow">
        {role.description}
      </p>
      <div className="flex items-center justify-between mt-auto">
        <TypeBadge type={role.type} />
        <span className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-gold group-hover:text-gold-light transition-colors">
          View role
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}