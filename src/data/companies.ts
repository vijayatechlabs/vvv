export type CompanyStatus = 'Live' | 'Coming Soon' | 'Early Access';

export interface Company {
  name: string;
  domain: string;
  tagline: string;
  status: CompanyStatus;
}

export interface Sector {
  label: string;
  companies: Company[];
}

export const sectors: Sector[] = [
  {
    label: 'AI & Technology',
    companies: [
      {
        name: 'VijayaTech Labs',
        domain: 'vijayatech.in',
        tagline: 'AI & Automation Agency — Digital automation for your business',
        status: 'Live',
      },
      {
        name: 'atharva AI',
        domain: 'atharva.app',
        tagline: 'WhatsApp Business API & AI Engagement Platform',
        status: 'Live',
      },
      {
        name: 'Zira',
        domain: 'heyzira.com',
        tagline: 'Autonomous AI agent for Accounts Receivable — stop chasing payments',
        status: 'Early Access',
      },
      {
        name: 'naam',
        domain: 'naam.one',
        tagline: 'AI-powered business name generator — Name it. Claim it. Launch it.',
        status: 'Live',
      },
      {
        name: 'WP Setu',
        domain: 'wpsetu.com',
        tagline: 'WordPress plugin for API-driven media upload & content automation',
        status: 'Live',
      },
    ],
  },
  {
    label: 'Fintech & Real Estate',
    companies: [
      {
        name: 'Shrika Finserv',
        domain: 'shrika.in',
        tagline: 'Expert guidance for wealth building — Insurance, investments & financial intelligence',
        status: 'Live',
      },
      {
        name: 'Shrika Realty',
        domain: 'shrikarealty.in',
        tagline: 'Your trusted partner in property — sales, rentals & management',
        status: 'Live',
      },
    ],
  },
  {
    label: 'Commerce & Growth',
    companies: [
      {
        name: 'PANI',
        domain: 'panihq.com',
        tagline: 'Scores candidates by their public work, not their resume — surfaces hidden-market jobs.',
        status: 'Live',
      },
      {
        name: 'Revive Talent',
        domain: 'revivetalent.com',
        tagline: 'WhatsApp automation for staffing & recruitment agencies — fill roles 3x faster',
        status: 'Live',
      },
      {
        name: 'SpinVerb',
        domain: 'spinverb.in',
        tagline: 'Ad marketplace inside AI coding-agent wait states — built for India, UPI payouts.',
        status: 'Early Access',
      },
    ],
  },
  {
    label: 'Research & Open Source',
    companies: [
      {
        name: 'MemPalace',
        domain: 'mempalace.in',
        tagline: 'Open-source, local AI memory system with 96.6% recall. Zero cloud, zero API costs.',
        status: 'Live',
      },
      {
        name: 'Glint',
        domain: 'github.com/vijayatechlabs/glint',
        tagline: 'The lightning publishing engine for the AI era — git-native, agent-first, SEO/AEO-native.',
        status: 'Live',
      },
      {
        name: 'OpenStart',
        domain: 'github.com/vijayatechlabs/openstart',
        tagline: 'An agent-first project framework for building software with mixed human + AI teams.',
        status: 'Live',
      },
    ],
  },
];
