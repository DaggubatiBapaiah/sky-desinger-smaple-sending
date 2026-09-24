import { MousePointerClick, FileUp, Calculator, PackageCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { processSteps } from '@/data';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from './SectionHeading';

const iconMap: Record<string, LucideIcon> = {
  MousePointerClick,
  FileUp,
  Calculator,
  PackageCheck,
};

export default function ProcessSteps() {
  const { ref, visible } = useReveal();

  return (
    <section className="section-pad bg-ink-50">
      <div ref={ref} className={`container-px ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        <SectionHeading
          eyebrow="How It Works"
          title="Get Your Printing Done in 4 Simple Steps"
          subtitle="A straightforward process from selection to collection."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon] ?? MousePointerClick;
            return (
              <div key={step.step} className="relative">
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="absolute top-7 left-[calc(50%+2.5rem)] hidden h-px w-[calc(100%-5rem)] bg-gradient-to-r from-brand-300 to-brand-100 lg:block" />
                )}
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg shadow-ink-900/5 ring-1 ring-ink-100 transition-transform duration-300 hover:scale-105">
                    <Icon className="h-6 w-6 text-brand-600" strokeWidth={2.2} />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-ink-900 text-xs font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-ink-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
