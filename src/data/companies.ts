export type CompanyStatus = 'Live' | 'Coming Soon' | 'Early Access';

export interface CompanySocials {
  x?: string;
  linkedin?: string;
  github?: string;
  facebook?: string;
  youtube?: string;
  telegram?: string;
  instagram?: string;
  bluesky?: string;
}

export interface Company {
  name: string;
  domain: string;
  tagline: string;
  status: CompanyStatus;
  socials?: CompanySocials;
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
        domain: 'vijayatechlabs.com',
        tagline: 'AI & Automation Agency — Digital automation for your business',
        status: 'Live',
        socials: {
          linkedin: 'https://www.linkedin.com/company/vijayatech-labs',
          x: 'https://x.com/vijayatechlabs',
          facebook: 'https://www.facebook.com/vijayatech',
          youtube: 'https://www.youtube.com/@vijayatechlabs',
          github: 'https://github.com/vijayatechlabs',
        },
      },
      {
        name: 'atharva AI',
        domain: 'atharva.app',
        tagline: 'WhatsApp Business API & AI Engagement Platform',
        status: 'Live',
        socials: {
          linkedin: 'https://www.linkedin.com/company/atharva-app/',
          x: 'https://x.com/atharvaapp',
          facebook: 'https://www.facebook.com/atharvaapp',
          youtube: 'https://www.youtube.com/@atharvaapp',
          bluesky: 'https://bsky.app/profile/atharvaapp.bsky.social',
        },
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
        socials: {
          linkedin: 'https://linkedin.com/company/naamdotone',
          x: 'https://x.com/naamdotone',
          facebook: 'https://facebook.com/naamdotone',
          youtube: 'https://youtube.com/@naamdotone',
        },
      },
      {
        name: 'WP Setu',
        domain: 'wpsetu.com',
        tagline: 'WordPress plugin for API-driven media upload & content automation',
        status: 'Live',
        socials: {
          github: 'https://github.com/vijayatechlabs/wp-setu',
        },
      },
      {
        name: 'KlypsoTech',
        domain: 'klypsotech.com',
        tagline: 'Custom software & IT solutions — Creators of CureHMS healthcare management & billing software',
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
        socials: {
          instagram: 'https://www.instagram.com/shrikarealty',
          facebook: 'https://www.facebook.com/shrikarealty',
          youtube: 'https://www.youtube.com/@shrikarealty',
        },
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
        socials: {
          linkedin: 'https://www.linkedin.com/company/panihq',
          x: 'https://x.com/panihq',
          facebook: 'https://facebook.com/groups/pani.deals',
          telegram: 'https://t.me/pani_jobs',
        },
      },
      {
        name: 'Revive Talent',
        domain: 'revivetalent.com',
        tagline: 'WhatsApp automation for staffing & recruitment agencies — fill roles 3x faster',
        status: 'Live',
      },
      {
        name: 'AgenticAds',
        domain: 'agenticads.dev',
        tagline: 'Ad marketplace inside AI coding-agent wait states — built for India, UPI payouts.',
        status: 'Early Access',
        socials: {
          x: 'https://x.com/AgenticAdsDev',
        },
      },
      {
        name: 'OutBid.fit',
        domain: 'outbid.fit',
        tagline: 'The crowd board for fitness apps — list free with a tweet, ranked by likes',
        status: 'Live',
      },
      {
        name: 'Outbid Host',
        domain: 'outbid.host',
        tagline: 'Pay-to-rank leaderboard for web hosting companies — outbid competitors to rank #1',
        status: 'Live',
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
        socials: {
          github: 'https://github.com/vijayatechlabs/mempalace',
        },
      },
      {
        name: 'Glint',
        domain: 'vijayatechlabs.com/glint',
        tagline: 'The lightning publishing engine for the AI era — git-native, agent-first, SEO/AEO-native.',
        status: 'Live',
        socials: {
          github: 'https://github.com/vijayatechlabs/glint',
        },
      },
      {
        name: 'OpenStart',
        domain: 'github.com/vijayatechlabs/openstart',
        tagline: 'An agent-first project framework for building software with mixed human + AI teams.',
        status: 'Live',
        socials: {
          github: 'https://github.com/vijayatechlabs/openstart',
        },
      },
      {
        name: 'osaa.ai',
        domain: 'osaa.ai',
        tagline: 'Open Secure AI Alliance community guide — news, open tools & security framework',
        status: 'Live',
      },
    ],
  },
];

