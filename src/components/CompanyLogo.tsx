interface LogoConfig {
  initials: string;
  bg: string;
  text: string;
  font?: 'serif' | 'sans' | 'mono';
}

const logoMap: Record<string, LogoConfig> = {
  'VijayaTech Labs': {
    initials: 'VT',
    bg: '#0A5F5F',
    text: '#7EEDEA',
    font: 'sans',
  },
  'atharva AI': {
    initials: 'a·',
    bg: '#0F5C3A',
    text: '#6EE7B7',
    font: 'serif',
  },
  'Zira': {
    initials: 'Zi',
    bg: '#1A3F8A',
    text: '#93C5FD',
    font: 'sans',
  },
  'naam': {
    initials: 'n',
    bg: '#B84500',
    text: '#FCD9B6',
    font: 'serif',
  },
  'WP Setu': {
    initials: 'WP',
    bg: '#1A6591',
    text: '#BAE6FD',
    font: 'mono',
  },
  'Shrika Finserv': {
    initials: 'SF',
    bg: '#7A5200',
    text: '#FDE68A',
    font: 'sans',
  },
  'Shrika Realty': {
    initials: 'SR',
    bg: '#6B1A1A',
    text: '#FECACA',
    font: 'sans',
  },
  'Santa': {
    initials: 'S·',
    bg: '#944C00',
    text: '#FED7AA',
    font: 'serif',
  },
  'PANI': {
    initials: 'P',
    bg: '#0A3D62',
    text: '#7DD3FC',
    font: 'sans',
  },
  'Revive Talent': {
    initials: 'RT',
    bg: '#0A4D35',
    text: '#6EE7B7',
    font: 'sans',
  },
};

const fontClass: Record<string, string> = {
  serif: 'font-serif',
  sans: 'font-sans font-bold',
  mono: 'font-mono font-bold',
};

interface CompanyLogoProps {
  name: string;
  size?: number;
}

export default function CompanyLogo({ name, size = 40 }: CompanyLogoProps) {
  const config = logoMap[name];
  if (!config) return null;

  const font = config.font ?? 'sans';
  const fontSize = size * 0.38;

  return (
    <div
      className={`flex-shrink-0 flex items-center justify-center rounded-lg select-none ${fontClass[font]}`}
      style={{
        width: size,
        height: size,
        backgroundColor: config.bg,
        color: config.text,
        fontSize,
        letterSpacing: '-0.02em',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
      aria-hidden="true"
    >
      {config.initials}
    </div>
  );
}
