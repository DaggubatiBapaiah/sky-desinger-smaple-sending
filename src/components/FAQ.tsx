import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/data';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from './SectionHeading';

export default function FAQ() {
  const { ref, visible } = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-pad bg-ink-50">
      <div ref={ref} className={`container-px ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about our printing and designing services."
        />

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen ? 'border-brand-200 shadow-md shadow-brand-500/5' : 'border-ink-100'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <span className="text-base font-semibold text-ink-900">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-ink-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand-600' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-ink-500 sm:px-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
