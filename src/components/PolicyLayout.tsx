import { useEffect } from 'react';

interface Section {
  title: string;
  content: string;
}

interface PolicyLayoutProps {
  title: string;
  subtitle: string;
  sections: Section[];
  docTitle: string;
}

export default function PolicyLayout({ title, subtitle, sections, docTitle }: PolicyLayoutProps) {
  useEffect(() => {
    document.title = docTitle;
  }, [docTitle]);

  return (
    <main className="min-h-screen bg-[#0D1B3E] pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 pb-8 border-b border-[rgba(201,168,76,0.15)]">
          <h1 className="font-serif text-4xl sm:text-5xl text-cream mb-3">{title}</h1>
          <p className="font-sans text-sm text-muted">{subtitle}</p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-sans font-semibold text-cream text-lg mb-3 leading-snug">
                {section.title}
              </h2>
              <p className="font-sans text-sm text-muted leading-[1.9] whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
