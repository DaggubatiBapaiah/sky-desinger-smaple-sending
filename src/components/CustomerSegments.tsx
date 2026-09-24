import { Rocket, Store, UtensilsCrossed, Scissors, PartyPopper, Building2, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { customerSegments } from '@/data';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from './SectionHeading';

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Store,
  UtensilsCrossed,
  Scissors,
  PartyPopper,
  Building2,
};

export default function CustomerSegments() {
  const { ref, visible } = useReveal();

  return (
    <section className="section-pad bg-ink-50">
      <div ref={ref} className={`container-px ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        <SectionHeading
          eyebrow="Who We Serve"
          title="Printing Solutions for Every Need"
          subtitle="Whether you're a startup, a retail shop, or planning a wedding — we have printing solutions tailored for you."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {customerSegments.map((seg) => {
            const Icon = iconMap[seg.icon] ?? Rocket;
            return (
              <article
                key={seg.title}
                className="card-hover group relative overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={seg.image}
                    alt={seg.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-ink-900/20" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-brand-600 backdrop-blur-sm">
                      <Icon className="h-4.5 w-4.5" strokeWidth={2.2} />
                    </span>
                    <h3 className="text-lg font-bold text-white">{seg.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <ul className="space-y-1.5">
                    {seg.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-ink-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                  >
                    View Solutions
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
