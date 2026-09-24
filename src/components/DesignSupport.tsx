import { PenTool, ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function DesignSupport() {
  const { ref, visible } = useReveal();

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div ref={ref} className={`container-px ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="relative overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-brand-50 p-8 sm:p-12 lg:p-16">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-100/50 blur-3xl" />
          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white shadow-lg shadow-brand-500/30">
                <PenTool className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink-900 text-balance sm:text-4xl">
                Don't Have a Design?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-500">
                Our design team can help turn your idea into a professional print-ready design. Share your requirements and we'll handle the rest.
              </p>
              <a href="#contact" className="btn-primary mt-8">
                Request Design Assistance
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <img
                    src="https://images.pexels.com/photos/7180485/pexels-photo-7180485.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Designers reviewing a brochure"
                    loading="lazy"
                    className="w-full rounded-xl object-cover shadow-lg"
                    style={{ height: '180px' }}
                  />
                  <img
                    src="https://images.pexels.com/photos/8217425/pexels-photo-8217425.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Blank canvas for design"
                    loading="lazy"
                    className="w-full rounded-xl object-cover shadow-lg"
                    style={{ height: '120px' }}
                  />
                </div>
                <div className="space-y-3 pt-8">
                  <img
                    src="https://images.pexels.com/photos/8373994/pexels-photo-8373994.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Person holding business sign"
                    loading="lazy"
                    className="w-full rounded-xl object-cover shadow-lg"
                    style={{ height: '120px' }}
                  />
                  <img
                    src="https://images.pexels.com/photos/6353839/pexels-photo-6353839.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Person holding poster"
                    loading="lazy"
                    className="w-full rounded-xl object-cover shadow-lg"
                    style={{ height: '180px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
