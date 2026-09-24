import { useState } from 'react';
import { portfolioItems, portfolioFilters } from '@/data';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from './SectionHeading';

export default function PortfolioGrid() {
  const { ref, visible } = useReveal();
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="section-pad bg-ink-50">
      <div ref={ref} className={`container-px ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        <SectionHeading
          eyebrow="Portfolio"
          title="Our Work"
          subtitle="A showcase of printing samples across categories. These are demo images — actual project photos will be added soon."
        />

        {/* Filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {portfolioFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                filter === f
                  ? 'bg-ink-900 text-white shadow-lg shadow-ink-900/20'
                  : 'bg-white text-ink-600 border border-ink-200 hover:border-ink-300 hover:text-ink-900'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item) => (
            <article
              key={item.title + item.category}
              className="card-hover group relative overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand-300">{item.category}</span>
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
