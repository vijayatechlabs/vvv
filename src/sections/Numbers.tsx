import { useEffect, useRef, useState } from 'react';

interface Stat {
  numeric: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { numeric: 10,   suffix: '',   label: 'Portfolio Companies' },
  { numeric: 14,   suffix: '+',  label: 'Years Experience' },
  { numeric: 250,  suffix: '+',  label: 'Global Clients' },
  { numeric: 2021, suffix: '',   label: 'Year Founded' },
];

function AnimatedStat({ stat }: { stat: Stat }) {
  const [count, setCount] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [triggered]);

  useEffect(() => {
    if (!triggered) return;
    const start = 0;
    const end = stat.numeric;
    const duration = stat.numeric >= 1000 ? 1800 : 1200;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [triggered, stat.numeric]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-5xl sm:text-6xl text-gold font-bold mb-3 leading-none tabular-nums">
        {count.toLocaleString('en-IN')}{stat.suffix}
      </div>
      <div className="font-sans text-sm text-muted tracking-wide uppercase">
        {stat.label}
      </div>
    </div>
  );
}

export default function Numbers() {
  return (
    <section id="numbers" className="py-24 bg-[#122348] border-y border-[rgba(201,168,76,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={i < stats.length - 1 ? 'lg:border-r lg:border-[rgba(201,168,76,0.15)]' : ''}
            >
              <AnimatedStat stat={stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
