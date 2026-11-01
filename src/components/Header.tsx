import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { createDefaultWhatsAppUrl } from '../utils/whatsapp';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const defaultWaUrl = createDefaultWhatsAppUrl();

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F5F0]/95 backdrop-blur-md border-b border-[#E9E0D4] py-3.5 shadow-[0_4px_20px_rgba(36,35,33,0.04)] text-[#242321]'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-8">
          {/* Zone 1: Clean Brand Wordmark (Single Text Element) */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group flex flex-col items-start whitespace-nowrap shrink-0"
            aria-label="Aura Interior - Home"
          >
            <span
              className={`font-serif text-2xl lg:text-3xl font-semibold tracking-wider transition-colors duration-200 ${
                isScrolled ? 'text-[#242321] group-hover:text-[#B69A70]' : 'text-white group-hover:text-[#E9E0D4]'
              }`}
            >
              AURA INTERIOR
            </span>
            <span
              className={`text-[9px] tracking-[0.24em] uppercase transition-colors ${
                isScrolled ? 'text-[#B69A70]' : 'text-[#E9E0D4]'
              }`}
            >
              Dindigul · Tamil Nadu
            </span>
          </a>

          {/* Zone 2: Desktop Navigation Links (Clean single-line prose with hover underline) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`transition-colors whitespace-nowrap shrink-0 relative py-1 hover:text-[#B69A70] ${
                  isScrolled ? 'text-[#242321]' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary CTA Button + Quick WhatsApp */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={defaultWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className={`p-2.5 rounded-full border transition-all duration-200 hover:scale-105 ${
                isScrolled
                  ? 'border-[#B69A70]/40 text-[#242321] hover:bg-[#B69A70]/10 hover:border-[#B69A70]'
                  : 'border-white/30 text-white hover:bg-white/10 hover:border-white'
              }`}
              title="Chat directly on WhatsApp (9176180348)"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.146-.532-1.854-.772-3.037-2.65-3.13-2.775-.093-.125-.751-.998-.751-1.905 0-.907.472-1.353.64-1.537.168-.184.368-.23.491-.23.123 0 .246.002.354.007.113.005.263-.043.411.314.153.37.525 1.282.571 1.376.046.094.077.204.015.328-.061.124-.092.201-.184.309-.092.108-.194.241-.277.324-.093.093-.19.195-.082.381.108.186.48 1.002 1.031 1.493.71.632 1.309.827 1.494.92.185.093.293.078.401-.047.108-.125.462-.538.585-.723.123-.185.247-.154.416-.092.169.062 1.077.507 1.262.599.185.092.308.139.354.216.046.077.046.447-.098.852z" />
              </svg>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-200 rounded-sm whitespace-nowrap bg-[#B69A70] hover:bg-[#A0855B] text-white shadow-xs hover:shadow-md"
            >
              Book a Consultation
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={defaultWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#B69A70] text-white"
              aria-label="WhatsApp Aura Interior"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.146-.532-1.854-.772-3.037-2.65-3.13-2.775-.093-.125-.751-.998-.751-1.905 0-.907.472-1.353.64-1.537.168-.184.368-.23.491-.23.123 0 .246.002.354.007.113.005.263-.043.411.314.153.37.525 1.282.571 1.376.046.094.077.204.015.328-.061.124-.092.201-.184.309-.092.108-.194.241-.277.324-.093.093-.19.195-.082.381.108.186.48 1.002 1.031 1.493.71.632 1.309.827 1.494.92.185.093.293.078.401-.047.108-.125.462-.538.585-.723.123-.185.247-.154.416-.092.169.062 1.077.507 1.262.599.185.092.308.139.354.216.046.077.046.447-.098.852z" />
              </svg>
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2.5 rounded-sm transition-colors ${
                isScrolled ? 'text-[#242321] hover:bg-[#E9E0D4]/50' : 'text-white hover:bg-white/10'
              }`}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black/60 backdrop-blur-xs flex flex-col justify-end">
          <div className="bg-[#F8F5F0] border-t border-[#E9E0D4] p-6 pb-8 shadow-2xl rounded-t-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#E9E0D4] mb-6">
              <div>
                <span className="font-serif text-xl font-bold tracking-wider text-[#242321]">
                  AURA INTERIOR
                </span>
                <p className="text-xs text-[#B69A70] tracking-widest uppercase">
                  Dindigul, Tamil Nadu
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-[#242321] hover:bg-[#E9E0D4] rounded-full"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-base font-medium text-[#242321]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="py-2 px-3 rounded hover:bg-[#E9E0D4]/60 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B69A70]" />
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-[#E9E0D4] flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full text-center py-3 bg-[#B69A70] hover:bg-[#A0855B] text-white text-xs font-semibold uppercase tracking-widest rounded-sm"
              >
                Book a Consultation
              </a>
              <a
                href={defaultWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 bg-[#242321] text-white text-xs font-semibold uppercase tracking-widest rounded-sm flex items-center justify-center gap-2"
              >
                <span>WhatsApp Enquiry</span>
                <span className="text-[#B69A70]">(+91 9176180348)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
