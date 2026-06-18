export type EmploymentType = 'Full-time' | 'Internship';
export type ApplyMethod = 'testlify' | 'form';

/** Reusable requirement snippets — pick per role via `details.requirementKeys` */
export type RequirementKey =
  | 'communication'
  | 'location'
  | 'attitude'
  | 'laptop'
  | 'ukShift'
  | 'headset';

export const requirementCatalog: Record<RequirementKey, string> = {
  communication: 'Good communication skills — Telugu and English required; Hindi is a plus',
  location: 'Location: Anantapuramu (on-site only, no remote)',
  attitude: 'Passionate, go-getter, and self-learner attitude',
  laptop: 'Personal laptop required',
  ukShift: 'Willingness to work UK shift hours (timings shared at interview)',
  headset: 'Wired headset with noise-cancelling mic for voice processes',
};

/** Shown on every role unless overridden by `details.requirementKeys` */
const baseRequirementKeys: RequirementKey[] = ['communication', 'location', 'attitude'];

const internshipRequirementKeys: RequirementKey[] = [...baseRequirementKeys, 'laptop'];
const fullTimeRequirementKeys: RequirementKey[] = [...baseRequirementKeys];

export interface RoleDetails {
  /** Override location line in the meta bar */
  location?: string;
  /** e.g. "Duration: 6 months" — auto-set for internships if omitted */
  duration?: string;
  /** e.g. stipend or salary line — auto-set for internships if omitted */
  compensation?: string;
  /** e.g. UK shift for BPO roles */
  shift?: string;
  /** Shown in meta bar, e.g. 25 → "25 open positions" */
  openings?: number;
  /** Replace the default key list entirely */
  requirementKeys?: RequirementKey[];
  /** Add catalog items on top of type defaults */
  extraRequirementKeys?: RequirementKey[];
  /** Free-form bullets appended after catalog items */
  extraRequirements?: string[];
}

export interface Role {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  responsibilities: string[];
  requirements: string[];
  type: EmploymentType;
  applyMethod: ApplyMethod;
  applyLink?: string;
  featured: boolean;
  active: boolean;
  details?: RoleDetails;
}

export interface HiringMetaItem {
  kind: 'location' | 'openings' | 'duration' | 'shift' | 'compensation';
  label: string;
}

export function getGeneralRequirements(role?: Role): string[] {
  const details = role?.details;

  const keys = details?.requirementKeys
    ?? (role?.type === 'Internship' ? internshipRequirementKeys : fullTimeRequirementKeys);

  const fromCatalog = [...keys, ...(details?.extraRequirementKeys ?? [])].map(
    (key) => requirementCatalog[key],
  );

  return [...fromCatalog, ...(details?.extraRequirements ?? [])];
}

export function getHiringMeta(role?: Role): HiringMetaItem[] {
  const details = role?.details;
  const items: HiringMetaItem[] = [
    {
      kind: 'location',
      label: details?.location ?? 'Anantapuramu, Andhra Pradesh',
    },
  ];

  if (details?.openings !== undefined) {
    const count = details.openings;
    items.push({
      kind: 'openings',
      label: `${count} open position${count === 1 ? '' : 's'}`,
    });
  }

  if (details?.shift) {
    items.push({ kind: 'shift', label: details.shift });
  } else if (role?.type === 'Internship') {
    items.push({
      kind: 'duration',
      label: details?.duration ?? 'Duration: 6 months',
    });
  } else if (details?.duration) {
    items.push({ kind: 'duration', label: details.duration });
  }

  if (details?.compensation) {
    items.push({ kind: 'compensation', label: details.compensation });
  } else if (role?.type === 'Internship') {
    items.push({
      kind: 'compensation',
      label: 'Stipend: Performance-based after 3 months',
    });
  }

  return items;
}

/** Universal bullets for the /hiring hub (no single role context) */
export const hiringHubRequirements = getGeneralRequirements();

