import { Printer, Instagram, Facebook, MessageCircle, MapPin } from 'lucide-react';
import { navLinks } from '@/data';

const serviceLinks = [
  'Visiting Cards',
  'Banners',
  'Brochures',
  'Stickers',
  'Packaging',
  'Business Stationery',
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="container-px py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-800 text-brand-500">
                <Printer className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-base font-extrabold text-white">SKY DESIGNERS</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">&amp; PRINTERS</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-400">
              Professional Printing &amp; Designing Services in Hyderabad
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800 text-ink-300 transition-colors hover:bg-brand-500 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800 text-ink-300 transition-colors hover:bg-brand-500 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://wa.me/919052612450"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800 text-ink-300 transition-colors hover:bg-green-500 hover:text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-ink-400 transition-colors hover:text-brand-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-ink-400 transition-colors hover:text-brand-400">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Contact</h3>
            <div className="mt-4 space-y-2.5">
              <div className="flex items-start gap-2 text-sm text-ink-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span>Dilsukhnagar, Hyderabad<br />Telangana, India</span>
              </div>
              <p className="text-sm text-ink-500">Phone &amp; email to be added</p>
            </div>
            <a href="#contact" className="btn-primary mt-5 px-5 py-2.5 text-xs">
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ink-800">
        <div className="container-px py-5">
          <p className="text-center text-xs text-ink-500">
            &copy; 2026 Sky Designers &amp; Printers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
