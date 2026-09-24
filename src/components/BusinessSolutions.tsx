import { Palette, Megaphone, Package, Gift, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { businessSolutions } from '@/data';
import { useReveal } from '@/hooks/useReveal';

const iconMap: Record<string, LucideIcon> = {
  Palette,
  Megaphone,
  Package,
  Gift,
};

export default function BusinessSolutions() {
  const { ref, visible } = useReveal();

  return (
    <section id="business-solutions" className="section-pad bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />
        <div className="absolute bottom-0 -left-32 h-80 w-80 rounded-full bg-brand-600/10 blur-3xl" />
      </div>

      <div ref={ref} className={`container-px relative ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-400">Business Solutions</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl">
            Printing Solutions for Your Business
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-300 sm:text-lg">
            From everyday business stationery to promotional materials, we help businesses create professional print materials for their brand.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {businessSolutions.map((sol) => {
            const Icon = iconMap[sol.icon] ?? Palette;
            return (
              <article
                key={sol.title}
                className="group rounded-2xl border border-ink-700 bg-ink-800/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:bg-ink-800"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{sol.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{sol.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="btn-primary">
            Talk to Our Team
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
