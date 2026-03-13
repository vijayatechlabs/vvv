interface LogoConfig {
  image?: string;
  initials: string;
  bg: string;
  text: string;
  font?: 'serif' | 'sans' | 'mono';
  contain?: boolean;
}

const logoMap: Record<string, LogoConfig> = {
  'VijayaTech Labs': {
    image: '/VijayaTech_labs_logo.png',
    initials: 'VT',
    bg: '#0A5F5F',
    text: '#7EEDEA',
    font: 'sans',
  },
  'atharva AI': {
    image: '/atharva-logo-square.png',
    initials: 'a',
    bg: '#0F5C3A',
    text: '#6EE7B7',
    font: 'serif',
  },
  'Zira': {
    image: '/heyZira-logo-horizontal-trans.png',
    initials: 'Zi',
    bg: '#1A3F8A',
    text: '#93C5FD',
    font: 'sans',
    contain: true,
  },
  'naam': {
    image: '/naam-logo-square-trans.png',
    initials: 'n',
    bg: '#B84500',
    text: '#FCD9B6',
    font: 'serif',
    contain: true,
  },
  'WP Setu': {
    image: '/w-logo-blue.png',
    initials: 'WP',
    bg: '#1A6591',
    text: '#BAE6FD',
    font: 'mono',
    contain: true,
  },
  'Shrika Finserv': {
    image: '/ShrikaFinServ-logo.png',
    initials: 'SF',
    bg: '#7A5200',
    text: '#FDE68A',
    font: 'sans',
  },
  'Shrika Realty': {
    image: '/ShrikaRealty-logo.png',
    initials: 'SR',
    bg: '#6B1A1A',
    text: '#FECACA',
    font: 'sans',
  },
  'Santa': {
    initials: 'S',
    bg: '#944C00',
    text: '#FED7AA',
    font: 'serif',
  },
  'PANI': {
    image: '/PANI-logo-square.jpg',
    initials: 'P',
    bg: '#0A3D62',
    text: '#7DD3FC',
    font: 'sans',
  },
  'Revive Talent': {
    image: '/ReviveTalent-logo1.png',
    initials: 'RT',
    bg: '#0A4D35',
    text: '#6EE7B7',
    font: 'sans',
    contain: true,
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

  if (config.image) {
    return (
      <div
        className="flex-shrink-0 flex items-center justify-center rounded-lg overflow-hidden"
        style={{
          width: size,
          height: size,
          backgroundColor: config.bg,
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <img
          src={config.image}
          alt={`${name} logo`}
          className="w-full h-full"
          style={{ objectFit: config.contain ? 'contain' : 'cover', padding: config.contain ? '4px' : 0 }}
        />
      </div>
    );
  }

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
