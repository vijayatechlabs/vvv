import { EmploymentType } from '../data/careers';

export default function TypeBadge({ type }: { type: EmploymentType }) {
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