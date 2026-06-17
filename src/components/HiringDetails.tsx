import { MapPin, Clock, IndianRupee, Headphones, Users } from 'lucide-react';
import { Role, getGeneralRequirements, getHiringMeta, hiringHubRequirements } from '../data/careers';

function RequirementList({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
      {items.map((req) => (
        <div key={req} className="flex items-center gap-3 group">
          <div className="w-6 h-6 rounded-lg bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)] flex items-center justify-center flex-shrink-0 group-hover:border-[rgba(201,168,76,0.3)] transition-colors">
            <div className="w-1 h-1 rounded-full bg-gold" />
          </div>
          <p className="font-sans text-sm text-muted group-hover:text-cream transition-colors">{req}</p>
        </div>
      ))}
    </div>
  );
}

interface GeneralRequirementsProps {
  role?: Role;
}

export function GeneralRequirements({ role }: GeneralRequirementsProps) {
  const items = role ? getGeneralRequirements(role) : hiringHubRequirements;

  return (
    <div>
      <h4 className="font-sans text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-8">
        {role ? 'Role Requirements' : 'General Requirements'}
      </h4>
      <RequirementList items={items} />
      {!role && (
        <p className="font-sans text-xs text-muted/70 mt-6 leading-relaxed">
          Internships include a personal laptop requirement and a 6-month duration. Full-time and BPO roles may have additional requirements — see each listing for details.
        </p>
      )}
    </div>
  );
}

function metaIcon(kind: string) {
  switch (kind) {
    case 'openings':
      return Users;
    case 'shift':
      return Headphones;
    case 'duration':
      return Clock;
    case 'compensation':
      return IndianRupee;
    default:
      return MapPin;
  }
}

interface HiringMetaBarProps {
  role?: Role;
}

export function HiringMetaBar({ role }: HiringMetaBarProps) {
  const items = role
    ? getHiringMeta(role)
    : [
        { kind: 'location' as const, label: 'Anantapuramu, Andhra Pradesh' },
        { kind: 'duration' as const, label: 'Internships: 6 months · Full-time: ongoing' },
        { kind: 'compensation' as const, label: 'Internships: performance-based stipend after 3 months' },
      ];

  return (
    <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-6 sm:gap-10 px-6 py-5 bg-[#122348] rounded-lg border border-[rgba(201,168,76,0.15)]">
      {items.map((item) => {
        const Icon = metaIcon(item.kind);
        return (
          <div key={item.label} className="flex items-center gap-2 text-sm text-muted font-sans">
            <Icon size={14} className="text-gold flex-shrink-0" />
            {item.label}
          </div>
        );
      })}
    </div>
  );
}