import { BadgeCheck, PenTool, LayoutGrid, MapPin } from 'lucide-react';
import { trustItems } from '@/data';

const iconMap: Record<string, typeof BadgeCheck> = {
  BadgeCheck,
  PenTool,
  LayoutGrid,
  MapPin,
};

export default function TrustBar() {
  return (
    <section className="border-y border-ink-100 bg-white">
      <div className="container-px">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink-100 sm:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = iconMap[item.icon] ?? BadgeCheck;
            return (
              <div
                key={item.title}
                className="flex items-center gap-3 bg-white px-4 py-5 transition-colors duration-300 hover:bg-ink-50 sm:px-6 sm:py-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-ink-800">{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
