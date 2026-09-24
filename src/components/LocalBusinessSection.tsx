import { MapPin, Navigation, Phone, MessageCircle } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function LocalBusinessSection() {
  const { ref, visible } = useReveal();

  return (
    <section className="section-pad bg-ink-50">
      <div ref={ref} className={`container-px ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Left: info */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">Local Service</span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink-900 text-balance sm:text-4xl">
              Your Local Printing Partner in Dilsukhnagar
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-500">
              Sky Designers &amp; Printers provides printing and designing solutions for businesses, events and individuals in Dilsukhnagar, Hyderabad.
            </p>

            <div className="mt-6 flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <div>
                <p className="text-sm font-semibold text-ink-900">Dilsukhnagar, Hyderabad</p>
                <p className="text-sm text-ink-500">Telangana, India</p>
                <p className="mt-1 text-xs text-ink-400">Exact address will be shared by the client.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://maps.google.com/?q=Dilsukhnagar+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
              <a href="tel:" className="btn-secondary">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/25 transition-all duration-300 hover:bg-green-600 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right: map placeholder */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-ink-200 shadow-lg shadow-ink-900/5">
              <div className="relative h-72 w-full bg-gradient-to-br from-ink-100 to-ink-50 sm:h-80">
                {/* Map-style grid pattern */}
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                  }}
                />
                {/* Roads */}
                <div className="absolute left-0 right-0 top-1/3 h-3 bg-ink-200/60" />
                <div className="absolute left-1/2 top-0 bottom-0 w-3 bg-ink-200/60" />
                {/* Pin */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white shadow-xl shadow-brand-500/40 ring-4 ring-white">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="mt-1 h-3 w-1 bg-brand-500/50" />
                  </div>
                </div>
                {/* Label */}
                <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-sm">
                  <p className="text-sm font-bold text-ink-900">Sky Designers &amp; Printers</p>
                  <p className="text-xs text-ink-500">Dilsukhnagar, Hyderabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
