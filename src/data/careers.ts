export type EmploymentType = 'Full-time' | 'Internship';

export interface Role {
  title: string;
  description: string;
  type: EmploymentType;
  applyLink?: string;
}

export const roles: Role[] = [
  {
    title: 'Fullstack Developer',
    description: 'Build features with Next.js / Node.js / TypeScript, REST/GraphQL APIs, Supabase/Postgres, deploy on Coolify.',
    type: 'Internship',
    applyLink: 'https://candidate.testlify.com/invite/otx-zdp-xur',
  },
  {
    title: 'AI Automation Engineer',
    description: 'Design workflows in n8n/Zapier/Pabbly, integrate APIs, build LLM-powered assistants.',
    type: 'Internship',
    applyLink: 'https://candidate.testlify.com/invite/qib-nmj-zbu',
  },
  {
    title: 'Business Growth – Marketing & Sales',
    description: 'Hiring marketing and sales executives for Software, Real Estate and Hardware sales.',
    type: 'Full-time',
    applyLink: '#contact',
  },
  {
    title: 'Image & Video Editor',
    description: 'Create, edit and repurpose images and videos for multiple brands. Photoshop, AI tools, fast delivery.',
    type: 'Internship',
    applyLink: '#contact',
  },
  {
    title: 'WhatsApp Consultant',
    description: 'Onboard WhatsApp Business API customers, complete business verification, set up chatbots.',
    type: 'Internship',
    applyLink: '#contact',
  },
  {
    title: 'Lead Generation',
    description: 'Research and qualify B2B prospects via LinkedIn, Apollo, Clay. Drive booked meetings.',
    type: 'Internship',
    applyLink: '#contact',
  },
];
