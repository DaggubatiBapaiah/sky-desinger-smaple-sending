import { Quote } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from './SectionHeading';

export default function Testimonials() {
  const { ref, visible } = useReveal();

  return (
    <section className="section-pad bg-white">
      <div ref={ref} className={`container-px ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Customers Say"
          subtitle="Customer testimonials will be added here once verified reviews are collected."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <article
              key={i}
              className="rounded-2xl border border-dashed border-ink-200 bg-ink-50/50 p-6 text-center"
            >
              <Quote className="mx-auto h-8 w-8 text-ink-300" />
              <p className="mt-4 text-sm leading-relaxed text-ink-400">
                Demo testimonial — replace with verified customer review.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="h-10 w-10 rounded-full bg-ink-200" />
                <div className="text-left">
                  <p className="text-xs font-semibold text-ink-400">Customer Name</p>
                  <p className="text-xs text-ink-300">Business / Location</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
