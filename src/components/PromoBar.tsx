import { MapPin } from 'lucide-react';

export default function PromoBar() {
  return (
    <div className="bg-ink-900 text-ink-100">
      <div className="container-px">
        <div className="flex items-center justify-center gap-2 py-2 text-center">
          <MapPin className="hidden h-3.5 w-3.5 shrink-0 text-brand-400 sm:block" />
          <p className="text-xs font-medium tracking-wide">
            Professional Printing &amp; Designing Services in Dilsukhnagar, Hyderabad
          </p>
        </div>
      </div>
    </div>
  );
}
