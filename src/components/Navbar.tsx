import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle, Printer } from 'lucide-react';
import { navLinks } from '@/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md shadow-ink-900/5' : 'bg-white'
      }`}
    >
      <nav className="container-px">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-900 text-brand-500 shadow-lg shadow-ink-900/20">
              <Printer className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-base font-extrabold tracking-tight text-ink-900 lg:text-lg">SKY DESIGNERS</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-600">&amp; PRINTERS</span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-ink-600 transition-colors duration-200 hover:bg-ink-100 hover:text-ink-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-700 transition-all duration-300 hover:border-green-500 hover:bg-green-50 hover:text-green-600"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href="#contact" className="btn-primary">Get a Quote</a>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-700"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-900"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden">
          <div className="container-px pb-6 pt-2">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-ink-700 transition-colors hover:bg-ink-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-4 w-full">
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
