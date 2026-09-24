import { ArrowRight } from 'lucide-react';
import { popularProducts } from '@/data';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from './SectionHeading';

export default function PopularProducts() {
  const { ref, visible } = useReveal();

  return (
    <section id="products" className="section-pad bg-white">
      <div ref={ref} className={`container-px ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        <SectionHeading
          eyebrow="Browse"
          title="Popular Printing Products"
          subtitle="Discover our most-requested printing products. Request a quote for any product below."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {popularProducts.map((product) => (
            <article
              key={product.name}
              className="card-hover group overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm"
            >
              <div className="relative h-40 overflow-hidden sm:h-48">
                <img
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-base font-bold text-ink-900">{product.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-500">{product.description}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                >
                  Request Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
