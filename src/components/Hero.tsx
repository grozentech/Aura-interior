import { ArrowDownRight, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { createDefaultWhatsAppUrl } from '../utils/whatsapp';
import { SafeImage } from './SafeImage';

export function Hero() {
  const defaultWaUrl = createDefaultWhatsAppUrl();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#242321]">
      {/* Background Hero Photography with Scrim Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <SafeImage
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Indian contemporary living room with bespoke woodwork and architectural lighting"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
          fallbackTitle="Aura Interior Living Experience"
        />
        {/* Measured dark architectural scrim gradient ensuring 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#242321] via-[#242321]/60 to-[#242321]/40" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full my-auto py-12">
        <div className="max-w-3xl">
          {/* Studio Region Kicker - Unboxed text with typographic separator */}
          <div className="inline-flex items-center gap-2.5 text-xs font-medium tracking-[0.22em] uppercase text-[#E9E0D4] mb-4">
            <span className="text-[#B69A70]">Aura Interior</span>
            <span aria-hidden="true">·</span>
            <span>Studio in Dindigul, Tamil Nadu</span>
          </div>

          {/* Main Heading: "Where Elegance Meets Everyday Living." */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-[1.08] tracking-tight mb-6 text-balance">
            Where Elegance Meets Everyday Living.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-[#F8F5F0]/90 font-light leading-relaxed max-w-2xl mb-8 lg:mb-10">
            We transform ordinary spaces into extraordinary experiences through thoughtful design, creativity and craftsmanship.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Primary CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="px-7 py-4 bg-[#B69A70] hover:bg-[#A0855B] text-white text-xs sm:text-sm font-semibold uppercase tracking-widest text-center transition-all duration-200 rounded-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
            >
              Book a Free Consultation
            </a>

            {/* Secondary CTA */}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white text-xs sm:text-sm font-semibold uppercase tracking-widest text-center backdrop-blur-xs transition-all duration-200 rounded-sm whitespace-nowrap"
            >
              Explore Our Projects
            </a>

            {/* Direct WhatsApp Callout */}
            <a
              href={defaultWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-4 bg-[#242321]/80 hover:bg-[#242321] text-[#E9E0D4] border border-[#B69A70]/40 text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-2 rounded-sm transition-all duration-200"
              title="Chat directly with our design team"
            >
              <MessageCircle className="w-4 h-4 text-[#B69A70]" />
              <span>WhatsApp Us: {SITE_CONFIG.whatsappNumber}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Editorial Trust Banner Row Below Hero Split */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-8 border-t border-white/15">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-[#E9E0D4]">
          <div className="flex items-start gap-3">
            <span className="font-serif text-lg text-[#B69A70] font-semibold">01</span>
            <div>
              <h3 className="text-sm font-medium text-white tracking-wide">Bespoke Residential Planning</h3>
              <p className="text-xs text-[#E9E0D4]/75 mt-0.5 leading-relaxed">
                Tailored layouts for villas, apartments, and independent homes.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-serif text-lg text-[#B69A70] font-semibold">02</span>
            <div>
              <h3 className="text-sm font-medium text-white tracking-wide">Premium Modular Joinery</h3>
              <p className="text-xs text-[#E9E0D4]/75 mt-0.5 leading-relaxed">
                Quality acrylic kitchens, custom wardrobes, and smart storage.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-serif text-lg text-[#B69A70] font-semibold">03</span>
            <div>
              <h3 className="text-sm font-medium text-white tracking-wide">Dedicated Studio in Dindigul</h3>
              <p className="text-xs text-[#E9E0D4]/75 mt-0.5 leading-relaxed">
                Local expertise with transparent communication from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
