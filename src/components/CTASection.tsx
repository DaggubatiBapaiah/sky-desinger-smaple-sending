import { ArrowRight, MessageCircle } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function CTASection() {
  const { ref, visible } = useReveal();

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div ref={ref} className={`container-px ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-6 py-12 text-center sm:px-12 sm:py-16 lg:px-20 lg:py-20">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl" />
            <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-brand-600/15 blur-3xl" />
          </div>
          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
              Have a Printing Requirement?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-300">
              Tell us what you need and our team will help you find the right printing solution.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#contact" className="btn-primary">
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/919052612450"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-600 bg-ink-800 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
