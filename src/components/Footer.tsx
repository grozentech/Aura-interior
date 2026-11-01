import { ArrowUpRight, MessageCircle, Instagram } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { createDefaultWhatsAppUrl } from '../utils/whatsapp';

export function Footer() {
  const waUrl = createDefaultWhatsAppUrl();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    { label: 'Full Home Interior Design', href: '#services' },
    { label: 'Modular Kitchen Design', href: '#services' },
    { label: 'Living Room Interiors', href: '#services' },
    { label: 'Bedroom Interior Design', href: '#services' },
    { label: 'Wardrobe & Storage Solutions', href: '#services' },
    { label: 'Commercial Interior Design', href: '#services' },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1B1A19] text-[#F8F5F0] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Column (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#home');
                }}
                className="inline-block mb-3"
              >
                <span className="font-serif text-2xl lg:text-3xl font-semibold tracking-wider text-white">
                  AURA INTERIOR
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#B69A70] block font-medium">
                  {SITE_CONFIG.tagline}
                </span>
              </a>

              <p className="text-sm text-[#E9E0D4]/75 font-light leading-relaxed max-w-sm mt-3 mb-6">
                A premium interior design studio based in Dindigul, Tamil Nadu. We curate timeless, comfortable, and personalized residential and commercial spaces.
              </p>
            </div>

            {/* Social & WhatsApp Buttons */}
            <div className="flex items-center gap-3">
              {/* Instagram link (Configurable, opens in new tab) */}
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aura Interior on Instagram"
                className="w-10 h-10 rounded-full border border-white/20 hover:border-[#B69A70] hover:bg-[#B69A70] text-white flex items-center justify-center transition-colors"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* WhatsApp direct link */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-10 h-10 rounded-full border border-white/20 hover:border-[#25D366] hover:bg-[#25D366] text-white flex items-center justify-center transition-colors"
                title="Chat on WhatsApp (+91 9176180348)"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#B69A70] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-sm text-[#E9E0D4]/75 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#B69A70] mb-4">
              Design Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(s.href);
                    }}
                    className="text-sm text-[#E9E0D4]/75 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{s.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#B69A70] transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-white/10">
              <span className="text-xs text-[#B69A70] uppercase tracking-wider block font-medium">
                Studio Location:
              </span>
              <p className="text-sm text-white font-serif mt-0.5">
                {SITE_CONFIG.location}
              </p>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Legal / Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E9E0D4]/60">
          <p>© 2026 {SITE_CONFIG.brandName}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>Dindigul, Tamil Nadu</span>
            <span aria-hidden="true">·</span>
            <span>Designing Spaces. Creating Experiences.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
