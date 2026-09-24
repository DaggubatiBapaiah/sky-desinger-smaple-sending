import { Star } from 'lucide-react';
import { featuredProducts } from '@/data';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from './SectionHeading';

export default function FeaturedProducts() {
  const { ref, visible } = useReveal();

  return (
    <section className="section-pad bg-white">
      <div ref={ref} className={`container-px ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        <SectionHeading
          eyebrow="Featured Products"
          title="Popular Right Now"
          subtitle="A selection of our featured printing products — from premium visiting cards to custom apparel."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <article
              key={product.name}
              className="card-hover group relative overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-brand-600 backdrop-blur-sm">
                  <Star className="h-3 w-3 fill-brand-500 text-brand-500" />
                  Featured
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-ink-900">{product.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-500">{product.description}</p>
                <a href="#contact" className="mt-4 inline-flex items-center justify-center w-full rounded-full border border-ink-200 px-4 py-2.5 text-sm font-semibold text-ink-800 transition-all duration-300 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700">
                  Request Quote
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
