import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from './SectionHeading';

export default function ContactForm() {
  const { ref, visible } = useReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-pad bg-ink-50">
      <div ref={ref} className={`container-px ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        <SectionHeading
          eyebrow="Get in Touch"
          title="Request a Quote"
          subtitle="Fill out the form below and our team will get back to you with a quotation."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm sm:p-8"
            >
              {submitted && (
                <div className="mb-5 flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                  <CheckCircle2 className="h-5 w-5" />
                  Thank you! Your enquiry has been received. We will get back to you soon.
                </div>
              )}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-ink-700">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="mt-1.5 w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-ink-700">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    className="mt-1.5 w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-ink-700">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="mt-1.5 w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                    placeholder="Your email (optional)"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-ink-700">Service Required</label>
                  <select
                    id="service"
                    required
                    className="mt-1.5 w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                  >
                    <option value="">Select a service</option>
                    <option>Visiting Cards</option>
                    <option>Brochures</option>
                    <option>Flyers</option>
                    <option>Banners</option>
                    <option>Stickers & Labels</option>
                    <option>Packaging</option>
                    <option>Invitations</option>
                    <option>Signage</option>
                    <option>Apparel Printing</option>
                    <option>Design Services</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="quantity" className="block text-sm font-semibold text-ink-700">Quantity</label>
                  <input
                    id="quantity"
                    type="text"
                    className="mt-1.5 w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                    placeholder="e.g. 500, 1000, etc."
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-ink-700">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1.5 w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                    placeholder="Tell us about your printing requirements..."
                  />
                </div>
              </div>
              <button type="submit" className="btn-primary mt-5 w-full">
                <Send className="h-4 w-4" />
                Request a Quote
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-ink-900">Contact Information</h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink-50 text-ink-600">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink-900">Phone</p>
                      <p className="text-sm text-ink-400">Phone number to be added</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                      <MessageCircle className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink-900">WhatsApp</p>
                      <p className="text-sm text-ink-400">+91 90526 12450</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink-50 text-ink-600">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink-900">Email</p>
                      <p className="text-sm text-ink-400">Email address to be added</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink-900">Address</p>
                      <p className="text-sm text-ink-400">Dilsukhnagar, Hyderabad, Telangana, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-ink-900 p-6 text-white">
                <h3 className="text-base font-bold">Quick Contact</h3>
                <p className="mt-2 text-sm text-ink-300">Prefer to talk directly? Reach us on WhatsApp for a quick response.</p>
                <a
                  href="https://wa.me/919052612450"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-600"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
