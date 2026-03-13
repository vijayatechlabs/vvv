export type EmploymentType = 'Full-time' | 'Internship';

export interface Role {
  title: string;
  description: string;
  type: EmploymentType;
}

export const roles: Role[] = [
  {
    title: 'Business Growth – Marketing & Sales',
    description: 'Hiring marketing and sales executives for Software, Real Estate and Hardware sales.',
    type: 'Full-time',
  },
  {
    title: 'Image & Video Editor',
    description: 'Create, edit and repurpose images and videos for multiple brands. Photoshop, AI tools, fast delivery.',
    type: 'Internship',
  },
  {
    title: 'WhatsApp Consultant',
    description: 'Onboard WhatsApp Business API customers, complete business verification, set up chatbots.',
    type: 'Internship',
  },
  {
    title: 'Fullstack Developer',
    description: 'Build features with Next.js / Node.js / TypeScript, REST/GraphQL APIs, Supabase/Postgres, deploy on Coolify.',
    type: 'Internship',
  },
  {
    title: 'AI Automation Engineer',
    description: 'Design workflows in n8n/Zapier/Pabbly, integrate APIs, build LLM-powered assistants.',
    type: 'Internship',
  },
  {
    title: 'Lead Generation',
    description: 'Research and qualify B2B prospects via LinkedIn, Apollo, Clay. Drive booked meetings.',
    type: 'Internship',
  },
];
