import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { categories } from '@/data';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from './SectionHeading';

export default function CategoryGrid() {
  const { ref, visible } = useReveal();

  return (
    <section id="services" className="section-pad bg-ink-50">
      <div ref={ref} className={`container-px ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        <SectionHeading
          eyebrow="Categories"
          title="Everything You Need to Print & Promote"
          subtitle="Explore our full range of printing categories — from business stationery to signage and everything in between."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <article
              key={cat.name}
              className="card-hover group overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm"
            >
              <div className="relative h-44 overflow-hidden sm:h-48">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-ink-900/10 to-transparent" />
                <h3 className="absolute bottom-3 left-4 text-lg font-bold text-white">{cat.name}</h3>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-ink-500">{cat.description}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-ink-50 px-2.5 py-1 text-xs font-medium text-ink-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/category/${cat.id}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                >
                  View Products
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