export const roles: Role[] = [
  {
    slug: 'fullstack-developer',
    title: 'Fullstack Developer',
    description:
      'Build features with Next.js / Node.js / TypeScript, REST/GraphQL APIs, Supabase/Postgres, deploy on Coolify.',
    fullDescription:
      'Join VijayaTech Labs to build real-world products across our portfolio of brands. You will work on fullstack features end to end — from UI in Next.js to APIs in Node.js/TypeScript, backed by Supabase/Postgres, with deployments on Coolify.\n\nThis is a hands-on internship for builders who want production experience, not tutorial projects. You will ship features, fix bugs, and learn how a multi-brand startup ships software.',
    responsibilities: [
      'Build and ship features using Next.js, Node.js, and TypeScript',
      'Design and implement REST or GraphQL APIs',
      'Work with Supabase/Postgres for data modelling and queries',
      'Deploy and monitor services on Coolify',
      'Collaborate with the team on code reviews and sprint delivery',
    ],
    requirements: [
      'Solid understanding of JavaScript/TypeScript fundamentals',
      'Familiarity with React or Next.js',
      'Basic knowledge of APIs and databases',
      'Willingness to learn Git, testing, and deployment workflows',
      'Personal laptop and reliable internet',
    ],
    type: 'Internship',
    applyMethod: 'form',
    featured: true,
    active: true,
  },
  {
    slug: 'ai-automation-engineer',
    title: 'AI Automation Engineer',
    description:
      'Design workflows in n8n/Zapier/Pabbly, integrate APIs, build LLM-powered assistants.',
    fullDescription:
      'Help us automate operations across sales, marketing, and customer success. You will design workflows in n8n, Zapier, or Pabbly, connect third-party APIs, and build LLM-powered assistants that save real hours for the team.\n\nThis role suits someone curious about AI agents, integrations, and process design — and who enjoys making systems work together reliably.',
    responsibilities: [
      'Design and maintain automation workflows in n8n, Zapier, or Pabbly',
      'Integrate CRMs, spreadsheets, messaging tools, and internal APIs',
      'Build and test LLM-powered assistants and chat flows',
      'Document workflows and troubleshoot failures quickly',
      'Suggest improvements to reduce manual work across teams',
    ],
    requirements: [
      'Interest in automation tools and API integrations',
      'Logical problem-solving and attention to detail',
      'Basic scripting ability (JavaScript or Python is a plus)',
      'Comfort learning new SaaS tools quickly',
      'Good written English for documentation',
    ],
    type: 'Internship',
    applyMethod: 'form',
    featured: true,
    active: true,
  },
  {
    slug: 'business-growth-marketing-sales',
    title: 'Business Growth – Marketing & Sales',
    description:
      'Hiring marketing and sales executives for Software, Real Estate and Hardware sales.',
    fullDescription:
      'Drive growth across three verticals — software products, real estate, and hardware. You will identify prospects, run outreach, support campaigns, and help close deals alongside senior team members.\n\nThis is a full-time role for communicators who enjoy targets, client conversations, and learning how multi-brand businesses sell in the Indian market.',
    responsibilities: [
      'Generate and qualify leads for software, real estate, and hardware offerings',
      'Run outreach via phone, email, LinkedIn, and in-person meetings',
      'Support marketing campaigns, content, and event follow-ups',
      'Maintain pipeline records and report weekly progress',
      'Coordinate with product and operations teams on client requirements',
    ],
    requirements: [
      'Strong verbal communication in Telugu and English',
      'Comfort with sales targets and follow-up discipline',
      'Basic digital literacy (CRM, spreadsheets, social media)',
      'Graduate or final-year student in any discipline',
      'Willingness to travel locally for client meetings when needed',
    ],
    type: 'Full-time',
    applyMethod: 'form',
    featured: false,
    active: true,
    details: {
      compensation: 'Salary: Discussed at interview based on experience',
    },
  },
  {
    slug: 'image-video-editor',
    title: 'Image & Video Editor',
    description:
      'Create, edit and repurpose images and videos for multiple brands. Photoshop, AI tools, fast delivery.',
    fullDescription:
      'Produce visual content for multiple brands in our portfolio — social posts, ads, short-form video, thumbnails, and campaign assets. You will work fast, maintain brand consistency, and repurpose content across platforms.\n\nWe use Photoshop, modern AI editing tools, and standard video editors. Speed and quality both matter.',
    responsibilities: [
      'Edit images and videos for social media, ads, and internal use',
      'Repurpose long-form content into shorts, reels, and carousel posts',
      'Maintain basic brand guidelines across different companies',
      'Turn around assets on tight deadlines',
      'Organise project files and version history',
    ],
    requirements: [
      'Hands-on experience with Photoshop or similar tools',
      'Basic video editing skills (CapCut, Premiere, or DaVinci)',
      'Familiarity with AI image/video tools is a plus',
      'Portfolio or sample work (Instagram, Drive link, or PDF)',
      'Eye for layout, typography, and visual consistency',
    ],
    type: 'Internship',
    applyMethod: 'form',
    featured: false,
    active: true,
  },
  {
    slug: 'whatsapp-consultant',
    title: 'WhatsApp Consultant',
    description:
      'Onboard WhatsApp Business API customers, complete business verification, set up chatbots.',
    fullDescription:
      'Help businesses go live on WhatsApp Business API. You will guide customers through onboarding, Meta business verification, template setup, and basic chatbot configuration.\n\nThis role combines client communication with technical setup — ideal for someone organised, patient with customers, and comfortable following checklists.',
    responsibilities: [
      'Onboard new WhatsApp Business API customers end to end',
      'Complete Meta business verification and compliance steps',
      'Configure templates, webhooks, and basic chatbot flows',
      'Train customers on day-to-day usage and best practices',
      'Escalate technical issues to the engineering team when needed',
    ],
    requirements: [
      'Clear communication in Telugu and English',
      'Comfort with SaaS dashboards and step-by-step processes',
      'Basic understanding of messaging APIs is a plus',
      'Patient, detail-oriented approach to customer onboarding',
      'Ability to manage multiple client setups in parallel',
    ],
    type: 'Internship',
    applyMethod: 'form',
    featured: false,
    active: true,
  },
  {
    slug: 'lead-generation',
    title: 'Lead Generation',
    description:
      'Research and qualify B2B prospects via LinkedIn, Apollo, Clay. Drive booked meetings.',
    fullDescription:
      'Find and qualify B2B prospects for our software and services brands. You will research companies on LinkedIn, Apollo, and Clay, build targeted lists, run outreach, and book meetings for the sales team.\n\nThis internship is for researchers who enjoy digging into data, writing crisp outreach, and tracking results.',
    responsibilities: [
      'Research and build prospect lists using LinkedIn, Apollo, and Clay',
      'Qualify leads by company size, role, and fit',
      'Run personalised outreach via email and LinkedIn',
      'Book and hand off meetings to sales executives',
      'Track activity and conversion in spreadsheets or CRM',
    ],
    requirements: [
      'Strong written English for outreach messages',
      'Comfort with LinkedIn and prospecting tools',
      'Organised approach to list building and follow-ups',
      'Basic understanding of B2B sales is a plus',
      'Self-starter who can work with weekly targets',
    ],
    type: 'Internship',
    applyMethod: 'form',
    featured: false,
    active: true,
  },
  {
    slug: 'uk-bpo-process-executive',
    title: 'UK BPO Process Executive',
    description:
      'Handle UK client voice processes — inbound/outbound calls, CRM updates, and quality adherence on UK shift.',
    fullDescription:
      'Join our UK BPO operations team and handle client-facing voice processes for UK-based customers. You will manage calls, document interactions accurately, and meet daily quality and productivity targets.\n\nThis is an on-site, full-time role in Anantapuramu with UK-aligned working hours. Clear spoken English and a professional phone manner are essential.',
    responsibilities: [
      'Handle inbound and outbound voice calls for assigned UK client processes',
      'Follow scripts, SOPs, and compliance guidelines on every interaction',
      'Update CRM and ticketing systems with accurate call notes',
      'Meet daily call volume, quality, and attendance targets',
      'Participate in training, calibration, and feedback sessions',
    ],
    requirements: [
      'Fluent spoken English with neutral or UK-friendly accent',
      'Good listening skills and professional telephone etiquette',
      'Willingness to work UK shift hours (timings shared at interview)',
      'Basic computer skills — typing, browsers, and CRM tools',
      'Freshers welcome; prior BPO or customer service experience is a plus',
    ],
    type: 'Full-time',
    applyMethod: 'form',
    featured: true,
    active: true,
    details: {
      shift: 'UK shift hours (timings shared at interview)',
      extraRequirementKeys: ['ukShift', 'headset'],
      compensation: 'Salary: Discussed at interview based on experience',
    },
  },
  {
    slug: 'uk-bpo-team-lead',
    title: 'UK BPO Team Lead',
    description:
      'Lead a team of process executives on UK shift — coaching, QA, escalations, and daily reporting.',
    fullDescription:
      'Lead and coach a team of UK BPO process executives. You will own shift-level performance — monitoring calls, running briefings, handling escalations, and reporting metrics to operations leadership.\n\nThis role is for experienced BPO professionals who can keep a team motivated, maintain quality under pressure, and communicate clearly with both agents and client stakeholders.',
    responsibilities: [
      'Lead daily briefings, shift huddles, and one-on-one coaching sessions',
      'Monitor live calls and conduct quality audits against client scorecards',
      'Handle escalations and complex customer issues',
      'Track team KPIs — attendance, productivity, quality, and adherence',
      'Prepare daily and weekly reports for operations and client review',
    ],
    requirements: [
      'Minimum 2 years of BPO experience with at least 1 year in a team lead role',
      'Strong spoken English; experience with UK processes preferred',
      'Proven ability to manage teams of 8–15 agents',
      'Comfort with Excel/Google Sheets for reporting and trackers',
      'Calm under pressure; able to give constructive feedback',
    ],
    type: 'Full-time',
    applyMethod: 'form',
    featured: true,
    active: true,
    details: {
      shift: 'UK shift hours (timings shared at interview)',
      extraRequirementKeys: ['ukShift'],
      compensation: 'Salary: Discussed at interview based on experience',
    },
  },
  {
    slug: 'junior-xml-epub-developer',
    title: 'Junior XML / EPUB Developer',
    description:
      'Entry-level digital publishing role — create and validate EPUB 2/3 files, edit XML, and convert manuscripts into standards-compliant eBooks. 25 positions, Anantapuramu.',
    fullDescription:
      'Starting your career in digital publishing or XML development? Join us as a Junior XML / EPUB Developer and gain hands-on experience in digital content and eBook technologies.\n\nYou will support the creation, formatting, and validation of EPUB files and structured XML content, working closely with senior developers and publishing teams to deliver high-quality, standards-compliant digital publications.\n\nWe are hiring 25 full-time positions at our Anantapuramu office. Fresh graduates are encouraged to apply — training on XML, EPUB standards, and accessibility will be provided with mentorship from experienced professionals.',
    responsibilities: [
      'Assist in creating and editing XML documents',
      'Convert manuscripts (Word, PDF) into EPUB 2 and EPUB 3 formats',
      'Apply basic HTML5 and CSS styling to eBooks',
      'Validate EPUB files using standard tools',
      'Perform quality checks across eReader platforms',
      'Update metadata (Dublin Core, ONIX)',
      'Support troubleshooting and formatting fixes',
    ],
    requirements: [
      'Understanding of file structures and markup concepts',
      'Familiarity with Microsoft Word and document formatting',
      'Strong attention to detail and willingness to learn',
      "Bachelor's degree in any discipline — fresh graduates welcome",
      'Exposure to EPUB formatting, WCAG accessibility, or XML editors (e.g. Oxygen) is a plus',
    ],
    type: 'Full-time',
    applyMethod: 'form',
    featured: true,
    active: true,
    details: {
      openings: 25,
      compensation: 'Salary: Discussed at interview based on experience',
    },
  },
];

export function getActiveRoles(): Role[] {
  return roles.filter((role) => role.active);
}

export function getFeaturedRoles(): Role[] {
  return getActiveRoles().filter((role) => role.featured);
}

export function getRoleBySlug(slug: string): Role | undefined {
  return roles.find((role) => role.slug === slug && role.active);
}