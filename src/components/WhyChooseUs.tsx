import { Printer, PenTool, LayoutGrid, Settings2, Briefcase, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { whyChooseItems } from '@/data';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from './SectionHeading';

const iconMap: Record<string, LucideIcon> = {
  Printer,
  PenTool,
  LayoutGrid,
  Settings2,
  Briefcase,
  MapPin,
};

export default function WhyChooseUs() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="section-pad bg-white">
      <div ref={ref} className={`container-px ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        <SectionHeading
          eyebrow="About Us"
          title="Why Choose Sky Designers?"
          subtitle="We focus on quality printing, professional design and a wide product range — all from our Dilsukhnagar location."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseItems.map((item) => {
            const Icon = iconMap[item.icon] ?? Printer;
            return (
              <article
                key={item.title}
                className="group flex gap-4 rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-brand-200 hover:shadow-lg hover:shadow-ink-900/5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-base font-bold text-ink-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
