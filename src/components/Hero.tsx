import { ArrowRight, Sparkles } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function Hero() {
  const { ref, visible } = useReveal();

  const heroImages = [
    { src: 'https://images.pexels.com/photos/8066713/pexels-photo-8066713.png?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Stack of business cards', cls: 'col-span-2 row-span-2' },
    { src: 'https://images.pexels.com/photos/36823601/pexels-photo-36823601.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Folded brochures', cls: '' },
    { src: 'https://images.pexels.com/photos/33714864/pexels-photo-33714864.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Custom stickers', cls: '' },
    { src: 'https://images.pexels.com/photos/7563593/pexels-photo-7563593.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Branded paper bag', cls: '' },
    { src: 'https://images.pexels.com/photos/4108233/pexels-photo-4108233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Printed poster', cls: '' },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-ink-50 to-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-100/40 blur-3xl" />
        <div className="absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-brand-50 blur-3xl" />
      </div>

      <div ref={ref} className={`container-px relative grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:py-24 ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-700">
            <Sparkles className="h-3.5 w-3.5" />
            Printing &amp; Designing Services
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 text-balance sm:text-5xl lg:text-6xl">
            Print Your Ideas.{' '}
            <span className="text-brand-600">Build Your Brand.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-500">
            Professional printing and designing services for businesses, events and individuals in Dilsukhnagar, Hyderabad.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-secondary">View Products</a>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative">
          <div className="grid grid-cols-3 grid-rows-2 gap-3 sm:gap-4">
            {heroImages.map((img, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl border border-ink-100 shadow-lg shadow-ink-900/5 ${img.cls} ${i === 0 ? 'animate-float-slow' : ''}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-2 hidden rounded-2xl border border-ink-100 bg-white/95 px-5 py-3 shadow-xl backdrop-blur-sm sm:block lg:-left-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">Made in Hyderabad</p>
            <p className="text-sm font-bold text-ink-900">Dilsukhnagar</p>
          </div>
        </div>
      </div>
    </section>
  );
}
